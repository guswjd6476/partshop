import { Link } from "react-router-dom";
import Mainmodal from "../admin/maincontrol/Mainmodal";
import { useState } from "react";
import { productStyle } from "./Mainfunction";
import Productform from "../shop/productpg/Productform";
const ProductCard = ({ i, style,edit,able,data,datas,setMi,mi }) => {

    const [src, setSrc] = useState()

    const mergedStyle = { ...productStyle, ...style };
    function srcobj(obj, index) {
 
        const key = edit == 1 ? `a${index+1}`:`b${index+1}`;
        console.log(key,'iiii')
        return obj[key];
      }
    const rValue = datas&&datas.find(value => value.id == srcobj(mi,i))
    const pathValue = `/${rValue&&rValue.category}/${rValue&&rValue.subcategory}/${srcobj(mi,i)}`
    return( 
    <>
    {mi.a1 ?
    <div className="cardbox nodiv product_wrap wide" style={mergedStyle}>
   {edit>=1 &&able? <Mainmodal edit={edit} mi={mi} setMi={setMi} datas={datas} src={src} setSrc={setSrc} i={i}/> : ''}
   {edit == 0 ?
   <Link onClick={e=>{console.log(`/${data?.category}/${data?.subcategory}/${data?.id}`)}} to={`/${data?.category}/${data?.subcategory}/${data?.id}`} className="card">
    <img src={data?.img1} />
    <div className="cardp">{data?.pName}</div>
   </Link>
     
     :
     edit == 1 ?
     <Productform pathValue={pathValue} main={true}  gridstyle={0}  value={rValue}/>
   :
   edit == 2 ?
    <Productform pathValue={pathValue} main={true}  gridstyle={0}  value={rValue}/>
   :
     ""
    }
    </div>
    :''
}
    </>

);
  };

  export default ProductCard