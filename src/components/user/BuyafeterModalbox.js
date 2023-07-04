
import { Button,Modal,Input,Rate } from "antd";

import ReactQuills from "../admin/write/ReactQuills";


const BuyafeterModalbox = ({setValues,handlesChange,values}) => {
   
    return (
      <>
      <Input onChange={value =>handlesChange('title',value)} name="title" className="reactquills_title" placeholder="제목"/>
      <div className="ratewrap">
        <Rate onChange={value =>handlesChange('rate',value)} allowHalf defaultValue={0} />
      </div>
      <ReactQuills values={values} setValues={setValues} none={true}/>
      {/* <Input placeholder="제목"/>
      <Rate allowHalf defaultValue={2.5} />
      
      <Input placeholder="내용"/> */}
    
      </>
    );
  };

  export default BuyafeterModalbox