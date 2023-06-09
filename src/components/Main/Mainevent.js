
import { useState, useEffect } from 'react';
import Pagetitle from '../components_btn/Pagetitle';
import { getiot } from '../../service/product';
import { Mainlinkto } from './Mainfunction';

function Mainevent({cates}) {
  console.log(cates,'?')
    const [iotlist, setIotlist] = useState()
  useEffect(()=>{
    getiot().then(function(response){
        setIotlist(response.data)
    })
  },[])


  return (
    <div className='iotallcon'>
    <Pagetitle value={'진행중인 이벤트'} main={true}/>
    <Mainlinkto cates={cates} num={4} value={'이벤트'} color={'b'}/>
      <div className='iotcontains'>
        {iotlist&&iotlist.map(value=>
        <div className='mainiotwrap' key={value.id}>
            <div className='mainIotimg'>
                <img src=   {value.thumb}/>
            </div>
            <div>
                <span>[{value.brand}]{value.pName}</span>
                <p>{value.pDetail}</p>
            </div>
          
            
        </div>)}
      </div>
    </div>
  );
}

export default Mainevent;
