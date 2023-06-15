
import React, { useEffect, useState } from "react";

function ListComponent({searchArray,lists,sortT,setSearchArray,pathnum1,pathnum2,setsearch}) {

  const [selectedItem, setSelectedItem] = useState([]);
  useEffect(()=>{
    setSelectedItem([])
  },[pathnum1,pathnum2])
  // const newlist = lists&&lists.map(value=> value[sortT]).filter((value, index, self) => {
  //   return  value !== ''&& self.indexOf(value) === index;
  // });
  const onClick = (value,index) =>{
    const selectedItemIndex = selectedItem.indexOf(index);
    if (selectedItemIndex === -1) {
      setSelectedItem([...selectedItem, index]);
      setSearchArray(prevArray => [...prevArray, value]);
      setsearch&&setsearch(prevArray => [...prevArray, value]);
    } else {
      const updatedSelectedItems = [...selectedItem];
      updatedSelectedItems.splice(selectedItemIndex, 1);
      setSelectedItem(updatedSelectedItems);
      setSearchArray(prevArray => prevArray.filter(item => item !== value));
      setsearch&&setsearch(prevArray => prevArray.filter(item => item !== value));
    }
  }

  return (
    <ul className="sort_searched_box">
    {[...new Set(lists&&lists.map((value) => value[sortT]))].map((value, index) => (
    <li
      className={searchArray.find(item => item[sortT] == value) ? "selected" : ""}
      onClick={(e) => onClick(lists[index], index)}
      key={`${value}-${index}`}
    >
      <p>{value}</p>
    </li>
  ))}
  </ul>
  );
}

export default ListComponent;
