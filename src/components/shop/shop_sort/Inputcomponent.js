import React from "react";

function Inputcomponent({
  fetchSeachValue,
  searchValue,
  fetchSearchedProduct,
  setspinnerFlag,
  sortT
}) {
  const searchResults = () => {
    fetchSearchedProduct(searchValue);
    setspinnerFlag(false);
  };

  const onChangeSearch = e => {
    const searchString = e.target.value;
    (searchString.length===0) ? setspinnerFlag(false):setspinnerFlag(true);
    
    fetchSeachValue(searchString);
  };


  return (
    <div>
      <input
        type="text"
        name="search"
        className="search"
        value={searchValue}
        onChange={onChangeSearch}
      />
      <button className="button" onClick={searchResults}> Search</button>
    </div>
  );
}

export default Inputcomponent;
