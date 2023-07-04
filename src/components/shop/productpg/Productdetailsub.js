import { Anchor} from "antd";
import StickyBox from 'react-sticky-box';
import Productdelivery from "./Productdelivery";
import Waitpage from "../../../Waitpage";
import ProductBuyafter from "./ProductBuyafter";
import {  PC, Tablet } from "../../../MediaQuery"
function Productdetailsub({content}) {

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
            title: '상세제품설명 1',
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

         </PC>
         <Tablet>
         <Anchor
      
      targetOffset={52}
      offsetTop={52}
        direction="horizontal"
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: '상세제품설명 1',
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
          dangerouslySetInnerHTML={{__html: content&&content[0].content}}
          > 
          </div>,  
          <div
           id="part-2"
          style={{position:'relative',minHeight:'150px'}}
          
          >
            <Waitpage/>
          </div>
      <div id="part-3">
      <ProductBuyafter data={content}/>
      </div>
      <div
           id="part-4"
          style={{position:'relative',minHeight:'150px'}}
          
          >
            <Waitpage/>
          </div>
      
       <div id="part-5">
       <Productdelivery/>
      </div>
    </div>
  </>
    
  );
}

export default Productdetailsub;