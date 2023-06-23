import { Button} from 'antd';
import { AppstoreOutlined,TableOutlined, PicLeftOutlined} from '@ant-design/icons';
function FunctionBtn(props) {
  const handleClick = (option) => {
    props.setSortOption(option);
  };

  return (
    <div className='sorting_list'>
    <ul className='sorting_list_btn'>
        <li>
        <Button  className={props.sortOption == 'daydesc' ? 'clicked' : ''} onClick={() => handleClick('daydesc')}>최근등록순</Button>
        </li>
        <li>
        <Button  className={props.sortOption == 'sales' ? 'clicked' : ''} onClick={() => handleClick('sales')}>판매량많은순</Button>
        </li>
        <li>
        <Button  className={props.sortOption == 'popular'? 'clicked' : ''}onClick={() => handleClick('popular')}>랭킹추천순</Button>
        </li>
        <li>
        <Button className={props.sortOption == 'low' ? 'clicked' : ''} onClick={() => handleClick('low')}>낮은가격순</Button>
        </li>
        <li>
        <Button  className={props.sortOption == 'high'? 'clicked' : ''}onClick={() => handleClick('high')}>높은가격순</Button>
        </li>
    </ul>
    {props.none&&props.none ? 
    '':
    <ul className='sorting_list_grid'>
      <li className={props.gridstyle == 0 ? 'clicked' : ''} onClick={e=>{props.setGridStyle(0)}}>
        <TableOutlined />
      </li>
      <li className={props.gridstyle == 1 ? 'clicked' : ''}  onClick={e=>{props.setGridStyle(1)}}>
        <AppstoreOutlined />
      </li>
      <li className={props.gridstyle == 2 ? 'clicked' : ''}  onClick={e=>{props.setGridStyle(2)}}>
        <PicLeftOutlined />
      </li>
    </ul>
    }
    </div>
  );
}

export default FunctionBtn;
