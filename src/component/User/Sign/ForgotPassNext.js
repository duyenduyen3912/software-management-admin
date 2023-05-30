import Button from "../button/btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./ForgotPass.module.scss";

const cx = classNames.bind(styles);

function ForgotPassNext() {
  return (
    <div className={cx("block")}>
      <div className={cx("login-card")}>
        <div className={cx("icon-block")}>
          <FontAwesomeIcon className={cx("icon")} icon={faArrowLeft} />
        </div>
        <h3>Đặt lại mật khẩu</h3>
        <div>
          <input
            type="password"
            className={cx("input-cart")}
            placeholder="Nhập lại mật khẩu mới"
          />
          <input
            type="password"
            className={cx("input-cart")}
            placeholder="Xác nhận lại mật khẩu"
          />
        </div>
        <div className={cx("next")}>
          <Button className={cx("primary-btn")}> Xác nhận</Button>
        </div>
        {/* <div className={cx("login-help")}>
    <a href="#">Register</a> • <a href="#">Forgot Password</a>
  </div> */}
      </div>
    </div>
  );
}

export default ForgotPassNext;
