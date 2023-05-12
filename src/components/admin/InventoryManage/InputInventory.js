import { useState,useEffect } from "react";
import axios from "axios";
import {Button,Input} from 'antd'

function InputInventory(props) {
const [filter, setFilter] = useState('')
const [search, setSearch] = useState(false)
    const handleInputChange = (event) => {
        setFilter(event.target.value);
      };
      useEffect(()=>{
        if(filter){
        axios.get('/api/Allproductdetail',{
            params:{
              filter : filter,
            }
        })
          .then(response => {
            console.log(response.data)
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
    
    console.log( props.data,'data')
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
  