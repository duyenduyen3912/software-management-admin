import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Title.module.scss";

const cx = classNames.bind(styles);

function Title(props) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>{props.title}</div>
      <div className={cx("sub-title")}>
        <FontAwesomeIcon icon={props.icon} className={cx("sub-title-icon")} />
        <span className={cx("slash")}>/</span>
        <span className={cx("sub-title-name")}>{props.title}</span>
      </div>
    </div>
  );
}

export default Title;
