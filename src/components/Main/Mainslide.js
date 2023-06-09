
import { Carousel } from 'antd';
import ban1 from '../../Image/ban1.png'
import ban2 from '../../Image/ban2.jpg'
import ban3 from '../../Image/ban3.jpg'
import ban4 from '../../Image/ban4.png'
const contentStyle = {
  height: '300px',
  color: '#fff',
  lineHeight: '300px',
  textAlign: 'center',
  background: '#364d79',
};
function Mainslide() {
  
  return (
    <Carousel autoplay effect='fade'>
      <div>
        <div style={contentStyle}>
            <img style={{width :'100%',height:'100%'}} src={ban1}/>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
            <img style={{width :'100%',height:'100%'}} src={ban2}/>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
            <img style={{width :'100%',height:'100%'}} src={ban3}/>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
            <img style={{width :'100%',height:'100%'}} src={ban4}/>
        </div>
      </div>
  </Carousel>
  );
}

export default Mainslide;
