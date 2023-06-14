import { useState,useEffect } from "react";
import Myorderlist from "./Myorderlist";
import Myinfo from "./Myinfo";
function Mypage({userId,setBack}) {
  useEffect(()=>{setBack(true)},[])

  const [pagenum, setPageNum] = useState(1)
    return (
      <div className="third main displaybox">
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
  