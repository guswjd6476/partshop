import { useEffect,useState } from "react";
import { getCart } from "../../service/product";
import Cartcheck from "./Cartcheck";


function Cart({userId}) {
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
  },[])

  return (
    <>
      {cartdata ? (
       <Cartcheck cartdata={cartdata} setCartData={setCartData} plainOptions={plainOptions} />
      ) : (
        ""
      )}
    </>
  );
  }
  
  export default Cart;
  