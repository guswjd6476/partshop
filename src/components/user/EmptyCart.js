
import {ShoppingCartOutlined } from '@ant-design/icons';


function EmptyCart({userId,setBack}) {
  
  return (
    <div className="displaybox main">
        <div className='pcenter'>
        <div className='carticon'><ShoppingCartOutlined /></div>
        <div>장바구니가 비었습니다</div>
        <div>구매하실 상품을 담아주세요</div>
        </div> 
    </div>
  );
  }
  
  export default EmptyCart;
  