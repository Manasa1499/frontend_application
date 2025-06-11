import HomeImg from "../../images/BackGround.png";
import RoadMapImg from "../../images/RoadMap.jpg";
import "./index.css";

const Home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <img
          src={RoadMapImg}
          alt="logo"
          style={{
            width: "550px",
            height: "400px",
            margin: "10px 20px",
            padding: "10px 20px",
            border: "2px solid black",
          }}
        />
        <img
          src={HomeImg}
          alt="logo"
          style={{
            width: "550px",
            border: "2px solid black",
            height: "400px",
            marginTop: "9px",
            padding: "10px 20px",
          }}
        />
      </div>
      <div
        style={{
          margin: "21px",
          padding: "20px",
          border: "2px solid black",
        }}
      >
        <div>
          Click
          <a href="/login" className="anchorLinks">
            Login
          </a>
          to view product data.
        </div>
        <div>
          Click
          <a className="anchorLinks" href="/signup">
            Signup
          </a>
          to register as a new user.
        </div>
      </div>
    </>
  );
};

export default Home;
