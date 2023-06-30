import { useEffect, useState } from 'react';

function ImageSlider({ data,pathnum3 }) {
  const [currentImg, setCurrentImg] = useState(data[0]?.img1);
  useEffect(() => {
    setCurrentImg(data[0]?.img1);
  }, [data]);

  const handleImgClick = (e) => {
    setCurrentImg(e.target.src);
  };
  return (
    <>
    {data[0] ? 
    <div className="shop_img_wrap">
      <div className="shop_img" onClick={handleImgClick}>
        <img src={currentImg} />
      </div>
      
      {data.map((item, idx) => (
      <div className="imgslider" key={idx}>
            {Object.keys(item)
            .filter((key) => key.startsWith("img"))
            .map((key) => (
              <div className={!item[key]?'none':''}>
                <img src={item[key]} onClick={handleImgClick} key={key} />
              </div>
            ))}
        </div> 
      ))}
    </div>
    :''
        }
    </>
  );
}

export default ImageSlider