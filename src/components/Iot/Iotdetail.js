
import { useEffect, useState } from 'react';
import {  useLocation} from 'react-router-dom';
import { getproduct } from '../../service/product';
import Downloadfile from './Downloadfile';
function Iotdetail({cate}) {
  const [list, setList] = useState([])
  const location = useLocation()
  const pathnum1 = location.pathname.split('/')[1]
  const pathnum2= location.pathname.split('/')[2]
  useEffect(()=>{
    if(!pathnum2){
      getproduct(pathnum1,'none').then(function(response){
        setList(response.data)
    })
  }else{
    getproduct(pathnum2,'none').then(function(response){
      setList(response.data)
  })
  }
  },[pathnum2])
    return (
      <div className="iotcontain">
          {list&&list.map((value,index) => 
          <div  className='iotwrap' key={value.id}>
            <p className='iottitle'>{value.pName}</p>
            <p className='iotdetail'>{value.pDetail}</p>
            <div  className='iotbox'>
            <div className='iotthumb'>
              <img src={value.thumb}/>
            </div>
            <Downloadfile list={list[index]}/>

            </div>
        </div>)}
      </div>
    );
  }
  
  export default Iotdetail;
  