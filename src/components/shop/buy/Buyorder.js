import { Checkbox } from "antd"
function Buyorder({userInfo}) {
 console.log(userInfo)
    return (
        <div  className='buywrap'>
            <p className='smallT'> 주문자 정보</p>
            <p>
            1. 해외상품, 정품 박스와 라벨 제거(손상, 분실)의 경우 반품, 교환, A/S가 불가능합니다. (반품, 환불 및 교환에 관한 안내 보기 클릭)</p>
            <p>2. 발송 예정일은 근무일 기준입니다. 공급사 품절, 단종, 가격 인상 등에 의해 변동될 수 있습니다.</p>
            <p>3. 제품 사용 전 제조사에서 제공하는 설명서 확인 및 샘플 테스트를 진행합니다.
                오배송, 제품 사양 변경 등에 의해 실제 상품과 다른 상품이 발송될 수 있습니다.</p>
  
      </div>
    )
  }
  
  export default Buyorder