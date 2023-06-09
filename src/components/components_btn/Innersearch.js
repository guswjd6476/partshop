import {  Button, Input, Select } from 'antd';
import {SearchOutlined } from '@ant-design/icons';
import { noticeOption,faqOption,qnaOption } from '../../service/options';


const Innersearch = ({path,value, setValue, setFilter,filter}) => {
console.log(value,'value')
console.log(filter,'filter')
  const handleInputChange = (event) => {
    setFilter(event.target.value);
  };
  const onClick = ()=>{
  const searchResult = filter&&value&&value.filter(data => {
    return data.title.toUpperCase().includes(filter.toUpperCase()) || data.content.toUpperCase().includes(filter.toUpperCase()) 
  });
  setValue(searchResult)
}

  return (
      <div className='sdiv'>
        <Select placeholder='선택' className='sdiv_s' options={path === 'notice' ? noticeOption()[0] :path === 'qna' ? qnaOption()[0] :faqOption()[0] }/>
        <Input
            className='innerS'
          type="text"
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <Button onClick={onClick}>
        <SearchOutlined />
        </Button >
      </div>
  );
};
export default Innersearch;