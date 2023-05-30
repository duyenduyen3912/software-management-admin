import Header from "../../../component/User/Header/header";
import Nav from "../../../component/User/Nav/nav";
import List from "../../../component/User/List/List";
import Detail from "../../../component/User/Detail/Detail";
import Transaction from "../../../component/User/Transaction_table/Transaction_table";
import Slider from "../../../component/User/Slider/Slider";
import Detail_post from "../../../component/User/Detail_post/Detail_post";
import List_post from "../../../component/User/List_post/List_post";
import Button from "../../../component/User/button/btn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from "classnames/bind";
import styles from "../Page.module.scss";
import { useLocation } from "react-router-dom";

const cx = classNames.bind(styles);
function List_page() {
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
            <List />
            {/* <Detail_post/> */}
          </div>
        </Col>
      </Row>
      {/* <Contact/> */}
    </>
  );
}

export default List_page;
