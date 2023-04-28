import {  Link} from 'react-router-dom';

const ProductList  = (props)=>{
  
  const matchCountArray = props.plist?.map((item) => {
    let matchCount = 0;
    for (const filter of props.searchArray) {
      const [filterKey, filterValue] = Object.entries(filter)[0];
      if (item[filterKey] === filterValue) {
        matchCount++;
      }
    }
    return matchCount;
  });

  let results = [];
  props.searchArray.forEach((obj) => {
    const [key] = Object.keys(obj);
    const existingObj = results.find((o) => o[key] !== undefined);
    if (existingObj) {
      existingObj[key] = [...existingObj[key], obj[key]];
    } else {
      results.push({ [key]: [obj[key]] });
    }
  });

  let filteredArray = props.plist.filter((item, index) => matchCountArray[index] === results.length);

  const sortList = (filteredArray) => {
    if (props.daydesc) {
      return filteredArray.sort((a, b) => new Date(b.updatetime) - new Date(a.updatetime));
    }
    if (props.pricedesc) {
      return filteredArray.sort((a, b) => a.pPrice - b.pPrice);
    }
    if (props.priceaec) {
      return filteredArray.sort((a, b) => b.pPrice - a.pPrice);
    }
    return filteredArray;
  };

  filteredArray = sortList(filteredArray);
  const Pathnums = () => {
    return (
      <>
        {filteredArray.map((value, index) => (
          <li className="product_list" key={`${value.id}-${index}`}>
            <Link to={props.pathnum2  ? `/${props.pathnum1}/${props.pathnum2}/${value.id}` :`/${props.pathnum1}/${value.subcategory}/${value.id}` }>
              <div className='product_pic'>사진</div>
              <div>
              <p className={value.pName !==' '?'product_d':'none'}>{value.pName}</p>
              <p className={value.inch !==' '?'product_d':'none'}>{value.inch}인치</p>
              <p className={value.pPrice !==' '?'product_d':'none'} >가격 : {value.pPrice}</p>
              <p className={value.material !==' '?'product_d':'none'} >소재 :{value.material}</p>
              <p className={value.color !==' '?'product_d':'none'} >색상 : {value.color}</p>
              </div>
            </Link>
          </li>
        ))}
      </>
    );
  };

  return (
    <ul className={props.gridstyle == 1 ? 'productwrap1' : props.gridstyle == 2 ? 'productwrap2' : 'product_wrap'}>
      <Pathnums/>
    </ul>
  );

    }
  export default ProductList