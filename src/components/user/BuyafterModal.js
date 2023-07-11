import { useState,useRef, useEffect } from "react";
import Draggable from 'react-draggable';
import { Button,Modal } from "antd";
import { addAfeterbuylist,addinquiry } from "../../service/user";
import BuyafeterModalbox from "./BuyafeterModalbox";
import Deliverview from "./Deliverview";
import ProductInquirybox from "../shop/productpg/ProductInquirybox";
const BuyafterModal = ({answer,div,divss,div1,data,userId,inquiry,setInquiry}) => {
  const [content , setContent] = useState({
    title: '',
    rate : ''
  })
  const [category,setCategory] = useState('')
  const [contents , setContents] = useState('')
  const [contentss , setContentss] = useState('')
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
      if(divss&&!content.title){
        alert('제목을 입력해주세요')
    }else if (divss&&!contents){
        alert('후기를 입력해주세요')
    }else if (divss&&!content.rate){
      alert('별점을 입력해주세요')
    }else if(divss){
      addAfeterbuylist(data.productnum, userId,content.title, content.rate, contents).then(function(response){
        if(response.data){
          alert('추가되었습니다')
          setOpen(false);
          setContentss('')
          setContent({
            title: '',
            rate : ''
          })
        }
      })
    }else if(div1&&!contentss){
      alert('문의사항을 입력해주세요')
      
    }else if (div1){
      const newInquiry = [...inquiry]
      addinquiry(data.id, userId,contentss,category,1).then(function(response){
        if(response.data){
          newInquiry.push({
            id : inquiry.length+1,
            productnum : data.id,
            userId : userId,
            content : contentss,
            category: category,
            type : 1
          });
          setInquiry(newInquiry)
          alert('추가되었습니다')
          setOpen(false);
          setContentss('')
        }
      }) 
    }else if(answer&&!contentss){
      alert('답변을 입력해주세요')
      
    }else if (answer){
      const newInquiry = [...inquiry]
      addinquiry(data.id, userId,contentss,content.category,2).then(function(response){
        if(response.data){
          newInquiry.push({
            id : inquiry.length+1,
            productnum : data.id,
            userId : userId,
            content : contentss,
            category: content.category,
            type : 2
          });
          setInquiry(newInquiry)
          alert('추가되었습니다')
          setOpen(false);
          setContentss('')
        }
      }) 
    }
    else if(div){
      setOpen(false);
    }else{
      setOpen(false);
    }

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
        {div1==false ?
        <Button className="lbtnstyle" onClick={showModal}>{div ? '배송조회':
        '후기작성'}</Button>
        :div1 ?
        <Button className="btnstyle ab" onClick={showModal}>문의하기</Button>
        :
        <Button className="ssbtnstyle ab" onClick={showModal}>답변</Button>
        }
        <Modal
         width={700}
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
              {div?'배송조회' : div1?'문의하기' : answer ? '답변달기': 
             `${data&&data.pName} 후기작성`
            }
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
          {div? 
            <Deliverview data={data}/>
            :
            div1?
            <ProductInquirybox setCategory={setCategory} div1={true} values={contentss} setValues={setContentss}/>
            :
            answer?
            <ProductInquirybox  values={contentss} setValues={setContentss}/>
            :
            <BuyafeterModalbox values={contents} handlesChange={handlesChange} setValues={setContents}/>
          }
        </Modal>
      </>
    );
  };

  export default BuyafterModal