import React, { useEffect } from "react";

const { kakao } = window;

const KakaoMap = (feed_location) => {
  useEffect(() => {
    var arr_name = [];
    var arr_count = [];
    // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.371776, 126.543786),
      level: 11, //33.312006, 126.548005
    };
    const map = new kakao.maps.Map(container, options);
    // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places();
    //var location = { name: "하도해변", count: 3 };
    // 키워드로 장소를 검색합니다
    feed_location.feed_location.map((location) => {
      arr_name.push(location.name);
      arr_count.push(location.count);
    });
    console.log(arr_name[0]);
    ps.keywordSearch("하도해변", placesSearchCB);
    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
        }
      }
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;"></div>'
        );
        infowindow.open(map, marker);
      });
    }
  }, []);

  return (
    <div id="myMap" className="mt-10 w-max h-screen lg:h-screen sm:h-72"></div>
  );
};

export default KakaoMap;
