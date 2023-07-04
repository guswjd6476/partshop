import { Tabs,theme } from "antd";
import StickyBox from 'react-sticky-box';
import Productdelivery from "./Productdelivery";
import Waitpage from "../../../Waitpage";
import ProductBuyafter from "./ProductBuyafter";
function Productdetailsub({content}) {
  console.log(content,'contnetn')
    const items = [
        {
          key: '1',
          label: `상세제품설명`,
          children:   <div
          dangerouslySetInnerHTML={{__html: content&&content[0].content}}
          > 
          </div>,  
          
        },
        {
          key: '2',
          label: `관련자료`,
          children:<Waitpage/>,
        },
        {
            key: '3',
            label: `제품후기`,
            children:<ProductBuyafter data={content}/>,
          },
          {
            key: '4',
            label: `기술지원문의`,
            children: <Waitpage/>,
          },
          {
            key: '5',
            label: `교환/반품/배송정보`,
            children: <Productdelivery/>,
          },
      ];
      const {
        token: { colorBgContainer },
      } = theme.useToken();
      const renderTabBar = (props, DefaultTabBar) => (
        <StickyBox
        offsetTop={120}
        offsetBottom={20}
          style={{
            zIndex: 1,
          }}
        >
          <DefaultTabBar
            {...props}
            style={{
              background: colorBgContainer,
            }}
          />
        </StickyBox>
      );
  return (

    <Tabs
                
    items={items}
    defaultActiveKey="1" 
    renderTabBar={renderTabBar} 
/>
    
  );
}

export default Productdetailsub;
