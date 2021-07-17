import React from "react";
import KakaoMap from "./KakaoMap";
import Slider from "react-slick";
import "./assets/App.css";
import ReactTypingEffect from "react-typing-effect";
import linkicon1 from "./linkicon1.png";
import linkicon2 from "./linkicon2.png";
import linkicon3 from "./linkicon3.png";
import CountUp from "react-countup";
import Feed from "./Feed";
import insta_dm from "./insta_dm.png";

class App extends React.Component {
  state = {
    isLoading: true,
    feed_count: 0,
    feed_location: [],
    friend_profile: [],
    feeds_date: [],
    feeds_like: [],
    feeds_comment: [],
    marker_location: [],
    date: true,
    like: false,
    comment: false,
    update_time: "",
    season1: false,
  };
  getJson = () => {
    let season_filename = "";
    if (this.state.season1) {
      season_filename = "instagram_data_season1.json";
    } else {
      season_filename = "instagram_data_season2.json";
    }

    let data = fetch(season_filename, {
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
    const {
      feed_count,
      feed_location,
      friend_profile,
      feeds_date,
      feeds_like,
      feeds_comment,
      update_time,
      marker_location,
    } = instagramData;
    this.setState({
      feed_count,
      feed_location,
      friend_profile,
      feeds_date,
      feeds_like,
      feeds_comment,
      isLoading: false,
      update_time,
      marker_location,
    });
    /*
    this.state.feed_count = feed_count;
    this.state.feed_location = feed_location;
    this.state.friend_profile = friend_profile;
    this.state.feeds_date = feeds_date;
    this.state.feeds_like = feeds_like;
    this.state.feeds_comment = feeds_comment;
    this.state.isLoading = false;
    this.state.update_time = update_time;
    this.state.marker_location = marker_location;
    */
  };
  season1_sort = () => {
    this.setState(() => ({ season1: true, isLoading: true }));
  };
  season2_sort = () => {
    this.setState(() => ({ season1: false, isLoading: true }));
  };
  date_sort = () => {
    this.setState(() => ({ date: true, like: false, comment: false }));
  };
  like_sort = () => {
    this.setState(() => ({ date: false, like: true, comment: false }));
  };
  comment_sort = () => {
    this.setState(() => ({ date: false, comment: true, like: false }));
  };

  componentDidMount() {
    this.getData();
  }
  componentDidUpdate() {
    if (this.state.isLoading === true) {
      this.getData();
    }
  }
  render() {
    const {
      isLoading,
      feed_count,
      feed_location,
      friend_profile,
      feeds_date,
      feeds_like,
      feeds_comment,
      date,
      like,
      comment,
      update_time,
      marker_location,
      season1,
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
              <img
                className="w-12 lg:w-12 sm:w-10"
                alt="linkicon1"
                src={linkicon1}
              />
            </div>
          );
        }
        if (i === 1) {
          return (
            <div style={{ flex: 1 }}>
              <img
                className="w-12 lg:w-12 sm:w-10"
                alt="linkicon2"
                src={linkicon2}
              />
            </div>
          );
        }
        if (i === 2) {
          return (
            <div style={{ flex: 1 }}>
              <img
                className="w-12 lg:w-12 sm:w-10"
                alt="linkicon3"
                src={linkicon3}
              />
            </div>
          );
        }
      },
    };
    return (
      <section className="">
        {isLoading ? (
          <div className="flex justify-center relative mt-24">
            <span className="">Loading...⏳</span>
          </div>
        ) : (
          <div className="">
            <div className="flex text-xs justify-end mr-5 mb-5">
              🤖{update_time} Update
            </div>
            {season1 ? (
              <div className="flex justify-center space-x-3 lg:space-x-3 text-xl lg:text-xl sm:text-sm my-3 sm:space-x-1 mb-6">
                <button
                  className={
                    "text-center border-gray-500 bg-blue-400 py-1 px-6 lg:py-1 lg:px-6 sm:py-1 sm:px-3 text-white rounded-lg"
                  }
                  onClick={this.season1_sort}
                >
                  시즌1
                </button>
                <button
                  className={
                    "text-center border-gray-500 bg-blue-600 py-1 px-6 lg:py-1 lg:px-6 sm:py-1 sm:px-3 text-white rounded-lg"
                  }
                  onClick={this.season2_sort}
                >
                  시즌2
                </button>
              </div>
            ) : (
              <div className="flex justify-center space-x-3 lg:space-x-3 text-xl lg:text-xl sm:text-sm my-3 sm:space-x-1 mb-6">
                <button
                  className={
                    "text-center border-gray-500 bg-blue-600 py-1 px-6 lg:py-1 lg:px-6 sm:py-1 sm:px-3 text-white rounded-lg"
                  }
                  onClick={this.season1_sort}
                >
                  시즌1
                </button>
                <button
                  className={
                    "text-center border-gray-500 bg-blue-400 py-1 px-6 lg:py-1 lg:px-6 sm:py-1 sm:px-3 text-white rounded-lg"
                  }
                  onClick={this.season2_sort}
                >
                  시즌2
                </button>
              </div>
            )}
            <Slider {...settings}>
              <div className="w-screen overflow-y-scroll overflow-x-hidden">
                <div className="text-5xl lg:text-5xl sm:text-xl lg:mx-48 sm:mx-4">
                  <div className="mb-10 lg:mb-10 sm:mb-8">
                    <h4>우리는</h4>
                    <ReactTypingEffect
                      cursorRenderer={(cursor) => <h1>{cursor}</h1>}
                      displayTextRenderer={(text, j) => {
                        return (
                          <h2>
                            {text.split("").map((char, i) => {
                              const key = `${i}`;
                              return <span key={key}>{char}</span>;
                            })}
                          </h2>
                        );
                      }}
                      text={[
                        "해양 쓰레기를 줍습니다.",
                        "작은 변화에서 출발합니다.",
                        "jejucleanboysclub 입니다.",
                      ]}
                      speed={120}
                      typingDelay={1200}
                      eraseDelay={1500}
                      eraseSpeed={100}
                    />
                  </div>
                  <div className="mt-8 lg:text-2xl sm:text-sm text-left border-t border-gray-400">
                    <div className="mt-6 mb-2">⏰ 매일 오전 8시</div>
                    <div className="mb-6">
                      🏝 제주도 해안정화 활동 진행중...🏃🏻
                    </div>
                  </div>
                  <div className="border-t border-gray-400 text-3xl lg:text-3xl sm:text-xl">
                    <div className="mt-6 flex justify-between">
                      <div className="flex">누적 활동횟수</div>
                      <div className="flex">
                        <CountUp end={feed_count} delay={1} duration={6} />
                      </div>
                    </div>

                    <div className="flex justify-between my-6">
                      <div className="flex">참여인원</div>
                      <div className="flex">
                        <CountUp
                          end={friend_profile.length}
                          delay={1}
                          duration={6}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end space-x-3 lg:space-x-3 text-xl lg:text-xl sm:text-sm my-3 sm:space-x-1 mb-6">
                      {date ? (
                        <button
                          className={
                            "text-center border-gray-500 bg-blue-400 py-2 px-4 lg:py-2 lg:px-4 sm:py-1 sm:px-3 text-white rounded-lg"
                          }
                          onClick={this.date_sort}
                        >
                          날짜순서
                        </button>
                      ) : (
                        <button
                          className={
                            "text-center border-gray-500 bg-blue-600 py-2 px-4 lg:py-2 lg:px-4 sm:py-1 sm:px-3 text-white rounded-lg"
                          }
                          onClick={this.date_sort}
                        >
                          날짜순서
                        </button>
                      )}
                      {like ? (
                        <button
                          className={
                            "text-center border-gray-500 bg-blue-400 py-2 px-4 lg:py-2 lg:px-4 sm:py-1 sm:px-3 text-white rounded-lg"
                          }
                          onClick={this.like_sort}
                        >
                          좋아요순서
                        </button>
                      ) : (
                        <button
                          className={
                            "text-center border-gray-500 bg-blue-600 py-2 px-4 lg:py-2 lg:px-4 sm:py-1 sm:px-3 text-white rounded-lg"
                          }
                          onClick={this.like_sort}
                        >
                          좋아요순서
                        </button>
                      )}
                      {comment ? (
                        <button
                          className={
                            "text-center border-gray-500 bg-blue-400 py-2 px-4 lg:py-2 lg:px-4 sm:py-1 sm:px-3 text-white rounded-lg"
                          }
                          onClick={this.comment_sort}
                        >
                          댓글순서
                        </button>
                      ) : (
                        <button
                          className={
                            "text-center border-gray-500 bg-blue-600 py-2 px-4 lg:py-2 lg:px-4 sm:py-1 sm:px-3 text-white rounded-lg"
                          }
                          onClick={this.comment_sort}
                        >
                          댓글순서
                        </button>
                      )}
                    </div>
                    <div className="mt-2 justify-center flex mb-32">
                      {date && (
                        <div className="break-all grid grid-cols-3 lg:gap-5 sm:gap-2">
                          {feeds_date.map((feed) => (
                            <Feed
                              content={feed.content}
                              url={feed.url}
                              img_url={feed.img_url}
                              location={feed.location}
                              like_count={feed.like_count}
                              comment_count={feed.comment_count}
                            />
                          ))}
                        </div>
                      )}
                      {like && (
                        <div className="break-all grid grid-cols-3 lg:gap-5 sm:gap-2">
                          {feeds_like.map((feed) => (
                            <Feed
                              content={feed.content}
                              url={feed.url}
                              img_url={feed.img_url}
                              location={feed.location}
                              like_count={feed.like_count}
                              comment_count={feed.comment_count}
                            />
                          ))}
                        </div>
                      )}
                      {comment && (
                        <div className="break-all grid grid-cols-3 lg:gap-5 sm:gap-2">
                          {feeds_comment.map((feed) => (
                            <Feed
                              content={feed.content}
                              url={feed.url}
                              img_url={feed.img_url}
                              location={feed.location}
                              like_count={feed.like_count}
                              comment_count={feed.comment_count}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center text-xl w-screen overflow-y-scroll overflow-x-hidden">
                활동 지역
                <div
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  className="mx-48 lg:mx-48 md:mx-16 sm:mx-4"
                >
                  <KakaoMap feed_location={marker_location} season={season1} />
                </div>
                <div className="mx-48 lg:mx-48 md:mx-16 sm:mx-4">
                  {feed_location.map((location) => (
                    <div className="my-6 flex justify-between lg:text-xl sm:text-sm">
                      <div className="flex">{location.name}</div>
                      <div className="flex">{location.count}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-screen overflow-y-scroll overflow-x-hidden">
                <div className="text-center text-xl mb-6">명예의 전당</div>
                <div className="flex flex-wrap text-sm lg:text-sm sm:text-xs mx-24 lg:mx-24 sm:mx-2 justify-items-auto justify-evenly">
                  {friend_profile.map((profile) => (
                    <div className="flex flex-col items-center lg:mx-10 lg:mb-12 sm:mx-2 sm:mb-6">
                      <div className="mb-2">{profile.count}회</div>
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
                  명예의 전당에 이름을 올리세요!
                  <a href="https://www.instagram.com/jejucleanboysclub/?hl=ko">
                    <img
                      className="ml-2 w-14 sm:w-8 md:w-8 lg:w-14"
                      src={insta_dm}
                      alt="insta_dm"
                    />
                  </a>
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
      </section>
    );
  }
}
export default App;

/*
class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>number : {this.state.count}</h1>
        <button onClick={this.add}>PLUS</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    );
  }
}
export default App;
*/

/*
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 3.0,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 1.5,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7,
  },
];

function renderFood(dish) {
  return (
    <Food
      key={dish.id}
      name={dish.name}
      picture={dish.image}
      rating={dish.rating}
    />
  );
}

function App() {
  return <div>{foodILike.map(renderFood)}</div>;
}

export default App;
*/
