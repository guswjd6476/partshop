
import { useState, useEffect } from 'react';
import Pagetitle from '../components_btn/Pagetitle';
import { getevent } from '../../service/product';
import { Mainlinkto } from './Mainfunction';

function Mainevent({cates}) {
  console.log(cates,'?')
    const [eventlist, setEventlist] = useState()
  useEffect(()=>{
    getevent().then(function(response){
      setEventlist(response.data)
    })
  },[])


  return (
    <div className='iotallcon'>
      <Pagetitle value={'진행중인 이벤트'} main={true}/>
      <Mainlinkto cates={cates} num={4} value={'이벤트'} color={'b'}/>
      <div className='iotcontains'>
        {eventlist && eventlist.slice(0, 2).map(value =>
          <div className='maineventwrap' key={value.id}>
            <div className='maineventimg'>
              <img src={value.thumb} />
            </div>
            <div>
              <p>{value.title}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Mainevent;
