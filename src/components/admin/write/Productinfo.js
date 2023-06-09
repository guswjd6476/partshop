
import {InputNumber, Input,Select,} from 'antd'
import { brandOption, colorOption, materialOption  } from "../../../service/options";
import { useState } from 'react';
const { TextArea } = Input;
function Productinfo({cate,cates,setProductInfo,productinfo}) {
    // const uniqueValues = (cate, key) =>(
    //     productinfo.category !== ''?
    //     [...new Set(cate.filter(item => item.category == productinfo.category).map(item => item[key]))]
    //      :   [...new Set(cate.map(item => item[key]))]
    //      );
    const handleChange = (id, value) => {
        setProductInfo(prevState => ({
          ...prevState,
          [id]: value
        }));
        if(id == 'pPrice' || id == 'pName'|| id == 'pDetail'){
            setProductInfo(prevState => ({
                ...prevState,
                [id]: value.target.value
              })); 
        }
      };

    const categoryOptions = cates.map(value => {
        return {
          value: value.catenum,
          label: value.category
        };
      });
      const subcategoryOptions = cate.filter(value => value.catenum == productinfo.catenum).map(item => {
        return {
          value: item.subcatenum,
          label: item.subcategory
        };
      });
  return (
    <div className="Productinfo productSelectwrap">
        <div className="cateinfo">
          <Select  placeholder='카테고리' onChange={value =>{handleChange('catenum',value)}} className="productSelect" options={categoryOptions}  />
          <Select placeholder='세부카테고리' onChange={value =>handleChange('subcatenum',value)}  className="productSelect" options={subcategoryOptions}/>
          <Input className="nameinput productSelect" placeholder="제품명" onChange={value =>handleChange('pName',value)}/>
          {productinfo.catenum !==3 ?
          <>
          <InputNumber className="productSelect"  placeholder="재고" onChange={value =>handleChange('pquantity',value)}/>
          <Input  className="productSelect" placeholder="가격입력" onChange={value =>handleChange('pPrice',value)}/> 
          <InputNumber className="productSelect"  placeholder="할인율" onChange={value =>handleChange('dcrate',value)}/>
          <InputNumber className="productSelect"  placeholder="moq" onChange={value =>handleChange('moq',value)}/>
          <InputNumber className="productSelect"  placeholder="준비기간" onChange={value =>handleChange('prepare',value)}/>
          </>
          :''
        }
        </div>
        <div className="cateinfo">
        {productinfo.catenum !==3 ?
            <>
            <InputNumber  className="productSelect" placeholder="인치" onChange={value =>handleChange('inch',value)}/>
            <Select placeholder="색상" onChange={value =>handleChange('color',value)}  className="productSelect" options={colorOption()}></Select>
            <Select placeholder="소재" onChange={value =>handleChange('material',value)}  className="productSelect" options={materialOption()}></Select>
            </>
            :""
        }
            <Select placeholder="제조사" onChange={value =>handleChange('brand',value)}  className="brand productSelect" options={brandOption()}></Select>
            <Input onChange={value =>handleChange('pDetail',value)} className="productSelect de" showCount  placeholder='세부사양'  maxLength={300} />
           
        </div>
        <div className="cateinfo">
          
        </div>
    </div>
  );
}

export default Productinfo;
