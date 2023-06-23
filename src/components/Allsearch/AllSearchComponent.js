import {Link,useNavigate } from 'react-router-dom'
import {  Button, Input } from 'antd';
import { useEffect, useRef,useState } from 'react';
import {SearchOutlined } from '@ant-design/icons';
const AllSearchComponent = ({userId,setFilter,setSb,sb,filter}) => {
  const navigate = useNavigate();
  const focusRef = useRef();

  const handleInputChange = (event) => {
    setFilter(event.target.value);
    localStorage.setItem("filter", event.target.value);
  };
  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      handleOnClick(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };
  const handleOnClick = () => {
    focusRef.current.focus();
    setFilter('')
    navigate(`/SearchResult?&productid=${filter}`);
  };
  useEffect(()=>{ focusRef.current.focus();},[])
  return (
    
      <div className='flex'>
        <Input
        value={filter}
        autoFocus
          type="text"
          onChange={handleInputChange}
          placeholder="Search..."
          ref={focusRef}
          onKeyPress={handleOnKeyPress}
        />
        <Link  className='allbtn' to={`/SearchResult?&productid=${filter}`}><SearchOutlined /></Link>
       
      </div>
  );
};
export default AllSearchComponent;