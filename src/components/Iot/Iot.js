import { Crumb1, Crumb2 } from '../components_btn/Breadcrums';
import {  useLocation} from 'react-router-dom';
import Sortnavi from '../shop/shop_sort/Sortnavi';
import Pagetitle from '../components_btn/Pagetitle';
import Iotdetail from './Iotdetail';
import { useEffect } from 'react';
function Iot({cate,setBack}) {
  
  const location = useLocation()
  const pathnum1 = location.pathname.split('/')[1]
  const pathnum2= location.pathname.split('/')[2]
  useEffect(()=>{setBack(true)},[])
    return (
      <div className="main shop displaybox">
       
        <div className='shop_div'>
          <div className='shop_sort'>
            <Sortnavi cate={cate} pathnum={pathnum1}/>
          </div>
         
          <div className='shop_content'>
          {pathnum2 ?
         <Crumb2 num1={pathnum1} num2={pathnum2}/>
        :
        <Crumb1 num={pathnum1} /> }
            <Pagetitle value={'IOT서비스'} svalue={'최신 펌웨어, 도면, SDK등의 자료들을 다운받으세요'}/>
            
            <Iotdetail/>
          </div>
          
        </div>
      </div>
    );
  }
  
  export default Iot;
  