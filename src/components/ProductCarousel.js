import React, { useRef } from "react";
import { Carousel } from "antd";

var settings = {
  width: 'calc(100% - 40px)',
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1224,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 824,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const productStyle = {
  height: "210px",
  borderRadius: 10,
  background: "#eee",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "calc(100% - 10px)"
};

const actionButStyle = {
  position: "absolute",
  top: "calc(50% - 15px)",
  zIndex: 1000
};

const ProductCard = ({ index, style }) => {
  const mergedStyle = { ...productStyle, ...style };
  return <div style={mergedStyle}>{`hello${index}`}</div>;
};

function ProductCarousel() {
  const carouselRef = useRef();

  const cards = [];
  for (let i = 1; i <= 9; i++) {
    cards.push(
      <div key={i}>
        <ProductCard index={i} />
      </div>
    );
  }

  return (
    <div style={{ position: "relative" }}>
      <button
        style={{
          ...actionButStyle,
          left: 0
        }}
        onClick={() => carouselRef.current.prev()}
      >
        &lt;
      </button>
      <Carousel dots={false} {...settings} ref={carouselRef}>
        {cards}
      </Carousel>
      <button
        style={{
          ...actionButStyle,
          right: 0
        }}
        onClick={() => carouselRef.current.next()}
      >
        &gt;
      </button>
    </div>
  );
}

export default ProductCarousel;