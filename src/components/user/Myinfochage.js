import { Input,Button } from "antd";
import { useState,useEffect } from "react";
import Pagetitle from "../components_btn/Pagetitle";
function Myinfochage({userId,setBack}) {
    const [pass, setPass] =useState(null)
    const [deepinfo, setDeepInfo] = useState(false)
    useEffect(()=>{setBack(true)},[])

    return (
      <div className="myinfo nonavicon main displaybox">
         <Pagetitle value='회원정보확인' svalue={`${userId}님의 정보를 안전하게 보호하기 위해 비밀번호를 확인합니다`}/>
        <p className="pagesub">{userId}님의 정보를 변경합니다</p>
        <div className="infochangewrap">
            <div className="infobox_wrap">
                <div className="infobox idbox">아이디(이메일)</div>
                <div className="infoinputbox idinput">{userId}</div>
            </div>
            <div className="infobox_wrap">
                <div className="infobox passbox">비밀번호</div>
                <div className="infoinputbox passinput">
                    <Input/>
                </div>
            </div>
       
        </div>
        <Button >확인</Button>
    </div>    
    );
  }
  
  export default Myinfochage;
  