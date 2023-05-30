import classNames from "classnames/bind";
import styles from "./Nav.module.scss";
import {
  faGauge,
  faChevronDown,
  faLock,
  faBarsStaggered,
  faClockRotateLeft,
  faUsers,
  faCreditCard,
  faClipboard,
  faRug,
  faBell,
  faGear,
  faBolt,
  faX,
  faChevronCircleLeft,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "../Button/btn";
import { useEffect } from "react";

const cx = classNames.bind(styles);
function Nav(props) {
  const navigate = useNavigate();

  // handleClick
  const handleClick = (event, name) => {
    event.preventDefault();
    const elementClicked = event.target;
    const elementId = elementClicked.id;

    if (elementId) {
      const element = document.getElementsByClassName("nav-item");
      for (let i = 0; i < element.length; i++) {
        element[i].classList.remove(cx("active"));
      }
      document.getElementById(`${elementId}-wrap`).classList.add(cx("active"));
    }
    navigate(`/${name}`);
  };

  const handleClickSubMenu = (event) => {
    const elementClicked = event.target;
    const elementId = elementClicked.id;

    if (elementId) {
      let menuId = `${elementId}-sub-menu`;
      document
        .getElementById(elementId)
        .classList.toggle(cx("active-btn-down"));
      if (
        document.getElementById(menuId).style.display === "none" ||
        document.getElementById(menuId).style.display === ""
      ) {
        document.getElementById(menuId).style.display = "block";
        localStorage.setItem(`${menuId}`, true);
      } else {
        document.getElementById(menuId).style.display = "none";
        localStorage.removeItem(`${menuId}`);
      }
    }
  };

  const _handleClose = () => {
    document.getElementById("nav").style.display = "none";
  };
  // Resize window
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        document.getElementById("nav").classList.add(cx("open"));
      }
      // } else {
      //   document.getElementById("nav").classList.add(cx("open"));
      // }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Clean up localStorage
  useEffect(() => {
    const cleanupLocalStorage = () => {
      const storageItem = ["product-btn-sub-menu", "history-btn-sub-menu"];
      storageItem.forEach((item) => localStorage.removeItem(item));
    };

    window.addEventListener("beforeunload", cleanupLocalStorage);

    return () => {
      window.removeEventListener("beforeunload", cleanupLocalStorage);
    };
  }, []);

  return (
    <nav className={cx("wrapper")} id="nav">
      <div className={cx("nav-top")}>
        <div className={cx("nav-chippi")}>
          <div className={cx("nav-top-logo")}>
            <img
              className={cx("nav-top-logo-img")}
              src={require("../../../assets/logo.png")}
            />
          </div>
          <div className={cx("nav-top-name")}>CHIPPISOFT </div>
        </div>

        <FontAwesomeIcon
          icon={faChevronLeft}
          id="nav-close"
          className={cx("nav-close")}
          onClick={_handleClose}
        />
      </div>
      {/* <div className={cx("nav-btn-wrap")}>
        <div className={cx("nav-btn")}>
          <Button className={cx("tool-btn nav-btn")}>
            <FontAwesomeIcon className={cx("icon-btn")} icon={faBolt} /> CODE
            TOOL THEO YÊU CẦU
          </Button>
          <Button className={cx("recharge-btn nav-btn")}>
            <FontAwesomeIcon className={cx("icon-btn")} icon={faBolt} />
            NẠP TIỀN
          </Button>
        </div>
      </div> */}

      <div className={cx("nav-list")}>
        <li
          className={`${
            props.path === "dashboard" ? cx("active") : ""
          } nav-item`}
          id="dashboard-wrap"
        >
          <div className={cx("item-wrap")}>
            <FontAwesomeIcon icon={faGauge} className={cx("nav-icon")} />
            <a
              href="/dashboard"
              className={cx("nav-item-name")}
              id="dashboard"
              onClick={(event) => handleClick(event, "dashboard")}
            >
              Bảng điều khiển
            </a>
          </div>
        </li>
        <li
          className={`nav-item ${
            props.path === "security" ? cx("active") : ""
          } `}
          id="security-wrap"
        >
          <div className={cx("item-wrap")}>
            <FontAwesomeIcon icon={faLock} className={cx("nav-icon")} />
            <a
              href="/security"
              className={cx("nav-item-name")}
              id="security"
              onClick={(event) => handleClick(event, "security")}
            >
              Bảo mật
            </a>
          </div>
        </li>
        <li className="nav-item" id="pd-wrap">
          <div className={cx("item-wrap", "nav-item-down")}>
            <div className={cx("nav-item-left")}>
              <FontAwesomeIcon
                icon={faBarsStaggered}
                className={cx("nav-icon")}
              />
              <div className={cx("nav-item-name")} id="pd">
                Sản phẩm
              </div>
            </div>

            <div>
              <FontAwesomeIcon
                icon={faChevronDown}
                // className={cx("nav-icon", "icon-down")}
                className={
                  localStorage.getItem("product-btn-sub-menu")
                    ? cx("nav-icon", "icon-down", "active-btn-down")
                    : cx("nav-icon", "icon-down")
                }
                id="product-btn"
                onClick={handleClickSubMenu}
              />
            </div>
          </div>
        </li>
        <div
          className={cx("nav-item-sub")}
          id="product-btn-sub-menu"
          style={
            localStorage.getItem("product-btn-sub-menu")
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <li
            className={`nav-item ${
              props.path === "product/category" ? cx("active") : ""
            } `}
            id="type-wrap"
          >
            <div className={cx("sub-item")}>
              <a
                href="/product/category"
                className={cx("sub-item-link")}
                onClick={(event) => handleClick(event, "product/category")}
                id="type"
              >
                Chuyên mục
              </a>
            </div>
          </li>
          <li
            className={`nav-item ${
              props.path === "product/list" ? cx("active") : ""
            } `}
            id="list-wrap"
          >
            <div className={cx("sub-item")}>
              <a
                href="/product/list"
                className={cx("sub-item-link")}
                id="list"
                onClick={(event) => handleClick(event, "product/list")}
              >
                Danh sách sản phẩm
              </a>
            </div>
          </li>
          <li
            className={`nav-item ${
              props.path === "product/order" ? cx("active") : ""
            } `}
            id="order-wrap"
          >
            <div className={cx("sub-item")}>
              <a
                href="/product/order"
                className={cx("sub-item-link")}
                id="order"
                onClick={(event) => handleClick(event, "product/order")}
              >
                Đơn hàng
              </a>
            </div>
          </li>
        </div>
        <li className="nav-item" id="ht-wrap">
          <div className={cx("item-wrap", "nav-item-down")}>
            <div className={cx("nav-item-left")}>
              <FontAwesomeIcon
                icon={faClockRotateLeft}
                className={cx("nav-icon")}
              />
              <div className={cx("nav-item-name")} id="ht">
                Lịch sử
              </div>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={
                  localStorage.getItem("history-btn-sub-menu")
                    ? cx("nav-icon", "icon-down", "active-btn-down")
                    : cx("nav-icon", "icon-down")
                }
                id="history-btn"
                onClick={handleClickSubMenu}
              />
            </div>
          </div>
        </li>
        <div
          className={cx("nav-item-sub")}
          id="history-btn-sub-menu"
          style={
            localStorage.getItem("history-btn-sub-menu")
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <li
            className={`nav-item ${
              props.path === "activity" ? cx("active") : ""
            } `}
            id="activity-wrap"
          >
            <div className={cx("sub-item")}>
              <a
                href="/activity"
                className={cx("sub-item-link")}
                id="activity"
                onClick={(event) => handleClick(event, "activity")}
              >
                Nhật ký hoạt động
              </a>
            </div>
          </li>
          <li
            className={`nav-item ${
              props.path === "balance" ? cx("active") : ""
            } `}
            id="balance-wrap"
          >
            <div className={cx("sub-item")}>
              <a
                href="/balance"
                className={cx("sub-item-link")}
                id="balance"
                onClick={(event) => handleClick(event, "balance")}
              >
                Biến động số dư
              </a>
            </div>
          </li>
        </div>
        <li
          className={`nav-item ${props.path === "member" ? cx("active") : ""} `}
          id="mb-wrap"
        >
          <div className={cx("item-wrap")}>
            <FontAwesomeIcon icon={faUsers} className={cx("nav-icon")} />
            <a
              href="/member"
              className={cx("nav-item-name")}
              id="mb"
              onClick={(event) => handleClick(event, "member")}
            >
              Thành viên
            </a>
          </div>
        </li>
        <li
          className={`nav-item ${
            props.path === "payment" ? cx("active") : ""
          } `}
          id="p-wrap"
        >
          <div className={cx("item-wrap")}>
            <FontAwesomeIcon icon={faCreditCard} className={cx("nav-icon")} />
            <a
              href="/payment"
              className={cx("nav-item-name")}
              id="p"
              onClick={(event) => handleClick(event, "payment")}
            >
              Phương thức thanh toán
            </a>
          </div>
        </li>
        <li
          className={`nav-item ${props.path === "post" ? cx("active") : ""} `}
          id="post-wrap"
        >
          <div className={cx("item-wrap")}>
            {" "}
            <FontAwesomeIcon icon={faClipboard} className={cx("nav-icon")} />
            <a
              href="/post"
              className={cx("nav-item-name")}
              id="post"
              onClick={(event) => handleClick(event, "post")}
            >
              Bài viết
            </a>
          </div>
        </li>
        <li
          className={`nav-item ${
            props.path === "discount" ? cx("active") : ""
          } `}
          id="discount-wrap"
        >
          <div className={cx("item-wrap")}>
            <FontAwesomeIcon icon={faRug} className={cx("nav-icon")} />
            <a
              href="/discount"
              className={cx("nav-item-name")}
              id="discount"
              onClick={(event) => handleClick(event, "discount")}
            >
              Khuyến mãi/ Giảm giá
            </a>
          </div>
        </li>
        <li
          className={`nav-item ${
            props.path === "notification" ? cx("active") : ""
          } `}
          id="noti-wrap"
        >
          <div className={cx("item-wrap")}>
            <FontAwesomeIcon icon={faBell} className={cx("nav-icon")} />
            <a
              href="/notification"
              className={cx("nav-item-name")}
              id="noti"
              onClick={(event) => handleClick(event, "notification")}
            >
              Thông báo
            </a>
          </div>
        </li>
        <li
          className={`nav-item ${
            props.path === "setting" ? cx("active") : ""
          } `}
          id="setting-wrap"
        >
          <div className={cx("item-wrap")}>
            <FontAwesomeIcon icon={faGear} className={cx("nav-icon")} />
            <a
              href="/setting"
              className={cx("nav-item-name")}
              id="setting"
              onClick={(event) => handleClick(event, "setting")}
            >
              Cài đặt
            </a>
          </div>
        </li>
      </div>
    </nav>
  );
}

export default Nav;
