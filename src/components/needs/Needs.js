import { useEffect, useState } from "react";
import { DeleteOutlined} from '@ant-design/icons';
import Pagetitle from "../components_btn/Pagetitle";
import { useNavigate,Link } from 'react-router-dom';
import { Card,Button,message,Popconfirm } from "antd";
import { deleteNeeds, getNeeds } from "../../service/user";
import { pricechange } from "../../service/function";
const { Meta } = Card;
function Needs({setBack,userId}) {
    const popOverInnerStyle = {
        width: '38px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }
    const navigate = useNavigate();
    const [needsList, setNeedslist]= useState(null)
    useEffect(()=>{
        
        setBack(true)
        if(!userId){
            alert('로그인해주세요')
            navigate('/Login')
       }
        getNeeds(userId).then(function(response){
            setNeedslist(response.data)
        })
    },[])
    const dNeeds =(value)=>{
        
        deleteNeeds(value).then(function(response){
            const newNeedsData = needsList.filter(
                (item) => item.id !== value
              )
           setNeedslist(newNeedsData)
        message.success('삭제되었습니다');
        })
    }
    console.log(needsList,'needsList???')
    const cancel = (e) => {
      };
    return(
<div className="main nonavicon displaybox">
    <Pagetitle value={'찜목록'} svalue={'좋아요를 눌른 상품목록입니다'}/>
    <div className="needsbox flex ">
    {needsList&&needsList.map(value=> 
    <div className="cardwrap" key={value.id}>
        <Link  to={`/${value.category}/${value.subcategory}/${value.productnum}`}>
          <Card
          className="needs"
          hoverable
          style={{
            width: 240,
          }}
          cover={<img className="cardimgs" alt="example" src={value.img1} />}
        >
          <Meta title={value.pName} description= {`${pricechange(value.pPrice)}원` } />
        </Card>
        </Link>
        
        <Popconfirm
            style={popOverInnerStyle}
            title="삭제하시겠습니까?"
            onConfirm={()=>dNeeds(value.id)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
        >
            <Button danger className="cardbtn"><DeleteOutlined /></Button>
        </Popconfirm>
    </div>
        )
    }
    </div>
   
    
</div>

    );
    
  }
  
  export default Needs;
  