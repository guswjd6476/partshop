
import { Carousel,Tabs } from 'antd';
import ProductCarousel from './ProductCarousel';

const contentStyle = {
  height: '300px',
  color: '#fff',
  lineHeight: '300px',
  textAlign: 'center',
  background: '#364d79',
};

const items = [
    {
      key: '1',
      label: `New parts`,
      children: <ProductCarousel/>,
    },
    {
      key: '2',
      label: `Best parts`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `NZR Signature`,
      children: `Content of Tab Pane 3`,
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };
function Main() {
  return (
    <div className="main">
        <Carousel autoplay effect='fade'>
            <div>
            <h3 style={contentStyle}>1</h3>
            </div>
            <div>
            <h3 style={contentStyle}>2</h3>
            </div>
            <div>
            <h3 style={contentStyle}>3</h3>
            </div>
            <div>
            <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
}

export default Main;
