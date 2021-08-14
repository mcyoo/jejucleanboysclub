import React from "react";
import Slider from "react-slick";
import "./assets/App.css";
import ensun from "./assets/ensun.ico";
import season1 from "./assets/season1.JPG";
import season2 from "./assets/season2.JPG";
import jcbc_logo from "./assets/logo.jpg";
import kctv_jejucleanboysclub from "./assets/kctv_jejucleanboysclub.mp4"
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
            <Slider {...settings}>
              <div className="w-screen overflow-x-hidden flex flex-col">
              <div className="text-center text-2xl mb-4 text-gray-800 mt-5">
                  🎊제주클린보이즈산업협회🎊
                </div>
                <div className="flex justify-center">
              <video autoplay="autoplay" muted="muted" controls loop preload="auto">
                    <source src={kctv_jejucleanboysclub} ></source>
                </video>
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
