import { Button } from "antd"
function Buyaddress({user,address,addresslist,setAddress,setNum}) {
  // const getaddress = address.find(value=>value.addtype === '1')
  

    return (
       <div className='buywrap'>
        {user ? 
        <>
          <div className='smallT flex j'>
            <div>배송지정보</div>
          <Button className="btnstyle" onClick={() => window.open('/address', '_blank' ,"menubar=1,resizable=1,width=500,height=700")}>배송지목록</Button>
          </div>

          <div className="flex smallWrap">
                <div className="wrapT">이름</div>
                <div className="wrapD">{address.uName}</div>
            </div>
            <div className="flex smallWrap">
                <div className="wrapT">연락처</div>
                <div className="wrapD">{address.uPhone}</div>
            </div>
            <div className="flex smallWrap">
                <div className="wrapT">주소</div>
                <div className="wrapD">({address.addressnum}) {address.address} {address.subaddress}</div>
            </div>
            </>
            :''
            }
       </div>
    )
  }
  
  export default Buyaddress