import React, { useEffect ,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { sortList,numbcom } from '../../service/function';
import FunctionBtn from '../components_btn/FunctionBtn';
import { Checkbox ,Tag } from 'antd';
import Needsbtn from '../components_btn/Needsbtn';
import Countbtn from '../components_btn/Countbtn';
import { AddCartbtn } from '../components_btn/Cartbtn';
import Fixedbox from '../components_btn/Fixedbox';

const AllSearchResult = ({ userId, filter,sb }) => {
  const [lastCheck, setLastCheck] =useState([])
let [searchResult, setSearchResult] = useState([]);
const [sortOption, setSortOption] = useState("default");
const [gridstyle, setGridStyle] = useState(0)
const [counts, setCounts] = useState([]);
const [check, setCheck] = useState([])
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
useEffect(()=>{
    if(filter||localStorage.getItem('filter')){
    axios.get('/api/Allproductdetail',{
        params:{
          filter : filter,
        }
    })
      .then(response => {
        console.log(response.data)
        const searchResult = response.data.filter(data => {
          return data.pName.toUpperCase().includes(filter.toUpperCase()) || data.category.toUpperCase().includes(filter.toUpperCase()) || data.subcategory.toUpperCase().includes(filter.toUpperCase()) ||  data.material.toUpperCase().includes(filter.toUpperCase());
        });
        setSearchResult(searchResult);
      })
      .catch(error => {
        console.error(error);
      });
    }
},[sb])
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
  
  setLastCheck(newCheckedList)
},[counts,check])
const onChange = (checkedValues) => {
  const checkedList = checkedValues.map((id) => ({ id: id }));
  setCheck(checkedList);
};
sortList(searchResult,sortOption);

  return (
    <div className='searchresult'>
    <FunctionBtn setGridStyle={setGridStyle} sortOption={sortOption} setSortOption ={setSortOption}/>
    <ul  className={gridstyle == 1 ? 'productwrap1' :gridstyle == 2 ? 'productwrap2' : 'product_wrap'}>
        
    <Checkbox.Group
    
    onChange={onChange}
  >
        {searchResult&&searchResult.map((data, index ) => {
           const pathdata =`/${data.category}/${data.subcategory}/${data.id}`;
           return(
            <div className='productbox' span={gridstyle == 0 ? 6 :gridstyle == 2 ? 100 : 50} key={data.id}>
            <Checkbox value={data.id}></Checkbox>
            <div className="product_list" key={`${data.id}-${index}`}>
            <div className={gridstyle == 0 ?'gridcolum' : 'gridflex'}>
              <Link className='product_pic'  to={pathdata}>
                <img src={data.img1}/>
              </Link>
              <div className={gridstyle == 1 ? 'gridcolum' : 'gridflex'}>
              <Link to={pathdata}>
              <div className='productwrap2_wrap'>
              <div className='product_title'>
                <p className='f12 brandt'>[{data.brand}]</p>
                <p className={data.pName !==' '?'product_d f18':'none'}>{data.pName}</p>
              </div>
              <div className='product_flex'>
                <p className={data.inch !==''?'product_d f12':'none'}>{data.inch}인치</p>
              
                <p className={data.material !==''?'product_d f12':'none'} >{data.material}</p>
                <p className={data.color !==''?'product_d f12':'none'} > {data.color}</p>
              </div>
              </div>
              <p className={data.pPrice !==''?'product_d f22':'none'} >{numbcom(data.pPrice)}<span className='f18'>원</span></p>
              </Link>
              
              {gridstyle !== 0 ?
              <>
            <div className='other_wrap'>
            <p className='othertag'><Tag className='navi'>m.o.q</Tag>{data.moq}</p>
             <p><Tag className='grey'>준비</Tag>약{data.prepare}일</p>
            </div>
            <div className='counterbtrn_wrap'>
              <Countbtn userId={userId} />
              <div className='functionbtn_wrap'>
              <Needsbtn userId={userId} />
              <AddCartbtn userId={userId} counts={counts} productid={data.id} />
              </div>
            </div>
            </>
            :''
            }
              </div>
            </div>
            {gridstyle == 0 ?
            <>
            <div className='other_wrap'>
             <p className='othertag'><Tag className='navi'>m.o.q</Tag>{data.moq}</p>
             <p><Tag className='grey'>준비</Tag>약{data.prepare}일</p>
           </div>
            <div className='counterbtrn_wrap'>
              <Countbtn ids={data.id} key={index} index={index} onCountChange={handleCountChange} />
              <Needsbtn counter={counts} productid={data.id} />
              <AddCartbtn counter={counts} productid={data.id}/>
            </div>
            </>
            :''
            }
          </div>
          </div>
          
          )
  })}
  </Checkbox.Group>
    </ul>
    <Fixedbox userId={userId} lastCheck={lastCheck}/>
    </div>
    
  );
};

export default AllSearchResult;