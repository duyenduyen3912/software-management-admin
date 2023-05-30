import { useEffect, useState } from "react";
import Button from "../Button/btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBolt,
  faBell,
  faChevronDown,
  faUser,
  faArrowRightFromBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from "classnames/bind";
import styles from "../Header/Header.module.scss";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

const Header = () => {
  const [showDropdownNotification, setShowDropdownNotification] =
    useState(false);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const [showInputFind, setShowInputFind] = useState(false);
  const navigate = useNavigate();

  function shortenText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + "...";
    } else {
      return text;
    }
  }

  const _handleClick = () => {
    const nav = document.getElementById("nav");
    nav.style.display = "block";
  };

  //Resize window
  useEffect(() => {
    const search = document.getElementById("search");
    const inputSearch = document.getElementById("input-search");
    const searchBlock = document.getElementById("search-block");
    const handleResize = () => {
      if (window.innerWidth < 992) {
        search.addEventListener("click", () => {
          inputSearch.classList.remove(cx("hide"));
          inputSearch.classList.add(cx("show-input"));
        });
        inputSearch.addEventListener("mouseleave", function (event) {
          inputSearch.classList.remove(cx("show-input"));
          inputSearch.classList.add(cx("hide"));
        });
      } else {
        searchBlock.style.display = "flex";
      }
    };
    if (window.innerWidth < 992) {
      search.addEventListener("click", () => {
        inputSearch.classList.remove(cx("hide"));
        inputSearch.classList.add(cx("show-input"));
      });
      inputSearch.addEventListener("mouseleave", function (event) {
        inputSearch.classList.remove(cx("show-input"));
        inputSearch.classList.add(cx("hide"));
      });
    } else {
      searchBlock.style.display = "flex";
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={cx("header")}>
      <Row className={cx("header-row")}>
        <Col xs={2} className={cx("btn-nav")}>
          <FontAwesomeIcon
            icon={faBars}
            className={cx("icon-nav")}
            onClick={_handleClick}
          />
        </Col>
        {/* <Col sm={6} xs={8}>
          <div className={cx("header-btn")}>
            <Button className={cx("tool-btn ")}>
              <p className={cx("text")}>
                <FontAwesomeIcon className={cx("icon-btn")} icon={faBolt} />{" "}
                CODE TOOL THEO YÊU CẦU
              </p>
            </Button>
            <Button className={cx("recharge-btn header-btn-global")}>
              <p className={cx("text")}>
                <FontAwesomeIcon className={cx("icon-btn")} icon={faBolt} />
                NẠP TIỀN
              </p>
            </Button>
          </div>
        </Col> */}
        <Col sm={10} xs={10} style={{ padding: "0px" }}>
          <div className={cx("header-icon")}>
            <div className={cx("input-block")} id="search-block">
              <input
                className={cx("search")}
                placeholder="Tìm kiếm"
                id="input-search"
              />
              <FontAwesomeIcon
                className={cx("icon-search")}
                icon={faMagnifyingGlass}
                id="search"
              />
            </div>

            <div
              className={cx("menu")}
              onMouseDown={() => setShowDropdownNotification(true)}
              onMouseLeave={() => setShowDropdownNotification(false)}
            >
              <FontAwesomeIcon
                className={cx("icon", "icon-notification")}
                icon={faBell}
              />
              <div
                className={cx(
                  `${showDropdownNotification ? "show" : "not-show"}`
                )}
              >
                {" "}
                <ul className={cx("list-item-user")}>
                  <li className={cx("hower-li-noti")}>
                    {shortenText(
                      "Chương trình khuyến mãi khi dowload những app sau:",
                      30
                    )}
                  </li>
                  <li className={cx("hower-li-noti")}>
                    {" "}
                    {shortenText(
                      "Bạn đã đăng nhập từ một thiết bị khác, vui lòng kiểm tra lại tài khoản của",
                      30
                    )}
                  </li>
                  <li className={cx("hower-li-noti")}>Thông báo 3: admin</li>
                  <li className={cx("hower-li-noti")}>Thông báo 2</li>
                </ul>
              </div>
            </div>

            <div className={cx("block-admin")}>
              <img
                className={cx("avatar-logo")}
                src={require("../../../assets/avatar.jpg")}
              />
              <div className={cx("admin")}>
                <p className={cx("admin-name")}>
                  {localStorage.getItem("username")}
                </p>
                <div
                  className={cx("dropdown")}
                  onMouseDown={() => setShowDropdownMenu(true)}
                  onMouseLeave={() => setShowDropdownMenu(false)}
                >
                  <p className={cx("sub-text")}>
                    Admin{" "}
                    <FontAwesomeIcon
                      className={cx("icon")}
                      icon={faChevronDown}
                    />
                  </p>
                  <div
                    className={cx(`${showDropdownMenu ? "show" : "not-show"}`)}
                  >
                    <ul className={cx("list-item-user")}>
                      <li
                        className={cx("hower-li")}
                        onClick={() => navigate("/accountUser")}
                      >
                        <FontAwesomeIcon icon={faUser} />
                        <label className={cx("menu-text")}>
                          {" "}
                          Thông tin cá nhân{" "}
                        </label>
                      </li>
                      <li
                        className={cx("hower-li")}
                        onClick={() => {
                          localStorage.removeItem("jwt");
                          localStorage.removeItem("isAdmin");
                          navigate("/sign");
                        }}
                      >
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                        <label className={cx("menu-text")}> Đăng xuất </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Header;
