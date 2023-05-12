
import React, { useEffect, useState } from "react";
function ListComponent({lists,sortT,setSearchArray,pathnum1,pathnum2}) {
  const [selectedItem, setSelectedItem] = useState([]);

  useEffect(()=>{
    setSelectedItem([])
  },[pathnum2])

  
  const onClick = (value,index) =>{
    const selectedItemIndex = selectedItem.indexOf(index);
    if (selectedItemIndex === -1) {
      setSelectedItem([...selectedItem, index]);
      setSearchArray(prevArray => [...prevArray, value]);
    } else {
      const updatedSelectedItems = [...selectedItem];
      updatedSelectedItems.splice(selectedItemIndex, 1);
      setSelectedItem(updatedSelectedItems);
      setSearchArray(prevArray => prevArray.filter(item => item !== value));
    }
  }

  return (
    <ul className="sort_searched_box">
        {lists&&lists.map((value,index)=>(
            <li  className={selectedItem.includes(index) ? "selected" : ""} onClick={e=>onClick(value,index)} key={`${value[sortT]}-${index}`}>
                <p>{value[sortT]}</p>
            </li>
        ))}        
    </ul>
  );
}

export default ListComponent;
