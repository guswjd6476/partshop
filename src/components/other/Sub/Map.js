import { useState, useEffect } from "react";


const { kakao } = window;
function Map() {
    const [map,setMap] = useState(null);

    //처음 지도 그리기
    useEffect(()=>{
        const container = document.getElementById('map');
        const options = { center: new kakao.maps.LatLng(37.64442634867649, 127.10541911879044),
            level: 3  };
        
     
        const kakaoMap = new kakao.maps.Map(container, options);
        const zoomControl = new kakao.maps.ZoomControl();
        const mapTypeControl = new kakao.maps.MapTypeControl();
        let markerPosition  = new kakao.maps.LatLng(37.64442634867649, 127.10541911879044); 
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });
        kakaoMap.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
        kakaoMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
        marker.setMap(kakaoMap);
    },[])

    return (
        <div id="map" style={{ width:"100%", height:"400px"}}></div>
    )
  }
  
  export default Map;
  