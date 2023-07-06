import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select, Space, Table } from 'antd';
import { useRef, useState,useEffect } from 'react';
import { addDeliver, getAllOrderlist } from '../../../service/user';
import { dlist ,buystatelist} from '../../../service/options';
import { findLabelByValue, findState } from '../../../service/function';


function Deliverwrite({cate,cates}) {
    const[orderlist, setOrderlist] = useState([])
    const [dNumber, setDnumber] = useState(null)//운송장번호
    const [dCarry, setDcarry] = useState(null)//택배사
    const [dstate, setDstate] = useState(null)//출고상태
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    console.log(dstate,'dstate')
    console.log(dCarry,'dCarry')
    console.log(dNumber,'dNumber')
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
      clearFilters();
      setSearchText('');
    };
    useEffect(()=>{
        getAllOrderlist().then(function(response){
            setOrderlist(response.data)
        })
    },[])
    console.log(orderlist,'?orderlist')
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
    const onClick = (value) =>{
        addDeliver((dstate !==null?dstate:value.buystate), (dNumber!==null?dNumber:value.carrier), (dCarry!==null?dCarry:value.dNum),value.id).then(function(response){
            if(response.data){alert('운송장번호를 등록했습니다')}else{alert('오류가 발생했습니다')}
        })
    }
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        width: '10px',
      },
      {
        title: '아이디',
        dataIndex: 'userId',
        key: 'userId',
        width: '100px',
        ...getColumnSearchProps('userId'),
      },
      {
        title: '주문번호',
        dataIndex: 'buynum',
        key: 'buynum',
        ...getColumnSearchProps('buynum'),
        sorter: (a, b) => Number(a.buynum).length - Number(b.buynum).length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: '상품명',
        dataIndex: 'pName',
        key: 'pName',
        ...getColumnSearchProps('pName'),
        sorter: (a, b) => a.pName.length - b.pName.length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: '주문상태',
        key: 'buystate',
        ...getColumnSearchProps('buystate'),
        sorter: (a, b) => a.buystate.length - b.buystate.length,
        sortDirections: ['descend', 'ascend'],
        render: (record) => record.buystate>3 ? <div>{findState(record.buystate)}</div>: 
        <Select  defaultValue={`${findState(record.buystate)}`} style={{width:'140px'}} onChange={value=>{setDstate(value)}} options={buystatelist} />
      },
      {
        title: '택배사',
        key: 'carrier',
        ...getColumnSearchProps('carrier'),
        sorter: (a, b) => a.carrier.length - b.carrier.length,
        sortDirections: ['descend', 'ascend'],
        render: (record) => record.carrier? <div>{record.carrier}</div>: 
        <Select style={{width:'140px'}} onChange={value=>{setDcarry(value)}} options={dlist} />
      
      },
      {
        title: '운송장번호',
        key: 'dNum',
        ...getColumnSearchProps('dNum'),
        sorter: (a, b) => a.dNum.length - b.dNum.length,
        sortDirections: ['descend', 'ascend'],
        render: (record) => record.dNum ? <div>{record.dNum}</div>: <Input onChange={(e)=>{setDnumber(e.target.value)}}/>
      },
      {
        title: '버튼',
        key:'button',
        render: (record) =>record.buystate==4?'': <Button onClick={()=>onClick(record)}>업데이트</Button>,
        
      },
    ];
    return <Table rowKey='id' columns={columns} dataSource={orderlist} />;
  
}

export default Deliverwrite;
