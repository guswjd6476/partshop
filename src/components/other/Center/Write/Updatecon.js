
import { useState,useEffect} from "react";
import ReactQuills from "../../../admin/write/ReactQuills";
import {Button, Input,Select} from 'antd'
import { useNavigate,useLocation } from 'react-router-dom';
import { updateItem,getItemcon } from "../../../../service/product";
import { noticeOption ,faqOption,qnaOption} from "../../../../service/options";
function Updatecon({setBack}) {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [notice, setNotice] = useState('')
  const pathnum2 = location.pathname.split('/')[2].split("&")[0]
  const num = searchParams.get('productid');
  const [values, setValues] =useState({
    title : '',
    category : '',
})
const [value, setValue] = useState('');
const handleChange = (id, value) => {
    setValues(prevState => ({
      ...prevState,
      [id]: value
    }));
    if(id == 'title'){
        setValues(prevState => ({
            ...prevState,
            [id]: value.target.value
    })); 
    }
}
useEffect(()=>{
  setBack(true)
    getItemcon(num,pathnum2).then(function(response){
        setNotice(response.data)
        setValues({title: response.data[0].title , category : response.data[0].category})
        setValue(response.data[0].content)
    })
},[num])

  function updateProduct() {  
    updateItem(values.title,value,values.category,notice[0].id,pathnum2).then(response => {
        navigate(`/center/${pathnum2}/noticecon?&productid=${notice[0].id}`);
      }).catch(error => {
      console.error(error);
    })
    }
      

  return (
    <>
    {notice ? 
    <div className="Writeproduct main displaybox">   
        {    pathnum2 !=='qnaanswer' ?
        <div className="writeT" style={{display:'flex', alignContent:'center'}}>
         <Select 
          defaultValue={`${notice[0].category}`} 
         style={{width:'100px'}} 
         options={pathnum2 === 'notice' ? noticeOption()[0] :pathnum2 === 'faq' ? faqOption()[0] :qnaOption()[0]} 
         onChange={value =>handleChange('category',value)} ></Select>
        <Input  defaultValue={`${notice[0].title}`} className="productSelect con" onChange={value =>handleChange('title',value)}/>
        </div>

        :''
      }
        <ReactQuills value={value} setValue={setValue} />
        <Button className="submitbtns" onClick={updateProduct}>수정</Button>
    </div>
    :''
}
    </>
  );
}

export default Updatecon;
