import {  Link} from 'react-router-dom';
import { AddCartbtn } from '../../components_btn/Cartbtn';
import { sortList,pricechange } from '../../../service/function';
import { useEffect, useState } from 'react';
import { Checkbox,Tag} from 'antd';

import Countbtn from '../../components_btn/Countbtn';
import Needsbtn from '../../components_btn/Needsbtn';

const ProductList  = (props)=>{
  const [counts, setCounts] = useState([]);
  const [check, setCheck] = useState([])
  let   matchCountArray = props.plist&&props.plist?.map((item) => {
    let matchCount = 0;
    for (const filter of props.search) {
      const [filterKey, filterValue] = Object.entries(filter)[0];
      if (item[filterKey] === filterValue) {
        matchCount++;
      }
    }
    return matchCount;
  });
   
  
  const handleCountChange = (index, count, ids) => {
    setCounts(prevCounts => {
      const existingCount = prevCounts.find(obj => obj.id === ids);
      if (existingCount) {
        // id가 이미 있는 경우, count만 업데이트
        return prevCounts.map(obj => obj.id === ids ? {id : ids, count : count} : obj);
      } else {
        // id가 없는 경우, 새로운 object 추가
        return [...prevCounts, {id : ids, count : count} ];
      }
    });
  };

  let results = [];
  props.search&&props.search.forEach((obj) => {
    const [key] = Object.keys(obj);
    const existingObj = results.find((o) => o[key] !== undefined);
    if (existingObj) {
      existingObj[key] = [...existingObj[key], obj[key]];
    } else {
      results.push({ [key]: [obj[key]] });
    }
  });
    let filteredArray = (props.plist&&props.plist.filter((item, index) => matchCountArray&&matchCountArray[index] === results.length))||props.plist;
    sortList(filteredArray, props.sortOption);
  const onChange = (checkedValues) => {
    const checkedList = checkedValues.map((id) => ({ id: id }));
    setCheck(checkedList);
  };
useEffect(()=>{
  const commonIds = check&&check.map((obj) => obj.id).filter((id) => counts.some((countObj) => countObj.id === id));
  const newCheckedList = check.map((obj) => {
    const countObj = counts&&counts.find((countObj) => countObj.id === obj.id);
    if (countObj && commonIds.includes(obj.id)) {
      return { ...obj, count: countObj.count };
    } else {
      return { ...obj, count: 1 };
    }
  });
  
  props.setLastCheck(newCheckedList)
},[counts,check])

  return (
    <div className={props.gridstyle == 1 ? 'productwrap1' : props.gridstyle == 2 ? 'productwrap2' : 'product_wrap'}>
         <Checkbox.Group
    
    onChange={onChange}
  >
        {filteredArray&&filteredArray.map((value, index ) => {
           const pathValue = props.pathnum2 ? `/${props.pathnum1}/${props.pathnum2}/${value.id}` : `/${props.pathnum1}/${value.subcategory}/${value.id}`;
           return(
            <div className='productbox' key={value.id}>
        
             
            {props.gridstyle !== 2 ? <Checkbox value={value.id}></Checkbox> : ''}
            <div className="product_list" key={`${value.id}-${index}`}>
            <div className={props.gridstyle == 0 ?'gridcolum' : 'gridflex'}>
              <Link className='product_pic'  to={pathValue}>
                <img src={value.img1}/>
              </Link>
              <div className={props.gridstyle == 1 ? 'gridcolum' : 'gridflex'}>
              <Link  to={pathValue}>
              <div className='productwrap2_wrap_div'>
              <div className='productwrap2_wrap'>
                <div className='product_title'>
                  <div className='f12 brandt'>[{value.brand}] {props.gridstyle == 0 ? <span className='valueid f12'>[상품코드 : {value.id}]</span> : ''}</div>
                  <div className={value.pName !==' '?'product_d f14':'none'}>{value.pName}{props.gridstyle !== 0 ? <span className='valueid f12'>[상품코드 : {value.id}]</span> : ''}</div>
                </div>
                <div className='product_flex'>
                  <p className={value.inch !==''?'product_d f12':'none'}>{value.inch}인치</p>
                
                  <p className={value.material !==''?'product_d f12':'none'} >{value.material}</p>
                  <p className={value.color !==''?'product_d f12':'none'} > {value.color}</p>
                </div>
              </div>
              <div className={value.pDetail !=='' ?'f12 product_d detail':'none'} >{value.pDetail}</div>
              </div>
              <div className='pricebox'>
                <p className={value.pCost !=='' ?'tx f14':'none'} >{pricechange(value.pCost)}<span className='tx f14'>원</span></p>
                <span className='dcvalue'>{value.dcrate}%</span>
                <p className={value.pPrice !==''?'product_d f22':'none'} >{pricechange(value.pPrice)}<span className='f18'>원</span></p>
              </div>
              </Link>
              
              {props.gridstyle !== 0 ?
              <>
            <div className='other_wrap'>
            <p className='othertag f12'><Tag className='navi'>m.o.q</Tag>{value.moq}</p>
            <p className='f12'><Tag className='grey'>준비</Tag>약{value.prepare}일</p>
            </div>
            <div className='counterbtrn_wrap'>
              <div className='testbox'>
                {props.gridstyle == 2 ? <Checkbox value={value.id}></Checkbox> : ''}
                <Countbtn ids={value.id} key={index} index={index} onCountChange={handleCountChange} />
              </div>
              <div className='functionbtn_wrap'>
              <Needsbtn />
              <AddCartbtn counts={counts} productid={value.id} userId={props.userId}/>
              </div>
            </div>
            </>
            :''
            }
              </div>
            </div>
            {props.gridstyle == 0 ?
            <>
            <div className='other_wrap'>
             <p className='othertag f12'><Tag className='navi'>m.o.q</Tag>{value.moq}</p>
             <p className='f12'><Tag className='grey'>준비</Tag>약{value.prepare}일</p>
           </div>
            <div className='counterbtrn_wrap'>
              <div className='testbox'>
                {props.gridstyle == 2 ? <Checkbox value={value.id}></Checkbox> : ''}
                <Countbtn ids={value.id} key={index} index={index} onCountChange={handleCountChange} />
              </div>
              <Needsbtn counter={counts} productid={value.id} userId={props.userId}/>
              <AddCartbtn counter={counts} productid={value.id} userId={props.userId}/>
            </div>
            </>
            :''
            }
          </div>
          </div>
          
          )
  })}
  </Checkbox.Group>
    </div>
  );

    }
  export default ProductList