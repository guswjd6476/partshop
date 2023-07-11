import { Anchor,Button} from "antd";
import { useState, useEffect } from "react";
import Productdelivery from "./Productdelivery";
import Waitpage from "../../../Waitpage";
import ProductBuyafter from "./ProductBuyafter";
import ProductInquiry from "./ProductInquiry";
import BuyafterModal from "../../user/BuyafterModal";
import {  PC, Tablet } from "../../../MediaQuery"
import { getinquiry } from "../../../service/user";

function Productdetailsub({content,userId,userInfo}) {
  const [inquiry, setInquiry] =useState([])
  useEffect(()=>{
    getinquiry(content[0].id).then(function(response){setInquiry(response.data)})
},[])
  return (
    <>
    <div
      className="acnhorwrap"
    >
         <PC>
         <Anchor
      
      targetOffset={120}
      offsetTop={120}
        direction="horizontal"
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: '상세제품설명',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: '관련자료',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: '제품후기',
          },
          {
            key: 'part-4',
            href: '#part-4',
            title: '제품 및 기술문의',
          },
          {
            key: 'part-5',
            href: '#part-5',
            title: '교환/반품/배송정보',
          }
        ]}
      />

         </PC>
         <Tablet>
         <Anchor
      
      targetOffset={72}
      offsetTop={52}
        direction="horizontal"
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: '상세제품설명',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: '관련자료',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: '제품후기',
          },
          {
            key: 'part-4',
            href: '#part-4',
            title: '기술지원문의',
          },
          {
            key: 'part-5',
            href: '#part-5',
            title: '교환/반품/배송정보',
          }
        ]}
      />

         </Tablet>
     
    </div>
    <div className="partwrap">
        <div
         id="part-1"
          > 
          <div className="producttitle">상세제품설명</div>
          <div   dangerouslySetInnerHTML={{__html: content&&content[0].content}}></div>
          </div>,  
          <div
           id="part-2"
          style={{position:'relative'}}
          
          >
            <div className="producttitle">관련자료</div>
            <div
              style={{position:'relative',minHeight:'150px'}}
             >
            <Waitpage/>
            </div>
          </div>
      <div id="part-3">
      <div className="producttitle">제품후기</div>
        <div
          style={{position:'relative',minHeight:'150px'}}
        >
      <ProductBuyafter data={content}/>
      </div>
      </div>
      <div
           id="part-4"
          style={{position:'relative'}}
          >
            <div className="flex j producttitle"> 
            <div className="">제품 및 기술문의</div>
            </div>
            <div
              style={{position:'relative',minHeight:'150px'}}
             >
            <ProductInquiry grade={userInfo&&userInfo[1]} inquiry={inquiry} setInquiry={setInquiry}   userId={userId} data={content[0]}/>
            <BuyafterModal inquiry={inquiry} setInquiry={setInquiry} userId={userId} div1={true} data={content[0]}/>
            </div>
          </div>
      
       <div id="part-5">
       <div className="producttitle">교환/반품/배송정보</div>
       <Productdelivery/>
      </div>
    </div>
  </>
    
  );
}

export default Productdetailsub;