import { useState, useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../button/btn";

import classNames from "classnames/bind";
import styles from "../Sign/Sign_in.module.scss";
import { type } from "@testing-library/user-event/dist/type";
const cx = classNames.bind(styles);
const grecaptchaObject = window.grecaptcha;
function Sign_up() {
  //tạo captcha
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [recaptchaKey, setRecaptchaKey] = useState(
    Math.random().toString(36).substring(7)
  );

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    console.log("Captcha value:", token);
  };

  const [user, setUser] = useState({});
  const [checkPass, setCheckPass] = useState({});
  const [checkStatus, setCheckStatus] = useState({});
  //validate
  const [error, setError] = useState(null); //validate for password
  const [errorCheckPass, setErrorCheckPass] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorUsername, setErrorname] = useState(null);
  let check = 1;

  const handleSubmit = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const checkEmail = emailRegex.test(user.email);
    if (!checkEmail) {
      setErrorEmail("bạn đã nhập sai định dạng email");
      check = 0;
    } else {
      setErrorEmail(null);
    }
    //check pass
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    const isValid = regex.test(user.password);
    if (!isValid) {
      setError(
        "Mật khẩu phải có độ dài 8 ký tự trở lên, ít nhất một ký tự hoa, ký tự thường, số và ký tự đặc biệt"
      );
      check = 0;
    } else {
      setError(null);
    }
    if (user.password !== checkPass.password) {
      setErrorCheckPass("mật khẩu nhập lại không trùng khớp");
      check = 0;
    } else {
      setErrorCheckPass(null);
    }

    //-------------------fetch API----------------

    if (check == 1 && !recaptchaToken) {
      var myHeaders = new Headers();
      myHeaders.append("Cookie", "PHPSESSID=4e6806172077e630b59a5ca0d5982aef");
      myHeaders.append("Host", "chippisoft.com");
      var formdata = new FormData();
      formdata.append("fullname", user.fullname);
      formdata.append("username", user.username);
      formdata.append("email", user.email);
      formdata.append("password", user.password);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch("https://chippisoft.com/API/API.php", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
          console.log(typeof result);
          const jsonObj = JSON.parse(result);
          console.log(jsonObj.status);
          if (jsonObj.status === "success") {
            console.log("đăng ký thành công");
            window.location.reload();
          } else console.log("đăng ký thất bại: " + jsonObj.data);
        })
        .catch((error) => console.log("error", error));
    }

    console.log(1);
    console.log(checkStatus);
    console.log(user);
  };
  return (
    <div className={cx("sign-in-block")}>
      <div className={cx("input-block")}>
        <div className={cx("user-name")}>
          <p className={cx("label-user")}>Full name</p> <br />
          <input
            className={cx("input")}
            id="fullname"
            name="fullname"
            onChange={(e) => setUser({ ...user, fullname: e.target.value })}
            placeholder="Full name"
          />
        </div>
        <div className={cx("user-name")}>
          <p className={cx("label-user")}>Email</p> <br />{" "}
          <input
            className={cx("input")}
            id="email"
            name="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Gmail"
          />
          {errorEmail && <p style={{ color: "red" }}>{errorEmail}</p>}
        </div>
        <div className={cx("user-name")}>
          <p className={cx("label-user")}>User name</p> <br />
          <input
            className={cx("input")}
            id="username"
            name="username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="User name"
          />
        </div>
        <div className={cx("user-password")}>
          <p className={cx("label-user")}>Mật khẩu</p> <br />
          <input
            className={cx("input")}
            type="password"
            placeholder="mật khẩu"
            id="password"
            name="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <div className={cx("user-password")}>
          <p className={cx("label-user")}>Nhập lại mật khẩu</p> <br />
          <input
            className={cx("input")}
            type="password"
            placeholder="mật khẩu"
            id="check_password"
            name="check_password"
            onChange={(e) =>
              setCheckPass({ ...checkPass, password: e.target.value })
            }
          />
          {errorCheckPass && <p style={{ color: "red" }}>{errorCheckPass}</p>}
        </div>
        <div className={cx("check-box ")}>
          <input className={cx("input-check-box")} type="checkbox" />
          <label className={cx("label-check-book")}>ghi nhớ mật khẩu</label>
        </div>
      </div>
      <div>
        {/* <img src="https://www.google.com/recaptcha/api/image?c=ABCDEF&rand=Math.random()" alt="reCAPTCHA" /> */}

        {/* {recaptchaToken && (
        <div>
          Đã xác minh reCAPTCHA với token: {recaptchaToken}
        </div>
      )} */}
      </div>
      <div className={cx("btn")}>
        <ReCAPTCHA
          key={recaptchaKey}
          sitekey="6LeMHYglAAAAAMnHJUtzQ91O7lO5Av0Ss_4bRjbf"
          onChange={handleRecaptchaChange}
          grecaptcha={grecaptchaObject}
        />
        <div className={cx("btn-block-log-in")}>
          <Button className={cx("tool-btn ")} onClick={handleSubmit}>
            <p className={cx("btn-text")}>ĐĂNG KÝ</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Sign_up;
