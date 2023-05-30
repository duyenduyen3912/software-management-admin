import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Account.module.scss";
import { Col, Row, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import Button from "../button/btn";
// import Nav from "../../../component/User/Nav";

const cx = classNames.bind(styles);
function Account() {
  var myHeaders = new Headers();
  myHeaders.append("Host", "chippisoft.com");
  myHeaders.append("Authorization", localStorage.getItem("jwt"));

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const [infor, setInfor] = useState([
    {
      fullname: "",
      phone: "",
      email: "",
      username: "",
      money:"",
      total_money:"",
    },
  ]);
  const fetchAccount = () => {
    fetch("https://chippisoft.com/API/User.php", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        const jsonObj = JSON.parse(result);
        console.log(jsonObj.data);
        setInfor(jsonObj.data);
        
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(fetchAccount, []);
const total_money = Number(infor[0].total_money) ;
const money = Number(infor[0].money) ;
const res = total_money-money;
  return (
    <div className={cx("wrapper")}>
      {/* <Row>
        <Col xl={2}>
          <Nav />
        </Col> */}
      {/* <Col xl={10}> */}
      <div className={cx("container-wrapper")}>
        <Row>
          <Col xl={4}>
            <div className={cx("account-about")}>
              <div className={cx("user-infor")}>
                <div className={cx("about-img-wrap")}>
                  <img
                    className={cx("about-img")}
                    src={require("../../../assets/avatar.jpg")}
                  />
                </div>
                <div className={cx("about-tick")}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={cx("about-icon")}
                  />
                </div>
              </div>

              <div className={cx("about-name")}>{infor[0].fullname}</div>
              <div className={cx("about-email")}>{infor[0].email}</div>
              <div className={cx("about-spending")}>
                <div className={cx("spending")}>
                  <div className={cx("spending-number")}>{infor[0].total_money}</div>
                  <div className={cx("spending-text")}>Đã nạp</div>
                </div>
                <div className={cx("spending-item")}>
                  <div className={cx("spending-number")}>{res}</div>
                  <div className={cx("spending-text")}>Đã mua</div>
                </div>
                <div className={cx("spending")}>
                  <div className={cx("spending-number")}>{infor[0].money}</div>
                  <div className={cx("spending-text")}>Số dư</div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={7}>
            <div className={cx("account-infor")}>
              <div className={cx("noti-heading")}>Thông tin cá nhân</div>
              <div className={cx("noti-item")}>
                <div className={cx("noti-name")}>Username</div>
                <input
                  type="text"
                  className={cx("noti-input")}
                  defaultValue={infor[0].username}
                />
              </div>
              <div className={cx("noti-item")}>
                <div className={cx("noti-name")}>Họ và tên</div>
                <input
                  type="text"
                  className={cx("noti-input")}
                  defaultValue={infor[0].fullname}
                />
              </div>
              <div className={cx("noti-item")}>
                <div className={cx("noti-name")}>Số điện thoại</div>
                <input
                  type="text"
                  className={cx("noti-input")}
                  defaultValue={infor[0].phone}
                />
              </div>
              <div className={cx("noti-item")}>
                <div className={cx("noti-name")}>Gmail</div>
                <input
                  type="text"
                  className={cx("noti-input")}
                  defaultValue={infor[0].email}
                />
              </div>
              <div className={cx("update-btn")}>
                 <Button
                className={cx("btn-see-detail")}
              >
                <p className={cx("text-produce-btn")}>Cập nhật thông tin</p>
              </Button>
              </div>
             
            </div>
          </Col>
        </Row>
        <div className={cx("table-wrap")}>
          <Table className={cx("table-custom")}>
            <thead className={cx("table-heading")}>
              <tr className={cx("table-line")}>
                <th className={cx("table-col-heading")}>
                  <div className={cx("table-col-item")}> #</div>
                </th>
                <th className={cx("table-col-heading")}>
                  <div className={cx("table-col-item")}> Mã giao dịch</div>
                </th>
                <th className={cx("table-col-heading")}>
                  <div className={cx("table-col-item")}> Tên sản phẩm</div>
                </th>
                <th className={cx("table-col-heading")}>
                  <div className={cx("table-col-item")}> Giá tiền</div>
                </th>
                <th className={cx("table-col-heading")}>
                  <div className={cx("table-col-item")}> Thời gian</div>
                </th>
                <th className={cx("table-col-heading")}>
                  <div className={cx("table-col-item")}> Thao tác</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={cx("table-line-item")}>
                <td className={cx("table-col")}>
                  <div className={cx("table-col-item")}> 1</div>
                </td>
                <td className={cx("table-col")}>
                  <div className={cx("table-col-item")}> GD116432472</div>
                </td>
                <td className={cx("table-col")}>
                  <div className={cx("table-col-item")}>
                    {" "}
                    Adobe Photoshop CS6
                  </div>
                </td>
                <td className={cx("table-col")}>
                  <div className={cx("table-col-item")}> 2.000.000$</div>
                </td>
                <td className={cx("table-col")}>
                  <div className={cx("table-col-item")}> 20:14 22/02/2023</div>
                </td>
                <td className={cx("table-col")}>
                  <button className={cx("btn-col")}> Download </button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      {/* </Col>
      </Row> */}
    </div>
  );
}

export default Account;
