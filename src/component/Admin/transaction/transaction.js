import Table from "react-bootstrap/Table";
import classNames from "classnames/bind";
import Show from "../Show";
import Heading from "../Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
import styles from "../transaction/Transaction.module.scss";
import { api } from "../../../constants";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);
function Transaction() {
  const [data, setData] = useState([]);
  var isAdmin = localStorage.getItem("isAdmin");
  var myHeaders = new Headers();
  myHeaders.append("Host", "chippisoft.com");
  myHeaders.append("Authorization", localStorage.getItem("jwt"));

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  useEffect(() => {
    fetch(api.GetTransaction, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const jsonObj = JSON.parse(result);
        setData(jsonObj.id);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={cx("container-wrapper")}>
      <Heading title={"Giao dịch gần đây"} />
      <Show />
      <div className={cx("table-wrap")}>
        <Table className={cx("table-custom")}>
          <thead className={cx("table-heading")}>
            <tr className={cx("table-line")}>
              <th className={cx("table-col-heading")}>
                <div className={cx("table-col-item")}> #</div>
              </th>
              <th className={cx("table-col-heading")}>
                <div className={cx("table-col-item")}> Họ và tên</div>
              </th>
              <th className={cx("table-col-heading")}>
                <div className={cx("table-col-item")}> Số tiền trước</div>
              </th>
              <th className={cx("table-col-heading")}>
                <div className={cx("table-col-item")}> Số tiền thay đổi</div>
              </th>
              <th className={cx("table-col-heading")}>
                <div className={cx("table-col-item")}> Số tiền hiện tại</div>
              </th>
              <th className={cx("table-col-heading")}>
                <div className={cx("table-col-item")}> Thời gian</div>
              </th>
              <th className={cx("table-col-heading")}>
                <div className={cx("table-col-item")}> Nội dung</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr className={cx("table-line-item")} key={index}>
                  <td className={cx("table-col")}>
                    <div className={cx("table-col-item")}> {++index}</div>
                  </td>
                  <td className={cx("table-col")}>
                    <div className={cx("table-col-item")}> {item.user_id}</div>
                  </td>
                  <td className={cx("table-col")}>
                    <div className={cx("table-col-item", "prev-money")}>
                      {item.before_money}
                    </div>
                  </td>
                  <td className={cx("table-col")}>
                    <div className={cx("table-col-item", "add-money")}>
                      {item.change_money}
                    </div>
                  </td>
                  <td className={cx("table-col")}>
                    <div className={cx("table-col-item", "total-money")}>
                      {item.after_money}
                    </div>
                  </td>
                  <td className={cx("table-col")}>
                    <div className={cx("table-col-item")}>{item.time}</div>
                  </td>
                  <td className={cx("table-col")}>
                    <div className={cx("table-col-item")}>
                      {item.description}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Transaction;
