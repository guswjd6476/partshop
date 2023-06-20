import React, { useRef,  } from "react";
import { Carousel,Button } from "antd";
import ProductCard from "./ProductCard";
import {  updatemain } from "../../service/product";
import { actionButStyle,Settings } from "./Mainfunction";

function ProductCarousel({edit,able,data,mi,setMi}) {
  const carouselRef = useRef();
console.log(edit,'eidt')
console.log(mi,'mi')
  const cards = [];
  for (let i = 0; i <= 9; i++) {
    cards.push(
      <div key={i}>
        <ProductCard mi={mi} setMi={setMi} datas={data} data={data&&data[i]} able={able} edit={edit} i={i} />
      </div>
    );
  }
const updatemains = ()=>{
  updatemain(mi.a1,mi.a2,mi.a3,mi.a4,mi.a5,mi.a6,mi.a7,mi.a8,mi.a9,mi.a10,mi.b1,mi.b2,mi.b3,mi.b4,mi.b5,mi.b6,mi.b7,mi.b8,mi.b9,mi.b10).then(
    function(response){alert('변경되었습니다')}
  )
}
  return (
    <>
    <div className="carousel_wrap" style={{ position: "relative" }}>
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
      <Carousel dots={false} {...Settings} ref={carouselRef}>
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
    {able==true ?<Button onClick={updatemains} >저장</Button>:'' }
    
    </>
  );
}

export default ProductCarousel;