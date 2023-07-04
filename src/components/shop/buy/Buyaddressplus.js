import React, { useEffect, useState } from 'react';
import { Input,Button } from 'antd';
import { getAddress,selectAddress } from '../../../service/user';
import { useLocation } from 'react-router-dom';

function Buyaddressplus({userInfo,userId,setShow,update}) {

    const [addlist, setaddlist] = useState()
    useEffect(()=>{
        setShow(false)
        getAddress(userId).then(function(response){
            setaddlist(response.data)
        })
      },[])
     const onClick= (value)=>{
        selectAddress(value)
        window.opener.parent.location.reload()
        window.close()
     }
    return (
        <div  className='buywrap'>
            <div className='smallT flex j'> <div>배송지 정보</div> <Button className='btnstyle' onClick={() => window.open('/addaddress', '_blank' ,"menubar=1,resizable=1,width=400 ,height=500")}>배송지추가</Button></div>
            {addlist&&addlist.map(value=>
            <div className='addressbox'> 
                <div className="flex smallWrap">
                    <div className="wrapT">이름</div>
                    <div className="wrapD">{value.uName}</div>
                </div>
                <div className="flex smallWrap">
                    <div className="wrapT">연락처</div>
                    <div className="wrapD">{value.uPhone}</div>
                </div>
                <div className="flex smallWrap">
                    <div className="wrapT">주소</div>
                    <div className="wrapD">({value.addressnum}) {value.address} {value.subaddress}</div>
                </div>
                <Button className='btnstyle' onClick={()=>onClick(value.id)}>선택</Button>
             </div>
             )}
  
      </div>
    )
  }
  
  export default Buyaddressplus