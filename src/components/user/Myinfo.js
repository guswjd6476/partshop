import { Input,Button } from "antd";
import { useEffect, useState } from "react";
import { getPass } from "../../service/user";
import { useNavigate } from "react-router-dom";
import Pagetitle from "../components_btn/Pagetitle";
function Myinfo({userId}) {
    const navigate = useNavigate();
    const [pass, setPass] =useState(null)
    const [deepinfo, setDeepInfo] = useState(false)
 
  const onChange = (e)=>{
    setPass(e.target.value)
  }
  const onClick=()=>{
    getPass(pass,userId).then(function (response) {
        if(response.data){alert('확인!'); setDeepInfo(true); 
        navigate('/Myinfo')}
        else{
            alert('비밀번호를 확인해주세요')
        }
    })
  }

    return (
      <div>
         <Pagetitle value='회원정보확인' svalue={`${userId}님의 정보를 안전하게 보호하기 위해 비밀번호를 확인합니다`}/>
        <div className="infowrap">
            <div className="infobox_wrap">
                <div className="infobox idbox">아이디(이메일)</div>
                <div className="infoinputbox idinput">{userId}</div>
            </div>
            <div className="infobox_wrap">
                <div className="infobox passbox">비밀번호</div>
                <div className="infoinputbox passinput">
                    <Input type="password" onChange={onChange}/>
                </div>
            </div>
        </div>
        <Button onClick={onClick}>확인</Button>
      </div>
    );
  }
  
  export default Myinfo;
  