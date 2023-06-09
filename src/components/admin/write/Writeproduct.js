
import { useState ,useEffect} from "react";
import ReactQuills from "./ReactQuills";
import {Button, Input} from 'antd'
import axios from "axios";
import Productinfo from "./Productinfo";
import UploadThumb from "./UploadThumb";
import { useNavigate } from 'react-router-dom';
import Fileupload from "./Fileupload";
function Writeproduct({cate,cates}) {
  const [fileList, setFileList] = useState([
  ])
  const [fileLists, setFileLists] = useState([    
  ]);
  const navigate = useNavigate();
  const [productinfo, setProductInfo] =useState({
    catenum : '',
    subcatenum : '',
    pName : '',
    pquantity :'',
    pPrice :'',
    inch :'',
    material :'',
    brand :'',
    color :'',
    dcrate :'',
    moq :'',
    prepare :'',
    pDetail :'',
})
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  
  const meta = {
    title: 'title 1',
      contents: 'contents 1',
  }

  function addProduct() {
    if (fileList.length === 0) {
      return alert('이미지를 업로드해주세요.');
    }
  
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('images', file.originFileObj
      );
    });
    const formDatas = new FormData();
    fileLists.forEach(file =>{
      const encodedFileName = encodeURIComponent(file.originFileObj.name)
      formDatas.append('files', file.originFileObj,encodedFileName)
    } 
   );
  
    
    axios.get('/api/uploadproduct', {
      params: {
        title: title,
        content: value,
        catenum: productinfo.catenum,
        subcatenum: productinfo.subcatenum,
        pName: productinfo.pName,
        pquantity: productinfo.pquantity,
        pPrice: productinfo.pPrice,
        inch: productinfo.inch,
        material: productinfo.material,
        brand: productinfo.brand,
        color: productinfo.color,
        dcrate: productinfo.dcrate,
        moq: productinfo.moq,
        prepare: productinfo.prepare,
        detail: productinfo.pDetail,
      },
    })
      .then(response => {
        console.log(response.data)
        if(productinfo.catenum !==3) {
        axios.post('http://localhost:5000/api/imagethumb', formData, {
          headers: {
            'Content-Type': 'multipart/form-data;charset=UTF-8'
          }
        })        
      }else{
      axios.post('http://localhost:5000/api/fileboard', formDatas, {
        headers: { 'Content-Type': 'multipart/form-data;charset=UTF-8'}
      });
      axios.post('http://localhost:5000/api/imagethumbs', formData, {
          headers: {
            'Content-Type': 'multipart/form-data;charset=UTF-8'
          }
        })
    }
    alert('게시물이 업로드 되었습니다')
    navigate("/");
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div className="Writeproduct main">
        <Productinfo setProductInfo={setProductInfo} productinfo={productinfo} cate={cate} cates={cates}/>
        <UploadThumb num={productinfo.catenum} fileList={fileList} setFileList={setFileList} />
        {productinfo.catenum === 3 ? 
        <Fileupload fileList={fileLists} setFileList={setFileLists}/> 
        :''
        }
        <Button className="submitbtn" onClick={addProduct}>전송</Button>
        <Input className="productSelect con" placeholder="게시물제목" onChange={e=>setTitle(e.target.value)}/>
        <ReactQuills value={value} setValue={setValue} />
    </div>
  );
}

export default Writeproduct;
