import { Button } from 'antd';
import { useState } from 'react';
function Countbtn(props) {
    const [count, setCount] = useState(props.count||1);

 
    const inc = () => {
        setCount(count + 1);
        props.onCountChange&&props.onCountChange(props.index, count + 1,props.ids);
        props.CountChange&& props.CountChange(count+1, props.ids)
        props.setBuycount&&props.setBuycount(count+1)
    };
    const dec = () => {
        if (count <= 1) {
            alert('1 이하로는 설정 할 수 없습니다');
            return
        } else {
            setCount(count - 1);
             props.onCountChange&&props.onCountChange(props.index, count - 1,props.ids);
             props.CountChange&& props.CountChange(count-1,props.ids)
             props.setBuycount&&props.setBuycount(count-1)
             
    };
}
    return(
        <div className='count_wrap'>
            <Button className='counterbtn' onClick={inc}>+</Button>
            <span className='counter f18'>{count}</span>
            <Button className='counterbtn'  onClick={dec}>-</Button>
        </div>
    )


    
};

export default Countbtn;
