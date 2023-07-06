import { useState, React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./propcard.css";
import { Link } from "react-router-dom";
import bedicon from "../../images/bedicon.svg";
import broom from "../../images/broom.svg";
import broom2 from "../../images/broom.svg";
import bottomline from "../../images/bottomline.svg";
import location from "../../images/location.svg";
import email from "../../images/email.svg";
import phone from "../../images/phone.svg";
import Whatsapp from "../../images/Component 26 – 1.svg";
import vdots from "../../images/vdot.svg";
import New from "../../images/Component 26 – 1.png";



const PropCard = (props) => {
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this property?')) {
            props.onDelete();
        }
    };





    return (
        <>
            <Container>
                <Row className="my-5">
                    <Col md={6}>
                        <div>
                            <div
                                style={{
                                    position: "absolute",
                                    marginTop: "10px",
                                    marginLeft: "5.7rem",
                                }}
                            >
                                <img src={New} alt="" />
                            </div>
                            {/* <div
                className="heartbtn"
                style={{
                  position: "absolute",
                  marginTop: "15px",
                }}
              >
                <HeartBtn />
              </div> */}

                            {/* <Link to={`/DetailPage/${props.id}`}> */}
                            <img
                                className="w-100"
                                height={"350px"}
                                src={props.image}
                                alt=""
                            />
                            {/* </Link> */}

                        </div>

                        <div
                            style={{ position: "absolute", top: "63px", marginLeft: "28rem" }}
                        >
                            {/* <img src={circle} alt="" /> */}
                        </div>
                    </Col>

                    <Col md={6}>
                        <Row className="my-4 ">
                            <Col md={7}>
                                <div>
                                    <h5 className=" my-3 rem3" style={{ color: "#BABABA" }}>
                                        {props.title}
                                    </h5>
                                </div>
                                <Row className="my-4 rem2">
                                    <Col>
                                        <p style={{ fontSize: "11px", color: "#BABABA" }}>
                                            City View <span className="mx-2 fw-bold">|</span>{" "}
                                        </p>
                                    </Col>
                                    <Col>
                                        <p
                                            className="rem2"
                                            style={{ fontSize: "11px", color: "#BABABA" }}
                                        >
                                            Furnished<span className="mx-3 fw-bold">|</span>{" "}
                                        </p>
                                    </Col>
                                    <Col>
                                        <p
                                            className="rem2"
                                            style={{ fontSize: "11px", color: "#BABABA" }}
                                        >
                                            Flexible Terms{" "}
                                        </p>
                                    </Col>
                                </Row>
                            </Col>

                            <Col sm={5}>
                                <div
                                    className="border pe-2 me-2 shadow-sm my-3"
                                    style={{ borderRadius: "200px" }}
                                >
                                    <h5
                                        className=" text-center my-3 fw-bold rem2"
                                        style={{ color: "#EC6337" }}
                                    >
                                        {props.price} AED/year
                                    </h5>
                                    <p
                                        className=" text-center rem3"
                                        style={{ fontSize: "12px", color: "#EC6337" }}
                                    >
                                        {props.timetolist}
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="my-4">
                            <Col>
                                <div>
                                    <img src={bedicon} alt="" />{" "}
                                    <span className="mx-2 rem2" style={{ color: "#BABABA" }}>
                                        {props.bedroom} bedroom
                                    </span>{" "}
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <img src={broom} alt="" />{" "}
                                    <span className="mx-2 rem2" style={{ color: "#BABABA" }}>
                                        {props.bathroom} bathroom
                                    </span>{" "}
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <img src={broom2} alt="" />{" "}
                                    <span className="mx-2 rem2" style={{ color: "#BABABA" }}>
                                        {props.area} sqft
                                    </span>{" "}
                                </div>
                            </Col>

                            <Col lg={12}>
                                <img className="w-100" src={bottomline} alt="" />
                            </Col>
                            <Col lg={12}>
                                <div>
                                    <img src={location} alt="" />{" "}
                                    <span
                                        className="mx-3 rem2"
                                        style={{ color: "#BABABA", fontSize: "13px" }}
                                    >
                                        {props.location}
                                    </span>{" "}
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <div>
                                    <img src={phone} alt="" />{" "}
                                    <span
                                        style={{ fontSize: "12px", color: "#BABABA" }}
                                        value={"zzz@gmail.com"}
                                    >
                                        phone
                                    </span>{" "}
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <img src={email} alt="" />{" "}
                                    <span style={{ fontSize: "12px", color: "#BABABA" }}>
                                        email
                                    </span>{" "}
                                </div>
                            </Col>
                            <Col>
                                <div>

                                    <img src={Whatsapp} alt="" />{" "}
                                    <span style={{ fontSize: "12px", color: "#BABABA" }} >
                                        Whatsapp
                                    </span>

                                    {" "}
                                </div>
                            </Col>
                            <Col>

                                <img src={Whatsapp} id="dropdown-trigger" alt="Dropdown Trigger" onClick={handleDelete}/>
                               
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PropCard;