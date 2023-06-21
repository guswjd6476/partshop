
import { AppstoreOutlined, UserOutlined, ShoppingCartOutlined,SearchOutlined,ExclamationCircleFilled,HeartOutlined } from '@ant-design/icons';
import { Menu,Modal ,Dropdown,Popover } from 'antd';
import {  Link,useLocation,} from 'react-router-dom';
import logo from './Image/logo.png'
import AllSearchComponent from './components/Allsearch/AllSearchComponent'
import { useState,useEffect } from 'react';
const { confirm } = Modal;


const Header = ({isLoggedIn,admin,userInfo,setFilter,sb,setSb,cates,filter}) => {
  
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [searchon, setSearchon] = useState(false)
  useEffect(() => {
    let prevScrollY = 0;
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY !== prevScrollY) {
        if (currentScrollY > 80) {
          setIsHeaderFixed(true);
        } else {
          setIsHeaderFixed(false);
        }
  
        prevScrollY = currentScrollY;
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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
  const items = [
    {
      label: <Link  to={!isLoggedIn ? '/Login':'/Mypage'} className='function_head_box login'>
     마이페이지
    </Link>,
      key: '0',
    },
    {
      label:  <div style={{marginLeft:'20px'}}>
      <Link to='/center'>
      고객센터
      </Link>
    </div>,
      key: '1',
    },
    {
      label: !isLoggedIn ? <div> 
     <Link to='/Login'>
    로그인
    </Link>
    </div> : <div onClick={showConfirm} style={{marginLeft:'20px'}}> 
      <a>
      로그아웃
      </a>
    </div> ,
      key: '3',
    },
    userInfo&&userInfo[1]== 1 ? {
      label: <div>
       <Link to='/Admin'>
        관리자 입니다
        </Link>
    </div>,
      key: '4',
    }:''
  ];
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
  
<div className={isHeaderFixed ?'header fix':'header ' }>
 
 {/* <div className='header_bottom_bg'>
 </div> */}
  <div className='header_wrap displaybox'>
 <Link to='/' className='logo'>
        <img src={logo} alt='logo'/>
    </Link>
  <Menu className='navigation ' 
selectedKeys={[...pathKeys, `/${pathKeys[0]}`]} mode="horizontal" items={newItems} />
 <ul className='function_head'>
    <div className='function_head_box login'>
      
      <Popover
      className='searchpop'
      content={
      <div className='search_bar'>
        <div className='searchbar_title'>검색어를 입력해주세요</div>
        <AllSearchComponent onClick={hide} filter={filter} userId={admin&&admin.split(',')[0]} setSb={setSb} sb={sb} setFilter={setFilter}/>
      </div>
    }
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
     <div onClick={e=>setSearchon(!searchon)} className='search_btn'>
        <SearchOutlined />
      </div>
    </Popover>
    </div>
        <Dropdown
        menu={{
          items,
        }}
        trigger={['click']}
      >
        <UserOutlined />
      </Dropdown>
      
        <Link  to={!isLoggedIn ? '/Login':'/Mypage'} className='function_head_box login'>
        <HeartOutlined />
        </Link>
        <Link to={'/Cart'} className='function_head_box cart'>
          <ShoppingCartOutlined />
        </Link>
    </ul>
  </div>
 
  </div>
  )
};
export default Header;