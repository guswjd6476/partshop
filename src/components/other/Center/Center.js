import Leftnavi from '../Leftnavi'
import { Crumb1,Crumb2 } from '../../components_btn/Breadcrums';
import {  useLocation} from 'react-router-dom';
import Notice from "./Notice";
import QNA from "./QNA";
import FAQ from "./FAQ";
import Pagetitle from '../../components_btn/Pagetitle';
import { useEffect } from 'react';
function Center({setBack}) {
  
  const location = useLocation()
  const pathnum1 = location.pathname.split('/')[1]
  const pathnum2 = location.pathname.split('/')[2]
  const userArray = JSON.parse(localStorage.getItem('userInfo'))
  const user= userArray&&userArray[0]
  const userGrade= userArray&&userArray[1]
  useEffect(()=>{setBack(true)},[])
    return (
      <div className="main displaybox">
          {pathnum2 ?
         <Crumb2 num1={pathnum1} num2={pathnum2}/>
        :
        <Crumb1 num={pathnum1} /> }
        <div className='shop_div'>
          <div className='shop_sort'>
            <Leftnavi num1={pathnum1} num2={pathnum2}/>
          </div>
          <div className='shop_content'>
            {pathnum2 === 'notice' ?
          <Notice  uGrade={userGrade} /> :
          pathnum2 === 'FAQ' ?
            <FAQ  uGrade={userGrade}/>
          :   pathnum2 === 'qna' ?
            <QNA user={user} uGrade={userGrade} />
          :
          <div>
            <Pagetitle value='고객센터' svalue={'서비스 이용관련 문의사항을 해결해드립니다'}/>
          </div>
        }
          </div>
          
        </div>
      </div>
    );
  }
  
  export default Center;
  