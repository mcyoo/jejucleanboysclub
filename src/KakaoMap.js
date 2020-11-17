import React, { useEffect } from "react";

const { kakao } = window;

const KakaoMap = () => {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.512917, 126.898868),
      level: 6,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return <div id="myMap" className="mt-4 w-full h-screen"></div>;
};

export default KakaoMap;
