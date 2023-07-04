
import { useEffect, useState } from "react";
import Waitpage from "../../../Waitpage";
import { Rate } from "antd";
import { getThisAfterbuylist } from "../../../service/user";

function ProductBuyafter({data}) {
    const [buylist, setBuyList] =useState(null)
    console.log(buylist,'buylist??')
    console.log(data.id,'data??')
    useEffect(()=>{
        getThisAfterbuylist(data[0].id).then(function(response){setBuyList(response.data)})
    },[])
   
  return (
    <>
    {buylist&&buylist[0]?buylist.map(value=>
    <div className="buylistwrap" key={value.id}>
        <div className="buylist_id">{value.userId}</div>
        <div className="buylist_pname f12"><span>[{value.brand}]</span>{value.pName}</div>
        <div className="ratewrap">
        <Rate disabled defaultValue={value.rate} />
        </div>
        <div className="buylist_conwrap">
        <div className="buylist_title">{value.title}</div>
        <div  className="buylist_content" dangerouslySetInnerHTML={{__html:value.content}}></div>
        </div>

    </div>)
    :
        <Waitpage/>
    }
    </>
  )
}

export default ProductBuyafter;
