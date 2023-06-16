import { Link } from "react-router-dom";
var Settings = {
    width: 'calc(100% - 40px)',
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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
  var Settings2 = {
    width:'100%',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 824,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
const actionButStyle = {
    position: "absolute",
    top: "calc(50% - 40px)",
    zIndex: 20,
    padding : 0

  };
const productStyle = {
    height: "300px",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "calc(100% - 10px)"
 };
 function Mainlinkto ({cates,num,value}){
  const targetCategory = cates && cates.find(value => value.catenum === num);
  const path = targetCategory ? targetCategory.category : '';
 return(
    <Link  className="mainlink" to={`/${path}`}>
    {value}로 바로가기
    </Link>
  )
}
 
  export {Settings,Settings2,actionButStyle,productStyle,Mainlinkto}