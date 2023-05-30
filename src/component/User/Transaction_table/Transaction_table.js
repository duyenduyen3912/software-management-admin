import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from "classnames/bind";
import styles from "./TransactionTable.module.scss";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);
function Transaction() {
  const [allinvoices, SetAllinvoices] = useState([]);
  var myHeaders = new Headers();
  myHeaders.append("Host", "chippisoft.com");
  myHeaders.append("Authorization", localStorage.getItem("jwt"));
  myHeaders.append("Cookie", "PHPSESSID=49921775c6046dc6cddf769a987dd214");

  var formdata = new FormData();

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    //  body: formdata,
    redirect: "follow",
  };
  useEffect(() => {
    fetch("https://chippisoft.com/API/Getallinvoices.php", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        const jsonObj = JSON.parse(result);
        console.log(jsonObj.data);
        SetAllinvoices(jsonObj.data)
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className={cx("block")}>
      <Row>
        <Col>
          <div className={cx("least-transaction ")}>
            {" "}
            <h3>Giao dịch gần đây</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá tiền</th>
                  <th>Thời gian</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Adobe Photoshop CS6</td>
                  <td>2.000.000$</td>
                  <td>20:14 22/02/2023</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Adobe Photoshop CS6</td>
                  <td>2.000.000$</td>
                  <td>20:14 22/02/2023</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>LAdobe Photoshop CS6</td>
                  <td>2.000.000$</td>
                  <td>20:14 22/02/2023</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
        <Col>
          <div className={cx("least-recharge table")}>
            {" "}
            <h3>Giao dịch gần đây</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá tiền</th>
                  <th>Thời gian</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Adobe Photoshop CS6</td>
                  <td>2.000.000$</td>
                  <td>20:14 22/02/2023</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Adobe Photoshop CS6</td>
                  <td>2.000.000$</td>
                  <td>20:14 22/02/2023</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>LAdobe Photoshop CS6</td>
                  <td>2.000.000$</td>
                  <td>20:14 22/02/2023</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Transaction;
