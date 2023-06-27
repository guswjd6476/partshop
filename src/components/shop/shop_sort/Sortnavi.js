
import {  Link,useLocation} from 'react-router-dom';

function Sortnavi(props) {
  const location = useLocation()
  const pathKeys = location.pathname.split('/')[2]

  return (
    <div className='shop_sort'>
    <div className='sortTitle'>
      <span>CATEGORIES</span></div>
    <ul className='sort_navi'>
      {props.cate&&props.cate.filter(value=>value.category==props.pathnum).map((value,index)=>
      <li className={pathKeys == value.subcategory ? 
      'active snavili' : 'snavili'}  key={value.id}>
      <Link to={`/${props.pathnum}/${value.subcategory}`}>
        {value.subcategory}
      </Link>
      
      <div className={pathKeys == value.subcategory ? 
      'active triangle' : 'none'}></div>
      </li>
      )}
      
    </ul>
    </div>
  );
}

export default Sortnavi;
