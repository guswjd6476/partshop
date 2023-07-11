
import { Input, Select } from "antd";
import ReactQuills from "../../admin/write/ReactQuills";
function ProductInquirybox({div1,values,setValues,setCategory}) {

  return (
    <>
    {div1? 
  <Select placeholder='옵션선택' onChange={value=>setCategory(value)} className="inquirys" options={[
    {
      value: 'product',
      label: '제품문의',
    },
    {
      value: 'skill',
      label: '기술문의',
    }]} />
  :''  
  }
   <ReactQuills values={values} setValues={setValues} none={true}/>
   </>
  )
}

export default ProductInquirybox;
