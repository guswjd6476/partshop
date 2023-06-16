
import { AppstoreOutlined,  ShoppingCartOutlined,UserAddOutlined,ExclamationCircleFilled,MenuFoldOutlined, MenuUnfoldOutlined,LeftOutlined } from '@ant-design/icons';
import { Menu,Modal,Button  } from 'antd';
import {  Link,useLocation,} from 'react-router-dom';
import { useRef,useState,useEffect } from 'react';
import './mstyle.css'
import logow from './Image/logow.png'
import AllSearchComponent from './components/Allsearch/AllSearchComponent'
const { confirm } = Modal;


const MHeaer = ({isLoggedIn,admin,userInfo,setFilter,sb,setSb,cates,filter,back}) => {
  
  const [navi, setNavi] = useState(false)
  const addedKeys = [];
  const newItems = cates&&cates.map((item) => {
    const key = `/${item.category}`;
    const keys = item.category
    if (addedKeys.includes(key)) {
      // 중복된 key일 경우 무시
      return null;
    }
    addedKeys.push(key);

    
    return {
      label: <Link to={`/${item.category}`}>{item.category}</Link>,
      key,
      path: key,
      icon: <AppstoreOutlined />,

    };
  });
  // const navigate = useNavigate();
  const location = useLocation()
  const pathKeys = location.pathname.split('/').filter(Boolean)
  const pathnum1 = location.pathname.split('/')[1]
  const pathnum2= location.pathname.split('/')[2]
  const pathnum3= location.pathname.split('/')[3]
  const returns = pathnum3? `/${pathnum1}/${pathnum2}` : pathnum2? `/${pathnum1}`: '/'
  const showConfirm = () => {
    confirm({
      title: '로그아웃 하시겠습니까?',
      icon: <ExclamationCircleFilled />,
      onOk() {
          localStorage.removeItem("token")
          localStorage.removeItem("userInfo")
          localStorage.removeItem("recent")
          window.location.href = '/'
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  const el = useRef()
  useEffect(()=>{
    const handlemenu = (e) => {
        if(navi && el.current&&!el.current.contains(e.target)){
          setNavi(false)
        }
    };
    document.addEventListener('mousedown', handlemenu)
    return () => {
        document.removeEventListener('mousedown', handlemenu)
    }
},[navi])
  return (
    <div className='mobile_btn_wrap' ref={el} >
      {back ==true ? 
      <div className='backbtn'>
      <Link to={returns}> <LeftOutlined /> </Link>
      </div>
      :''
    }
       <Button className={back ? 'mobile_btn ml30' : 'mobile_btn'} onClick={()=>setNavi(!navi)}>{navi ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}</Button>
  
 {navi ? 
  <div className='mnavigation '>
    <div className='search_bar m'>
      <AllSearchComponent filter={filter} userId={admin&&admin.split(',')[0]} setSb={setSb} sb={sb} setFilter={setFilter}/>
    </div>
      <Menu  
      onClick={e=>setNavi(false)}
    selectedKeys={[...pathKeys, `/${pathKeys[0]}`]} mode="inline" items={newItems} />
 <ul className='header_top_box  m'>
    
      {!isLoggedIn ? 
    <li>
    <Link  to='/Login'>
    로그인
    </Link>
  </li>
  :''  
    }
        {!isLoggedIn ? 
      <li style={{marginLeft:'20px'}}>
        <Link to='/Signup'>
        회원가입
        </Link>
      </li>
      :
      ''
      }
     
      <li onClick={e=>setNavi(false)} style={{marginLeft:'20px'}}>
        <Link to='/center'>
        고객센터
        </Link>
      </li>
      <li style={{marginLeft:'20px'}}>
      <Link  to={!isLoggedIn ? '/Login':'/Mypage'} className='function_head_box login'>
            <div>마이페이지</div>
          </Link>
      </li>
      {isLoggedIn ? 
      <li onClick={showConfirm} style={{marginLeft:'20px'}}>
        <a>
        로그아웃
        </a>
      </li>
      :
      ''
      }
    </ul>
    
    {userInfo&&userInfo[1]== 1 ? 
      <div className='mobileadmin'>
        <Link to='/Admin'>
        관리자 입니다
        </Link>
      </div> 
      :'' 
    }
   
  </div>
:''}
      <Link  onClick={e=>setNavi(false)} to='/' className='logo'>
        <img src={logow} alt='logo'/>
      </Link>
      <div  onClick={e=>setNavi(false)} className='shopcart'>
          
          <Link to={'/Cart'} className='function_head_box cart'>
            <ShoppingCartOutlined />
          </Link>
      </div>
  </div>
  )
};
export default MHeaer;