import {  Link} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { Button,Breadcrumb } from 'antd';
import { useEffect } from 'react';
// import Searchcomponent from './Searchcomponent';
import axios from 'axios';
import { useState } from 'react';
import Sortnavi from './Sortnavi';
import SortingWrap from './SortingWrap';
import Productbox from './Productbox';

function Shopsub({cate}) {
  const location = useLocation();
  const pathnum1 = location.pathname.split('/')[1]
  const pathnum2 = location.pathname.split('/')[2]

const [searchArray, setSearchArray] = useState([])
  const [plist, setPlist] =useState([])

useEffect(()=>{

axios
.get('/api/subproduct',{
  params:{
    subcate : pathnum2
  }
})
.then(function (response) {

  setPlist(response.data)
})
.catch(function (error) {
    console.log(error)
})   
setSearchArray([])
},[pathnum2])




//   }

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
        title: pathnum1,
        href: `/${pathnum1}`,
      },
      {
        
          title: pathnum2,
          href: `/${pathnum1}/${pathnum2}`,
        
      }
    ]}
  />
      <div className='shop_div'>
        <div className='shop_sort'>
          <Sortnavi cate={cate} pathnum={pathnum1}/>
        </div>
        <div className='shop_content'>
          <SortingWrap pathnum2={pathnum2} searchArray={searchArray} setSearchArray={setSearchArray}/>
          
          <Button href='/Writeproduct' ></Button>

          <Productbox plist={plist} pathnum1={pathnum1} pathnum2={pathnum2} searchArray={searchArray} />
          
        </div>
      </div>
        
    </div>
  );
}

export default Shopsub;
