import Leftnavi from "../Leftnavi";
import {  useLocation} from 'react-router-dom';
import {Crumb1, Crumb2 } from "../../components_btn/Breadcrums";
import Intro from "./Intro";
import Place from './Place'
import Agreement from "./Agreement";
import Privacy from "./Privacy";
function Sub() {
  
  const location = useLocation()
  const pathnum1 = location.pathname.split('/')[1]
  const pathnum2 = location.pathname.split('/')[2]
    return (
      <div className="main displaybox" >
        {pathnum2 ?
         <Crumb2 num1={pathnum1} num2={pathnum2}/>
        :
        <Crumb1 num={pathnum1} /> }
        <div className='shop_div'>
          <div className='shop_sort'>
            <Leftnavi num1={pathnum1} num2={pathnum2}/>
          </div>
          <div className='shop_content'>
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
  