
import {Link, useLocation,useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { productdetail } from '../../../service/product';
import { getcompare,pricechange } from '../../../service/function';
import Buybox from './Buybox';
import Pagetitle from '../../components_btn/Pagetitle';
function Buy(props) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productnum = searchParams.get('productid');
  const checkedListString = searchParams.get('checkedList')||null;
  const navigate = useNavigate();
  const checkedList = checkedListString&&JSON.parse(decodeURIComponent(checkedListString));
  
  const userId = searchParams.get('userId');
  const count = searchParams.get('count');

  console.log(userId,'userid')
  const [cartlist, setCartList] = useState()
  useEffect(()=>{
    props.setBack(true)
    if(userId !=='null'){
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
  },[])
  
  const total = cartlist&&cartlist.reduce((sum, item) => {
    return sum + item.count * item.pPrice;
  }, 0);
  

  return (
  <div className='buy_wrap displaybox'>
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
      
        <div  className='buywrap'>
          <p className='smallT'> 최종구매 전 동의사항</p>
        
        </div>
        <div  className='buywrap'>
          <p className='smallT'> 주문자 정보</p>
        </div>
        <div  className='buywrap'>
          <p className='smallT'> 배송지 정보</p>
        </div>
      
      </div>
      <Buybox total={pricechange(total||cartlist&&cartlist[0].pPrice)}/>
    </div>
  </div>
  );
}

export default Buy