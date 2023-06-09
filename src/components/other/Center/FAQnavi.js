
import { useState } from "react";
import { faqOption } from "../../../service/options";
import { Button } from "antd";
function FAQnavi({uGrade,on,setOn,noticeFilter}) {
    
    return (
        <>
        <div className="faqnavi">
        {faqOption()[0].map(value=><Button key={value.label} onClick={e=>{setOn(value.label); noticeFilter(value.label)}} className={on === value.label ? "faqnavibtn active" : "faqnavibtn"}>{value.label}</Button>)}
        </div>
        </>
            
        );
  }
  
  export default FAQnavi;
  