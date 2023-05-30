import classNames from "classnames/bind";
import styles from "./Nav.module.scss";
import {
  faDollarSign,
  faCodePullRequest,
  faBarsStaggered,
  faClockRotateLeft,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faClipboard,
  faUser,
  faCircleUser,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "../button/btn";
import { useEffect } from "react";

const cx = classNames.bind(styles);
function Nav(props) {
  const navigate = useNavigate();

  // handleClick
  const handleClick = (event, name) => {
    event.preventDefault();
    const elementClicked = event.target;
    const elementId = elementClicked.id;
    console.log(elementId);
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
    console.log(elementId);
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
  var isAdmin = localStorage.getItem("isAdmin");
  console.log(isAdmin);
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
        <div className={cx("nav-chippi")} onClick={() => navigate("/")}>
          <div className={cx("nav-top-logo")}>
            <img
              className={cx("nav-top-logo-img")}
              src={require("../../../assets/logo.jpg")}
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

      <div className={cx("nav-list")}>
        <li className="nav-item" id="pd-wrap">
          <div
            className={cx("item-wrap", "nav-item-down")}
             onClick={()=> navigate("/list")}
          >
            <div className={cx("nav-item-left")}>
              <FontAwesomeIcon
                icon={faBarsStaggered}
                className={cx("nav-icon")}
              />
              <div className={cx("nav-item-name")} id="pd">
                Sản phẩm
              </div>
            </div>

          </div>
        </li>
          <li
          className={`nav-item ${props.path === "order" ? cx("active") : ""} `}
          id="mb-wrap"
        >
          <div className={cx("item-wrap")}>
            <FontAwesomeIcon icon={ faClockRotateLeft} className={cx("nav-icon")} />
            <a
              href="/member"
              className={cx("nav-item-name")}
              id="mb"
              onClick={(event) => handleClick(event, "order")}
            >
              Giao dịch gần đây
            </a>
          </div>
        </li>
        <li
          className={`nav-item ${props.path === "pay" ? cx("active") : ""} `}
          id="mb-wrap"
        >
          <div className={cx("item-wrap")}>
            <FontAwesomeIcon icon={faDollarSign} className={cx("nav-icon")} />
            <a
              href="/member"
              className={cx("nav-item-name")}
              id="mb"
              onClick={(event) => handleClick(event, "pay")}
            >
              Nạp tiền
            </a>
          </div>
        </li>
        <li
          className={`nav-item ${
            props.path === "listPost" ? cx("active") : ""
          } `}
          id="ht-wrap"
        >
          <div
            className={cx("item-wrap", "nav-item-down")}
            onClick={() => navigate("/listPost")}
          >
            <div className={cx("nav-item-left")}>
              <FontAwesomeIcon icon={faClipboard} className={cx("nav-icon")} />
              <div className={cx("nav-item-name")} id="ht">
                Bài viết
              </div>
            </div>
          </div>
        </li>
        <li
          className={`nav-item ${
            props.path === "contact" ? cx("active") : ""
          } `}
          id="p-wrap"
        >
          <div className={cx("item-wrap")}>
            <FontAwesomeIcon icon={faUser} className={cx("nav-icon")} />
            <a
              href="/pay"
              className={cx("nav-item-name")}
              id="p"
              onClick={(event) => handleClick(event, "contact")}
            >
              Liên hệ
            </a>
          </div>
        </li>
        <li
          className={`nav-item ${
            props.path === "request" ? cx("active") : ""
          } `}
          id="p-wrap"
        >
          <div className={cx("item-wrap")}>
            <FontAwesomeIcon
              icon={faCodePullRequest}
              className={cx("nav-icon")}
            />
            <a
              href="https://fb.com/chippi.tool"
              className={cx("nav-item-name")}
              id="p"
            //  onClick={(event) => handleClick(event, "https://fb.com/chippi.tool")}
            >
              Code tool theo yêu cầu
            </a>
          </div>
        </li>
        {isAdmin === "1" && (
          <li id="p-wrap">
            <div className={cx("item-wrap")}>
              <FontAwesomeIcon icon={faCircleUser} className={cx("nav-icon")} />
              <a
                href="/pay"
                className={cx("nav-item-name")}
                id="p"
                onClick={(event) => handleClick(event, "dashboard")}
              >
                ADMIN
              </a>
            </div>
          </li>
        )}
      </div>
    </nav>
  );
}

export default Nav;
