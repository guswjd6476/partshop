import { Button,Select} from 'antd';
import { AppstoreOutlined,TableOutlined, PicLeftOutlined} from '@ant-design/icons';
function MFunctionBtn(props) {

  const items = [
    {
      label: '최근등록순',
      key: 'daydesc',
      value: 'daydesc',
    },
    {
      label:  '판매량많은순',
      key: 'sales',
      value: 'sales',
    },
    {
      label:  '랭킹추천순',
      key: 'popular',
      value: 'popular',
    },
    {
      label: '낮은가격순',
      key: 'low',
      value: 'low',
    },
    {
      label: '높은가격순',
      key: 'high',
      value: 'high',
    },
 
  ];
  const handleChange = (value) => {
    props.setSortOption(value)
  };
  const gridClick = (e)=>{
    if(props.gridstyle < 2){
      props.setGridStyle(props.gridstyle+1)
    }else{
      props.setGridStyle(0)
    }
  }
  return (
    <div className='sorting_list'>
      <Select
      defaultValue="최근등록순"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={items}
    />
    <Button className='msort_grid' onClick={gridClick}>
        {props.gridstyle == 0 ?
         <TableOutlined />
         :
         props.gridstyle == 1 ?
          <AppstoreOutlined />
         :
         <PicLeftOutlined />
        }
       
      </Button>
    </div>
  );
}

export default MFunctionBtn;
