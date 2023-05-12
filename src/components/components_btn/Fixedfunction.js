import { Badge,Button,Modal } from "antd";
import { useState,useRef, useEffect } from "react";
import { ShoppingCartOutlined,SmileOutlined} from '@ant-design/icons';
import { addsCart } from "../../service/product";
import { addNeedss,getcompare } from "../../service/function";
import Draggable from 'react-draggable';
import Comparebox from "./Comparebox";
import {Link} from "react-router-dom";

function Fixedcart({lastCheck,userId}) {
    const onClick=()=>{
    if(lastCheck[0]){
        addsCart(lastCheck,userId)
        .then(function (response) {
          alert('카트에 추가되었습니다');
        })
    }else{ alert('품목을 체크해주세요')}
    }
    return(
    <Button onClick={onClick}>
        <Badge size="default" count={lastCheck&&lastCheck.length}>
            <ShoppingCartOutlined />
        </Badge>
    </Button>
    )
};

function Fixedneeds({lastCheck,userId}) {
    const onClick=()=>{
        if(lastCheck[0]){
        addNeedss(lastCheck,userId)
        .then(function (response) {
          alert('♡에 추가되었습니다');
        })
    }else{ alert('품목을 체크해주세요')}
    }
 return(
    <Button onClick={onClick}>
        <SmileOutlined />
    </Button>
    )
};

const Comparebtn = ({lastCheck,userId}) => {
    const [open, setOpen] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [bounds, setBounds] = useState({
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
    });
    const draggleRef = useRef(null);
    const showModal = () => {
      setOpen(true);
    };
    const handleOk = (e) => {
      setOpen(false);
    };
    const handleCancel = (e) => {
      setOpen(false);
    };
    const onStart = (_event, uiData) => {
      const { clientWidth, clientHeight } = window.document.documentElement;
      const targetRect = draggleRef.current?.getBoundingClientRect();
      if (!targetRect) {
        return;
      }
      setBounds({
        left: -targetRect.left + uiData.x,
        right: clientWidth - (targetRect.right - uiData.x),
        top: -targetRect.top + uiData.y,
        bottom: clientHeight - (targetRect.bottom - uiData.y),
      });
    };
    return (
      <>
        <Button onClick={showModal}>비교</Button>
        <Modal
         width={1100}
          title={
            <div
              style={{
                width: '100%',
                cursor: 'move',
              }}
              onMouseOver={() => {
                if (disabled) {
                  setDisabled(false);
                }
              }}
              onMouseOut={() => {
                setDisabled(true);
              }}
              onFocus={() => {}}
              onBlur={() => {}}
            >
             상품비교
            </div>
          }
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
          modalRender={(modal) => (
            <Draggable
              disabled={disabled}
              bounds={bounds}
              onStart={(event, uiData) => onStart(event, uiData)}
            >
              <div ref={draggleRef}>{modal}</div>
            </Draggable>
          )}
        >
         
         <Comparebox lastCheck={lastCheck} userId={userId}/>
        </Modal>
      </>
    );
  };
  
function Recentbox() {
  const [recentlist, setrecentlist] = useState()
  useEffect(()=>{
    const storedRecent = localStorage.getItem('recent');
    const recentArray = storedRecent ? JSON.parse(storedRecent) : [];
    const numberArray = recentArray.map(str => parseInt(str));
    if(numberArray){
    getcompare(numberArray)
    .then(function (response) {
      setrecentlist(response.data)
    })
  }
  },[])
  
return(
  <div className="recentwrap">
  <div className="f12 rececntT">최근본상품</div>
  {recentlist&&recentlist.map((value)=>
  <Link className="recentbox" 
  to={`/${value.category}/${value.subcategory}/${value.id}`}
  key={value.id}>
    <div>
      <img  src={value.img1} />
    </div>
  </Link>
  )
 }
  </div>
  )
};
export  {Fixedcart,Fixedneeds, Comparebtn,Recentbox};

