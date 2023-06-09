import {Link } from 'react-router-dom'
import {  Button, Input } from 'antd';
import {SearchOutlined } from '@ant-design/icons';
const AllSearchComponent = ({userId,setFilter,setSb,sb,filter}) => {

  const handleInputChange = (event) => {
    setFilter(event.target.value);
    localStorage.setItem("filter", event.target.value);
  };
  return (
      <>
        <Input
          type="text"
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <Link className='allbtn' to={`/SearchResult?&productid=${filter}`}><SearchOutlined /></Link>
       
      </>
  );
};
export default AllSearchComponent;