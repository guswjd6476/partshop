import { useEffect, useState } from "react";
import { getcompare } from "../../service/function";
import { Table,Image,Popconfirm } from "antd";
import { Link } from "react-router-dom";

const Comparebox = ({lastCheck,userId}) => {
 
const [comparelist, setComparelist] =useState([])
  useEffect(()=>{
    const selectedObject = lastCheck.map(item => item.id);
    getcompare(selectedObject)
    .then(function (response) {
     setComparelist(response.data)
    })
    
  },[lastCheck])
  const handleDelete = (id) => {
    const newData = comparelist.filter((item) => item.id !== id);
    setComparelist(newData);
  };
  const columns = [
    {
      title: 'img',
      dataIndex: 'img1',
      width: '10%',
      render: (record) => <Image src={record}/>,
    },
    {
      title: 'category',
      dataIndex: 'category',
      width: '10%',
    },
    {
      title: 'subcategory',
      dataIndex: 'subcategory',
      width: '12%',
    },  
    {
      title: 'pName',
      dataIndex: 'pName',
      width: '10%',
    },
    {
      title: 'brand',
      dataIndex: 'brand',
      width: '7%',
    },
    {
      title: 'inch',
      dataIndex: 'inch',
      width: '7%',
    },
    {
      title: 'material',
      dataIndex: 'material',
      width: '10%',
    },
    {
      title: 'color',
      dataIndex: 'color',
      width: '10%',
    },
    {
      title: 'pPrice',
      dataIndex: 'pPrice',
      width: '10%',
    },
    {
      title: '삭제',
      width: '10%',
      render: (_, record) =>
      comparelist.length >= 1 ? (
        <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
          <a>Delete</a>
        </Popconfirm>
      ) : null
    },
    {
      title: 'link',
      width: '10%',
      render: (record) => <Link to={`/${record.category}/${record.subcategory}/${record.id}`}>링크</Link>,
    }
  
  ];
  return (
    <div className="comparewrap">

     <Table
     rowKey='id'
    columns={columns}
    dataSource={comparelist&&comparelist}
    // pagination={{
    //   pageSize: 50,
    // }}
    scroll={{
      y: 500,
    }}
  />
    </div>
  );
};
export default Comparebox;