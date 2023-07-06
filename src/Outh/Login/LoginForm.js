import React from "react";
// import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
import "./login.css";
// import Navbars from "../../Common/NavBar";
import loginimg from "../../images/5257488_52233.jpg";
import logo from "../../images/Image 11.png";
import emailIcon from "../../images/Path 9028.png";
import passwordIcon from "../../images/Group 9504.png";
import { Link } from "react-router-dom";
// import FacebookIcon from "../../images/facebookicon.svg";
// import GmailIcon from "../../images/gmailicon.svg";
// import Footer from "../../Common/Footer";
// import BottomBar from "../../Common/BottomNavBar";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();


  //   const payload = {
  //     email,
  //     password,
  //   };

  //   // Send the login request to the API
  //   axios.post("https://dolphin-app-ldyyx.ondigitalocean.app/login", payload)
  //     .then((response) => {
  //       if (response.status === 200) {
  //         // Redirect to the home page
  //         navigate("/home");
  //         // Display the congratulatory message with an emoji
  //         alert("Congratulations! User is logged in now. 🎉");
  //       } else {
  //         // Handle the case when login is unsuccessful
  //         // Display an error message or take appropriate action
  //         alert("Login unsuccessful. Please check your credentials and try again.");
  //       }
  //     })
  //     .catch((error) => {
  //       // Handle any errors that occur during the login request
  //       console.log("Error:", error);
  //       // Display an error message or take appropriate action
  //       alert("An error occurred. Please try again later.");
  //     });
  // };

  return (
    <>

      <Container>
        <Row className="loginrow">
          <Col lg={4} className="text-center bgimg">
            <img src={logo} alt="" />
            <h3>
              <b> Welcome Back</b>
            </h3>
            <p className="text-secondary">
            Admin Pannel
            </p>

            <br />
            <br />
            <img src={emailIcon} alt="" />
            <input type="text" placeholder="Email" className="ms-2"
            // value={email} onChange={handleEmailChange} 
            />
            <br />
            <br />
            <img src={passwordIcon} alt="" />
            <input type="password" placeholder="Password" className="ms-2"
            //  value={password} onChange={handlePasswordChange} 
            />
            <br />
            <br />
            {/* <button href="#" className="Continuebtn" 
            // onClick={handleSubmit}
            >
              Continue
            </button> */}
            <Link to='/Home' className="Continuebtn">
              Continue
            </Link>



            <br />
            <br />
            {/* <p className="text-secondary">Or Continue with</p> */}


            {/* <p className="text-secondary">
              Dummy text fill up have ratings on our platform. A ‘Book It Again’
              percentage score tells you how an event has performed
            </p> */}
          </Col>
          <Col lg={8} className="d-flex itemcenter">
            <img src={loginimg} alt="" className="loginimg" />
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default Login;
