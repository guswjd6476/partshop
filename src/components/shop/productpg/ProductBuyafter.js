
import { useEffect, useState } from "react";
import { Rate } from "antd";
import { getThisAfterbuylist } from "../../../service/user";
import Emptypage from "../../../Emptypage";
import { maskId } from "../../../service/function";

function ProductBuyafter({data}) {
    const [buylist, setBuyList] =useState(null)
  
    useEffect(()=>{
        getThisAfterbuylist(data[0].id).then(function(response){setBuyList(response.data)})
    },[])
   
  return (
    <div>
    {buylist&&buylist[0] ? buylist.map(value=>
   
    <div className="buylistwrap" key={value.id}>
      <div className="mb5 ratewrap flex">
        <Rate disabled defaultValue={value.rate} />
        <div>({value.rate})</div>
      </div>
      <div className=" mb5 buylist_wrap flex">
        <div className="buylist_id mr5">{maskId(value.userId)}</div>
        <div className="buylist_id">{value.afterbuytime}</div>
      </div>
      
      <div className="buylist_pname f12 mb5">
        <span className="mr5 ">[{value.brand}]</span>{value.pName}
      </div>
        
        <div className="buylist_conwrap">
        <div  className="buylist_content" dangerouslySetInnerHTML={{__html:value.content}}></div>
        </div>

    </div>)
    :
        <Emptypage/>
    }
    </div>
  )
}

export default ProductBuyafter;
