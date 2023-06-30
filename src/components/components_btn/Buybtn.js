import { Button } from 'antd';
import {Link, useParams } from 'react-router-dom';


function Buybtn(props) {

    const {checkedList,cartdata,productnum, userId,count } = props;
    const mergedArray = checkedList&&checkedList.map(item1 => {
      const matchedItem = cartdata.find(item2 => item2.productnum === item1);
      return {
        ...item1,
        ...matchedItem
      };
    });
    const checkedLists = mergedArray&&mergedArray.map(item => ({
      productnum: item.productnum,
      count: item.count
    }));
    
    const stringifyCheckedList = encodeURIComponent(JSON.stringify(checkedLists));
    
  return (
    <Link to={stringifyCheckedList !== 'undefined' ? `/buy?checkedList=${stringifyCheckedList}&productid=${productnum}&count=${count}&userId=${userId}` : 
    `/buy?&productid=${productnum}&count=${count}&userId=${userId}` 
    }>
      <Button className='btnsytle cartbuybtn' >주문하기</Button>
    </Link>
  );
}

export default Buybtn