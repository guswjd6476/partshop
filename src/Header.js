
import { AppstoreOutlined,  ShoppingCartOutlined,UserAddOutlined,ExclamationCircleFilled } from '@ant-design/icons';
import { Menu,Modal  } from 'antd';
import {  Link,useLocation,} from 'react-router-dom';
import logo from './Image/logo.png'
import AllSearchComponent from './components/Allsearch/AllSearchComponent'
const { confirm } = Modal;


const Header = ({isLoggedIn,admin,userInfo,setFilter,sb,setSb,cates,filter}) => {
  
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
  return (
<div className='header '>
  <div className='header_top_bg'>
    <ul className='header_top_box displaybox'>
      {userInfo&&userInfo[1]== 1 ? 
      <li>
        <a href='/Admin'>
        관리자 입니다
        </a>
      </li> 
      :'' 
    }
      {!isLoggedIn ? 
    <li>
    <a href='/Login'>
    로그인
    </a>
  </li>
  :''  
    }
        {!isLoggedIn ? 
      <li style={{marginLeft:'20px'}}>
        <a href='/Signup'>
        회원가입
        </a>
      </li>
      :
      ''
      }
      {isLoggedIn ? 
      <li onClick={showConfirm} style={{marginLeft:'20px'}}>
        <a>
        로그아웃
        </a>
      </li>
      :
      ''
      }
      <li style={{marginLeft:'20px'}}>
        <a href='/center'>
        고객센터
        </a>
      </li>
    </ul>
  </div>
  
 <div className='header_box displaybox'>
    <a href='/' className='logo'>
        <img src={logo} alt='logo'/>
    </a>
    <div className='search_bar'>
      <AllSearchComponent filter={filter} userId={admin&&admin.split(',')[0]} setSb={setSb} sb={sb} setFilter={setFilter}/>
    </div>
    <ul className='function_head'>
        <Link  to={!isLoggedIn ? '/Login':'/Mypage'} className='function_head_box login'>
          <UserAddOutlined />
          <div>마이페이지</div>
        </Link>
        <Link to={'/Cart'} className='function_head_box cart'>
          <ShoppingCartOutlined />
          <div>장바구니</div>
        </Link>
    </ul>
 </div>
 <div className='header_bottom_bg'>

  <Menu className='navigation displaybox' 
selectedKeys={[...pathKeys, `/${pathKeys[0]}`]} mode="horizontal" items={newItems} />

  </div>
  </div>
  )
};
export default Header;