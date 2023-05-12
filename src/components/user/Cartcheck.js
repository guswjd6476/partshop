import { Checkbox,Col, Row ,Button } from 'antd';
import { useState,useEffect } from 'react';
import { AllCartdelete,Cartdelete } from '../components_btn/Cartbtn';
import Countbtn from '../components_btn/Countbtn';
import { numbcom } from '../../service/function';
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
    console.log(existingCount, 'existingCount');

    if (existingCount) {
      const newdata = props.cartdata.map((obj) =>
        obj.productnum === ids ? { ...obj, count: count } : obj
      );
      console.log(newdata, 'nd');
      props.setCartData(newdata);
    }
  };

  
  return (
    <>
      <div className='checkwrap' style={{display:'flex', justifyContent:'space-between', marginBottom:'20px', marginTop:'20px'}}>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </Checkbox>
      <AllCartdelete productid={checkedList}/>
      </div>
      <CheckboxGroup className='check_wrap'  value={checkedList} onChange={onChange}>
       
        {props.cartdata.map((value) => (
           <div key={value.id} className='cart_check_wrap'> 
                <Checkbox value={value.productnum}></Checkbox>
                <div className="cart_box">
                    <div className='cart_box_img'>
                      <img src={value.img1}/>
                    </div>
                    <div>
                      <div>{value.category}</div>
                      <div>{value.subcategory}</div>
                      <div>{value.pName}</div>
                      <div>{numbcom(value.pPrice)}</div>
                    </div>
                </div>
                <Countbtn ids={value.productnum} CountChange={CountChange}  count={value.count}/>
                <Cartdelete productid={value.productnum}/>
                </div>
        ))}
    </CheckboxGroup>
    <div className='totalp_wrap'>
      <div className='totalp'>
        총가격 : {numbcom(total)} 원
      </div>
      <Button className='btnsytle'>
        주문하기
      </Button>
    </div>
    </>
  );
};
export default Cartcheck;