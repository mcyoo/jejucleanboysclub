import React from "react";
import Slider from "react-slick";
import "./assets/App.css";
import ensun from "./assets/ensun.ico";
import jcbc_logo from "./assets/logo.jpg";
import jeseogy_art from "./art/jeseogy_art.jpg";
import jeseogy from "./art/img3.jpg";
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
    this.getData();
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
              <img className="w-12 lg:w-12 sm:w-10" alt="ensun" src={ensun} />
            </div>
          );
        }
        if (i === 1) {
          return (
            <div style={{ flex: 1 }}>
              <img
                className="w-12 lg:w-12 sm:w-10"
                alt="jcbc_logo"
                src={jcbc_logo}
              />
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
            <Slider {...settings}>
              <div className="w-screen overflow-x-hidden">
                <div class="mx-auto px-4 py-8 max-w-xl my-15">
                  <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
                    <div class="md:flex-shrink-0">
                      <LazyLoadImage
                        alt="jeseogy_art"
                        effect="blur"
                        src={jeseogy_art}
                        class="w-full rounded-lg rounded-b-none"
                      />
                    </div>
                    <div class="px-4 py-2 mt-2">
                      {english ? (
                        <>
                          <h2 class="font-bold text-xl text-gray-800 tracking-normal px-2">
                            Nature-made sculptures
                          </h2>
                          <p class="text-sm text-gray-700 px-2 mr-1 break-word">
                            It is a sculpture made using waste nets and buoys
                            thrown away from fishing boats. What is the message
                            that Jeju Badang wants to say?
                          </p>
                          <div class="flex items-center justify-between mt-2 mx-6">
                            <button
                              onClick={this.handleClickforkorean}
                              class="text-blue-500 text-xs -ml-3 "
                            >
                              한국어
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <h2 class="font-bold text-2xl text-gray-800 tracking-normal px-2">
                            자연이 만든 조형물
                          </h2>
                          <p class="text-sm text-gray-700 px-2 break-word">
                            어선에서 버린 폐그물과 부표를 이용해 만들어진 조형물
                            입니다. 제주바당이 말하고 싶은 메세지는 무엇일까요?
                          </p>
                          <div class="flex items-center justify-between mt-2 mx-6">
                            <button
                              onClick={this.handleClickforenglish}
                              class="text-blue-500 text-xs -ml-3 "
                            >
                              English
                            </button>
                          </div>
                        </>
                      )}
                      <div class="author flex items-center -ml-3 my-3">
                        <div class="user-logo">
                          <img
                            class="w-12 h-12 object-cover rounded-full mx-4  shadow"
                            src={jeseogy}
                            alt="avatar"
                          ></img>
                        </div>
                        <h2 class="text-sm tracking-tighter text-gray-900">
                          <a href="https://www.instagram.com/jeseogy">
                            jeseogy
                          </a>{" "}
                          <span class="text-gray-600">2021년 5월 10일</span>
                        </h2>
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
                <div className="flex text-center text-lg justify-center mt-6">
                  사랑합니다 💜
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
