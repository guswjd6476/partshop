
import {Link, useLocation,useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { productdetail } from '../../../service/product';
import { getcompare,pricechange } from '../../../service/function';
import Buybox from './Buybox';
import Pagetitle from '../../components_btn/Pagetitle';
import Buyagree from './Buyagree';
import Buyorder from './Buyorder';
import Buyaddress from './Buyaddress';
import { getUser,getAddress } from '../../../service/user';
function Buy(props) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productnum = searchParams.get('productid');
  const checkedListString = searchParams.get('checkedList')||null;
  const navigate = useNavigate();
  const checkedList = checkedListString&&JSON.parse(decodeURIComponent(checkedListString));
  const count = searchParams.get('count');
  const [check, setCheck] = useState(false)
  const [user,setUser] = useState('')
  const [addresslist,setAddresslist] = useState([])
  const [address, setAddress] = useState()
  const [cartlist, setCartList] = useState()
  useEffect(()=>{
    props.setBack(true)
    if(props.userId !=='null'&&props.userId){
    if(checkedList){
      getcompare(checkedList)
    .then(function (response) {
      const mergedArray = response.data.map(item1 => {
        const matchedItem = checkedList.find(item2 => item2.productnum === item1.id);
        return {
          ...item1,
          ...matchedItem
        };
      });
      
      setCartList(mergedArray)
      
    })
  }else{

    productdetail(productnum).then(function(response){
      setCartList(response.data)
    })
  
  }
}else{
  alert('로그인해주세요')
  navigate('/Login')
}  
if(props.userId){
  getUser(props.userId).then(function(response){
    setUser(response.data)
})
getAddress(props.userId).then(function(response){
  setAddresslist(response.data)
  setAddress(response.data.find(value=>value.selected === 1))
})
}
  },[])
  
  const total = cartlist&&cartlist.reduce((sum, item) => {
    return sum + item.count * item.pPrice;
  }, 0);
  
  console.log(props.userId,'userid')
  console.log(user,'user')
  console.log(address,'address')
  console.log(addresslist,'addresslist')

  return (
  <div className='buy_wrap main displaybox'>
    <Pagetitle value={'주문/결제 페이지'} svalue={'다양한 수단으로 결제가 가능합니다'}/>
    <div className='buycontain'>
      <div className='buydiv'>

        <div className='buywrap'>
            <p className='smallT'>주문내역</p>
            {
              cartlist&&cartlist.map(value=>
              <div className='buybox' key={value.id}>
                <div className='buyimg'>
                  <img src={value.img1}/>
                </div>
                <div className='buyname'>
                  {value.pName}
                </div>
                <div className='buycount'>
                  {value.count||count}개
                </div>
                <div className='buyprice'>
                  {pricechange(value.pPrice)}원
                </div>
              </div>
                )
            }
        
        </div>
      
        <Buyagree setCheck={setCheck} check={check}/>
        <Buyorder address={address} addresslist={addresslist} user={user[0]}/>
        <Buyaddress setAddress={setAddress} address={address} user={user[0]}/>
      </div>
      <Buybox check={check} total={pricechange(total||cartlist&&cartlist[0].pPrice)}/>
    </div>
  </div>
  );
}

export default Buy