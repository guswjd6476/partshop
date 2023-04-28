import React, { useEffect ,useState} from 'react';
import axios from 'axios';
import FunctionBtn from './shop/FunctionBtn';
import {Link} from 'react-router-dom';


const AllSearchResult = ({ filter,sb }) => {

let [searchResult, setSearchResult] = useState([]);

const [daydesc, setDayDesc] = useState(false)
const [pricedesc, setPriceDesc] = useState(false)
const [priceaec, setPriceAec] = useState(false)
const [gridstyle, setGridStyle] = useState(0)
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
          return data.pName.toUpperCase().includes(filter.toUpperCase());
        });
        setSearchResult(searchResult);
      })
      .catch(error => {
        console.error(error);
      });
    }
},[sb])

const sortList = (searchResult) => {
    if (daydesc) {
      return searchResult.sort((a, b) => new Date(b.updatetime) - new Date(a.updatetime));
    }
    if (pricedesc) {
      return searchResult.sort((a, b) => a.pPrice - b.pPrice);
    }
    if (priceaec) {
      return searchResult.sort((a, b) => b.pPrice - a.pPrice);
    }
    return searchResult;
  };

  searchResult = sortList(searchResult);

  return (
    <>
    <FunctionBtn setGridStyle={setGridStyle} daydesc={daydesc} pricedesc={pricedesc} priceaec={priceaec} setDayDesc={setDayDesc} setPriceDesc={setPriceDesc}  setPriceAec={setPriceAec}/>
    <ul  className={gridstyle == 1 ? 'productwrap1' :gridstyle == 2 ? 'productwrap2' : 'product_wrap'}>
        
      {searchResult&&searchResult.map((data,index) => (
        <li className="product_list" key={`${data.id}-${index}`}>
            <Link to={`/${data.category}/${data.subcategory}/${data.id}`}>
                <div className='product_pic'>사진</div>
                    <div>
                        <p >{data.pName}</p>      
                        <p >{data.pquantity}</p>      
                        <p >{data.pPrice}</p>      
                        <p >{data.inch}</p>      
                        <p >{data.material}</p>      
                        <p >{data.brand}</p>      
                        <p >{data.color}</p>      
                    </div>
            </Link>
        </li>
      ))}
    </ul>
    </>
    
  );
};

export default AllSearchResult;