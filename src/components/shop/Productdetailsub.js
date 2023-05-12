import { Tabs } from "antd";

function Productdetailsub({content}) {
    const items = [
        {
          key: '1',
          label: `상세제품설명`,
          children:   <div
          dangerouslySetInnerHTML={{__html: content&&content[0].content}}
          > 
          </div>
        },
        {
          key: '2',
          label: `관련자료`,
          children: `Content of Tab Pane 2`,
        },
        {
            key: '3',
            label: `제품후기`,
            children: `Content of Tab Pane 2`,
          },
          {
            key: '4',
            label: `기술지원문의`,
            children: `Content of Tab Pane 2`,
          },
          {
            key: '5',
            label: `교환/반품/배송정보`,
            children: `Content of Tab Pane 2`,
          },
      ];
  return (

        <div className="content_detail">
            <Tabs
                tabPosition={'bottom'}
                items={items}
            />
         
        </div>
    
  );
}

export default Productdetailsub;
