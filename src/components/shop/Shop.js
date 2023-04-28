import { useLocation } from "react-router-dom";
import { Button, Breadcrumb} from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Sortnavi from './Sortnavi';
import SortingWrap from './SortingWrap';
import FunctionBtn from './FunctionBtn';
import ProductList from './ProductList';
import Productbox from "./Productbox";

function Shop({cate}) {

  const location = useLocation();

  const [searchArray, setSearchArray] = useState([])
  const pathnum = location.pathname.substring(1)
  const [allplist,setAllPlist] = useState([])

  useEffect(()=>{

    axios
    .get('/api/mainproduct',{
      params:{
        cate : pathnum
      }
    })
    .then(function (response) {
    
      setAllPlist(response.data)
    })
    .catch(function (error) {
        console.log(error)
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

          <Button href='/Writeproduct' ></Button>
        
          <Productbox plist={allplist} pathnum1={pathnum} searchArray={searchArray}/>
         
        </div>
      </div>
        
    </div>
  );
}

export default Shop;
