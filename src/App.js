import React from "react";
import Slider from "react-slick";
import "./assets/App.css";
import ensun from "./assets/ensun.ico";
import season1 from "./assets/season1.JPG";
import season2 from "./assets/season2.JPG";
import jcbc_logo from "./assets/logo.jpg";
import kctv_jejucleanboysclub from "./assets/kctv_jejucleanboysclub.mp4";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

class App extends React.Component {
  state = {
    isLoading: true,
    friend_profile: [],
    update_time: "",
    english: false,
  };
  getJson = () => {
    let filename = "our_friend.json";
    let data = fetch(filename, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(function (response) {
      return response.json();
    });
    return data;
  };

  getData = async () => {
    const instagramData = await this.getJson();
    const { friend_profile1, friend_profile2, update_time } = instagramData;

    this.setState({
      friend_profile1,
      friend_profile2,
      isLoading: false,
      update_time,
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.getData();
    }, 1000);
  }
  handleClickforenglish = () => {
    this.setState({ english: true });
  };
  handleClickforkorean = () => {
    this.setState({ english: false });
  };

  render() {
    const {
      isLoading,
      friend_profile1,
      friend_profile2,
      update_time,
      english,
    } = this.state;

    const settings = {
      adaptiveHeight: true,
      dots: true,
      arrows: false,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      beforeChange: () => {
        window.scrollTo({ top: 0, left: 0 });
      },
      appendDots: (dots) => (
        <div
          style={{
            position: "fixed",
            padding: "10px",
            backgroundColor: "white",
            textAlign: "center",
            borderTop: "1px solid #e2e8f0",
            marginBottom: "25px",
          }}
        >
          <div style={{ flex: 1 }}> {dots} </div>
        </div>
      ),
      customPaging: (i) => {
        if (i === 0) {
          return (
            <div style={{ flex: 1 }}>
              <img className="w-12 lg:w-16" alt="ensun" src={ensun} />
            </div>
          );
        }
        if (i === 1) {
          return (
            <div style={{ flex: 1 }}>
              <img className="w-12 lg:w-16" alt="jcbc_logo" src={jcbc_logo} />
            </div>
          );
        }
        if (i === 2) {
          return (
            <div style={{ flex: 1 }}>
              <img className="w-12 lg:w-16" alt="jcbc_logo" src={jcbc_logo} />
            </div>
          );
        }
      },
    };

    return (
      <div className="">
        {isLoading ? (
          <div className="flex justify-center relative mt-24">
            <span className="">Loading...⏳</span>
          </div>
        ) : (
          <div className="">
            <div className="flex text-xs justify-end mr-5 mb-5">
              이름모를정체불명에"유제석"작품
            </div>
            <Slider {...settings}>
              <div className="w-screen overflow-x-hidden">
                <div class="pt-0">
                  <div class="px-2">
                    <div class="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-md">
                      <div class="flex">
                        <div class="w-full">
                          <div class="flex justify-between items-center p-3">
                            <div class="flex flex-row items-center">
                              <img
                                src={jcbc_logo}
                                class="rounded-full"
                                width="40"
                              ></img>
                              <div class="flex flex-row items-center ml-2">
                                {" "}
                                <span class="font-bold mr-1">
                                  jejucleanboysclub
                                </span>
                                <small class="h-1 w-1 bg-gray-300 rounded-full mr-1 mt-1"></small>{" "}
                                <a
                                  href="#"
                                  class="text-blue-600 text-sm hover:text-blue-800"
                                >
                                  Follow
                                </a>
                              </div>
                            </div>
                            <div class="pr-2">
                              {" "}
                              <i class="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div>
                            <video
                              autoplay="autoplay"
                              muted="muted"
                              controls
                              loop
                              preload="auto"
                            >
                              <source src={kctv_jejucleanboysclub}></source>
                            </video>
                          </div>
                          <div class="p-4 flex justify-between items-center">
                            <div class="flex flex-row items-center">
                              <i className="fa fa-heart-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i class="fa fa-comment-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i class="fa fa-send-o mr-2 fa-1x hover:text-gray-600"></i>
                            </div>
                            <div>
                              <i class="fa fa-bookmark-o fa-1x hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div className="mx-4">
                            <span className="text-sm">
                              jejucleanboysclub KCTV 스페셜 청정제주바다를
                              지켜라 1부 [제주클린보이즈클럽]편! 온에어 및
                              다시보기 가능 https://www.kctvjeju.com/
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pt-10">
                  <div class="px-2">
                    <div class="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-md">
                      <div class="flex">
                        <div class="w-full">
                          <div class="flex justify-between items-center p-3">
                            <div class="flex flex-row items-center">
                              <img
                                src={jcbc_logo}
                                class="rounded-full"
                                width="40"
                              ></img>
                              <div class="flex flex-row items-center ml-2">
                                {" "}
                                <span class="font-bold mr-1">
                                  jejucleanboysclub
                                </span>
                                <small class="h-1 w-1 bg-gray-300 rounded-full mr-1 mt-1"></small>{" "}
                                <a
                                  href="#"
                                  class="text-blue-600 text-sm hover:text-blue-800"
                                >
                                  Follow
                                </a>
                              </div>
                            </div>
                            <div class="pr-2">
                              {" "}
                              <i class="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div>
                            <img src={season2} class="w-full h-75"></img>
                          </div>
                          <div class="p-4 flex justify-between items-center">
                            <div class="flex flex-row items-center">
                              <i className="fa fa-heart-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i class="fa fa-comment-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i class="fa fa-send-o mr-2 fa-1x hover:text-gray-600"></i>
                            </div>
                            <div>
                              <i class="fa fa-bookmark-o fa-1x hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div className="mx-4">
                            <span className="text-sm">
                              jejucleanboysclub 2021년 7월 20일 오전 7시30분
                              Season2 : Day 100🎉 하도리에서의 시즌 1에 이은
                              애월에서의 시즌 2도 어느덧 100일이 되었고, 저희는
                              여름방학을 맞이하려고 합니다! 모두 더위
                              조심하세요~ 코로나 조심하세요~ 조만간 시즌 3로
                              찾아뵙겠습니다!
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="py-10">
                  <div class="px-2">
                    <div class="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-md">
                      <div class="flex">
                        <div class="w-full">
                          <div class="flex justify-between items-center p-3">
                            <div class="flex flex-row items-center">
                              <img
                                src={jcbc_logo}
                                class="rounded-full"
                                width="40"
                              ></img>
                              <div class="flex flex-row items-center ml-2">
                                {" "}
                                <span class="font-bold mr-1">
                                  jejucleanboysclub
                                </span>
                                <small class="h-1 w-1 bg-gray-300 rounded-full mr-1 mt-1"></small>{" "}
                                <a
                                  href="#"
                                  class="text-blue-600 text-sm hover:text-blue-800"
                                >
                                  Follow
                                </a>
                              </div>
                            </div>
                            <div class="pr-2">
                              {" "}
                              <i class="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div>
                            <img src={season1} class="w-full h-75"></img>
                          </div>
                          <div class="p-4 flex justify-between items-center">
                            <div class="flex flex-row items-center">
                              <i className="fa fa-heart-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i class="fa fa-comment-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i class="fa fa-send-o mr-2 fa-1x hover:text-gray-600"></i>
                            </div>
                            <div>
                              <i class="fa fa-bookmark-o fa-1x hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div className="mx-4">
                            <span className="text-sm">
                              🎊비치클린 Day 100 🎊 2021년 2월 16일
                              오전 8시 “우리의 놀이터
                              하도해변을 지키자!” 라는
                              타이틀로 활동한지 벌써 100일이
                              지났습니다. 매일 같이 해변에
                              나가서 해양쓰레기를 주웠는데요.
                              저희 인스타를 보시고 좋아요
                              눌러주시고 힘이 되는 댓글로
                              응원해 주셔서 감사합니다. 또한
                              DM 보내주셔서 비치클린
                              참여해주신 분들과 친애하는
                              친구들에게 정말 감사
                              말씀드립니다. 🙇🏻 비치클린
                              첫번째 시즌을 종료하고 재정비
                              후 두번째 시즌으로 다시
                              돌아오겠습니다! 더 재밌게 쓰줍
                              할거에요오 !! 😁 시즌2 에서는
                              참여해주시는 분들에게
                              @plasticberries.jeju 악세서리를
                              드립니다. 다시 한번
                              감사드립니다!! 😎😎
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-screen overflow-x-hidden">
                <div className="text-center text-lg mb-4 text-gray-800 mt-5">
                  Team Season1
                </div>
                <div className="flex flex-wrap text-sm lg:text-sm sm:text-xs mx-24 lg:mx-24 sm:mx-2 justify-items-auto justify-evenly">
                  {friend_profile1.map((profile) => (
                    <div className="flex flex-col items-center lg:mx-10 lg:mb-12 sm:mx-2 sm:mb-6">
                      <div className="mb-2">{profile.name}</div>
                      <div className="flex">
                        <a
                          href={profile.url}
                          className="bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 p-1 lg:p-1 sm:p-0 rounded-full"
                        >
                          <img
                            className="w-20 lg:w-20 sm:w-12 rounded-full border-white border-1"
                            src={profile.img_url}
                            alt={profile.name}
                          />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center text-lg mb-6 text-gray-800 mt-10">
                  Team Season2
                </div>
                <div className="flex flex-wrap text-sm lg:text-sm sm:text-xs mx-24 lg:mx-24 sm:mx-2 justify-items-auto justify-evenly">
                  {friend_profile2.map((profile) => (
                    <div className="flex flex-col items-center lg:mx-10 lg:mb-12 sm:mx-2 sm:mb-6">
                      <div className="mb-2">{profile.name}</div>
                      <div className="flex">
                        <a
                          href={profile.url}
                          className="bg-gradient-to-r from-yellow-400 via-pink-400 to-red-600 p-1 lg:p-1 sm:p-0 rounded-full"
                        >
                          <img
                            className="w-20 lg:w-20 sm:w-12 rounded-full border-white border-1"
                            src={profile.img_url}
                            alt={profile.name}
                          />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex text-center text-base justify-center mt-6">
                  다음에도 또 같이해주세요(파워당당)
                </div>
              </div>
            </Slider>
            <div className="flex-col text-lg lg:text-lg sm:text-sm text-right mr-5 mb-24 border-t border-gray-400 lg:mx-48 sm:mx-4 mt-8">
              <div className="mt-4">문의</div>
              <div>📧 mcyoo247@gmail.com</div>
              <div>📱 010-4737-4115</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default App;
