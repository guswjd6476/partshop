
import { useLocation} from 'react-router-dom';
import logow from '../src/Image/logow.png'
const Footer = () => {
  return (
  <div className='footer footer_bg'>
 
      
      <div className='footer_main displaybox'>
        <div className='footerline'></div>
        <div className='footer_logo'>
          <img src={logow}/>
        </div>
        <div className='flex c footercon'>
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
        <div className='flex footer_d_wrap'>
        <div className='footer_d'>
          <ul>
            <li>서울시 노원구 화랑로 815, 제1실습관 5017호(삼육대학교)</li>
            <li>대표이사 : 박진영 |  사업자 등록 번호 : </li>
            <li>통신판매신고번호 : </li>
          </ul>
        </div>
        <div className='footer_d_d'>
          <ul>
            <li>
              <a className='center' href='/center'>고객센터 </a>
            </li>
            <li>대표전화 : 070-8281-7976 </li>
            <li>이메일 : sspp45555@gmail.com  </li>
          </ul>
        </div>
        </div>
        </div>
      </div>
  </div>
  )
};
export default Footer;