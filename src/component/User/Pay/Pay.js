import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import QRCode from "react-qr-code";
import classNames from "classnames/bind";
import styles from "./Pay.module.scss";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);
function Pay() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const [pay, setPay] = useState([
    {
      short_name: "",
      account_name: "",
      account_number: "",
      status: "",
    },
  ]);
  useEffect(() => {
    fetch("http://chippisoft.com/API/Statusbanking.php", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        const jsonObj = JSON.parse(result);
        console.log(jsonObj.data);
        setPay(jsonObj.data);
      })
      .catch((error) => console.log("error", error));
  }, []);
  //mã QR
  var myHeaders = new Headers();
  myHeaders.append("Authorization", localStorage.getItem("jwt"));
  var requestOptionsQR = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const statusBank = pay[0].status;
  console.log(pay);
  return (
    <>
      <div className={cx("block")}>
        <div className={cx("pay")}>
          <div className={cx("title")}>NẠP QUA BANK</div>
          <div className={cx("deposit-methods")}>
            <Row>
              <Col xl={6}>
                <div className={cx("account-infor")}>
                  <div className={cx("sub-title")}>
                    Nạp tiền qua số tài khoản
                  </div>
                  <div className={cx("account-content")}>
                    <div className={cx("bank")}>
                      <span className={cx("bank-span")}>NGÂN HÀNG</span>
                      <span className={cx("bank-span")}>MB bank</span>
                    </div>
                    <div className={cx("account-holder")}>
                      <span className={cx("account-holder-span")}>
                        Chủ tài khoản
                      </span>
                      <span className={cx("account-holder-span")}>
                        KIM THANH DUNG
                      </span>
                    </div>
                    <div className={cx("account-number")}>
                      <span className={cx("account-number-span")}>
                        Số tài khoản
                      </span>
                      <span className={cx("account-number-span")}>
                        889923062001
                      </span>
                    </div>
                    <div className={cx("content")}>
                      <span className={cx("content-span")}>
                        Nội dung chuyển khoản
                      </span>
                      <span className={cx("content-span")}>
                        {`CPS ${localStorage.getItem("username")}`}
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={6}>
                <div className={cx("sub-title")}>Nạp tiền qua mã QR</div>
                <div>
                  <img
                    src={`https://api.vietqr.io/Mbbank/8899923062001/0/CPS%20${localStorage.getItem(
                      "username"
                    )}{/vietqr_net_2.jpg?accountName=KIM%20THANH%20DUNG`}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className={cx("warning")}>
            <div className={cx("warning-title")}>
              <FontAwesomeIcon icon={faBell} /> Lưu ý
            </div>
            <div className={cx("warning-content")}>
              <ul>
                <li>
                  Chú ý: Tài khoản bank không cố định.Vui lòng kiểm tra lại tên
                  và số tài khoản đang hiển thị trước khi thực hiện giao
                  dịch.Xin cảm ơn.
                </li>
                <li>
                  Quý khách ghi đúng thông tin nạp tiền thì tài khoản sẽ được
                  cộng tự động sau khi giao dịch thành công.
                </li>
                <li>
                  Nếu quý khách muốn nạp bằng phương thức khác ngoài ngân hàng,
                  Momo, thẻ cào điện thoại, hoặc cần hỗ trợ vui lòng liên hệ
                  Phone/Zalo : 0888.1651.96
                </li>
                <li>
                  Quý khách thực hiện chuyển tiền qua dịch vụ quốc tế tới ngân
                  hàng Việt Nam vui lòng chờ từ 3-5 ngày (tùy vào dịch vụ /
                  không tính Thứ 7 và Chủ Nhật)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pay;
