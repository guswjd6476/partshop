import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { getsubevent } from "../../service/product";
import { Button } from "antd";
import { Crumb1,Crumb2 } from "../components_btn/Breadcrums";
import Nextpost from "../other/Center/Nextpost";
function Eventpg({userInfo,setBack}) {
    const location = useLocation();
    const [notice, setNotice] = useState('null')
    const pathnum2 = location.pathname.split('/')[2]
    const pathnum1 = location.pathname.split('/')[1]
    const uGrade = userInfo&&userInfo[1]
    const searchParams = new URLSearchParams(location.search);
    const num = searchParams.get('productid');
    useEffect(()=>{
      setBack(true)
      getsubevent(pathnum2).then(function(response){
            setNotice(response.data)
        })
    },[num])

  return (
    <div className="main displaybox">
       {pathnum2 ?
      <Crumb2 num1={pathnum1} num2={pathnum2}/>
     :
     <Crumb1 num={pathnum1} /> }
    {notice ?
     <div className='shop_div'>
    
       <div className='shop_content w100'>
        <div className="notice_title">
          <div className="titletext">
            <span className="category">{notice[0].category}</span>
            <span className="titles">{notice[0].title}</span>
          </div>
          <div className="titlebtn">
            <a className="astyle" href={`/Update/${pathnum2}?&productid=${notice[0].id}`}>수정</a>
            <Button className="astyle" danger >삭제</Button>
          </div>
       </div>
       
        <div className="notice_title sub">
          <div>
            <span className="mr">작성자</span>
            <span>{notice[0].writer}</span>
          </div>
          <div>
            <span className="mr">작성날짜</span>
            <span>{notice[0].updatetime}</span>
          </div>
        </div>
        <div className="qnacon"  dangerouslySetInnerHTML={{__html: notice&&notice[0].content}}></div>
       <Nextpost id={pathnum2}/>
       {uGrade === 1 &&  pathnum2 ==='qna'?
        <a className="astyle" href={`/Write/qnaanswer?&productid=${notice[0].id}`}>{notice[0].answer ?'답변수정' : '답변작성'}</a>
        :''
      }
       
       
     </div>
     </div>
     :""
     }
     
     </div>
        
    );
  }
  
  export default Eventpg;
  
  