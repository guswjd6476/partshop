import  Approuter  from "./Approuter";
import './style.css'
import './reset.css'
import React, { useState,useEffect } from "react";
import axios from 'axios';



function App() {
  const [init, setInit] = useState(false)
const [userInfo, setUserInfo] = useState(null)
const [userId, setUserId] = useState(localStorage.getItem('userInfo'));
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [admin, setAdmin] = useState(localStorage.getItem('userInfo'));
const [cate, setCate] = useState([])

  useEffect(()=>{
    // logintoken()
    axios
      .get('/api/category')
      .then(function (response) {
        setCate(response.data)
       
    setInit(true)
      })
      
  },[])
  return (
    <>
    {init ? 
    <Approuter userId={userId&&userId.split(',')[0]} setToken={setToken} cate={cate} admin={admin} setAdmin={setAdmin} setUserInfo={setUserInfo} isLoggedIn={Boolean(token)}  />
    :''
    }
    </>
  );
}

export default App;
