import {WhatsAppOutlined, FormOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
const Centerbox = () =>{

    return(
        <div className="centerbox">
            <div className="centerbox_wrap">
                <p>궁금하신 내용을 검색해주세요</p>
                <p>찾는 내용이 없을 경우, 전화나 1:1 문의 게시판으로 부탁드립니다.</p>
            </div>
            <div className="centerbox_wrap_b">
            <Link to={'/center/qna'} className="centerbox_bottom">
              
                    <p>1:1 문의</p>
                    <h6>게시판을 이용해주세요</h6>
                   
                    <div className='flex j'>
                        <div style={{textAlign:'center'}} className='centerbox_phone'>
                            1:1 문의게시판
                        </div>
                        <div className='phoneIcon'>
                        <FormOutlined />
                    </div>
                    </div>
                </Link>
                <div className="centerbox_bottom">
                    <p>전화 상담</p>
                    <h6>평일 09:00 ~ 18:00</h6>
                    <div className='flex j'>
                        <div style={{textAlign:'center'}} className='centerbox_phone'>
                            070-8281-7976
                        </div>
                        <div className='phoneIcon'>
                            <WhatsAppOutlined />
                        </div>
                    </div>
                    
                </div>
            </div>
       
        </div>
    )

}
export default Centerbox