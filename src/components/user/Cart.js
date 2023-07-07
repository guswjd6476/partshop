import { useEffect,useState } from "react";
import { getCart } from "../../service/product";
import Cartcheck from "./Cartcheck";
import EmptyCart from "./EmptyCart";
import Pagetitle from "../components_btn/Pagetitle";
import { useNavigate,Link } from 'react-router-dom';

function Cart({userId,setBack}) {
  const navigate = useNavigate();
  const [cartdata, setCartData] = useState('')
  const[plainOptions, setplainOptions] = useState([])
  useEffect(()=>{
    if(!userId){
      alert('로그인해주세요')
      navigate('/Login')
 }
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
    <div className="displaybox nonavicon cartcon main">
      <Pagetitle value={'장바구니'}  svalue={'shopping basket'}/>
      {cartdata ? (
       <Cartcheck userId={userId}  cartdata={cartdata} setCartData={setCartData} plainOptions={plainOptions} />
      ) : (
        <EmptyCart/>
      )}
    </div>
  );
  }
  
  export default Cart;
  