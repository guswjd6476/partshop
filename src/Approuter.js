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
import AllSearchResult from './components/AllSearchResult';
import Writeproduct from'../src/components/shop/write/Writeproduct'
import { useState } from 'react';



const Approuter = ({isLoggedIn,setUserInfo,admin,setAdmin,cate})=> {
  const [filter, setFilter] = useState('');
  const [sb, setSb] = useState(false)
  const [show, setShow] =useState(true)
console.log(sb)
  if(isLoggedIn){
    return (
      <div className="contain">
          
        <div className= {show ?'header_top_bg':''}></div>
        <div className={show ? 'displaybox' : 'allbox'}>
          <BrowserRouter>
          {show ?<Header setSb={setSb} sb={sb} setFilter={setFilter} cate={cate} isLoggedIn={isLoggedIn} admin={admin} /> : ''}
            <Routes>
              
              <Route path="/" element={<Main/>} />
              <Route path="/Writeproduct" element={<Writeproduct/> }/>
              <Route path="/SearchResult" element={   <AllSearchResult filter={filter}  sb={sb} />}/>
              <Route path="/Mypage" element={<Mypage/>} />
              <Route path="/Cart" element={<Cart/>} />
              <Route path="/Signup" element={<Signup show={show} setShow={setShow}/>} />
              <Route path="/Login" element={<Login setUserInfo={setUserInfo} setShow={setShow} setAdmin={setAdmin}/>} />
                <Route path="/:cate" element={<Shop cate={cate} />} />
                <Route path="/:cate/:subcate" element={<Shopsub cate={cate} />} />
                <Route path="/:cate/:subcate/:id" element={<Productdetail cate={cate} />} />
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
              <Route path="/Login" element={<Login setUserInfo={setUserInfo}  setShow={setShow}  setAdmin={setAdmin}/>} />
              
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