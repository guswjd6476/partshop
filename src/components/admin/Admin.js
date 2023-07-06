import { Link } from "react-router-dom";
import {Tabs} from 'antd'
import Writeproduct from "./write/Writeproduct";
import InventoryManage from "./InventoryManage/InventoryManage";
import Userlist from "./User/Userlist";
import Categorycontrol from "./category/Categorycontrol";
import Maincontrol from "./maincontrol/Maincontrol";
import { useEffect } from "react";
import Deliverwrite from "./write/Deliverwrite";
function Admin({cate,cates,setCates,setCate, setBack}) {
  useEffect(()=>{setBack(true)},[])

  const items = [
    {
      key: '0',
      label: `운송장입력`,
      children:  <Deliverwrite cate={cate} cates={cates}/>,
    },
    {
      key: '1',
      label: `글올리기`,
      children:  <Writeproduct cate={cate} cates={cates}/>,
    },
    {
      key: '2',
      label: `재고관리`,
      children: <InventoryManage cate={cate}/>,
    },
    {
      key: '3',
      label: `유저관리`,
      children: <Userlist/>,
    },
    {
      key: '4',
      label: `메뉴관리`,
      children: <Categorycontrol setCate={setCate} setCates={setCates} cates={cates} cate={cate}/>,
    },
    {
      key: '5',
      label: `메인설정`,
      children: <Maincontrol/>,
    },
  ];
  return (
    <div className="Admin main displaybox">
         <Tabs defaultActiveKey="0" items={items} />
    </div>
  );
}

export default Admin;
