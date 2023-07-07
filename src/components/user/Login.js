import {   Button,  Form, Input,   } from 'antd';
import { UserOutlined , LockOutlined  } from '@ant-design/icons';
import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { logins } from '../../service/user';
import logo from '../../Image/logo.png'
import { setItemWithExpireTime,getItemWithExpireTime } from '../../service/function';

const Login = ({setShow,setToken,setUserInfo}) => {
    const [email, setEmail] = useState();

    const navigate = useNavigate();
    
    useEffect(()=>{
        setShow(false)
    },[])
    const writeChange = (e) => {
        setEmail(e.target.value);
    }

    const onFinish = (values) => {
                logins(values.userId,values.uPassword)
                .then(function (response) {
                    if(response.data){
                        setItemWithExpireTime("token", response.data[0], 3600000)
                        setToken(response.data[0].token);
                        let item = [response.data[0].userId,response.data[0].uGrade]
                        setItemWithExpireTime("userInfo",JSON.stringify(item), 3600000)
                        setUserInfo(JSON.parse(getItemWithExpireTime('userInfo')))
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
}

return (

    <div className='login_contain allbox'>  
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
       
            <Button className='loginbtn' type="primary"  htmlType="submit" >
                로그인
            </Button>
            <Button className='loginbtn' type="primary"  htmlType="submit" style={{marginBottom:'0px'}}>
                <a  href='/Signup'>
                회원가입
                </a>
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
