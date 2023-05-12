import { Button } from 'antd';
import { addNeeds } from '../../service/function';

function Needsbtn(props) {
   const onClick = () =>{
    addNeeds(props.productid, props.userId, props.counter)
    .then(function (response) {
        if(response.data==true)
        alert('추가되었습니다')
    })
   }

    return(
            <Button onClick={onClick} className='neeedsbtn  btnsytle'>♡</Button>
        
    )
  
};

export default Needsbtn;
