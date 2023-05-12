import React, { useEffect, useState } from "react";
import Inputcomponent from "./Inputcomponent";
import ListComponent from './Listcomponent'
import axios from "axios";

function Searchcomponent(props) {
const [product, setProduct] = useState(null)
  useEffect(()=>{
    axios
                .get('/api/product',{
                  params:{
                    sort : props.sortT,
                    path1 : props.pathnum1,
                    path2 : props.pathnum2
                  }
                })
                .then(function (response) {
                
                   setProduct(response.data)
                })
                .catch(function (error) {
                    alert("에러", "확인 버튼을 눌러 주세요", "error");
                    console.log(error)
                })   

  },[props.pathnum1,props.pathnum2])
  const [spinner, setSpinner] = useState(false);

  let [searchValue, setSearchValue] = useState("");

  const fetchSeachValue = searchResult => {
    if (searchResult.length === 0) {
     
    }
    setSearchValue(searchResult);
  };
  const setspinnerFlag = flag => {
    setSpinner(flag);
  };

  const fetchSearchedProduct = searchResult1 => {
    const searchedUser = product;
    if (searchResult1.length > 0 && typeof searchResult1 === 'number') {
      const newUser = searchedUser.filter(user => {
        console.log(user[props.sortT],'user[sortT]')
        const searchedValue = searchResult1.toString().toLowerCase(); 
        const userValue = user[props.sortT].toString().toLowerCase(); 
        return userValue.includes(searchedValue); 
      });
      setProduct(newUser);
    }else if(searchResult1.length > 0 && typeof searchResult1 === 'string'){
      const newUser = searchedUser.filter(user => {
        const searchedValue = searchResult1.toLowerCase(); 
        const userValue = user[props.sortT].toLowerCase(); 
        return userValue.includes(searchedValue); 
      });
      setProduct(newUser);
    } else {
      // 검색 결과가 없는 경우에 대한 처리를 여기에 추가할 수 있습니다.
    }
  };

  return (
    <div className="search_com">
      {/* <Inputcomponent
        searchValue={searchValue}
        fetchSeachValue={fetchSeachValue}
        fetchSearchedProduct={fetchSearchedProduct}
        setspinnerFlag={setspinnerFlag}
        sortT={sortT}
      /> */}
      <ListComponent pathnum1={props.pathnum1} pathnum2={props.pathnum2} searchArray={props.searchArray} setSearchArray={props.setSearchArray} sortT={props.sortT} lists={product} spinner={spinner} />
    </div>
  );
}

export default Searchcomponent;
