
import { useLocation} from 'react-router-dom';
import logow from '../src/Image/logow.png'
const Footer = () => {
  return (
  <div className='footer footer_bg'>
    <div className='footer_bg_line'>
      <ul className='footer_top displaybox'>
        <li >
          <a href='/Sub/Intro'>회사소개</a>
        </li>
        <li>
          <a href='/Sub/place'>오시는길</a>
        </li>
        <li>
          <a href='/Sub/agreement'>사이트이용약관</a>
        </li>
        <li>
          <a href='/Sub/privacy'>개인정보처리방침</a>
        </li>
      </ul>

    </div>
      
      <ul className='footer_main displaybox'>
        <li className='footer_logo'>
          <img src={logow}/>
        </li>
        <li className='footer_d'>
          <ul>
            <li>서울시 노원구 화랑로 815, 제1실습관 5017호(삼육대학교)</li>
            <li>대표이사 : 박진영 |  사업자 등록 번호 : </li>
            <li>통신판매신고번호 : </li>
          </ul>
        </li>
        <li className='footer_d_d'>
          <ul>
            <li>
              <a className='center' href='/center'>고객센터 ></a>
            </li>
            <li>대표전화 :  </li>
            <li>이메일 : jpily111@gmail.com  </li>
          </ul>
        </li>
      </ul>
  </div>
  )
};
export default Footer;