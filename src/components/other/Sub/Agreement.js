import Pagetitle from "../../components_btn/Pagetitle";

function Agreement() {
  
    return (
            <div>
                 <Pagetitle value={'사이트이용약관'} svalue={'Terms and Conditions'}/>
                 <div className='title'>사이트 이용약관</div>
                  <div>
                    <p className='startT'>제 1 장 총칙</p>
                    <div className='textwrap'>
                        <p className='subtitle'>제1조(목적)</p>
                        <p>이 약관은 (주)로보티즈(이하 "회사"라 함)가 인터넷사이트(http://www.robotis.com)(이하 "사이트"라고 함)를 통하여 제공하는 인터넷 관련 서비스 (이하 "서비스"라 함) 와 관련하여 이용자의 권리와 의무, 책임사항 및 회원의 서비스이용절차에 관한 사항을 규정함을 목적으로 합니다.</p>
                    </div>
                    <div className='textwrap'>
                        <p className='subtitle'>제2조 (약관의 명시,효력 및 변경)</p>
                        <p>가. 회사는 이 약관을 서비스를 이용하고자 하는 자와 회원이 알 수 있도록 서비스가 제공 되는 인터넷사이트(http://www.robotis.com)화면에 게시 합니다.</p>
                        <p>나. 회사는 약관의 규제에 관한법률,전자거래기본법,전자서명법,정보통신망이용촉진및정보보호등에 관한 법률,전자상거래 등에서의 소비자 보호에 관한 법률,전자금융거래법등 관련법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.</p>
                        <p>다. 회사가 이 약관을 개정하는 경우에는 개정된 약관의 적용일자 및 개정사유를 명시하여 그 적용일자 7일 이전부터 적용일자 전일까지 위 가항의 방법으로 공지 합니다.</p>
                        <p>라. 이 약관은 회사와 이용자간에 성립되는 서비스 이용계약자의 기본 약정입니다. 회사는 필요한 경우 특정서비스에 관하여 적용될 사항(이하 “개별약관”이라고 합니다.)을 정하여 미리 공지할 수 있습니다. 회원이 이러한 개별약관에 동의하고 특정 서비스를 이용하는 경우에는 개별약관이 우선적으로 적용되고, 이 약관은 보충적인 효력을 갖습니다. 개별약관의 변경에 관해서는 위 나항을 준용합니다.</p>
                    </div>
                  </div>
            </div>
        );
  }
  
  export default Agreement;
  