import { Table } from "antd";
import { useEffect, useState } from "react";
import { getAllItem } from "../../../service/product";
import { Link } from "react-router-dom";
import Pagetitle from "../../components_btn/Pagetitle";
import Innersearch from "../../components_btn/Innersearch";
import {  PC, Tablet } from "../../../MediaQuery"

function Notice({uGrade}) {
    const [notice, setNotice] = useState(null)
    const [filter, setFilter] =useState(null)
    useEffect(()=>{
      getAllItem('notice').then(function(response){
            setNotice(response.data)
        })
    },[])
    const column = [
      {
        title: 'id',
        dataIndex: 'id',
        width:'50px',
        key: 'id',
      },
      {
        title: 'category',
        dataIndex: 'category',
        width:'100px',
        key: 'category',
      },
      {
        title: 'title',
        dataIndex: 'title',
        width:'calc(100%-150px)',
        key: 'title',
        render: (_,record) => <Link className="noticea" to={`/center/notice/noticecon?&productid=${record.id}` }>{record.title}</Link>,
        
      },
  ]
    const columns = [
        {
          title: 'id',
          dataIndex: 'id',
          width:'50px',
          key: 'id',
        },
        {
          title: 'category',
          dataIndex: 'category',
          width:'100px',
          key: 'category',
        },
        {
          title: 'title',
          dataIndex: 'title',
          key: 'title',
          render: (_,record) => <Link className="noticea" to={`/center/notice/noticecon?&productid=${record.id}` }>{record.title}</Link>,
          
        },
        {
          title: 'writer',
          dataIndex: 'writer',
          width:80,
          key: 'writer',
        },
        
        {
            title: '작성날짜',
            width:100,
            dataIndex: 'updatetime',
            key: 'updatetime',
            render: (record) => record.slice(0,10),
          }
    ]
    return (
        <div>
            <Pagetitle value={'공지사항'} svalue={'중요한 공지사항을 확인 해 주세요'}/>

            <Innersearch path={'notice'} filter={filter} setFilter={setFilter} value={notice} setValue={setNotice}/>
            <PC>
            <Table rowKey='id' columns={columns} dataSource={notice} />
            </PC>
            <Tablet>
            <Table rowKey='id' columns={column} dataSource={notice} />
            </Tablet>
            
            {uGrade === 1 ?
            <a className="astyle mt" href="/Write/notice">작성</a>
            :''
          }
        </div>
            
        );
  }
  
  export default Notice;
  