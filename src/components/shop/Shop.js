import { useLocation } from "react-router-dom";
import { Breadcrumb} from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import Sortnavi from './Sortnavi';
import SortingWrap from './shop_sort/SortingWrap'
import Productbox from "./Productbox";
import { mainproduct } from "../../service/product";
import Fixedbox from "../components_btn/Fixedbox";

function Shop({cate,userId}) {
  const location = useLocation();
  const [searchArray, setSearchArray] = useState([])
  const pathnum = location.pathname.substring(1)
  const [allplist,setAllPlist] = useState([])
  const [lastCheck, setLastCheck] =useState([])

  console.log(lastCheck,'check')
  useEffect(()=>{
    mainproduct(pathnum)
      .then(function (response) {
        setAllPlist(response.data)
      })
    },[pathnum])
 
  return (
    <div className="shop main">
    <Breadcrumb
    className="breacrumb"
    separator=">"
    items={[
      {
        title: 'Home',
        href: '/'
      },
      {
        title: pathnum,
        href: `/${pathnum}`,
      }
    ]}
  />
      <div className='shop_div'>
        <div className='shop_sort'>
          <Sortnavi cate={cate} pathnum={pathnum}/>
        </div>
        <div className='shop_content'>
          <SortingWrap pathnum1={pathnum} searchArray={searchArray} setSearchArray={setSearchArray}/>
          <Productbox lastCheck={lastCheck} setLastCheck={setLastCheck}  userId={userId} plist={allplist} pathnum1={pathnum} searchArray={searchArray}/>
          
        </div>
        <Fixedbox userId={userId} lastCheck={lastCheck}/>
      </div>
        
    </div>
  );
}

export default Shop;
