import { useState } from "react";
import Button from "../button/btn";
import ForgotPassNext from "./ForgotPassNext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./ForgotPass.module.scss";

const cx = classNames.bind(styles);

function ForgotPass() {
  const [email, setEmail] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const isValidEmail = (email) => {
    const gmailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@gmail\.com$/;
    return gmailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);

    if (isValidEmail(emailValue)) {
      setButtonDisabled(false);
      navigate("/forgotNext");
    } else {
      setButtonDisabled(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the email value
  };

  const navigate = useNavigate();
  return (
    <div className={cx("block")}>
      <div className={cx("login-card")}>
        <div className={cx("icon-block")}>
          <FontAwesomeIcon className={cx("icon")} icon={faArrowLeft} />
        </div>{" "}
        <h3>Đặt lại mật khẩu</h3>
        <div>
          <input
            className={cx("input-cart")}
            type="email"
            value={email}
            onChange={handleEmailChange}
            // value={email}
            placeholder="Gmail"
            // onChange={handleEmailChange}
          />
        </div>
        <div className={cx("next")}>
          <Button
            className={cx("primary-btn")}
            // onClick={() => navigate("/forgotNext")}
            disabled={buttonDisabled}
          >
            {" "}
            Tiếp theo
          </Button>
        </div>
        {/* <div className={cx("login-help")}>
    <a href="#">Register</a> • <a href="#">Forgot Password</a>
  </div> */}
      </div>
    </div>
  );
}

export default ForgotPass;
