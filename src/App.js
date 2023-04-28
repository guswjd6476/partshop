import  Approuter  from "./Approuter";
import './style.css'
import './reset.css'
import React, { useState,useEffect } from "react";
import axios from 'axios';



function App() {
  const [init, setInit] = useState(false)
const [userInfo, setUserInfo] = useState(null)
const [userId, setUserId] = useState(null)
const [token, setToken] = useState(null)
const [admin, setAdmin] = useState(false)
const [cate, setCate] = useState(null)
  const logintoken = () => {
    
    setToken(localStorage.getItem('token'))
    setAdmin(localStorage.getItem('userInfo'))
    setUserId(localStorage.getItem('userInfo'))
    setInit(true)
  }

  useEffect(()=>{
    logintoken()
    axios
      .get('/api/category')
      .then(function (response) {
        setCate(response.data)
        // setCate([...new Set(response.data.map((obj) => obj.category))])
      })
  },[])
  return (
    <>
    {init ? 
    <Approuter cate={cate} admin={admin} setAdmin={setAdmin} setUserInfo={setUserInfo} isLoggedIn={Boolean(token)}  />
    :''
    }
    </>
  );
}

export default App;
