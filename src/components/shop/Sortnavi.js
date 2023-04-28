
import {  Link,useLocation} from 'react-router-dom';

function Sortnavi(props) {
  const location = useLocation()
  const pathKeys = location.pathname.split('/')[2]

  return (
    <ul className='sort_navi'>
            {props.cate&&props.cate.filter(value=>value.category==props.pathnum).map((value,index)=>
            <li className={pathKeys == value.subcategory ? 
            'active' : ''}  key={value.id}>
            <Link to={`/${props.pathnum}/${value.subcategory}`}
            >
              {value.subcategory}
              
            </Link>
            </li>
            )}
          </ul>
  );
}

export default Sortnavi;
