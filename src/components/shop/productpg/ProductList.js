
import { sortList,pricechange } from '../../../service/function';
import { useEffect, useState } from 'react';
import { Checkbox} from 'antd';
import Productform from './Productform';

const ProductList  = (props)=>{
  const [counts, setCounts] = useState([]);
  const [check, setCheck] = useState([])
  let   matchCountArray = props.plist&&props.plist?.map((item) => {
    let matchCount = 0;
    for (const filter of props.search) {
      const [filterKey, filterValue] = Object.entries(filter)[0];
      if (item[filterKey] === filterValue) {
        matchCount++;
      }
    }
    return matchCount;
  });
   
  
  const handleCountChange = (index, count, ids) => {
    setCounts(prevCounts => {
      const existingCount = prevCounts.find(obj => obj.id === ids);
      if (existingCount) {
        // id가 이미 있는 경우, count만 업데이트
        return prevCounts.map(obj => obj.id === ids ? {id : ids, count : count} : obj);
      } else {
        // id가 없는 경우, 새로운 object 추가
        return [...prevCounts, {id : ids, count : count} ];
      }
    });
  };

  let results = [];
  props.search&&props.search.forEach((obj) => {
    const [key] = Object.keys(obj);
    const existingObj = results.find((o) => o[key] !== undefined);
    if (existingObj) {
      existingObj[key] = [...existingObj[key], obj[key]];
    } else {
      results.push({ [key]: [obj[key]] });
    }
  });
    let filteredArray = (props.plist&&props.plist.filter((item, index) => matchCountArray&&matchCountArray[index] === results.length))||props.plist;
    sortList(filteredArray, props.sortOption);
  const onChange = (checkedValues) => {
    const checkedList = checkedValues.map((id) => ({ id: id }));
    setCheck(checkedList);
  };
useEffect(()=>{
  const commonIds = check&&check.map((obj) => obj.id).filter((id) => counts.some((countObj) => countObj.id === id));
  const newCheckedList = check.map((obj) => {
    const countObj = counts&&counts.find((countObj) => countObj.id === obj.id);
    if (countObj && commonIds.includes(obj.id)) {
      return { ...obj, count: countObj.count };
    } else {
      return { ...obj, count: 1 };
    }
  });
  
  props.setLastCheck(newCheckedList)
},[counts,check])

  return (
    <div className={props.gridstyle == 1 ? 'productwrap1' : props.gridstyle == 2 ? 'productwrap2' : 'product_wrap'}>
         <Checkbox.Group
    
    onChange={onChange}
  >
        {filteredArray&&filteredArray.map((value, index ) => {
           const pathValue = props.pathnum2 ? `/${props.pathnum1}/${props.pathnum2}/${value.id}` : `/${props.pathnum1}/${value.subcategory}/${value.id}`;
           return(
          <Productform counts={counts} index={index} pathValue={pathValue} userId={props.userId} gridstyle={props.gridstyle} handleCountChange={handleCountChange} value={value}/>
          )
  })}
  </Checkbox.Group>
    </div>
  );

    }
  export default ProductList