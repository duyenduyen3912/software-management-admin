import Button from "../../../component/User/button/btn";
import classNames from "classnames/bind";
import styles from "./Error404.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const cx = classNames.bind(styles);
function Redirect() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(`/sign`);
  };

  return (
    <>
      <div className={cx("block")}>
        <div className={cx("title")}>404</div>
        <div className={cx("content")}>
          Bạn cần phải đăng nhập với quyền ADMIN để tiếp tục
        </div>
        <div className={cx("button-back-home")}>
          <Button className={cx("button")} onClick={() => handleRedirect()}>
            <p className={cx("text")}>Trang chủ</p>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Redirect;
