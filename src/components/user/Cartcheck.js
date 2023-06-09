import { Checkbox,Col, Row ,Button } from 'antd';
import { useState,useEffect } from 'react';
import { AllCartdelete,Cartdelete } from '../components_btn/Cartbtn';
import Countbtn from '../components_btn/Countbtn';
import { pricechange } from '../../service/function';
import Buybtn from '../components_btn/Buybtn';
const CheckboxGroup = Checkbox.Group;


const Cartcheck = (props) => {
  const [checkedList, setCheckedList] = useState([]);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [total, setTotal] = useState(0)

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < props.plainOptions.length);
    setCheckAll(list.length === props.plainOptions.length);
    updateTotal(list);
  };

  const onCheckAllChange = (e) => {
    const newList = e.target.checked ? props.plainOptions : [];
    setCheckedList(newList);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
    updateTotal(newList);
  };

  useEffect(() => {
    updateTotal(checkedList);
  }, [checkedList, props.cartdata]);

  const updateTotal = (list) => {
    let totalp = 0;
    for (const item of props.cartdata) {
      if (list.includes(item.productnum)) {
        totalp += Number(item.pPrice) * item.count;
      }
    }
    setTotal(totalp);
  };

  const CountChange = (count, ids) => {
    const existingCount = props.cartdata.find((obj) => obj.productnum === ids);

    if (existingCount) {
      const newdata = props.cartdata.map((obj) =>
        obj.productnum === ids ? { ...obj, count: count } : obj
      );
      props.setCartData(newdata);
    }
  };
  return (
    <>
      <div className='checkwrap' style={{display:'flex', justifyContent:'space-between', marginBottom:'20px', marginTop:'20px'}}>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </Checkbox>
      <AllCartdelete setCartData={props.setCartData} cartdata={props.cartdata} productid={checkedList}/>
      </div>
      <CheckboxGroup className='check_wrap'  value={checkedList} onChange={onChange}>
       
        {props.cartdata.map((value) => (
           <div key={value.id} className='cart_check_wrap'> 
                <Checkbox value={value.productnum}></Checkbox>
                <div className="cart_box">
                    <div className='cart_box_img'>
                      <img src={value.img1}/>
                    </div>
                    <div className='cart_box_detail'>
                      <div className='tbrand'>{value.brand}</div>
                      <div className='tname'>{value.pName}</div>
                      <div className='table4'>{pricechange(value.pPrice)}원</div>
                    </div>
                </div>
                <Countbtn ids={value.productnum} CountChange={CountChange}  count={value.count}/>
                <Cartdelete setCartData={props.setCartData} cartdata={props.cartdata} productid={value.productnum}/>
                </div>
        ))}
    </CheckboxGroup>
    <div className='totalp_wrap'>
      <div className='totalp'>
        총가격 : {pricechange(total)} 원
      </div>
        <Buybtn checkedList={checkedList} userId={props.userId}  cartdata={props.cartdata}/>
    </div>
    </>
  );
};
export default Cartcheck;