import { useState,useEffect } from "react";
import { Button } from "antd";
import Buytotal from "./Buytotal";
import Buyway from "./Buyway";
const { AUTHNICE } = window;
function Buybox({total}) {
  console.log(total,'???')
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    const [activeButton, setActiveButton] = useState('');
    function serverAuth() {
      AUTHNICE.requestPay({
        clientId: 'S2_f0937a1cf19e40bf8004fb1ed3acb03a',
        method: activeButton === '카드' ? 'card' : activeButton === '가상계좌 (무통장입금)' ? 'vbank' : activeButton === '실시간계좌이체' ? 'bank': activeButton === '카카오페이' ? 'kakaopay' : activeButton === '네이버페이' ? 'naverpayCard': activeButton === '휴대폰' ? 'cellphone':'all' ,
        orderId: random(),
        amount: parseInt(total.replace(/[,]/g, '')),
        goodsName: '나이스페이-상품',
        returnUrl: 'https://localhost:3000/serverAuth',
        fnError: function (result) {
          alert('고객용메시지 : ' + result.msg + '\n개발자확인용 : ' + result.errorMsg + '')
        }
      });
    }
    

    //Test orderId 생성
    const random = (length = 8) => {
      return Math.random().toString(16).substr(2, length);
    };
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 242) {
          setIsHeaderFixed(true);
        } else {
          setIsHeaderFixed(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
      <div className={isHeaderFixed ? 'fixed buybtnwrap buywrap' : ' buybtnwrap buywrap'}>
            <Buytotal total={total}/>
            <Buyway setActiveButton={setActiveButton} activeButton={activeButton} />
            <Button onClick={serverAuth} className="buybtn f22">구매하기</Button>
         




      </div>
  );
}

export default Buybox