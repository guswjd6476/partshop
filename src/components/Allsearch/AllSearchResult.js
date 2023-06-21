import React, { useEffect ,useState} from 'react';
import axios from 'axios';
import {Link,useLocation} from 'react-router-dom';
import { sortList,pricechange } from '../../service/function';
import FunctionBtn from '../components_btn/FunctionBtn';
import { Checkbox ,Tag } from 'antd';
import Needsbtn from '../components_btn/Needsbtn';
import Countbtn from '../components_btn/Countbtn';
import { AddCartbtn } from '../components_btn/Cartbtn';
import Fixedbox from '../components_btn/Fixedbox';
import SortingWrap from '../shop/shop_sort/SortingWrap';
import MSortingWrap from '../shop/shop_sort/MSortingWrap';
import MFunctionBtn from '../components_btn/MFunctionBtn';
import {  PC, Tablet } from "../../MediaQuery"
const AllSearchResult = ({ userId,setBack, filter,sb }) => {
const location = useLocation()

  const [onhide, setOnHide] = useState(true)
const searchParams = new URLSearchParams(location.search);
const num = searchParams.get('productid');
const [lastCheck, setLastCheck] =useState([])
const [searchResult, setSearchResult] = useState([]);
const [searchArray, setSearchArray] = useState([])
const [search, setsearch] = useState([])
const [sortOption, setSortOption] = useState("default");
const [gridstyle, setGridStyle] = useState(0)
const [counts, setCounts] = useState([]);
const [check, setCheck] = useState([])
let   matchCountArray =searchResult&&searchResult.map((item) => {
  let matchCount = 0;
  for (const filter of search) {
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
useEffect(()=>{
  axios.get('/api/Allproductdetail')
  .then(response => {
    console.log(response.data,'responsedta')
    setSearchResult(response.data.filter(data => {
      return data.title.toUpperCase().includes(num.toUpperCase()) || data.content.toUpperCase().includes(num.toUpperCase()) || data.pName.toUpperCase().includes(num.toUpperCase()) || data.category.toUpperCase().includes(num.toUpperCase()) || data.subcategory.toUpperCase().includes(num.toUpperCase()) || data.material.toUpperCase().includes(num.toUpperCase());
    }));
  })
  .catch(error => {
    console.error(error);
  });
  setBack(true)
},[num])
const onClick = ()=>{
  setsearch(searchArray)
}

console.log(search,'????????search')
let results = [];
search&&search.forEach((obj) => {
  const [key] = Object.keys(obj);
  const existingObj = results.find((o) => o[key] !== undefined);
  if (existingObj) {
    existingObj[key] = [...existingObj[key], obj[key]];
  } else {
    results.push({ [key]: [obj[key]] });
  }
});
  let filteredArray = (searchResult&&searchResult.filter((item, index) => matchCountArray&&matchCountArray[index] === results.length))||searchResult;
  sortList(filteredArray, sortOption);
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
  
  setLastCheck(newCheckedList)
},[counts,check])

sortList(searchResult,sortOption);

  return (
    <div className='searchresult main displaybox'>
       <PC>
       <FunctionBtn setGridStyle={setGridStyle} sortOption={sortOption} setSortOption ={setSortOption}/>
    
    <SortingWrap onClick={onClick} setOnHide={setOnHide} onhide={onhide}  num={num} searchResult={searchResult}setSearchResult={setSearchResult} setSearchArray={setSearchArray} searchArray={searchArray}/>
          </PC>

          <Tablet>
 
            <MSortingWrap setsearch={setsearch}  onClick={onClick} setOnHide={setOnHide} onhide={onhide}  num={num} searchResult={searchResult}setSearchResult={setSearchResult} setSearchArray={setSearchArray} searchArray={searchArray}/>
            <MFunctionBtn setGridStyle={setGridStyle} sortOption={sortOption}  gridstyle={gridstyle} setSortOption ={setSortOption}/>
          </Tablet>

    <ul  className={gridstyle == 1 ? 'productwrap1' :gridstyle == 2 ? 'productwrap2' : 'product_wrap'}>
        
    <Checkbox.Group
    onChange={onChange}
  >
        {filteredArray&&filteredArray.map((data, index ) => {
           const pathdata =`/${data.category}/${data.subcategory}/${data.id}`;
           return(
              <div className='productbox' key={data.id}>
             
            {gridstyle !== 2 ? <Checkbox value={data.id}></Checkbox> : ''}
            <div className="product_list" key={`${data.id}-${index}`}>
            <div className={gridstyle == 0 ?'gridcolum' : 'gridflex'}>
              <Link className='product_pic'  to={pathdata}>
                <img src={data.img1}/>
              </Link>
              <div className={gridstyle == 1 ? 'gridcolum' : 'gridflex'}>
              <Link  to={pathdata}>
              <div className='productwrap2_wrap_div'>
              <div className='productwrap2_wrap'>
                <div className='product_title'>
                  <p className='f12 brandt'>[{data.brand}] {gridstyle == 0 ? <span className='valueid f12'>[상품코드 : {data.id}]</span> : ''}</p>
                  <p className={data.pName !==' '?'product_d f14':'none'}>{data.pName}{gridstyle !== 0 ? <span className='valueid f12'>[상품코드 : {data.id}]</span> : ''}</p>
                </div>
                <div className='product_flex'>
                  <p className={data.inch !==''?'product_d f12':'none'}>{data.inch}인치</p>
                
                  <p className={data.material !==''?'product_d f12':'none'} >{data.material}</p>
                  <p className={data.color !==''?'product_d f12':'none'} > {data.color}</p>
                </div>
              </div>
              <div className={data.pDetail !=='' ?'f12 product_d detail':'none'} >{data.pDetail}</div>
              </div>
              <div className='pricebox'>
                <p className={data.pCost !=='' ?'tx f14':'none'} >{pricechange(data.pCost)}<span className='tx f14'>원</span></p>
                <span className='dcvalue'>{data.dcrate}%</span>
                <p className={data.pPrice !==''?'product_d f22':'none'} >{pricechange(data.pPrice)}<span className='f18'>원</span></p>
              </div>
              </Link>
              
              {gridstyle !== 0 ?
              <>
            <div className='other_wrap'>
            <p className='othertag f12'><Tag className='navi'>m.o.q</Tag>{data.moq}</p>
            <p className='f12'><Tag className='grey'>준비</Tag>약{data.prepare}일</p>
            </div>
            <div className='counterbtrn_wrap'>
              <div className='testbox'>
                {gridstyle == 2 ? <Checkbox value={data.id}></Checkbox> : ''}
                <Countbtn ids={data.id} key={index} index={index} onCountChange={handleCountChange} />
              </div>
              <div className='functionbtn_wrap'>
              <Needsbtn />
              <AddCartbtn counts={counts} productid={data.id} userId={userId}/>
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
             <p className='othertag f12'><Tag className='navi'>m.o.q</Tag>{data.moq}</p>
             <p className='f12'><Tag className='grey'>준비</Tag>약{data.prepare}일</p>
           </div>
            <div className='counterbtrn_wrap'>
              <div className='testbox'>
                {gridstyle == 2 ? <Checkbox value={data.id}></Checkbox> : ''}
                <Countbtn ids={data.id} key={index} index={index} onCountChange={handleCountChange} />
              </div>
              <Needsbtn counter={counts} productid={data.id} userId={userId}/>
              <AddCartbtn counter={counts} productid={data.id} userId={userId}/>
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