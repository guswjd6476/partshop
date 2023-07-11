import { Button } from "antd";
import {ArrowRightOutlined} from '@ant-design/icons';

import Emptypage from "../../../Emptypage"
import { maskId } from "../../../service/function"
import BuyafterModal from "../../user/BuyafterModal";

function ProductInquiry({inquiry,setInquiry,grade,userId}) {

    return(
    <div>
    {inquiry&&inquiry[0] ? inquiry.filter(value=>value.type===1).map(value=>
   
    <div className="buylistwrap inquiry" key={value.id}>
      <div>
      <div className=" mb5 buylist_wrap flex j">
        <div className="buylist_id mr5"><span style={{marginRight:'5px',backgroundColor:'#0b255b',color:'#fff',padding:'3px'}} className="f10">질문</span>{maskId(value.userId)}</div>
        <div className="f12">{value.updatetime}</div>
        {/* <div className="buylist_id">{value.afterbuytime}</div> */}
      </div>
      
      <div className="buylist_pname f12 mb5">
        {/* <span className="mr5 ">[{value.brand}]</span>{value.pName} */}
      </div>
        
        <div className="buylist_conwrap">
        <div  className="buylist_content" dangerouslySetInnerHTML={{__html:value.content}}></div>
        {inquiry&&grade == 1&&inquiry.filter(datas=>datas.answerid ===value.id).length==0 ? 
        <BuyafterModal setInquiry={setInquiry} inquiry={inquiry} answer={true} data={value} userId={userId}/>
        :''
        }
        </div>
        </div>
        {inquiry&&inquiry.filter(values=>values.answerid ===value.id).map(data=> <div className="buylistwrap backbg inquiry padup" key={data.id}>
      <div className=" mb5 buylist_wrap flex j">
        <div className="buylist_id mr5"><ArrowRightOutlined /><span style={{marginLeft:'5px',marginRight:'5px',backgroundColor:'#4b6cb7',color:'#fff',padding:'3px'}} className="f10">답변</span>{maskId(data.userId)}</div>
        <div className="f12">{data.updatetime}</div>
      </div>
      
      <div className="buylist_pname f12 mb5">
      </div>
        <div className="buylist_conwrap">
        <div  className="buylist_content" dangerouslySetInnerHTML={{__html:data.content}}></div>
        </div>
      </div>)}

    </div>
    
    )
    :
        <Emptypage/>
    }
    </div>
    )
}

export default ProductInquiry;
