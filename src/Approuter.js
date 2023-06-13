import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Signup from './components/user/Signup';
import Login from './components/user/Login';
import Mypage from './components/user/Mypage';
import Cart from './components/user/Cart';
import Myinfochage from './components/user/Myinfochage';
import Main from './components/Main/Main'
import Admin from './components/admin/Admin';
import Productdetail from './components/shop/productpg/Productdetail'
import Shop from './components/shop/productpg/Shop'
import Buy from './components/shop/buy/Buy';
import Iot from './components/Iot/Iot';
import AllSearchResult from './components/Allsearch/AllSearchResult'
import Sub from './components/other/Sub/Sub'
import Writenotice from './components/other/Center/Write/Writenotice'
import Center from './components/other/Center/Center';
import Itemcon  from './components/other/Center/Itemcon';
import Updatecon from './components/other/Center/Write/Updatecon';
import Event from './components/Event/Event';
import { useState } from 'react';

const Approuter = ({setToken,cates,setCates,isLoggedIn,userInfo,setUserInfo,cate,setCate})=> {
  const [filter, setFilter] = useState('');
  const [sb, setSb] = useState(false)
  const [show, setShow] =useState(true)
  if(isLoggedIn){
    return (
      <div className="contain">
          <BrowserRouter >
          {show ?<Header filter={filter} setSb={setSb} sb={sb} cates={cates} setFilter={setFilter} cate={cate} isLoggedIn={isLoggedIn} userInfo={userInfo} /> : ''}
            <Routes>
              <Route path="/" element={<Main shows={true} cates={cates}/>} />
              <Route path="/Admin" element={<Admin cates={cates} setCates={setCates} cate={cate} setCate={setCate} />} />
              {/* <Route path="/Writeproduct" element={<Writeproduct/> }/> */}
              <Route path="/SearchResult" element={   <AllSearchResult userId={userInfo&&userInfo[0]} filter={filter}  sb={sb} />}/>
              <Route path="/Mypage" element={<Mypage userId={userInfo&&userInfo[0]}/>} />
              <Route path="/Myinfo" element={<Myinfochage userId={userInfo&&userInfo[0]}/>} />
              <Route path="/Cart" element={<Cart userId={userInfo&&userInfo[0]} />} />
              <Route path="/:cate" element={<Shop cate={cate} userId={userInfo&&userInfo[0]} />} />
              <Route path="/:cate/:subcate" element={<Shop cate={cate} userId={userInfo&&userInfo[0]} />} />
              <Route path="/:cate/:subcate/:id" element={<Productdetail cate={cate} userId={userInfo&&userInfo[0]} />} />
              <Route path="/IOT" element={<Iot cate={cate}/>} />
              <Route path="/IOT/:id" element={<Iot cate={cate}/>} />
              <Route path="/Sub/:id" element={<Sub/>} />
              <Route path="/Sub" element={<Sub/>} />
              
              <Route path="/buy" element={<Buy/>} />
              <Route path="/center" element={<Center/>} />
              <Route path="/center/:id" element={<Center/>} />
              <Route path="/Write/:id" element={<Writenotice/>} />
              <Route path="/Update/:id" element={<Updatecon/>} />
              <Route path="/center/:qna/:noticecon" element={<Itemcon userInfo={userInfo}/>} />
              <Route path="/event" element={<Event userInfo={userInfo}/>} />
           </Routes>
           {show ?<Footer/> : ''}
        </BrowserRouter>
        </div>
        )
  }else{
    return (
      <div className="contain">

          <BrowserRouter>
          {show ?<Header cate={cate} cates={cates}/> : ''}
            <Routes>
              <Route path="/" element={<Main/>} />
              <Route path="/:cate" element={<Shop cate={cate} userId={userInfo&&userInfo[0]} />} />
              <Route path="/buy" element={<Buy/>} />
              <Route path="/:cate/:subcate" element={<Shop cate={cate} userId={userInfo&&userInfo[0]} />} />
              <Route path="/:cate/:subcate/:id" element={<Productdetail cate={cate} userId={userInfo&&userInfo[0]} />} />
              <Route path="/Signup" element={<Signup show={show} setShow={setShow}/>} />
              <Route path="/Login" element={<Login setUserInfo={setUserInfo} setToken={setToken}   setShow={setShow} />} />
              <Route path="/Sub/:id" element={<Sub/>} />
              <Route path="/Sub" element={<Sub/>} />
              <Route path="/event" element={<Event userInfo={userInfo}/>} />
     
              <Route path="/center" element={<Center/>} />
           </Routes>
           {show ?<Footer/> : ''}
        </BrowserRouter>
          </div>
          
   
        )
  }
   
}


export default Approuter;