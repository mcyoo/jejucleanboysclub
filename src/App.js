import React from "react";
import axios from "axios";
import KakaoMap from "./KakaoMap";
import Slider from "react-slick";
import "./assets/App.css";
import ReactTypingEffect from "react-typing-effect";
import linkicon1 from "./linkicon1.png";
import linkicon2 from "./linkicon2.png";
import linkicon3 from "./linkicon3.png";
import CountUp from "react-countup";

class App extends React.Component {
  state = {
    isLoading: false,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    //this.getMovies();
    window.addEventListener(
      "touchmove",
      function (event) {
        event.preventDefault();
      },
      false
    );
  }
  render() {
    const { isLoading, movies } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots) => (
        <div
          style={{
            position: "fixed",
            padding: "25px",
            backgroundColor: "white",
            textAlign: "center",
            borderTop: "1px solid #e2e8f0",
          }}
        >
          <div style={{ flex: 1 }}> {dots} </div>
        </div>
      ),
      customPaging: (i) => {
        if (i === 0) {
          return (
            <div style={{ flex: 1, width: "3em" }}>
              <img alt="linkicon1" src={linkicon1} />
            </div>
          );
        }
        if (i === 1) {
          return (
            <div style={{ flex: 1, width: "3em" }}>
              <img alt="linkicon2" src={linkicon2} />
            </div>
          );
        }
        if (i === 2) {
          return (
            <div style={{ flex: 1, width: "3em" }}>
              <img alt="linkicon3" src={linkicon3} />
            </div>
          );
        }
      },
    };
    return (
      <section className="">
        {isLoading ? (
          <div className="flex">
            <span className="">Loading...</span>
          </div>
        ) : (
          <div className="">
            <Slider {...settings}>
              <div className="w-full">
                <div className="text-5xl lg:text-5xl sm:text-xl lg:mx-32 sm:mx-8">
                  <div className="mb-10 lg:mb-10 sm:mb-10">
                    <h3>우리는</h3>
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
                        "쓰레기를 줍습니다.",
                        "지역사회에 기여합니다.",
                        "jejucleanboysclub입니다.",
                      ]}
                      speed={120}
                      typingDelay={1200}
                      eraseDelay={1500}
                      eraseSpeed={100}
                    />
                  </div>
                  <div className="border-t border-gray-400">
                    <div className="text-xl lg:text-2xl sm:text-lg">
                      <div className="mr-4">
                        <br></br>누적 활동횟수 <CountUp end={30} delay={1} />
                      </div>
                    </div>

                    <div className="text-xl lg:text-2xl sm:text-lg">
                      <div className="mr-4">
                        <br></br>참여인원 <CountUp end={30} delay={1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center text-lg w-full">
                작전 지역
                <div
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  className="mx-32 lg:mx-64 sm:mx-12"
                >
                  <KakaoMap />
                </div>
              </div>
              <div className="text-center text-lg w-full">
                <h3>명예의 전당</h3>
              </div>
            </Slider>
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
