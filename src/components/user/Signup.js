import { useEffect,useState } from "react";
import logo from '../../Image/logo.png'
import {Button, Form,Input,Select,Checkbox} from 'antd'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { LockOutlined,  PhoneOutlined, ContactsOutlined,UserOutlined} from '@ant-design/icons';

function Signup({show, setShow}) {

    const [number, setNumber] = useState("randomNumber")
    //const [Numbercertification, setCertification] = useState(false)
    const [emailChange , setEmailChange] = useState('')
    const [userIdChange , setUserIdChange] = useState('')
    const navigate = useNavigate();
    const {Option} = Select;
useEffect(()=>{
    setShow(false)
},[])
const useridCheck = (values) =>{
    axios
    .get('/api/useridcheck', {
        params: {
            userId: values.userId
        }
    })
    .then(function (response) {
        if(response.data === true){
            alert('이미 등록된 아이디 입니다')                
        }else{
            alert('사용가능한 아이디 입니다.')
        }
    })
    .catch(function (error) {
        console.log(error)
    })
    .then(function () {
        // 항상 실행
    });
}
const certification = (values) => {
    axios
        .get('/api/mail', {
            params: {
                userId: values.email
            }
        })
        .then(function (response) {
      console.log(response.data)
            setNumber(response.data);
            //console.log(response.data);
            alert("인증번호가 발송 되었습니다.", "확인 버튼을 눌러 주세요", "success");
        })
        .catch(function (error) {
            console.log(error)
        })
        .then(function () {
            // 항상 실행
        });


};

const certificationFaild = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const useridCheckFaild = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const EMailConfirm = (values) => {
    if (number === values.EMailConfirm) {
        //setCertification(true);
        alert("이메일 인증이 되었습니다.", "확인 버튼을 눌러 주세요", "success");
    } else {
        alert("인증 번호를 확인해주세요!", "확인 버튼을 눌러 주세요", "error");
    }
};

const EMailConfirmFaild = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

// const registration = async (values) => {
//     if (Numbercertification === false) {
//         alert("이메일 인증을 진행 해주세요!", "확인 버튼을 눌러 주세요", "error");
//         return;
//     } else {
//         axios
//         .get('/api/join', {
//             params: {

//                 uPassword : values.uPassword,
//                 uPhone : values.uPhone,
//                 userId: userIdChange,
//                 email: emailChange,
//                 uName : values.uName,
//             }
//         })
//         .then(function (response) {
//             alert(response.data, "확인 버튼을 눌러 주세요", "success");
//             // authService.createUserWithEmailAndPassword(emailChange, values.uPassword);

//             // authService.signOut();
//             navigate("/");
//         })
//         .catch(function (error) {

//         })
//         .then(function () {
//             // authService.signOut();
//         });
//     }
// }
const registration = async (values) => {
    axios
    .get('/api/join', {
        params: {

            uPassword : values.uPassword,
            uPhone : values.uPhone,
            userId: userIdChange,
            // email: emailChange,
            // uName : values.uName,
        }
    })
    .then(function (response) {
        alert(response.data, "확인 버튼을 눌러 주세요", "success");
        // authService.createUserWithEmailAndPassword(emailChange, values.uPassword);

        // authService.signOut();
        navigate("/");
    })
    .catch(function (error) {

    })
    .then(function () {
        // authService.signOut();
    });
}

const registrationFaild = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const prefixSelector = (
    <Select
        defaultValue="010"
        style={{
            width: 80
        }}
        allowClear="allowClear">
        <Option value="010">010</Option>
        <Option value="011">011</Option>
        <Option value="070">070</Option>
    </Select>
);

return (
    <div className="join_contain">
        <a className='join_logo' href='/'>
            <img src={logo}/>
        </a>
        <div className='joinbox'>
                <Form
                 style={{display:'flex'}}
                 name="userIds"
                 initialValues={{
                     remember: true
                 }}           
                 onFinish={useridCheck}
                    onFinishFailed={useridCheckFaild}             
                 autoComplete="off">
                 <Form.Item
                        label="아이디"
                        name="userId"
                       
                        required="required"
                        tooltip="아이디를 입력해주세요"
                        rules={[
                          {
                                required: true,
                                message: '아이디를 입력해주세요.'
                            }
                        ]}>
                         <Input
                            prefix={<UserOutlined />}
                            value={userIdChange}
                            onChange={(e)=>{
                                setUserIdChange(e.target.value);
                            }}
                          
                            placeholder="아이디를 입력해주세요"/>
                   
                    </Form.Item>
                    <Button
                            type="primary"
                            htmlType="submit"
                           >
                            중복확인
                        </Button>
                </Form>

                {/* <Form
                    style={{display:'flex'}}
                    name="basic"
                    initialValues={{
                        remember: true
                    }}                        
                    onFinish={certification}
                    onFinishFailed={certificationFaild}
                    autoComplete="off">
                    <Form.Item
                        label="E-Mail"
                        name="userId"
                       
                        required="required"
                        tooltip="이메일을 입력해주세요"
                        rules={[
                            {
                                type: 'email',
                                message: '이메일 형식에 맞게 작성해주세요.'
                            }, {
                                required: true,
                                message: '이메일을 입력해주세요.'
                            }
                        ]}>
                        <Input
                            prefix={<MailOutlined />}
                            value={emailChange}
                            onChange={(e)=>{
                                setEmailChange(e.target.value);
                            }}
                         
                            placeholder="이메일 인증을 해주세요."/>
                         
                    </Form.Item>
                    <Button
                            type="primary"
                            htmlType="submit"
                           >
                            인증 번호 전송
                        </Button>
                </Form>

                <Form
                    name="join2"
                    style={{display:'flex'}}
                    initialValues={{
                        remember: true
                    }}
                    onFinish={EMailConfirm}
                    onFinishFailed={EMailConfirmFaild}
                    autoComplete="off">
                    <Form.Item
                        label="인증번호"
                        name="EMailConfirm"
                        required="required"
                        tooltip="인증번호를 입력해주세요."
                        rules={[{
                                required: true,
                                message: '인증번호를 입력해주세요.'
                            }
                        ]}>
                        <Input
                            prefix={<MailOutlined />}
                       
                            placeholder="인증번호를 입력해주세요."/>
                        
                    </Form.Item>
                    <Button
                            type="primary"
                            htmlType="submit"
                           >
                            인증 번호 확인
                        </Button>
                </Form> */}

                <Form
                    name="join3"
                    initialValues={{
                        remember: true
                    }}
                   
                    onFinish={registration}
                    onFinishFailed={registrationFaild}
                    autoComplete="off">
                    <Form.Item
                        name="uPassword"
                        label="비밀번호"
                        tooltip="대문자 , 소문자 , 특수문자를 1개 씩 포함해주세요!"
                        rules={[{
                                required: true,
                                message: '비밀번호를 입력해주세요.'
                            },
                            {
                                pattern: new RegExp('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$'),
                                message: '영문자, 특수문자를 1개 씩 포함해주세요!'
                            }
                            
                        ]}
                        
                        hasFeedback="hasFeedback">
                        <Input.Password
                        autoComplete='off'
                        
                            type="password"
                            prefix={<LockOutlined />}
                            placeholder="비밀번호를 입력해주세요."/>
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        label="비밀번호 확인"
                        tooltip="비밀번호를 다시 한번 입력해주세요."
                        dependencies={['uPassword']}
                        hasFeedback="hasFeedback"
                        rules={[
                            {
                                required: true,
                                message: '비밀번호를 다시 한번 입력해주세요.'
                            },
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('uPassword') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error('위 비밀번호와 맞지 않습니다.')
                                    );
                                }
                            })
                        ]}>
                        <Input.Password
                       
                            type="password"
                            prefix={<LockOutlined />}
                            placeholder="비밀번호를 확인해주세요."/>
                    </Form.Item>
                    <Form.Item
                        label="이름"
                        name="uName"
                        required="required"
                        tooltip="성과 이름을 입력해주세요."
                        rules={[{
                                required: true,
                                message: '이름을 정확하게 입력해주세요.'
                            }
                        ]}>
                        <Input
                            prefix={<ContactsOutlined />}
                        
                            placeholder="이름을 입력해주세요!"/>
                    </Form.Item>
                    <Form.Item
                        name="uPhone"
                        label="전화번호"
                        required="required"
                        tooltip="-를 제외해서 전화번호를 입력해주세요."
                        rules={[
                            {
                                pattern: /^(?:\d*)$/,
                                message: "숫자만 입력해주세요."
                            }, {
                                required: true,
                                message: "전화 번호를 입력해주세요."
                            }, {
                                max: 8,
                                message: "전화번호가 너무 길게 입력 되었습니다."
                            }, {
                                min: 8,
                                message: "전화번호 8자리 입력해주세요."
                            }
                        ]}>
                        <Input
                            prefix={<PhoneOutlined/>}
                            addonBefore={prefixSelector}
                            placeholder="전화번호를 입력해주세요."
                           />
                    </Form.Item>
                    {/* <Form.Item>
                        <Address/>
                    </Form.Item> */}

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 10,
                            span: 14
                        }}
                        rules={[{
                                validator: (_, value) => value
                                    ? Promise.resolve()
                                    : Promise.reject(new Error('Should accept agreement'))
                            }
                        ]}>
                        <Checkbox style={{color:"#fff"}}>
                            개인 정보 수집에 동의
                            {/* <a style={{color:"#fff"}} href="">개인정보</a> */}
                        </Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 9,
                            span: 15
                        }}>
                        <Button
                            className='lastjoinbtn'
                            type="primary"
                            htmlType="submit"
                           >
                            아이디 생성
                        </Button>
                    </Form.Item>
                </Form>
        </div>
    </div>
);
}

export default Signup;
