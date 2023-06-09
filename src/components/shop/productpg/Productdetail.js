
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {Rate} from 'antd'
import Sortnavi from "../shop_sort/Sortnavi";
import ImageSlider from "./Imageslider";
import Compareproduct from "./Compareproduct";
import Productdetailsub from "./Productdetailsub";
import { AddCartbtn } from "../../components_btn/Cartbtn";
import Buybtn from "../../components_btn/Buybtn";
import Needsbtn from "../../components_btn/Needsbtn";
import Countbtn from "../../components_btn/Countbtn";
import ProductTopTab from "./ProductTopTab";
import { Crumb2 } from "../../components_btn/Breadcrums";
import { pricechange } from "../../../service/function";
import { productdetail } from "../../../service/product";
function Productdetail({cate,userId}) {
  const [data, setData] =useState('')
  const [buycount, setBuycount] = useState(1)
    const location = useLocation();
    const pathnum1 = location.pathname.split('/')[1]
    const pathnum2 = location.pathname.split('/')[2]
    const pathnum3 = location.pathname.split('/')[3]
   
  
    useEffect(()=>{
      let recent = JSON.parse(localStorage.getItem('recent'));
      recent&&recent.push(pathnum3);
      let result = [...new Set(recent)];
      localStorage.setItem('recent', JSON.stringify(result));
      productdetail(pathnum3)
      .then(function (response) {
        setData(response.data)
      })
    },[pathnum3])
    console.log(data,'data')

  return (
    <div className="shop main content_detail displaybox">
      <Crumb2 num1={pathnum1} num2={pathnum2} />
    {data[0] ?  
    <div className='shop_div'>
      <div className='shop_sort'>
        <Sortnavi cate={cate} pathnum={pathnum1}/>
      </div>
      <div className='shop_content'>
        <div className="shop_main">
          <ImageSlider pathnum3={pathnum3} data={data}/>
          <div className="shop_main_detail">
            <div className="shop_d_t">
              <p className="shop_d_t_t">[{data[0].brand}] {data[0].pName}</p>
              <div className="shop_d_box shop_d_d">
                <div className="shop_d_box_t"></div>
                <div className="shop_d_box_d">
                  <p className={data[0].material ==''?'none':''}>소재({data[0].material})</p>
                  <p className={data[0].inch ==''?'none':''}>인치({data[0].inch})</p>
                  <p className={data[0].color ==''?'none':''}>색상({data[0].color})</p>
                </div>
                
              </div>
              <p className="s f14">{data[0].pDetail}</p>
              <p className={data[0].prepare ==''?'none':'s f14'}>준비기간 : {data[0].prepare}일 ~ {data[0].prepare+1}일 </p>
            <div className="divbox">
              <Rate disabled defaultValue={5} />
              <p className="valuenum f14">상품코드 : {data[0].id}</p>
            </div>
            
              
            </div>
            <div className="shop_d_p">
              <div className="dcprice"> 
                <p className="realp">{pricechange(data[0].pPrice)}원</p>
                <p className="cost">{pricechange(data[0].pCost)}원</p>
                <p className="percent">{data[0].dcrate}%</p>
              </div>
              <div className="countwrap">
                <span>수량 :</span><Countbtn setBuycount={setBuycount} />
              </div>
            </div>
            {/* <p>카테고리 : {data[0].category}</p>
            <p>세부 : {data[0].subcategory}</p> */}
            {/* <p>재고 : {data[0].pquantity}</p> */}
         
            <div className="shop_d_box btn_wrap">
              
              <AddCartbtn/>
              <Needsbtn/>
              <Buybtn count={buycount} productnum={data[0].id} userId={userId}/>
            </div>
           <ProductTopTab data={data}/>
          </div>
        </div>
        <div>
          <div className="shop_d_t">
              <p>함께 비교하면 좋을 상품</p>
              <Compareproduct num={data[0].id} pathnum3={pathnum3} cate={pathnum1}/>
          </div>
        </div>
        <Productdetailsub content={data}/>
      </div>
  </div>
    :''
    }
  </div>
    
  );
}

export default Productdetail;
