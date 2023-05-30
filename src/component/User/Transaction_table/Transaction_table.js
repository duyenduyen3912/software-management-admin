import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from "classnames/bind";
import styles from "./TransactionTable.module.scss";

const cx = classNames.bind(styles);
function Transaction() {
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
