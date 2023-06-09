import { getAllItem } from "../../service/product";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Mainnotice() {
  const [notice,setNotice] =useState()
  const [faq,setFaq] =useState()
useEffect(()=>{
  getAllItem('notice').then(function(response){
    setNotice(response.data)
  })
  getAllItem('faq').then(function(response){
    setFaq(response.data)
  })
},[])
  return (
    <div className='noticecons'>
      <div>
        <div className="conT">
          <span>공지사항</span>
          <Link to={`/center/notice`} > +</Link>
        </div>
        {notice && notice.slice(0, 5).map(value => <Link className="noticelist" to={`/center/notice/noticecon?&productid=${value.id}`} key={value.id}>[{value.category}]{value.title}</Link>)}
      </div>
      <div>
        <div className="conT">
          <span>FAQ</span>
          <Link to={`/center/FAQ`} > +</Link>
          </div>
        {faq && faq.slice(0, 5).map(value => <Link className="noticelist" to={`/center/FAQ`} key={value.id}>{value.title}</Link>)}
      </div>
    </div>
  );
}

export default Mainnotice;
