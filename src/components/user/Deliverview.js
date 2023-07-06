
import { useEffect, useState } from 'react';
import { deliveryApi } from '../../service/user';
import { findLabelByValue, formatDate } from '../../service/function';

function Deliverview({data}) {
  const carrierT = findLabelByValue(data.carrier)
  const [deliver, setDeliver] = useState([])
const [ddata, setDdata] = useState()
 useEffect(()=>{
   deliveryApi(data.carrier,data.dNum).then(function(response){
    if(response.data){
    setDeliver(response.data.progresses)
    setDdata(response.data)
  }else{
    setDeliver(false)
    setDdata(false)
  }
  })
 },[])
 console.log(deliver,'?')
  return (
   <>
   {deliver?
   <>
   <div>

   </div>
    <div className='deliverH flex c'>
      <div className='deliverH_wrap flex '>
        <span>배송상태</span>
        <span>{ddata&&ddata.state.text}</span>
      </div>
      <div className='deliverH_wrap flex '>
        <span>운송장번호</span>
        <span>{data.dNum}({carrierT})</span>
      </div>
    </div>
    <div className='progressesbox'>    
      {deliver&&deliver.map((value,index)=>
    <div className='progresseswrap flex j' key={index}>
      <div className='dTime'>
        {formatDate(value.time)}
      </div>
      <div className='dStatus'>
        {value.status.text}
      </div>
      <div className='dLocation'>
        {value.location.name}
      </div>
      {/* <div className='dDescription'>
        {value.description}
      </div> */}
    </div>)}
    </div>

    </>
    :<div>운송장 번호를 조회할 수 없습니다</div>
    }
   </>
  );
  }
  
  export default Deliverview;
  