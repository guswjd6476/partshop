import { Table } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllItem } from "../../../service/product";
import Pagetitle from "../../components_btn/Pagetitle";
import Innersearch from "../../components_btn/Innersearch";
import { PC,Tablet } from "../../../MediaQuery";

function QNA() {
    const [notice, setNotice] = useState(null)
    const [filter, setFilter] =useState(null)
    useEffect(()=>{
      getAllItem('qna').then(function(response){
            setNotice(response.data)
        })
    },[])
    const columns = [
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id',
          width:'50px'
        },
        {
          title: 'title',
          dataIndex: 'title',
          key: 'title',
          render: (_,record) => <Link className="tabledivs" to={`/center/qna/Qnacon?&productid=${record.id}` }><p>{record.title}</p>
          {record.answer ? <p className="answerbox done">답변완료</p> :  <p className="answerbox">답변대기</p>}
          </Link>,
        },
        {
          title: 'writer',
          dataIndex: 'writer',
          key: 'writer',
          width:'80px'
        },
        {
            title: '작성날짜',
            dataIndex: 'updatetime',
            key: 'updatetime',
            width:'120px',
            render: (record) => record.slice(0,10),
          }
    ]
    const column = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        width:'50px'
      },
      {
        title: 'title',
        dataIndex: 'title',
        key: 'title',
        render: (_,record) => <Link className="tabledivs" to={`/center/qna/Qnacon?&productid=${record.id}` }><p>{record.title}</p>
        {record.answer ? <p className="answerbox done">답변완료</p> :  <p className="answerbox">답변대기</p>}
        </Link>,
      }
  ]
    return (
        <div className="qna">
            <Pagetitle value={'1:1문의게시판'} svalue={'자세한 문의사항을 남겨주세요'}/>
            <Innersearch path={'qna'} filter={filter} setFilter={setFilter} value={notice} setValue={setNotice}/>
            <PC>
              <Table columns={columns} dataSource={notice} />
            </PC>
            <Tablet>
              <Table columns={column} dataSource={notice} />
            </Tablet>

            <a className="astyle mt" href="/Write/qna">작성</a>
        </div>
            
        );
  }
  
  export default QNA;
  