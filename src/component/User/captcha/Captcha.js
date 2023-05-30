import React, { useState, useRef, useEffect } from "react";
import Button from "../button/btn";
import classNames from "classnames/bind";
import styles from "../captcha/Captcha.module.scss";
import { Navigate, useNavigate } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);
function Captcha() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [currentCaptcha, setCurrentCaptcha] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");

  useEffect(() => {
    drawCaptcha();
  }, []);

  function generateCaptcha() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  }

  function drawCaptcha() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const captcha = generateCaptcha();

    // Draw background
    ctx.fillStyle = "#f2f2f2";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw characters
    ctx.font = "bold 24px sans-serif";
    ctx.fillStyle = "#333";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    let x = canvas.width / 15;
    let y = canvas.height / 2;
    for (let i = 0; i < captcha.length; i++) {
      x += canvas.width / 8;
      ctx.fillText(captcha.charAt(i), x, y);
    }

    // Draw noise
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 2;
      ctx.fillRect(x, y, size, size);
    }

    setCurrentCaptcha(captcha);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (captchaValue === currentCaptcha && localStorage.getItem("isLogIn")) {
      alert("Captcha chính xác!");
      // navigate("/")
      localStorage.setItem("captchaStatus", true);
    } else {
      alert("Nhập sai captcha!");
      localStorage.setItem("captchaStatus", false);
      drawCaptcha();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <canvas ref={canvasRef} id="captcha" width={200} height={50} />
      <br />
      <div className={cx("captcha-input")}>
        <input
          className={cx("input")}
          type="text"
          id="captcha-input"
          value={captchaValue}
          onChange={(e) => setCaptchaValue(e.target.value)}
        />
        <Button
          className={cx("header-btn-global refresh-btn")}
          type="submit"
          id="refresh-btn"
          onClick={drawCaptcha}
        >
          <FontAwesomeIcon
            className={cx("icon-reload")}
            icon={faArrowsRotate}
          />
        </Button>
      </div>
      <div className={cx("btn-sign")}>
        <Button className={cx(" header-btn-global tool-btn")} type="submit">
          <p className={cx("submit")}>ĐĂNG NHẬP</p>
        </Button>
      </div>
    </form>
  );
}
export default Captcha;
