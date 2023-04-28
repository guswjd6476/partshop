import FunctionBtn from "./FunctionBtn"
import ProductList from "./ProductList"
import { useState } from "react"

const Productbox = (props)=>{
    
  const [daydesc, setDayDesc] = useState(false)
  const [pricedesc, setPriceDesc] = useState(false)
  const [priceaec, setPriceAec] = useState(false)
  const [gridstyle, setGridStyle] = useState(0)
  
    return(
        <>
        <FunctionBtn setGridStyle={setGridStyle} daydesc={daydesc} pricedesc={pricedesc} priceaec={priceaec} setDayDesc={setDayDesc} setPriceDesc={setPriceDesc}  setPriceAec={setPriceAec}/>
        <ProductList gridstyle={gridstyle} daydesc={daydesc} pricedesc={pricedesc} priceaec={priceaec} plist={props.plist} pathnum1={props.pathnum1} pathnum2={props.pathnum2} searchArray={props.searchArray} />
        </>
    )
}
export default Productbox