
import { AppstoreOutlined,  ShoppingCartOutlined,UserAddOutlined,ExclamationCircleFilled } from '@ant-design/icons';
import { Menu,Modal  } from 'antd';
import {  Link,useLocation,} from 'react-router-dom';
import logo from './Image/logo.png'
import AllSearchComponent from './components/AllSearchComponent';

const { confirm } = Modal;


const Header = ({isLoggedIn,admin,cate,setFilter,sb,setSb}) => {
  
  const addedKeys = [];
  const newItems = cate&&cate.map((item) => {
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
    return item;
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
          window.location.href = '/'
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  return (
<div className='header'>
  <ul className='header_top_box'>
    {admin ? 
    <li>관리자 입니다</li> 
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
      <a>
      고객센터
      </a>
    </li>
  </ul>
 <div className='header_box'>
    <a href='/' className='logo'>
        <img src={logo} alt='logo'/>
    </a>
    <div className='search_bar'>
      {/* <Input/>
      <Button icon={<SearchOutlined />}/> */}
      <AllSearchComponent setSb={setSb} sb={sb} setFilter={setFilter}/>
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
 <div className='menuwrap'>
 {/* <Dropdown
 className='dropmenu'
    menu={{
      items
    }}
  >
      <Space>
        <MenuOutlined />
        PARTPRODUCT
      </Space>
   </Dropdown> */}
  <Menu className='navigation' 
selectedKeys={[...pathKeys, `/${pathKeys[0]}`]} mode="horizontal" items={newItems} />

  </div>
  </div>
  )
};
export default Header;