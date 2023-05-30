import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faEdit,
  faEye,
  faFileExcel,
  faPlus,
  faRightFromBracket,
  faSave,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { api } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

export const Edit = (prop) => {
  const navigate = useNavigate();
  const handleEdit = (id) => {
    if (prop.action === "product") {
      navigate(`/product/${id}`);
    } else if (prop.action === "categories") {
      navigate(`/product/category/${id}`);
    }
  };
  return (
    <button
      className={cx("btn-wrap", "action-btn", "btn-edit")}
      onClick={() => handleEdit(prop.id)}
    >
      <FontAwesomeIcon icon={faEdit} className={cx("btn-icon")} />
      <span className={cx("btn-name")}>Edit</span>
    </button>
  );
};

export const Add = (props) => {
  const navigate = useNavigate();

  var myHeaders = new Headers();
  myHeaders.append("Authorization", localStorage.getItem("jwt"));
  myHeaders.append("Host", "chippisoft.com");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  const _handleClick = (data, action) => {
    if (action === "Redirect") {
      navigate(`/${data}`);
    } else if (action === "Update") {
      console.log(data);
      var urlencoded = new URLSearchParams();
      urlencoded.append("name", data.name);
      urlencoded.append("stt", "1");
      urlencoded.append("category_id", data.category_id);
      urlencoded.append("status", data.status);
      urlencoded.append("price", data.price);
      urlencoded.append("version", data.version);
      urlencoded.append("discount", data.discount);
      urlencoded.append("content", data.content);
      urlencoded.append("id", data.id);
      urlencoded.append("hash", "null");
      // urlencoded.append("image", data.image);
      fetch(`${api.UpdateProduct}`, {
        ...requestOptions,
        body: urlencoded,
      })
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.log("error", error));
      navigate(`/product/list`);
    } else if (action === "Add") {
      var urlencoded = new URLSearchParams();
      urlencoded.append("name", data.name);
      urlencoded.append("stt", "1");
      urlencoded.append("category_id", data.category_id);
      urlencoded.append("status", data.status);
      urlencoded.append("price", data.price);
      urlencoded.append("version", data.version);
      urlencoded.append("discount", data.discount);
      urlencoded.append("content", data.content);
      urlencoded.append("hash", "null");
      // urlencoded.append("image", data.image);
      fetch(`${api.AddProduct}`, {
        ...requestOptions,
        body: urlencoded,
      })
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.log("error", error));
      navigate(`/product/list`);
    } else if (action === "AddCategories") {
      var urlencoded = new URLSearchParams();
      urlencoded.append("name", data.name);
      urlencoded.append("description", data.description);
      urlencoded.append("status", data.status);
      fetch(api.AddCategory, {
        ...requestOptions,
        body: urlencoded,
      })
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.log("error", error));
      navigate(`product/category`);
    } else if (action === "UpdateCategories") {
      var urlencoded = new URLSearchParams();
      urlencoded.append("name", data.name);
      urlencoded.append("description", data.description);
      urlencoded.append("status", data.status);
      fetch(api.AddCategory, {
        ...requestOptions,
        body: urlencoded,
      })
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.log("error", error));
      navigate(`product/category`);
    }
  };
  return (
    <button
      className={cx("btn-wrap", "btn-add")}
      onClick={() => _handleClick(props.data, props.action)}
    >
      <FontAwesomeIcon
        icon={props.icon ? props.icon : faPlus}
        className={cx("btn-icon")}
      />
      <span className={cx("btn-name")}>{props.name}</span>
    </button>
  );
};

export const Delete = (prop) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const jwt = useSelector((state) => state.jwt);

  const handleDelete = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("authorization", localStorage.getItem("jwt"));
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Host", "chippisoft.com");

    var urlencoded = new URLSearchParams();
    urlencoded.append("id", id);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
    if (prop.name === "product") {
      fetch(api.DeleteProduct, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } else if (prop.name === "categories") {
      fetch(api.DeleteCategories, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } else if (prop.name === "member") {
      fetch(api.DeleteMember, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }

    setShow(false);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  return (
    <>
      {" "}
      <button
        className={cx("btn-wrap", "action-btn", "btn-delete")}
        onClick={() => handleShow(true)}
      >
        <FontAwesomeIcon icon={faTrash} className={cx("btn-icon")} />
        <span className={cx("btn-name")}>Xoá</span>
      </button>
      <Modal show={show} onHide={handleClose} className={cx("modal")}>
        <div className={cx("modal-wrapper")}>
          <Modal.Header closeButton className={cx("modal-header")}>
            <Modal.Title className={cx("modal-heading")}>
              Xác nhận xoá{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className={cx("modal-body")}>
            Bạn có chắc chắn muốn xoá không ?
          </Modal.Body>
          <Modal.Footer className={cx("modal-btn")}>
            <button
              variant="secondary"
              onClick={handleClose}
              className={cx("btn-wrap")}
            >
              <span className={cx("btn-close")}>Đóng</span>
            </button>
            <button
              variant="primary"
              onClick={() => handleDelete(prop.id)}
              className={cx("btn-wrap", "btn-delete")}
            >
              <span className={cx("btn-name")}>Xoá</span>
            </button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export const Logout = () => {
  return (
    <button className={cx("btn-wrap", "action-btn", "btn-logout")}>
      <FontAwesomeIcon icon={faRightFromBracket} className={cx("btn-icon")} />
      <span className={cx("btn-name")}>Logout </span>
    </button>
  );
};

export const Reset = () => {
  return (
    <button className={cx("btn-reset", "btn-wrap")}>
      <FontAwesomeIcon className={cx("btn-icon")} icon={faArrowsRotate} />
      <span className={cx("btn-name")}>Reset top nạp</span>{" "}
    </button>
  );
};

export const Export = () => {
  return (
    <button className={cx("btn-excel", "btn-wrap")}>
      <FontAwesomeIcon className={cx("btn-icon")} icon={faFileExcel} />
      <span className={cx("btn-name")}>Xuất file excel</span>{" "}
    </button>
  );
};

export const View = (prop) => {
  return (
    <a href={`https://chippisoft.com/detail/${prop.id}`}>
      <button className={cx("btn-view", "btn-wrap")}>
        <FontAwesomeIcon className={cx("btn-icon")} icon={faEye} />
        <span className={cx("btn-name")}>Xem</span>{" "}
      </button>
    </a>
  );
};

export const Close = (prop) => {
  const navigate = useNavigate();
  const handleClose = (name) => {
    if (name === "category") {
      navigate(`/product/category`);
    } else if (name === "product") {
      navigate(`/product/list`);
    }
  };
  return (
    <button
      className={cx("btn-view", "btn-wrap")}
      onClick={() => handleClose(prop.name)}
    >
      <span className={cx("btn-name")}>Đóng</span>{" "}
    </button>
  );
};

export const Save = () => {
  return (
    <button className={cx("btn-save", "btn-wrap")}>
      <FontAwesomeIcon className={cx("btn-icon")} icon={faSave} />
      <span className={cx("btn-name")}>Lưu ngay</span>{" "}
    </button>
  );
};
