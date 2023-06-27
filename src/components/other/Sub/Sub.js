import Leftnavi from "../Leftnavi";
import {  useLocation} from 'react-router-dom';
import {Crumb1, Crumb2 } from "../../components_btn/Breadcrums";
import Intro from "./Intro";
import Place from './Place'
import Agreement from "./Agreement";
import Privacy from "./Privacy";
import { useEffect } from "react";
function Sub({setBack}) {
  const location = useLocation()
  const pathnum1 = location.pathname.split('/')[1]
  const pathnum2 = location.pathname.split('/')[2]
  
  useEffect(()=>{setBack(true)},[])
    return (
      <div className="main shop displaybox" >
       
        <div className='shop_div'>
          <div className='shop_sort'>
            <Leftnavi num1={pathnum1} num2={pathnum2}/>
          </div>
          <div className='shop_content'>
          {pathnum2 ?
         <Crumb2 num1={pathnum1} num2={pathnum2}/>
        :
        <Crumb1 num={pathnum1} /> }
            {
              pathnum2 === 'Intro' ? <Intro/> 
              :  pathnum2 === 'place' ? <Place/> 
              :  pathnum2 === 'agreement' ? <Agreement/> 
              :  <Privacy/>

            }
          </div>
          
        </div>
      </div>
    );
  }
  
  export default Sub;
  