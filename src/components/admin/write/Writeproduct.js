
import { useState ,useEffect} from "react";
import ReactQuills from "./ReactQuills";
import {Button, Input} from 'antd'
import axios from "axios";
import Productinfo from "./Productinfo";
import UploadThumb from "./UploadThumb";
import { useNavigate } from 'react-router-dom';
function Writeproduct({cate}) {
  const [fileList, setFileList] = useState([
        
  ]);
  const navigate = useNavigate();
  const [productinfo, setProductInfo] =useState({
    category : '',
    subcategory : '',
    pName : '',
    pquantity :'',
    pPrice :'',
    inch :'',
    material :'',
    brand :'',
    color :'',
})
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  
  console.log(fileList,'?')

  function addProduct() {
    if (fileList.length === 0) {
      return alert('이미지를 업로드해주세요.');
    }
  
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('images', file.originFileObj
      );
    });
  
    axios.get('/api/uploadproduct', {
      params: {
        title: title,
        content: value,
        category: productinfo.category,
        subcategory: productinfo.subcategory,
        pName: productinfo.pName,
        pquantity: productinfo.pquantity,
        pPrice: productinfo.pPrice,
        inch: productinfo.inch,
        material: productinfo.material,
        brand: productinfo.brand,
        color: productinfo.color,
      },
    })
      .then(response => {
        console.log(response.data)
        axios.post('http://localhost:5000/api/imagethumb', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        navigate("/");
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div className="Writeproduct main">
        <Productinfo setProductInfo={setProductInfo} productinfo={productinfo} cate={cate}/>
        <UploadThumb fileList={fileList} setFileList={setFileList} />
        <Button onClick={addProduct}>전송</Button>
        <Input onChange={e=>setTitle(e.target.value)}/>
        <ReactQuills value={value} setValue={setValue} />
    </div>
  );
}

export default Writeproduct;
