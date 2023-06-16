import { useEffect,useState } from "react";
import { getCart } from "../../service/product";
import Cartcheck from "./Cartcheck";
import EmptyCart from "./EmptyCart";


function Cart({userId,setBack}) {
  const [cartdata, setCartData] = useState('')
  console.log(cartdata,'?')
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
  console.log(cartdata,'cd')
  return (
    <div className="displaybox main">
      {cartdata ? (
       <Cartcheck  cartdata={cartdata} setCartData={setCartData} plainOptions={plainOptions} />
      ) : (
        <EmptyCart/>
      )}
    </div>
  );
  }
  
  export default Cart;
  