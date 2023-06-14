
import { useState,useEffect} from "react";
import ReactQuills from "../../../admin/write/ReactQuills";
import {Button, Input,Select} from 'antd'
import { useNavigate,useLocation } from 'react-router-dom';
import { Wnotice,Wfaq,Wqna,Wqnaanswer } from "../../../../service/product";
import { noticeOption ,faqOption,qnaOption} from "../../../../service/options";
function Writenotice({setBack}) {

  const navigate = useNavigate();
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  console.log(searchParams,'???')
  const pathnum2 = location.pathname.split('/')[2].split("&")[0]
  const userArray = JSON.parse(localStorage.getItem('userInfo'))
  const num = searchParams.get('productid');
  console.log(num,'?')
  const user= userArray[0]
  const userGrade= userArray[1]
  const [values, setValues] =useState({
    title : '',
    category : '',
})

useEffect(()=>{setBack(true)},[])
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
  function addProduct() {  
    {pathnum2 ==='notice' ?
    Wnotice(values.title,value,user,values.category).then(response => {
      console.log(response.data)
      navigate("/center/notice");
    })
    .catch(error => {
      console.error(error);
    })
    : pathnum2 ==='faq' ?
    Wfaq(values.title,value,user,values.category).then(response => {
      console.log(response.data)
      navigate("/center/FAQ");
    })
    .catch(error => {
      console.error(error);
    })
    : pathnum2 ==='qna' ?
    Wqna(values.title,value,user,values.category).then(response => {
      console.log(response.data)
      navigate(`/center/qna`);
    })
    .catch(error => {
      console.error(error);
    })
    :
    Wqnaanswer(value,values.writer,num).then(response => {
      navigate(`/center/qna`);
    })
    .catch(error => {
      console.error(error);
    })
    }
      
  }

  return (
    <div className="Writeproduct main displaybox">   
        {    pathnum2 !=='qnaanswer' ?
        <div className="writeT" style={{display:'flex', alignContent:'center'}}>
         <Select 
         style={{width:'100px'}} 
         options={pathnum2 === 'notice' ? noticeOption()[0] :pathnum2 === 'faq' ? faqOption()[0] :qnaOption()[0]} 
         onChange={value =>handleChange('category',value)} ></Select>
        <Input className="productSelect con" placeholder="게시물제목" onChange={value =>handleChange('title',value)}/>
        </div>

        :''
      }
        <ReactQuills value={value} setValue={setValue} />
        <Button className="submitbtns" onClick={addProduct}>전송</Button>
    </div>
  );
}

export default Writenotice;
