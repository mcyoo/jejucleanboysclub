import React, { useEffect } from "react";
import greenMark from "./greenMark.png";
import home_jcbc from "./JCBC.png";

const { kakao } = window;

const KakaoMap = ({ feed_location, season }) => {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.371776, 126.543786),
      level: 9, //33.312006, 126.548005
    };
    const map = new kakao.maps.Map(container, options);
    var imageSize = new kakao.maps.Size(20, 20);
    var markerImage = new kakao.maps.MarkerImage(greenMark, imageSize);
    var geocoder = new kakao.maps.services.Geocoder();

    feed_location.map((location) => {
      geocoder.addressSearch(location, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
            image: markerImage,
          });
          marker.setMap(map);
        }
      });
    });

    var imageSizee = new kakao.maps.Size(40, 40);
    var markerImagee = new kakao.maps.MarkerImage(home_jcbc, imageSizee);
    var markerPositionn;
    if (season) {
      markerPositionn = new kakao.maps.LatLng(33.511632, 126.89077);
    } else {
      markerPositionn = new kakao.maps.LatLng(33.47825, 126.375026);
    }

    // 마커를 생성합니다
    var markerr = new kakao.maps.Marker({
      position: markerPositionn,
      image: markerImagee, // 마커이미지 설정
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    markerr.setMap(map);

    var iwContent =
        '<div style="padding:0.3em; font-size: small; text-align: center; margin-left:2em">JCBC 사무실</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwPosition = new kakao.maps.LatLng(33.511632, 126.89077); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, markerr);
  }, []);

  return (
    <div
      id="myMap"
      className="mt-6 w-max h-screen lg:h-screen md:h-screen sm:h-56"
    ></div>
  );
};

export default KakaoMap;
