import { useLocation } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import Sortnavi from '../shop_sort/Sortnavi';
import SortingWrap from '../shop_sort/SortingWrap'
import Productbox from "./Productbox";
import { getproduct } from "../../../service/product";
import Fixedbox from "../../components_btn/Fixedbox";
import { Crumb1,Crumb2 } from "../../components_btn/Breadcrums";
function Shop({cate,userId}) {
  const location = useLocation();
  const [searchArray, setSearchArray] = useState([])
  const [search, setsearch] = useState([])
  const [onhide, setOnHide] = useState(false)
  const pathnum1 = location.pathname.split('/')[1]
  const pathnum2 = location.pathname.split('/')[2]
  const [allplist,setAllPlist] = useState([])
  const [lastCheck, setLastCheck] =useState([])

  useEffect(()=>{
    if(pathnum2){
      getproduct(pathnum2)
      .then(function (response) {
        console.log(response.data,'???')
        setAllPlist(response.data)
      })
    }else{
      getproduct(pathnum1)
      .then(function (response) {
        
        console.log(response.data,'???')
        setAllPlist(response.data)
      })
    }
    setsearch('')
    },[pathnum1,pathnum2])
  const onClick = ()=>{
    setsearch(searchArray)
  }
 
  return (
    <div className="shop main displaybox">
      {!pathnum2 ?
      <Crumb1 num={pathnum1}/>
      :
      <Crumb2 num1={pathnum1} num2={pathnum2}/>
      }
      <div className='shop_div'>
        <div className='shop_sort'>
          <Sortnavi cate={cate} pathnum={pathnum1}/>
        </div>
        <div className='shop_content'>
          <SortingWrap onClick={onClick} setOnHide={setOnHide} onhide={onhide} pathnum1={pathnum1}  pathnum2={pathnum2} searchArray={searchArray} setSearchArray={setSearchArray}/>
          <Productbox search={search}  setOnHide={setOnHide} onhide={onhide}  lastCheck={lastCheck} setLastCheck={setLastCheck}  userId={userId} plist={allplist} pathnum1={pathnum1}  pathnum2={pathnum2} searchArray={searchArray}/>
          
        </div>
        <Fixedbox userId={userId} lastCheck={lastCheck}/>
      </div>
        
    </div>
  );
}

export default Shop;
