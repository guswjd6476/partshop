
import { useState, useEffect,useRef } from 'react';
import Pagetitle from '../components_btn/Pagetitle';
import { getiot } from '../../service/product';
import { Mainlinkto } from './Mainfunction';
import { Carousel,Button } from "antd";
import { actionButStyle,Settings2 } from "./Mainfunction";
function Mainiot({cates}) {
  const carouselRef = useRef();
    const [iotlist, setIotlist] = useState([])
  useEffect(()=>{
    getiot().then(function(response){
        setIotlist(response.data)
    })
  },[])
  const cards = iotlist.map((item) => (
    <div className='mainiotwrap' key={item.id}>
      <div className='mainIotimg'>
        <img src={item.thumb} alt={item.pName} />
      </div>
      <div className='mainiotd'>
        <span>[{item.brand}]{item.pName}</span>
        <p>{item.pDetail}</p>
      </div>
    </div>
  ));
   
  return (
    <>
    <div className='iotallcon'>
      <Pagetitle value={'최신 IOT'} main={true} />
      <Mainlinkto cates={cates} num={3} value={'iot'}  />
      <div style={{ position: "relative" }} className='iotcontains'>
      <Button
        style={{
          ...actionButStyle,
          left: 0,
          padding : 5,
          height:40
        }}
        onClick={() => carouselRef.current.prev()}
      >
        &lt;
      </Button>
      <Carousel dots={false} {...Settings2} ref={carouselRef}>
        {cards}
        </Carousel>
      <Button
        style={{
          ...actionButStyle,
          right: 0,
          padding : 5,
          height : 40
        }}
        onClick={() => carouselRef.current.next()}
      >
        &gt;
      </Button>
      </div>
    </div>
    </>
  );
}

export default Mainiot;
