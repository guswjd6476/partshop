
function Buyorder({user,address}) {
    return (
        <div  className='buywrap'>
            {
                user ? 
                <>
            <p className='smallT'> 주문자 정보</p>
            <div className="flex smallWrap">
                <div className="wrapT">이름</div>
                <div className="wrapD">{user.uName}</div>
            </div>
            <div className="flex smallWrap">
                <div className="wrapT">연락처</div>
                <div className="wrapD">{user.uPhone}</div>
            </div>
            <div className="flex smallWrap">
                <div className="wrapT">이메일</div>
                <div className="wrapD">{user.email}</div>
            </div>
            <p>- 주문자 정보로 주문관련 정보가 문자와 이메일로 발송됩니다.</p>
<p>
- 정확한 휴대폰번호와 이메일주소를 확인하세요.</p>
            </>
            :''
        }
  
      </div>
    )
  }
  
  export default Buyorder