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
const [filteredArrays, setFilteredArrays] = useState([]);
const [checkfilter, setCheckFilter] = useState(null)


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
    setSearchResult(response.data.filter(data => {
      return data.title.toUpperCase().includes(num.toUpperCase()) || data.content.toUpperCase().includes(num.toUpperCase()) || data.pName.toUpperCase().includes(num.toUpperCase()) || data.material.toUpperCase().includes(num.toUpperCase())|| data.inch.toUpperCase().includes(num.toUpperCase())|| data.color.toUpperCase().includes(num.toUpperCase());
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
  let filteredArray = checkfilter? filteredArrays.filter((item, index) => matchCountArray&&matchCountArray[index] === results.length) : (searchResult&&searchResult.filter((item, index) => matchCountArray&&matchCountArray[index] === results.length))||searchResult;
  sortList(filteredArray, sortOption);

  function extractUniqueKeysWithCount(arr, categoryKey, subcategoryKey) {
    const uniqueKeys = new Map();
    arr.forEach(obj => {
      const categoryValue = obj[categoryKey];
      const subcategoryValue = obj[subcategoryKey];      const combinedKey = `${categoryValue}-${subcategoryValue}`;
      
      if (uniqueKeys.has(combinedKey)) {
        uniqueKeys.set(combinedKey, uniqueKeys.get(combinedKey) + 1);
      } else {
        uniqueKeys.set(combinedKey, 1);
      }
    });
    
    const uniqueArray = Array.from(uniqueKeys.entries()).map(([combinedKey, count]) => {
      const [category, subcategory] = combinedKey.split('-');
      return {category, subcategory, count };
    });
    
    return uniqueArray;
  }
  
  const uniqueArray = extractUniqueKeysWithCount(searchResult, 'category', 'subcategory','id');
console.log(uniqueArray,'uniqueArray')

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
const uniquefilter = (sub,index) => {
  const filterResult = searchResult.filter(value => value.subcategory == sub);
  setFilteredArrays(filterResult);
 if (checkfilter!==null&&checkfilter==index){
  setCheckFilter(null)
}else{
  setCheckFilter(index)
}
}
console.log(checkfilter,'checkfilter')
  return (
    <div className='searchresult main displaybox'>      
    <div className='searchTopic'>'{num}' 검색결과</div>
    <div className='cateArrayHead'>검색된 카테고리</div>
    <div className='cateArray'>
      {uniqueArray&&uniqueArray.map((value,index)=><div className={checkfilter==index+1 ? 'clicked':
    ''} key={value.subcategory} onClick={() => uniquefilter(value.subcategory,index+1)}>{value.category}/{value.subcategory} ({value.count})</div>)}
    </div>
       <PC>
       <SortingWrap onClick={onClick} setOnHide={setOnHide} onhide={onhide}  num={num} searchResult={searchResult}setSearchResult={setSearchResult} setSearchArray={setSearchArray} searchArray={searchArray}/>
       <FunctionBtn setOnHide={setOnHide} onhide={onhide} none={true} sortOption={sortOption} setSortOption ={setSortOption}/>
          </PC>

          <Tablet>
 
            <MSortingWrap setsearch={setsearch}  onClick={onClick} setOnHide={setOnHide} onhide={onhide}  num={num} searchResult={searchResult}setSearchResult={setSearchResult} setSearchArray={setSearchArray} searchArray={searchArray}/>
            <MFunctionBtn setGridStyle={setGridStyle} sortOption={sortOption}  gridstyle={gridstyle} setSortOption ={setSortOption}/>
          </Tablet>


    <Checkbox.Group
    onChange={onChange}
  >
    <div className='arraylength'>총 {filteredArray.length}건</div>
   {filteredArray&&filteredArray.map((data, index ) => {
   const pathdata =`/${data.category}/${data.subcategory}/${data.id}`;
     return(
          
      <div className='productbox grid3' key={index}>
      <Link className='product_pic'  to={pathdata}>
        <img src={data.img1}/>
      </Link>
      <Link className='flex grid3wrap'  to={pathdata}>
        <div className='grid3top'>
          <div className='f13 grid31 flex '>
            <span className='brand'>[{data.brand}] </span>
            <div className={data.pName !==' '?'product_d f13 bold':'none'}>{data.pName}</div>
            <span className='dataid f13'>[상품코드 : {data.id}]</span>  
          </div>
              
          <div className='grid32 flex'> 
            <p className={data.pCost !=='' ?'tx f14':'none'} >{pricechange(data.pCost)}<span className='tx f14'>원</span></p>
            <span className='dcdata'>{data.dcrate}%</span>
          </div>
          <div className='grid33 other_wrap  flex'> 
          
            <p className='othertag f12'><Tag className='navi'>m.o.q</Tag>{data.moq}</p>
          </div>
          <div className='grid34'>
            <Checkbox data={data.id}></Checkbox>
          </div>
          <div className='grid35'>
            <Needsbtn counter={counts} productid={data.id} userId={userId}/>
          </div>
           
        </div>
        <div className='grid3bottom'>
          <div className='flex pinfobox grid31'>
            <p className={data.inch !==''?'product_d f12':'none'}>{data.inch}인치</p>
            <p className={data.material !==''?'product_d f12':'none'} >{data.material}</p>
            <p className={data.color !==''?'product_d f12':'none'} > {data.color}</p>
            <div className={'f12 product_d detail'} >{data.pDetail}</div>
          </div>
          <div className='pricebox grid32'>
      
            <p className={data.pPrice !==''?'product_d f20':'none'} >{pricechange(data.pPrice)}<span className='f18'>원</span></p>
          </div>
          <div className='other_wrap grid33'>
            <p className='f12'><Tag className='grey'>준비</Tag>약{data.prepare}일</p>
          </div>
          <div className='grid34'>  
        <Countbtn ids={data.id} key={index} index={index} onCountChange={handleCountChange} />
          </div>
          <div className='gridbtnwrap grid35'>
      <AddCartbtn counter={counts} productid={data.id} userId={userId}/>
      </div>
        </div>
      
      </Link>
  </div>
          )
  })}
  </Checkbox.Group>
    <Fixedbox userId={userId} lastCheck={lastCheck}/>
    </div>
    
  );
};

export default AllSearchResult;