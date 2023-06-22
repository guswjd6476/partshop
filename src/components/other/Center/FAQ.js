import { Collapse  } from "antd";
import { useEffect, useState } from "react";
import { getAllItem } from "../../../service/product"
import Innersearch from "../../components_btn/Innersearch";
import Pagetitle from "../../components_btn/Pagetitle";
import FAQnavi from "./FAQnavi";
const { Panel } = Collapse;
function FAQ({uGrade}) {
    const [notice, setNotice] = useState(null)
    const [notices, setNotices] = useState(null)
    const [filter, setFilter] =useState(null)
    const [on, setOn] = useState(null)
    useEffect(()=>{
      getAllItem('faq').then(function(response){
            setNotice(response.data)
            setNotices(response.data)
        })
    },[])
    const noticeFilter = (values) => {
      if(values !== on){
      const newnotice = notices&&notices.filter(value=>value.category === values)
      setNotice(newnotice)
    }else {
      setNotice(notices)
      setOn(null)
    }
    }
console.log(notice,'notice변화추이')
    return (
        <>
            <Pagetitle value={'FAQ'} svalue={'빠르게 답변해 드립니다'}/>
            <Innersearch path={'faq'} filter={filter} setFilter={setFilter} value={notice} setValue={setNotice}/>
            <FAQnavi on={on} setOn={setOn} noticeFilter={noticeFilter}/>
            <div className="shop_content_box">
             <Collapse accordion>
              {notice&&notice.map(value=>(
                <Panel header={<div className="tabledivs left"><span className="category">{value.category} </span> <span>{value.title}</span></div>} key={value.id}>
                <p dangerouslySetInnerHTML={{__html:value.content}}></p>
              </Panel>
              ))}
            </Collapse>
            </div>
            {uGrade === 1 ? 
            <a className="astyle" href="/Write/faq">작성</a>
            :''
          }
        </>
            
        );
  }
  
  export default FAQ;
  