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
      <div className="third main displaybox">
         {pathnum2 ?
         <Crumb2 num1={pathnum1} num2={pathnum2}/>
        :
        <Crumb1 num={pathnum1} /> }
        <div className="shop_div">
          <div className="shop_sort">
            <ul className='sort_navi'>
              <li
              className={pagenum == 1 ? 'active' : ''} 
              onClick={e=>setPageNum(1)}>주문목록</li>
              <li  onClick={e=>setPageNum(2)}
              className={pagenum == 2 ? 'active' : ''} 
              >정보변경</li>
            </ul>
          </div>
          <div className="shop_content_1">
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
  