import { Button} from 'antd';
import { AppstoreOutlined,TableOutlined, PicLeftOutlined} from '@ant-design/icons';
function FunctionBtn(props) {
    

  return (
    <div className='sorting_list'>
    <ul className='sorting_list_btn'>
        <li>
        <Button  className={props.daydesc ? 'clicked' : ''} onClick={e=>{props.setDayDesc(!props.daydesc);props.setPriceDesc(false);props.setPriceAec(false) }}>최근등록순</Button>
        </li>
        <li>
        <Button  className={props.daydesc ? 'clicked' : ''} onClick={e=>{props.setDayDesc(!props.daydesc);props.setPriceDesc(false);props.setPriceAec(false) }}>판매량많은순</Button>
        </li>
        <li>
        <Button  className={props.daydesc ? 'clicked' : ''} onClick={e=>{props.setDayDesc(!props.daydesc);props.setPriceDesc(false);props.setPriceAec(false) }}>랭킹추천순</Button>
        </li>
        <li>
        <Button className={props.pricedesc ? 'clicked' : ''} onClick={e=>{props.setDayDesc(false);props.setPriceDesc(!props.pricedesc);props.setPriceAec(false) }}>낮은가격순</Button>
        </li>
        <li>
        <Button  className={props.priceaec ? 'clicked' : ''} onClick={e=>{props.setDayDesc(false);props.setPriceDesc(false);props.setPriceAec(!props.priceaec) }}>높은가격순</Button>
        </li>
    </ul>
    <ul className='sorting_list_grid'>
      <li onClick={e=>{props.setGridStyle(0)}}>
        <TableOutlined />
      </li>
      <li onClick={e=>{props.setGridStyle(1)}}>
        <AppstoreOutlined />
      </li>
      <li onClick={e=>{props.setGridStyle(2)}}>
        <PicLeftOutlined />
      </li>
    </ul>
    </div>
  );
}

export default FunctionBtn;
