import Button from "../../../component/User/button/btn";
import classNames from "classnames/bind";
import styles from "./Error404.module.scss";
const cx = classNames.bind(styles);
function Error_not_found() {
  return (
    <>
      <div className={cx("block")}>
        <div className={cx("title")}>404</div>
        <div className={cx("content")}>
          Trang bạn đang cố truy cập hiện không khả dụng. Điều này có thể là do
          trang không tồn tại hoặc đã bị di chuyển.
        </div>
        <div className={cx("button-back-home")}>
          <Button className={cx("button")}>
            <p className={cx("text")}>Trang chủ</p>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Error_not_found;
