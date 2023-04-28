
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {Breadcrumb} from 'antd'
import Sortnavi from "./Sortnavi";

function Productdetail({cate}) {
  const [data, setData] =useState('')
    const location = useLocation();
    const pathnum1 = location.pathname.split('/')[1]
    const pathnum2 = location.pathname.split('/')[2]
    const pathnum3 = location.pathname.split('/')[3]
    useEffect(()=>{
    
axios
.get('/api/productdetail',{
  params:{
    id : pathnum3
  }
})
.then(function (response) {

  setData(response.data)
})
.catch(function (error) {
    console.log(error)
})   

    },[])
    console.log(data,'data')

  return (
    <div className="shop main">
    {data[0] ?
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
          },
          {
            title: data[0].pName,
            href: `/${pathnum1}/${pathnum2}/${pathnum3}`,
        }
        ]}
      /> : ''
    }
    {data[0] ?  
    <div className='shop_div'>
      <div className='shop_sort'>
        <Sortnavi cate={cate} pathnum={pathnum1}/>
      </div>
      <div className='shop_content'>
        <div className="shop main">
        <div>
          <p>카테고리 : {data[0].category}</p>
          <p>세부 : {data[0].subcategory}</p>
          <p>제품명 : {data[0].pName}</p>
          <p>재고 : {data[0].pquantity}</p>
          <p>가격 : {data[0].pPrice}</p>
          <p>소개 : {data[0].material}</p>
          <p>크기 : {data[0].inch}</p>
          <p>색상 : {data[0].color}</p>
        
        </div>
      </div>
      </div>
    </div>
    :''
    }
  </div>
    
  );
}

export default Productdetail;
