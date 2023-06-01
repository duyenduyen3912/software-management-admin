import Sign_up from "../../../component/User/Sign/Sign_up";
import Sign_in from "../../../component/User/Sign/Sign_in";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Captcha from "../../../component/User/captcha/Captcha";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "../../button/btn";
import classNames from "classnames/bind";
import styles from "../Sign/Sign.module.scss";
import { type } from "@testing-library/user-event/dist/type";
const cx = classNames.bind(styles);
function Sign_client() {
  const navigate = useNavigate();
  const [showLogIn, setShowLogIn] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const handleShowLogIn = (buttonId) => {
    setShowLogIn(false);
    setShowSignUp(true);
    setActiveButton(buttonId);
    // console.log(typeof validated);
  };
  const handleShowSignUp = (buttonId) => {
    setShowSignUp(false);
    setShowLogIn(true);
    setActiveButton(buttonId);
  };

  const [activeButton, setActiveButton] = useState(1);
  useEffect(() => {
    if (localStorage.getItem("username")) {
      console.log(localStorage.getItem("username"));
      navigate(`/home`);
    }
  }, []);

  return (
    <div className={cx("sign")}>
      <div className={cx("sign-block")}>
        <Row>
          <Col lg={6} style={{ padding: "0" }}>
            <div className={cx("img")}>
              <img
                className={cx("img-background")}
                id="img-background"
                src={require("../../../assets/bk_sign.jpeg")}
              />
            </div>
          </Col>
          <Col lg={6} style={{ padding: "0" }}>
            <div className={cx("sign-input")} id="sign">
              <div className={cx("button-sign")}>
                <div
                  className={cx({
                    text: true,
                    "text-boder": activeButton === 1,
                  })}
                  onClick={() => handleShowSignUp(1)}
                >
                  ĐĂNG NHẬP
                </div>
                <div
                  className={cx({
                    text: true,
                    "text-boder": activeButton === 2,
                  })}
                  onClick={() => handleShowLogIn(2)}
                >
                  ĐĂNG KÝ
                </div>
              </div>
              <p
                className={cx("free-log-in")}
                onClick={() => navigate("/home")}
              >
                Tiếp tục mà không cần tài khoản
              </p>
              {showLogIn && <Sign_in />}
              {showSignUp && <Sign_up />}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Sign_client;
