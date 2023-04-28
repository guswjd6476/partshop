import {   Button,  Form, Input,   } from 'antd';
import { UserOutlined , LockOutlined  } from '@ant-design/icons';
import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
// import { signInWithPopup, GoogleAuthProvider , } from "firebase/auth";
// import { authService } from "../../firebase_config";
import axios from 'axios';
import logo from '../../Image/logo.png'
// import { useCookies } from "react-cookie";

const Login = ({setShow,setUserInfo,setAdmin}) => {
    const [email, setEmail] = useState();

    const navigate = useNavigate();
    
    useEffect(()=>{
        setShow(false)
    },[])
    const writeChange = (e) => {
        setEmail(e.target.value);
    }

    const onFinish = (values) => {
        console.log(values)
               axios
                .get('/api/login', {
                    params: {
                        userId: values.userId ,
                        uPassword : values.uPassword
                    }
                })
                .then(function (response) {
                    if(response.data){
                        //authService.signInWithEmailAndPassword(values.userId, values.uPassword);
                      console.log(response.data)
                        localStorage.setItem("token", response.data[0].token);
                        localStorage.setItem("userInfo", [response.data[0].userId,response.data[0].uGrade]);
                        setUserInfo(response.data[0])
                        setAdmin(response.data[0].uGrade ==1 ? true : false)
                    alert("로그인 되었습니다", "확인 버튼을 눌러 주세요", "success");
                    setShow(true)
                    navigate('/')
                    }else{
                        alert("아이디/비밀번호를 확인해주세요", "확인 버튼을 눌러 주세요", "success");

                     
                    }

                })
                .catch(function (error) {
                    alert("에러", "확인 버튼을 눌러 주세요", "error");
                    console.log(error)
                })
    };
   
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

 

return (

    <div className='login_contain'>  
    <div className='login_logo'>
        <a href='/'>
        <img src={logo}/>
        </a>
    </div>
        <Form
            style={{marginTop : "40px"}}
            name="login"
      
            wrapperCol={{
                    span: 18
                }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
   >
        <Form.Item
            label="아이디"
            name="userId"
            required tooltip="아이디를 입력해주세요"
            rules={[
             {
                    required: true,
                    message: '아이디를 입력해주세요.'
                }
            ]}
            >
            
            <Input 
                style={{height:'40px'}}
                onChange={writeChange}
                prefix={<UserOutlined/>}   
                placeholder="아이디를 입력해주세요." />
        </Form.Item>
        <Form.Item
            className='passwordwrap'
            label="비밀번호"
            name="uPassword"
            required tooltip="비밀번호를 입력해주세요"
            rules={[{
                required: true,
                message: '비밀번호를 입력해주세요.'
            },
            {
                pattern: new RegExp('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$'),
                message: '영문자, 특수문자를 1개 씩 포함해주세요!'
            }
            ]}>
            <Input.Password autoComplete='on'  style={{height:'40px'}}  prefix={<LockOutlined />} placeholder="비밀번호를 입력해주세요."/>
        </Form.Item>
        {/* <div style={{display:'flex', justifyContent:'space-between',alignItems:'center', marginBottom:'20px'}}>
            <Checkbox 
                    type="checkbox"
                    id="saveId"
                    checked={isRemember}
                    style={{color: '#fff', padding : "5px"}}
                >
                    아이디저장
            </Checkbox> 
            <a href="/find">아이디 · 비밀번호 찾기</a>
        </div> */}
            <Button className='loginbtn' type="primary"  htmlType="submit" >
                로그인
            </Button>
            <Button className='loginbtn' href='/Signup' type="primary"  htmlType="submit" style={{marginBottom:'0px'}}>
                회원가입
            </Button>
        <Form.Item wrapperCol={{
                offset: 6,
                span: 15
            }}>
                
                
        </Form.Item>
     </Form>
    </div>

);

}
export default Login;
