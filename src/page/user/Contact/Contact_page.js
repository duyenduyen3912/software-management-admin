import Contact from "../../../component/User/contact/Contact";
import Nav from "../../../component/User/Nav/nav";
import Header from "../../../component/User/Header/header";
import Title from "../../../component/User/Title";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from "classnames/bind";
import styles from "../Page.module.scss";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import { useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

function Contact_page() {
  const location = useLocation();
  const name = location.pathname;
  let router = name.substring(1);

  return (
    <>
      <Row>
        <Header />
      </Row>
      <Row style={{ padding: "0" }}>
        <div className={cx("col-custom")}>
          <Nav path={router} />
        </div>

        <Col lg={12} id="content">
          <div className={cx("content")}>
            <Title title={"Liên hệ"} icon={faUser} />
            <Contact />
            {/* <Detail_post/> */}
          </div>
        </Col>
      </Row>
      {/* <Contact/> */}
    </>
  );
}

export default Contact_page;
