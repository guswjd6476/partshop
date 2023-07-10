import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select, Space, Table } from 'antd';
import { useRef, useState,useEffect } from 'react';
import { getwriteQna } from '../../service/product';
import Pagetitle from '../components_btn/Pagetitle';
import { Link } from 'react-router-dom';


function  Myqna({userId}) {
      const [qnaList, setQnaList] =useState([])
    useEffect(()=>{
        getwriteQna(userId).then(function(response){
            setQnaList(response.data)
        })
    },[])
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
      clearFilters();
      setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
        <div
          style={{
            padding: 8,
          }}
          onKeyDown={(e) => e.stopPropagation()}
        >
          <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{
              marginBottom: 8,
              display: 'block',
            }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{
                width: 90,
              }}
            >
              Search
            </Button>
            <Button
              onClick={() => clearFilters && handleReset(clearFilters)}
              size="small"
              style={{
                width: 90,
              }}
            >
              Reset
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                confirm({
                  closeDropdown: false,
                });
                setSearchText(selectedKeys[0]);
                setSearchedColumn(dataIndex);
              }}
            >
              Filter
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                close();
              }}
            >
              close
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined
          style={{
            color: filtered ? '#1677ff' : undefined,
          }}
        />
      ),
      onFilter: (value, record) =>
        record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
      render: (text) =>
        searchedColumn === dataIndex ? (
          <div
            highlightStyle={{
              backgroundColor: '#ffc069',
              padding: 0,
            }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        ) : (
          text
        ),
    });

    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        width: '30px',
      },
      {
        title: '카테고리',
        dataIndex: 'category',
        key: 'category',
        width: '100px',
        ...getColumnSearchProps('category'),
        sorter: (a, b) => a.category.length - b.category.length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: '답변',
        key: 'reason',
        width: '80px',
        sorter: (a, b) => a.category.length - b.category.length,
        sortDirections: ['descend', 'ascend'],
        render: (record) => record.answer ? <div>답변완료</div>:<div>답변대기</div>
      },
      {
        title: '제목',
        key: 'title',
        ellipsis: true,
        width:'calc(100% - 210px)',
        ...getColumnSearchProps('title'),
        sorter: (a, b) => a.title.length - b.title.length,
        sortDirections: ['descend', 'ascend'],
        render: (record) => <Link style={{color:'#000'}} to={`/center/qna/Qnacon?&productid=${record.id}` }>{record.title}</Link>
        
      },
     
    ];
   return (
      <div>
         <Pagetitle value='문의사항' svalue={`${userId}님이 문의하신 내용들입니다`}/>
        <div className="infowrap">
        <Table rowKey='id' columns={columns} dataSource={qnaList} />;
        </div>
      </div>
    );
  
}

export default Myqna
