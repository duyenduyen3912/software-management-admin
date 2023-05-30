import Contact from "../../../component/User/contact/Contact";
import Nav from "../../../component/User/Nav/nav";
import Header from "../../../component/User/Header/header";
import Pay from "../../../component/User/Pay/Pay";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from "classnames/bind";
import styles from "../Page.module.scss";
import { useLocation } from "react-router-dom";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Title from "../../../component/User/Title";

const cx = classNames.bind(styles);
function Pay_page() {
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
            <Title title={"Nạp tiền"} icon ={faDollarSign}/>
            <Pay />
            {/* <Detail_post/> */}
          </div>
        </Col>
      </Row>
      {/* <Contact/> */}
    </>
  );
}

export default Pay_page;
