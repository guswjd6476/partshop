import { useState,useRef, useEffect } from "react";
import Draggable from 'react-draggable';
import { Button,Modal,Input,Rate } from "antd";
import { addAfeterbuylist } from "../../service/user";
import BuyafeterModalbox from "./BuyafeterModalbox";
const BuyafterModal = ({data,userId}) => {
  const [content , setContent] = useState({
    title: '',
    rate : ''
  })
  const [contents , setContents] = useState('')
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
      setContents('')
      setContent({
        title: '',
        rate : ''
      })
    };
    const handleOk = (e) => {
      
      addAfeterbuylist(data.productnum, userId,content.title, content.rate, contents).then(function(response){
        if(response.data){
          alert('추가되었습니다')
          setOpen(false);
          setContents('')
          setContent({
            title: '',
            rate : ''
          })
        }
      })
      

    };
    const handleCancel = (e) => {
      setContents('')
      setContent({
        title: '',
        rate : ''
      })
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
    const handlesChange = (id, value) => {
      setContent(prevState => ({
        ...prevState,
        [id]: value
      }));
      if(id == 'title'){
        setContent(prevState => ({
              ...prevState,
              [id]: value.target.value
            })); 
      }
    
    }
    return (
      <>
        <Button className="btnstyle" onClick={showModal}>후기작성</Button>
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
             {data.pName} 후기작성
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
         
            <BuyafeterModalbox values={contents} handlesChange={handlesChange} setValues={setContents}/>
        </Modal>
      </>
    );
  };

  export default BuyafterModal