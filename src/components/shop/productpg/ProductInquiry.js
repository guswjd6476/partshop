import { Button } from "antd";
import Emptypage from "../../../Emptypage"
import { maskId } from "../../../service/function"
import BuyafterModal from "../../user/BuyafterModal";

function ProductInquiry({inquiry,grade,userId}) {

    return(
    <div>
    {inquiry&&inquiry[0] ? inquiry.map(value=>
   
    <div className="buylistwrap inquiry" key={value.id}>
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
        {grade == 1 ? 
        <BuyafterModal answer={true} value={value} userId={userId}/>
        :''
        }
        </div>

    </div>)
    :
        <Emptypage/>
    }
    </div>
    )
}

export default ProductInquiry;
