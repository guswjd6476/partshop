import { useEffect,useState } from "react";
import { getCart } from "../../service/product";
import Cartcheck from "./Cartcheck";


function Cart({userId,setBack}) {
  const [cartdata, setCartData] = useState('')
  const[plainOptions, setplainOptions] = useState([])
  useEffect(()=>{
    getCart(userId)
    .then(function (response) {
      setCartData(response.data)
      setplainOptions(
        response.data.map(value => value.productnum)
      )
    })
    setBack(true)
  },[cartdata.length])
  return (
    <div className="displaybox main">
      {cartdata ? (
       <Cartcheck  cartdata={cartdata} setCartData={setCartData} plainOptions={plainOptions} />
      ) : (
        ""
      )}
    </div>
  );
  }
  
  export default Cart;
  