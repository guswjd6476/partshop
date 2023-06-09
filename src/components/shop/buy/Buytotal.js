
function Buytotal({total}) {

  return (
        <>
            <p className='smallT'>결제 예정금액</p>
            <div className='buybtnwrapbox'>
              <div className='divbox'>
                <div className='buytitle'>
                  총 상품가격
                </div>
                <div>
                    {total}원 
                </div>
              </div>
              <div className='divbox'>
                <div className='buytitle'>
                  할인쿠폰
                </div>
                <div>
                    0원 
                </div>
              </div>
              <div className='divbox'>
                <div className='buytitle'>
                  마일리지
                </div>
                <div>
                    0원 
                </div>
              </div>
              <div className='divbox'>
                <div className='buytitle'>
                  배송비
                </div>
                <div>
                    0원 
                </div>
              </div>
              <div className='divbox'>
                <div className='buytitle'>
                  총 결제가격
                </div>
                <div className="f22">
                    {total}원 
                </div>
              </div>
            </div>
        </>
  )
}

export default Buytotal