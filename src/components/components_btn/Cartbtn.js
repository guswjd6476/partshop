import { Button } from 'antd';
import { deleteCart,addCart } from '../../service/product';
import { ShoppingCartOutlined,DeleteOutlined} from '@ant-design/icons';

function AddCartbtn(props) {
  const counter = props.counter&&!props.counter[0] ? 1 : props.counter&&props.counter[0].count
    const onClick=()=>{
    addCart(props.productid, props.userId, counter)
    .then(function (response) {
      alert('카트에 추가되었습니다');
    })
}
  return (
    <Button className='cartbtn btnsytle' onClick={onClick}><ShoppingCartOutlined /></Button>
  );
}

const Cartdelete = (props) => {
    const onClick=()=>{
        deleteCart(props.productid)
        .then(function (response) {
          alert('삭제되었습니다');
        })
    }
  return (
    <Button className='cartdelet' onClick={onClick}><DeleteOutlined /></Button>
  );
};


const AllCartdelete = ({productid}) => {
    const onClick=()=>{
        deleteCart(productid)
        .then(function (response) {
          alert('삭제되었습니다');
        })
    }
  return (
    <Button  onClick={onClick}>삭제</Button>
  );
};

export {AllCartdelete,Cartdelete,AddCartbtn};
