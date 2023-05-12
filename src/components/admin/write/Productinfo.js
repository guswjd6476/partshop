
import { useEffect, useState } from "react";
import {InputNumber, Input,Select} from 'antd'
import { brandOption, colorOption, materialOption  } from "../../../service/options";
function Productinfo({cate,setProductInfo,productinfo}) {
  
    const uniqueValues = (cate, key) =>(
        productinfo.category !== ''?
        [...new Set(cate.filter(item => item.category == productinfo.category).map(item => item[key]))]
         :   [...new Set(cate.map(item => item[key]))]
         );
    const handleChange = (id, value) => {
        setProductInfo(prevState => ({
          ...prevState,
          [id]: value
        }));
        if(id == 'pPrice' || id == 'pName'){
            setProductInfo(prevState => ({
                ...prevState,
                [id]: value.target.value
              })); 
        }
      };
      console.log(productinfo,'?????')

    const categoryOptions = uniqueValues(cate, 'category').map(category => {
        return {
          value: category,
          label: category
        };
      });
      const subcategoryOptions = uniqueValues(cate, 'subcategory').map(subcategory => {
        return {
          value: subcategory,
          label: subcategory
        };
      });
  return (
    <div className="Productinfo">
        <div>
        <Select placeholder='카테고리' onChange={value =>handleChange('category',value)} className="productSelect" options={categoryOptions}  ></Select>
        <Select placeholder='세부카테고리' onChange={value =>handleChange('subcategory',value)}  className="productSelect" options={subcategoryOptions}></Select>
        </div>
        <div>
            
            <InputNumber  placeholder="개수입력" onChange={value =>handleChange('pquantity',value)}/>
            <InputNumber  placeholder="인치" onChange={value =>handleChange('inch',value)}/>
            <Select placeholder="색상" onChange={value =>handleChange('color',value)}  className="productSelect" options={colorOption()}></Select>
            <Select placeholder="소재" onChange={value =>handleChange('material',value)}  className="productSelect" options={materialOption()}></Select>
            <Select placeholder="제조사" onChange={value =>handleChange('brand',value)}  className="productSelect" options={brandOption()}></Select>
         
        </div>
        <div className="productinfo_wrap inputwrap">
          <Input placeholder="가격입력" onChange={value =>handleChange('pPrice',value)}/>
            <Input placeholder="제품명" onChange={value =>handleChange('pName',value)}/>
        </div>
    </div>
  );
}

export default Productinfo;
