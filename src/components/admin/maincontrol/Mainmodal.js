import { useState,useRef, useEffect } from "react";
import Draggable from 'react-draggable';
import { Button,Modal } from "antd";
import Maincontrolmodalbox from "./Maincontrolmodalbox";

import { ToolOutlined} from '@ant-design/icons';
const Mainmodal = ({i,datas,setMi,mi,edit}) => {
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
        <Button className="modalbtn" onClick={showModal}><ToolOutlined /></Button>
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
         
       <Maincontrolmodalbox edit={edit} i={i} mi={mi} setMi={setMi} datas={datas}/>
        </Modal>
      </>
    );
  };

  export default Mainmodal