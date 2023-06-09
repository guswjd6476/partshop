import { Button } from "antd";
import { useState } from "react";
import { Cardway,Bankway,Accountway,Kakaoway,Phoneway,PSYSway } from "./Buyways";


function Buyway({setActiveButton, activeButton}) {

  const handleClick = (name) => {
    setActiveButton(name);
  }

  return (
      <>
        <p className='smallT'>결제 수단</p>
        <div className="waywrap">
          <div className="waybox">
            <Button
              onClick={() => handleClick('카드')}
              className={activeButton === '카드' ? 'active' : ''}
            >
              카드
              </Button>
              <Button
                onClick={() => handleClick('실시간계좌이체')}
                className={activeButton === '실시간계좌이체' ? 'active' : ''}
            >
                실시간계좌이체
            </Button>
            <Button
                onClick={() => handleClick('가상계좌 (무통장입금)')}
                className={activeButton === '가상계좌 (무통장입금)' ? 'active' : ''}
            >
                가상계좌<br/>(무통장입금)
            </Button>
            </div>
            <div className="waybox">
            <Button
            onClick={() => handleClick('카카오페이')}
            className={activeButton === '카카오페이' ? 'active' : ''}
          >
            카카오페이
          </Button>
      
          <Button
            onClick={() => handleClick('네이버페이')}
            className={activeButton === '네이버페이' ? 'active' : ''}
          >
            네이버페이
          </Button>
          <Button
            onClick={() => handleClick('휴대폰')}
            className={activeButton === '휴대폰' ? 'active' : ''}
          >
            휴대폰
          </Button>
            </div>
            
        </div>
   
      </>
  );
}

export default Buyway