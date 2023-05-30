import { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "../button/btn";
import { Navigate, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "../Sign/Sign_in.module.scss";
import { useDispatch } from "react-redux";
import { setJWT } from "../../../store/action";
const cx = classNames.bind(styles);
const grecaptchaObject = window.grecaptcha;
function Sign_in() {
  //tạo captcha
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const handleSubmit = (e) => {
    //kiểm tra captcha
    // fetch API
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "PHPSESSID=4e6806172077e630b59a5ca0d5982aef");
    myHeaders.append("Host", "chippisoft.com");
    var formdata = new FormData();
    formdata.append("username", user.username);
    formdata.append("password", user.password);
    console.log(user);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    if (!recaptchaToken) {
      alert("Vui lòng kiểm tra captcha");
    } else {
      fetch("https://chippisoft.com/API/API.php", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(typeof result);
          const jsonObj = JSON.parse(result);
          console.log(jsonObj.status);

          localStorage.setItem("jwt", jsonObj.jwt);
          console.log(localStorage.getItem("jwt"));
          if (jsonObj.status === "success") {
            alert("đăng nhập thành công");
            dispatch(setJWT(`${jsonObj.jwt}`));
            localStorage.setItem("isAdmin", jsonObj.isAdmin);
            navigate("/dashboard");
          }
          if (jsonObj.status === "failed") {
            alert("đăng nhập thất bại");
            navigate("/");
          }
          //else alert("đăng nhập thất bại");
        })
        .catch((error) => console.log("error", error));
    }
  };

  return (
    <div className={cx("sign-in-block")}>
      <div className={cx("input-block")}>
        <div className={cx("user-name")}>
          <p className={cx("label-user")}>Tên tài khoản</p> <br />
          <input
            className={cx("input")}
            type="text"
            id="username"
            name="username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="tài khoản"
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
        </div>
        <div className={cx("check-box ")}>
          <input className={cx("input-check-box")} type="checkbox" />
          <label className={cx("label-check-book")}>ghi nhớ mật khẩu</label>
        </div>
      </div>

      <div className={cx("btn")}>
        <div>
          {/* <div>123</div> */}
          <ReCAPTCHA
            sitekey="6LeMHYglAAAAAMnHJUtzQ91O7lO5Av0Ss_4bRjbf"
            onChange={handleRecaptchaChange}
            grecaptcha={grecaptchaObject}
          />
          {/* {recaptchaToken && (
        <div>
          Đã xác minh reCAPTCHA với token: {recaptchaToken}
        </div>
      )} */}
        </div>
        <div className={cx("btn-block-log-in")}>
          <Button className={cx("tool-btn ")} onClick={handleSubmit}>
            <p className={cx("btn-text")}>ĐĂNG NHẬP</p>
          </Button>
        </div>
      </div>
      <div
        className={cx("forgot-pass")}
        // onClick={()=> navigate("/forgot")}
      >
        <a
          href="https://chippisoft.com/Pages/Forgotpass.php"
          className={cx("link-to-forgot")}
        >
          {" "}
          <p className={cx("text-forgot-pass")}>Quên mật khẩu?</p>
        </a>
      </div>
    </div>
  );
}

export default Sign_in;
