import React, { useEffect, useState } from "react";
import ListComponent from './Listcomponent'
import { getSort } from "../../../service/product";

function Searchcomponent(props) { 
  const [product, setProduct] = useState(props.searchResult);
  useEffect(() => {
    if (props.pathnum2) {
      getSort(props.sortT, props.pathnum2)
        .then(function (response) {
          setProduct(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    } else if (props.num && props.searchResult) {
      setProduct(props.searchResult.map((value) => ({ [props.sortT] : value[props.sortT] })))
    } else {
      getSort(props.sortT, props.pathnum1)
        .then(function (response) {
          setProduct(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [props.pathnum1, props.pathnum2, props.sortT, props.num,props.searchResult]);
  
  return (
    <div className="search_com">
      <ListComponent
        pathnum1={props.pathnum1}
        pathnum2={props.pathnum2}
        searchArray={props.searchArray}
        setSearchResult={props.setSearchResult}
        setSearchArray={props.setSearchArray}
        setsearch={props.setsearch}
        sortT={props.sortT}
        lists={product}
        spinner={false}
      /> 
    </div>
  );
}

export default Searchcomponent;