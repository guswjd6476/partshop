import { Button } from "antd";
import { useState } from "react";
import { Fixedcart, Fixedneeds,Comparebtn, Recentbox } from "./Fixedfunction";
import { LeftCircleOutlined,RightCircleOutlined} from '@ant-design/icons';

const Fixedbox = ({lastCheck,userId}) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <>
        <Button className={`toggle-button ${isOpen ? 'opens' : ''}`} onClick={toggleMenu}>
           {isOpen ? <RightCircleOutlined />  :<LeftCircleOutlined /> }
      </Button>
      <div className={`menu-bar ${isOpen ? 'open' : ''}`}>
      
        <div className="menu-content">
          {/* 메뉴 항목들 */}
          <ul>
            <li><Fixedcart  userId={userId} lastCheck={lastCheck}/></li>
            <li><Fixedneeds  userId={userId} lastCheck={lastCheck}/></li>
            <li><Comparebtn  userId={userId} lastCheck={lastCheck}/></li>
            <li><Recentbox  userId={userId} lastCheck={lastCheck}/></li>
          </ul>
        </div>
      </div>
      </>
    );
  };

  export default Fixedbox