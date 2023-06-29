import React, { useEffect, useState } from 'react';
import { Input,Button,Radio  } from 'antd';
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import { addAddress } from '../../../service/user';

function BuyaddAddress({update,userId,setShow,setUpdate}) {
    useEffect(()=>{
        setShow(false)
 
      },[])
    const [enroll_company, setEnroll_company] = useState({
        uName:'',
        address:'',
        addtype:'1',
        subaddress:'',
        zonecode:'',
        first:'',
      midium:'',
      last:'',
    });
    const handleInput = (e) => {
        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,
        })
    }
    const [isOpen, setIsOpen] = useState(false);
  
    const handleComplete = (data) => {
      let fullAddress = data.address;
      let zonecode = data.zonecode;
      setEnroll_company({
        ...enroll_company,
        address:fullAddress,
        zonecode:zonecode
    })
      setIsOpen((prev) => !prev);
    };
  
    function onToggleZipcode() {
      setIsOpen((prev) => !prev);
    }
    const onsub = ()=>{
        addAddress(userId,enroll_company.address,enroll_company.addtype,enroll_company.zonecode,enroll_company.subaddress,enroll_company.uName,(enroll_company.first + '-' + enroll_company.midium +'-' +enroll_company.last))
        alert('추가되었습니다')
        window.close()
        window.opener.parent.location.reload()
        window.opener.document.reload()
    }
    return (
        <div  className='buywrap'>
            <div className='smallT flex j'> 배송지추가</div>
            <Radio.Group name="addtype" onChange={handleInput} value={enroll_company.addtype}>
            <Radio value={'1'}>집</Radio>
            <Radio value={'2'}>회사</Radio>
            <Radio value={'3'}>기타</Radio>
            </Radio.Group>
            <div className='addresswrap'>
              <Input name="uName" onChange={handleInput} placeholder='받는분'/>
            </div>
            <div className='flex addresswrap'>
              <Input className="user_enroll_text" placeholder="우편번호"  type="text" required={true} name="zonecode" onChange={handleInput} value={enroll_company.zonecode}/>
              <Button className='btnstyle npd' onClick={onToggleZipcode}>우편번호 찾기</Button>
            </div>
            <div  className='flex addresswrap long j'>
              <Input className="user_enroll_text" placeholder="주소"  type="text" required={true} name="address" onChange={handleInput} value={enroll_company.address}/>
              <Input name="subaddress" placeholder='상세 주소를 입력 해주세요' onChange={handleInput} />
            </div>
            <div  className='flex addresswrap phone'>
              <Input name="first" onChange={handleInput} placeholder='휴대폰'/>-<Input name="midium" onChange={handleInput} />-<Input name="last" onChange={handleInput} />
            </div>
            <Button onClick={onsub}>확인</Button>

            {isOpen && (
        <Modal open={isOpen}  onCancel={onToggleZipcode}> 
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
  
      </div>
    )
  }
  
  export default BuyaddAddress