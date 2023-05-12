
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {Breadcrumb,Rate,Tabs} from 'antd'
import Sortnavi from "./Sortnavi";
import ImageSlider from "./Imageslider";
import { uploadlist, productdetail } from "../../service/product";
import Compareproduct from "./Compareproduct";
import Productdetailsub from "./Productdetailsub";

function Productdetail({cate}) {
  const [data, setData] =useState('')
  const [content, setContent] =useState('')
    const location = useLocation();
    const pathnum1 = location.pathname.split('/')[1]
    const pathnum2 = location.pathname.split('/')[2]
    const pathnum3 = location.pathname.split('/')[3]
    const items = [
      {
        key: '1',
        label: `제품설명`,
        children: data[0] && data[0].pDetail
      },
      {
        key: '2',
        label: `참고자료`,
        children: `Content of Tab Pane 2`,
      },
    ];
    const onChange = (key) => {
      console.log(key);
    };
    useEffect(()=>{
      let recent = JSON.parse(localStorage.getItem('recent'));
      recent&&recent.push(pathnum3);
      let result = [...new Set(recent)];
    localStorage.setItem('recent', JSON.stringify(result));
      uploadlist(pathnum3)
      .then(function (response) {
        setContent(response.data)
      })
      productdetail(pathnum3)
      .then(function (response) {
        setData(response.data)
      })
    },[pathnum3])
    console.log(data,'data')
    console.log(content,'contetn')

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
        <div className="shop_main">
          
          <ImageSlider pathnum3={pathnum3} data={data}/>
        
          <div className="shop_main_detail">
            <div className="shop_d_t">
              <p>제품명 : {data[0].pName}</p>
              <Rate disabled defaultValue={5} />
            </div>
            <div className="shop_d_p">
              <div className="dcprice"> 
                <p className="percent">{data[0].dcrate}%</p>
                <p className="cost">{data[0].pPrice}원</p>
              </div>
              <p className="realp">{data[0].pPrice - data[0].pPrice*data[0].dcrate/100}원<span>낱개구매시</span></p>
              <p className="realp morep">{data[0].pPrice - data[0].pPrice*data[0].dcrate*2/100}원<span>단위구매시</span></p>
            </div>
            {/* <p>카테고리 : {data[0].category}</p>
            <p>세부 : {data[0].subcategory}</p> */}
            {/* <p>재고 : {data[0].pquantity}</p> */}
            <div className="shop_d_box shop_d_d">
              <div className="shop_d_box_t">제품요약</div>
              <div className="shop_d_box_d">
              <p className={data[0].material ==''?'none':''}>소재 : {data[0].material}</p>
              <p className={data[0].inch ==''?'none':''}>{data[0].inch}인치</p>
              <p className={data[0].color ==''?'none':''}>{data[0].color}</p>
              </div>
            </div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          
          </div>
        </div>
        <div>
          <div className="shop_d_t">
              <p>함께 비교하면 좋을 상품</p>
              <Compareproduct pathnum3={pathnum3} cate={pathnum1}/>
          </div>
        </div>
        <Productdetailsub content={content}/>
      </div>
  </div>
    :''
    }
  </div>
    
  );
}

export default Productdetail;
