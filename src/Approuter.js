import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Main from './components/Main';
import Productdetail from './components/shop/Productdetail';
import Shopsub from './components/shop/Shopsub';
import Shop from './components/shop/Shop'
import Iot from './components/Iot';
import Third from'./components/Third';
import Signup from './components/user/Signup';
import Login from './components/user/Login';
import Mypage from './components/user/Mypage';
import Cart from './components/user/Cart';
import AllSearchResult from './components/Allsearch/AllSearchResult'
import Admin from './components/admin/Admin';
import Myinfochage from './components/user/Myinfochage';

import { useState } from 'react';



const Approuter = ({setToken, isLoggedIn,setUserInfo,admin,setAdmin,cate,userId})=> {

  const [filter, setFilter] = useState('');
  const [sb, setSb] = useState(false)
  const [show, setShow] =useState(true)
  if(isLoggedIn){
    return (
      <div className="contain">
          
        <div className= {show ?'header_top_bg':''}></div>
        <div className={show ? 'displaybox' : 'allbox'}>
          <BrowserRouter>
          {show ?<Header setSb={setSb} sb={sb} setFilter={setFilter} cate={cate} isLoggedIn={isLoggedIn} admin={admin} /> : ''}
            <Routes>
              
              <Route path="/" element={<Main/>} />
              <Route path="/Admin" element={<Admin cate={cate}/>} />
              {/* <Route path="/Writeproduct" element={<Writeproduct/> }/> */}
              <Route path="/SearchResult" element={   <AllSearchResult userId={userId} filter={filter}  sb={sb} />}/>
              <Route path="/Mypage" element={<Mypage userId={userId}/>} />
              <Route path="/Myinfo" element={<Myinfochage userId={userId}/>} />
              <Route path="/Cart" element={<Cart userId={userId} />} />
              <Route path="/Signup" element={<Signup show={show} setShow={setShow}/>} />
              <Route path="/Login" element={<Login setToken={setToken} setUserInfo={setUserInfo} setShow={setShow} setAdmin={setAdmin}/>} />
                <Route path="/:cate" element={<Shop cate={cate} userId={userId} />} />
                <Route path="/:cate/:subcate" element={<Shopsub cate={cate} userId={userId} />} />
                <Route path="/:cate/:subcate/:id" element={<Productdetail cate={cate} userId={userId} />} />
                <Route path="/Iot" element={<Iot/>} />
                <Route path="/Third" element={<Third/>} />
           </Routes>
           {show ?<Footer/> : ''}
        </BrowserRouter>
          </div>
          
        <div className= {show ?'footer_bg':''}></div>
        </div>
        )
  }else{
    return (
      <div className="contain">
          
        <div className= {show ?'header_top_bg':''}></div>
        <div className={show ? 'displaybox' : 'allbox'}>
          <BrowserRouter>
          {show ?<Header cate={cate}/> : ''}
            <Routes>
              
              <Route path="/" element={<Main/>} />
              <Route path="/Signup" element={<Signup show={show} setShow={setShow}/>} />
              <Route path="/Login" element={<Login setToken={setToken} setUserInfo={setUserInfo}  setShow={setShow}  setAdmin={setAdmin}/>} />
              
           </Routes>
           {show ?<Footer/> : ''}
        </BrowserRouter>
          </div>
          
        <div className= {show ?'footer_bg':''}></div>
        </div>
        )
  }
   
}


export default Approuter;