import Map from "./Map";
import Pagetitle from "../../components_btn/Pagetitle";
function Place() {
  
    return (
        <div>
            <Pagetitle value={'오시는 길'} svalue={'directions'}/>
            <Map/>
            <div className="tablewrap">
                <div className="tablediv flex">
                    <div className="tableT">주소</div>
                    <div className="tableD">서울시 노원구 화랑로 815, 제1실습관 5017호(삼육대학교)</div>
                </div>
                <div className="tablediv flex">
                    <div className="tableT">업무 시간</div>
                    <div className="tableD">	09:00 ~ 18:00 (월~금)</div>
                </div>
                <div className="tablediv flex">
                    <div className="tableT">이메일</div>
                    <div className="tableD"> jpily111@gmail.com</div>
                </div>
                <div className="tablediv flex">
                    <div className="tableT">대표전화</div>
                    <div className="tableD"> jpily111@gmail.com</div>
                </div>
            </div>    
        </div>
            
        );
  }
  
  export default Place;
  