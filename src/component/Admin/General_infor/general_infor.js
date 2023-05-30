import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faPercent, faCoins } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from "classnames/bind";
import styles from "../General_infor/General.module.scss";
import { useEffect, useState } from "react";
import { api } from "../../../constants";
const cx = classNames.bind(styles);

function General() {
  const [totalIncome, setTotalIncome] = useState("");
  const [memberCount, setMemberCount] = useState("");
  const [softwareSold, setSoftwareSold] = useState("");
  var myHeaders = new Headers();
  myHeaders.append("Host", "chippisoft.com");
  myHeaders.append("Authorization", localStorage.getItem("jwt"));

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  useEffect(() => {
    fetch(api.GetMemberCount, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const jsonObj = JSON.parse(result);
        setMemberCount(jsonObj.id.soluong);
      })
      .catch((error) => console.log("error", error));

    fetch(api.GetTotalIncome, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const jsonObj = JSON.parse(result);
        setTotalIncome(jsonObj.id.soluong);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <Row className={cx("general")}>
      <Col xs={12} sm={6} md={6} lg={3} className={cx("block-total")}>
        <div className={cx("block-wrap")}>
          <div className={cx("text")}>
            <p className={cx("title")}>Tổng thu nhập</p>
            <p className={cx("quantity")}>${totalIncome}</p>
          </div>
          <div className={cx("block-icon")}>
            {" "}
            <FontAwesomeIcon
              className={cx("icon")}
              style={{ color: "#7366FF" }}
              icon={faBox}
            />
          </div>
        </div>
      </Col>
      <Col xs={12} sm={6} md={6} lg={3} className={cx("block-total")}>
        <div className={cx("block-wrap")}>
          <div className={cx("text")}>
            <p className={cx("title")}>Tổng thành viên </p>
            <p className={cx("quantity")}>{memberCount}</p>
          </div>
          <div className={cx("block-icon")}>
            {" "}
            <FontAwesomeIcon
              className={cx("icon")}
              style={{ color: "#FFAA05" }}
              icon={faUser}
            />
          </div>
        </div>
      </Col>
      <Col xs={12} sm={6} md={6} lg={3} className={cx("block-total")}>
        <div className={cx("block-wrap")}>
          {" "}
          <div className={cx("text")}>
            <p className={cx("title")}>Tài khoản đã bán </p>
            <p className={cx("quantity")}>35</p>
          </div>
          <div className={cx("block-icon")}>
            {" "}
            <FontAwesomeIcon
              className={cx("icon")}
              style={{ color: "#FF3364" }}
              icon={faPercent}
            />
          </div>
        </div>
      </Col>
      <Col xs={12} sm={6} md={6} lg={3} className={cx("block-total")}>
        <div className={cx("block-wrap")}>
          <div className={cx("text")}>
            <p className={cx("title")}>Doanh thu đơn hàng </p>
            <p className={cx("quantity")}>${totalIncome}</p>
          </div>
          <div className={cx("block-icon")}>
            {" "}
            <FontAwesomeIcon
              className={cx("icon")}
              style={{ color: "#54BA4A" }}
              icon={faCoins}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default General;
