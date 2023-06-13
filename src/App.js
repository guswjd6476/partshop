import  Approuter  from "./Approuter";
import './style.css'
import './reset.css'
import React, { useState,useEffect } from "react";
import { getCate, getMainCate} from "./service/function";


function App() {
const [init, setInit] = useState(false)
const [cates, setCates] = useState([]);
const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')))
const [token, setToken] = useState(localStorage.getItem('token'));
const [cate, setCate] = useState([])
  useEffect(()=>{
    getCate()
    .then(function (response) {
    setCate(response.data) 
   
      })
      getMainCate().then(function (response) {
        setCates(response.data);
      });
      setInit(true)
  },[])
 
  return (
    <>
    {init ? 
    <Approuter setCate={setCate} cates={cates} setCates={setCates} setToken={setToken} cate={cate} userInfo={userInfo} setUserInfo={setUserInfo} isLoggedIn={Boolean(token)}  />
    :''
    }
    </>
  );
}

export default App;
