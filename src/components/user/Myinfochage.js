import { Input,Button } from "antd";
import { useState } from "react";

function Myinfochage({userId}) {
    const [pass, setPass] =useState(null)
    const [deepinfo, setDeepInfo] = useState(false)

    return (
      <div className="myinfo displaybox">
        <p className="pagetitle">회원정보변경</p>
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
            <div className="infobox_wrap">
                <div className="infobox passbox">배송지</div>
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
  