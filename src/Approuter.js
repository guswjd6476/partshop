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
import Eventpg from './components/Event/Eventpg';
import { useEffect, useState } from 'react';
import {  PC, Tablet } from "./MediaQuery"
import MHeaer from './MHeaer';
import Project from './components/project/Project';
import Buyaddressplus from './components/shop/buy/Buyaddressplus';
import BuyaddAddress from './components/shop/buy/BuyaddAddress';

const Approuter = ({setToken,cates,setCates,isLoggedIn,userInfo,setUserInfo,cate,setCate})=> {
  
const [back, setBack] =useState(true)
  const [filter, setFilter] = useState('');
  const [sb, setSb] = useState(false)
  const [show, setShow] =useState(true)
  if(isLoggedIn){
    return (
      <div className="contain">
          <BrowserRouter >
          {show ?
          <>
          <PC>
          <Header filter={filter} setSb={setSb} sb={sb} cates={cates} setFilter={setFilter} cate={cate} isLoggedIn={isLoggedIn} userInfo={userInfo} />
          </PC>
          <Tablet>
              <MHeaer back={back} filter={filter} setSb={setSb} sb={sb} cates={cates} setFilter={setFilter} cate={cate} isLoggedIn={isLoggedIn} userInfo={userInfo} />
        </Tablet>
          </>
           : ''}
     
            <Routes>
              <Route path="/" element={<Main shows={true} cates={cates}  setBack={setBack}/>} />
              <Route path="/Admin" element={<Admin setBack={setBack} cates={cates} setCates={setCates} cate={cate} setCate={setCate} />} />
              {/* <Route path="/Writeproduct" element={<Writeproduct/> }/> */}
              <Route path="/SearchResult" element={   <AllSearchResult setBack={setBack}  userId={userInfo&&userInfo[0]} filter={filter}  sb={sb} />}/>
              <Route path="/Mypage" element={<Mypage  setBack={setBack} userId={userInfo&&userInfo[0]}/>} />
              <Route path="/Myinfo" element={<Myinfochage setBack={setBack} userId={userInfo&&userInfo[0]}/>} />
              <Route path="/Cart" element={<Cart setBack={setBack} userId={userInfo&&userInfo[0]} />} />
              <Route path="/:cate" element={<Shop setBack={setBack} cate={cate} userId={userInfo&&userInfo[0]} />} />
              <Route path="/:cate/:subcate" element={<Shop setBack={setBack} cate={cate} userId={userInfo&&userInfo[0]} />} />
              <Route path="/:cate/:subcate/:id" element={<Productdetail setBack={setBack} cate={cate} userId={userInfo&&userInfo[0]} />} />
              <Route path="/IOT" element={<Iot setBack={setBack} cate={cate}/>} />
              <Route path="/IOT/:id" element={<Iot setBack={setBack} cate={cate}/>} />
              <Route path="/Sub/:id" element={<Sub setBack={setBack}/>} />
              <Route path="/Sub" element={<Sub setBack={setBack}/>} />
              
              <Route path="/buy" element={<Buy setBack={setBack} userInfo={userInfo} userId={userInfo&&userInfo[0]}/> } />
              <Route path="/center" element={<Center setBack={setBack}/>} />
              <Route path="/center/:id" element={<Center setBack={setBack}/>} />
              <Route path="/Write/:id" element={<Writenotice setBack={setBack}/>} />
              <Route path="/Update/:id" element={<Updatecon setBack={setBack}/>} />
              <Route path="/center/:qna/:noticecon" element={<Itemcon setBack={setBack} isLoggedIn={isLoggedIn} userInfo={userInfo}/>} />
              <Route path="/event" element={<Event setBack={setBack} userInfo={userInfo}/>} />
              <Route path="/event/:id" element={<Eventpg setBack={setBack} userInfo={userInfo}/>} />
              <Route path="/PROJECT" element={<Project setBack={setBack} userInfo={userInfo}/>} />
              <Route path="/PROJECT/:id" element={<Eventpg setBack={setBack} userInfo={userInfo}/>} />
              <Route path="/address" element={<Buyaddressplus setShow={setShow}  userId={userInfo&&userInfo[0]} userInfo={userInfo}/>} />
              <Route path="/addaddress" element={<BuyaddAddress setShow={setShow}  userId={userInfo&&userInfo[0]} userInfo={userInfo}/>} />
           </Routes>
           {show ?<Footer/> : ''}
        </BrowserRouter>
        </div>
        )
  }else{
    return (
      <div className="contain">

          <BrowserRouter>
          {show ?
          <>
          <PC>
          <Header filter={filter} setSb={setSb} sb={sb} cates={cates} setFilter={setFilter} cate={cate} isLoggedIn={isLoggedIn} userInfo={userInfo} />
          </PC>
          <Tablet>
            <MHeaer back={back} filter={filter} setSb={setSb} sb={sb} cates={cates} setFilter={setFilter} cate={cate} isLoggedIn={isLoggedIn} userInfo={userInfo} />
          </Tablet>
          </>
           : ''}
            <Routes>
              <Route path="/" element={<Main  setBack={setBack}/>} />
              <Route path="/:cate" element={<Shop setBack={setBack} cate={cate} userId={userInfo&&userInfo[0]} />} />
              <Route path="/buy" element={<Buy setBack={setBack} userInfo={userInfo} userId={userInfo&&userInfo[0]}/> } />
              <Route path="/:cate/:subcate" element={<Shop setBack={setBack} cate={cate} userId={userInfo&&userInfo[0]} />} />
              <Route path="/:cate/:subcate/:id" element={<Productdetail setBack={setBack} cate={cate}  userId={userInfo&&userInfo[0]} />} />
              <Route path="/Signup" element={<Signup setBack={setBack} show={show} setShow={setShow}/>} />
              <Route path="/Login" element={<Login setBack={setBack} setUserInfo={setUserInfo} setToken={setToken}   setShow={setShow} />} />
              <Route path="/Sub/:id" element={<Sub setBack={setBack}/>} />
              <Route path="/Sub" element={<Sub setBack={setBack}/>} />
              <Route path="/event" element={<Event setBack={setBack} userInfo={userInfo}/>} />
              <Route path="/event/:id" element={<Eventpg setBack={setBack} userInfo={userInfo}/>} />
              <Route path="/center" element={<Center setBack={setBack}/>} />
              <Route path="/PROJECT" element={<Project setBack={setBack} userInfo={userInfo}/>} />
              <Route path="/center/:id" element={<Center setBack={setBack}/>} />
              <Route path="/PROJECT/:id" element={<Project setBack={setBack} userInfo={userInfo}/>} />
              <Route path="/center/:qna/:noticecon" element={<Itemcon setBack={setBack} isLoggedIn={isLoggedIn} userInfo={userInfo}/>} />
           </Routes>
           {show ?<Footer/> : ''}
        </BrowserRouter>
          </div>
          
   
        )
  }
   
}


export default Approuter;