import Contact from "../../../component/User/contact/Contact";
import Nav from "../../../component/User/Nav/nav";
import Header from "../../../component/User/Header/header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Detail_post from "../../../component/User/Detail_post/Detail_post";
import classNames from "classnames/bind";
import styles from "../Page.module.scss";
import { useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

function Post_page_detail() {
  const location = useLocation();
  const name = location.pathname;
  let router = name.substring(1);

  return (
    <>
      <Row style={{ padding: "0" }}>
        <Header />
      </Row>
      <Row style={{ padding: "0" }}>
        <div className={cx("col-custom")}>
          <Nav path={router} />
        </div>

        <Col lg={12} id="content">
          <div className={cx("content")}>
            <Detail_post />
            {/* <Detail_post/> */}
          </div>
        </Col>
      </Row>
      {/* <Contact/> */}
    </>
  );
}

export default Post_page_detail;
