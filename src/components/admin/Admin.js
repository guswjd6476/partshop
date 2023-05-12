import { Link } from "react-router-dom";
import {Tabs} from 'antd'
import Writeproduct from "./write/Writeproduct";
import InventoryManage from "./InventoryManage/InventoryManage";
import Userlist from "./User/Userlist";
function Admin({cate}) {

  const items = [
    {
      key: '1',
      label: `글올리기`,
      children:  <Writeproduct cate={cate}/>,
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
  ];
    const onChange = (key) => {
        console.log(key);
      };
  return (
    <div className="Admin main">
         <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
}

export default Admin;
