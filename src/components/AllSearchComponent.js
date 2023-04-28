import {Link } from 'react-router-dom'
import {  Button, Input } from 'antd';
import {SearchOutlined } from '@ant-design/icons';
const AllSearchComponent = ({setFilter,setSb,sb}) => {

  const handleInputChange = (event) => {
    setFilter(event.target.value);
  };


  return (
      <div>
        <Input
          type="text"
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <Button onClick={e=>{setSb(!sb)}}>
        <Link to={'/SearchResult'}><SearchOutlined /></Link>
        {/* AllSearchResult페이지로 이동 */}
        </Button >
      </div>
  );
};
export default AllSearchComponent;