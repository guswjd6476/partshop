import { useState,useEffect } from "react";
import {Button,Input} from 'antd'
import { Allproductdetail } from "../../../service/product";
function InputInventory(props) {
const [filter, setFilter] = useState('')
const [search, setSearch] = useState(false)
    const handleInputChange = (event) => {
        setFilter(event.target.value);
      };
      useEffect(()=>{

        if(filter){
          Allproductdetail(filter)
          .then(response => {
            const searchResult = response.data.filter(data => {
              return data.pName.toUpperCase().includes(filter.toUpperCase()) || data.category.toUpperCase().includes(filter.toUpperCase()) || data.subcategory.toUpperCase().includes(filter.toUpperCase()) ||  data.material.toUpperCase().includes(filter.toUpperCase());
            });
            props.setData(searchResult);
          })
          .catch(error => {
            console.error(error);
          });
        }
    },[search])
    
    return (
    <div className="inventory_input">
        <Input
          type="text"
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <Button onClick={e=>{setSearch(!search)}} >
            검색
        </Button >
      </div>
    );
  }
  
  export default InputInventory;
  