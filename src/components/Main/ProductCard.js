import { Link } from "react-router-dom";
import Mainmodal from "../admin/maincontrol/Mainmodal";
import { useState } from "react";
import { productStyle } from "./Mainfunction";
const ProductCard = ({ i, style,edit,able,data,datas,setMi,mi }) => {

    const [src, setSrc] = useState()

    const mergedStyle = { ...productStyle, ...style };
    function srcobj(obj, index) {
 
        const key = edit == 1 ? `a${index+1}`:`b${index+1}`;
        console.log(key,'iiii')
        return obj[key];
      }
      console.log(data,'data')
      console.log(datas,'datas')
    return( 
    <>
    {mi.a1 ?
    <div className="cardbox nodiv" style={mergedStyle}>
   {edit>=1 &&able? <Mainmodal edit={edit} mi={mi} setMi={setMi} datas={datas} src={src} setSrc={setSrc} i={i}/> : ''}
   {edit == 0 ?
   <Link onClick={e=>{console.log(`/${data?.category}/${data?.subcategory}/${data?.id}`)}} to={`/${data?.category}/${data?.subcategory}/${data?.id}`} className="card">
    <img src={data?.img1} />
    <div>{data?.pName}</div>
   </Link>
     
     :
     edit == 1 ?
   <Link  to={`/${datas&&datas.find(value => value.id == srcobj(mi,i)).category}/${datas&&datas.find(value => value.id == srcobj(mi,i)).subcategory}/${srcobj(mi,i)}`} className="card">
    <img src={ able == true?datas&&datas.find(value => value.id == srcobj(mi,i)).img1: datas&&datas.find(value => value.id == srcobj(mi,i)).img1 } />
    <div>{able == true?datas&&datas.find(value => value.id == srcobj(mi,i)).pName:datas&&datas.find(value => value.id == srcobj(mi,i)).pName}</div>
   </Link>
   :
   edit == 2 ?
   <Link  to={`/${datas&&datas.find(value => value.id == srcobj(mi,i)).category}/${datas&&datas.find(value => value.id == srcobj(mi,i)).subcategory}/${srcobj(mi,i)}`} className="card">
  <img src={ able == true?datas&&datas.find(value => value.id == srcobj(mi,i)).img1:datas&&datas.find(value => value.id == srcobj(mi,i)).img1} />
   <div>{able == true?datas&&datas.find(value => value.id == srcobj(mi,i)).pName:datas&&datas.find(value => value.id == srcobj(mi,i)).pName}</div>
  </Link>
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