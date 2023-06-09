
import {  Link} from 'react-router-dom';

function Leftnavi({num1, num2}) {
  return (
    <div className='shop_sort'>
    <div className='sortTitle'>세부카테고리</div>
    {num1==='Sub'?
    <ul className='sort_navi'>
      <li className={num2 == 'Intro' ? 
      'active' : ''} >
        <Link to={'/Sub/Intro'}>회사소개</Link>
      </li>
      <li className={num2 == 'place' ? 
      'active' : ''}>
        <Link to={'/Sub/place'}>오시는길</Link>
      </li>
      <li className={num2 == 'agreement' ? 
      'active' : ''}>
        <Link to={'/Sub/agreement'}>사이트이용약관</Link>
      </li>
      <li className={num2 == 'privacy' ? 
      'active' : ''}>
        <Link to={'/Sub/privacy'}>개인정보처리방침</Link>
      </li>
    </ul>
    :
    <ul className='sort_navi'>
      <li className={num2 == 'notice' ? 
      'active' : ''}>
        <Link to={'/center/notice'}>공지사항</Link>
      </li>
      <li className={num2 == 'FAQ' ? 
      'active' : ''} >
        <Link to={'/center/FAQ'}>FAQ</Link>
      </li>
      <li className={num2 == 'qna' ? 
      'active' : ''}>
        <Link to={'/center/qna'}>1:1문의게시판</Link>
      </li>
    </ul>
    }
    </div>
  );
}

export default Leftnavi;
