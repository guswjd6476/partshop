
import {  Link} from 'react-router-dom';

function Leftnavi({num1, num2}) {
  return (
    <div className='shop_sort'>
        <div className='sortTitle'>
      <span>CATEGORIES</span></div>
    {num1==='Sub'?
    <ul className='sort_navi'>
      <li className={num2 == 'Intro' ? 
      'active snavili' : 'snavili'} >
        <Link to={'/Sub/Intro'}>회사소개</Link>
        <div className={num2 == 'Intro' ? 
      'active triangle' : 'none'}></div>
      </li>
      <li className={num2 == 'place' ? 
      'active snavili' : 'snavili'}>
        <Link to={'/Sub/place'}>오시는길</Link>
        <div className={num2 == 'place' ? 
      'active triangle' : 'none'}></div>
      </li>
      <li className={num2 == 'agreement' ? 
      'active snavili' : 'snavili'}>
        <Link to={'/Sub/agreement'}>사이트이용약관</Link>
        <div className={num2 == 'agreement' ? 
      'active triangle' : 'none'}></div>
      </li>
      <li className={num2 == 'privacy' ? 
      'active snavili' : 'snavili'}>
        <Link to={'/Sub/privacy'}>개인정보처리방침</Link>
        <div className={num2 == 'privacy' ? 
      'active triangle' : 'none'}></div>
      </li>
    </ul>
    :
    <ul className='sort_navi'>
      <li className={num2 == 'notice' ? 
      'active snavili' : 'snavili'}>
        <Link to={'/center/notice'}>공지사항</Link>
        <div className={num2 == 'notice' ? 
      'active triangle' : 'none'}></div>
      </li>
      <li className={num2 == 'FAQ' ? 
      'active snavili' : 'snavili'} >
        <Link to={'/center/FAQ'}>FAQ</Link>
        <div className={num2 == 'FAQ' ? 
      'active triangle' : 'none'}></div>
      </li>
      <li className={num2 == 'qna' ? 
      'active snavili' : 'snavili'}>
        <Link to={'/center/qna'}>1:1문의게시판</Link>
        <div className={num2 == 'qna'? 
      'active triangle' : 'none'}></div>
      </li>
    </ul>
    }
    </div>
  );
}

export default Leftnavi;
