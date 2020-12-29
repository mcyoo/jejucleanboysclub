import React, { useEffect } from "react";
import cleanimage from "./cleanimage.png";
import home_jcbc from "./JCBC.png";

const { kakao } = window;

const KakaoMap = ({ feed_location }) => {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.371776, 126.543786),
      level: 9, //33.312006, 126.548005
    };
    const map = new kakao.maps.Map(container, options);
    // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places();
    var imageSize = new kakao.maps.Size(24, 35);
    var markerImage = new kakao.maps.MarkerImage(cleanimage, imageSize);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다

        data.map(function (place) {
          return new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x),
            image: markerImage,
          });
        });
      }
    }

    feed_location.map((location) => {
      ps.keywordSearch(location.name, placesSearchCB);
    });

    var imageSizee = new kakao.maps.Size(40, 40);
    var markerImagee = new kakao.maps.MarkerImage(home_jcbc, imageSizee);
    var markerPositionn = new kakao.maps.LatLng(33.511632, 126.89077); // 마커가 표시될 위치입니다

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
      className="mt-6 w-max h-screen lg:h-screen md:h-screen sm:h-64"
    ></div>
  );
};

export default KakaoMap;
