import { useState,useEffect } from "react";
import {  useLocation} from 'react-router-dom';
import { Crumb1,Crumb2 } from '../components_btn/Breadcrums'
import Myorderlist from "./Myorderlist";
import Myinfo from "./Myinfo";
function Mypage({userId,setBack}) {
  useEffect(()=>{setBack(true)},[])
  const location = useLocation()
  const pathnum1 = location.pathname.split('/')[1]
  const pathnum2 = location.pathname.split('/')[2]
  const [pagenum, setPageNum] = useState(1)
    return (
      <div className="shop main displaybox">
  
        <div className="shop_div">
          <div className="shop_sort">
          <div className="shop_sort">
          <div className='sortTitle'>
            <span>CATEGORIES</span></div>
            <ul className='sort_navi'>
              <li
              className={pagenum == 1 ? 'active snavili' : 'snavili'} 
              onClick={e=>setPageNum(1)}>
                <a>주문정보</a>
                <div className={pagenum == 1 ? 
      'active triangle' : 'none'}></div>
              </li>
              <li  onClick={e=>setPageNum(2)}
              className={pagenum == 2 ? 'active snavili' : 'snavili'} 
              ><a>정보변경</a>
              <div className={pagenum == 2 ? 
    'active triangle' : 'none'}></div></li>
            </ul>
          </div>
          </div>
          <div className="shop_content">
          {pathnum2 ?
         <Crumb2 num1={pathnum1} num2={pathnum2}/>
        :
        <Crumb1 num={pathnum1} /> }
            {
              pagenum ===1 ? <Myorderlist/>:
              pagenum ===2 ? <Myinfo userId={userId}/>:
              ''
            }
          </div>
        </div>
      </div>
    );
  }
  
  export default Mypage;
  