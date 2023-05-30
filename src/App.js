import { Route, Routes } from "react-router-dom";
import "./App.scss";
import ReactPaginate from "react-paginate";
import Activity from "./page/admin/ActivityLog";
import Discount from "./page/admin/Discount";
import Member from "./page/admin/Members";
import NewPost from "./page/admin/Posts/NewPost";
import Noti from "./page/admin/Noti";
import Pay from "./page/admin/Pay";
import Posts from "./page/admin/Posts";
import Security from "./page/admin/Security";
import Setting from "./page/admin/Setting/index.js";
import Product from "./page/admin/Product";
import New from "./page/admin/Product/New";
import Category from "./page/admin/Product/Category";
import NewCategory from "./page/admin/Product/Category/New";
import OrderList from "./page/admin/Product/OrderList";
import Dashboard from "./page/admin/Dashboard";
import Balance from "./page/admin/Balance";
import NewDiscount from "./page/admin/Discount/New";

import Home from "./page/user/Home/Home";
import Detail_page from "./page/user/Detail/Detail_page";
import Post_page from "./page/user/Post/Post_page";
import Post_page_detail from "./page/user/PostDetail/Post_detail";
import Contact_page from "./page/user/Contact/Contact_page";
import Sign_client from "./page/user/Sign/Sign";
import Pay_page from "./page/user/pay/Pay_page";
import Error_not_found from "./page/user/Error/Error404";
import ForgotPassNext from "./component/User/Sign/ForgotPassNext";
import OderHistory_page from "./page/user/Order_history/OrderHistory";

import Intro from "./page/user/Intro";
import Account_page from "./page/user/Account/user_page";
import List_page from "./page/user/listProduce/listProduce";
import { Switch } from "react-router-dom";
import ForgotPass from "./component/User/Sign/ForgotPass";
import Redirect from "./page/user/Error/Redirect";

// import Sign from "./page/admin/Sign/Sign";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List_page />} />
        <Route path="/list/id" element={<Detail_page />} />
        <Route path="/detail/:id" element={<Detail_page />} />
        <Route path="/listPost" element={<Post_page />} />
        <Route path="/post" element={<Post_page_detail />} />
        <Route path="/pay" element={<Pay_page />} />
        <Route path="/contact" element={<Contact_page />} />

        <Route path="/order" element={<OderHistory_page />} />
        <Route path="/forgot" element={<ForgotPass />} />
        <Route path="/forgotNext" element={<ForgotPassNext />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/accountUser" element={<Account_page />} />
        <Route path="*" element={<Error_not_found />} />
        <Route path={"/chippisoft"} element={<Intro />} />
        <Route path={"/sign"} element={<Sign_client />} />

        <Route
          path={"/dashboard"}
          element={
            localStorage.getItem("isAdmin") === "1" ? (
              <Dashboard />
            ) : (
              <Redirect />
            )
          }
        />
        <Route
          path={"/activity"}
          element={
            localStorage.getItem("isAdmin") === "1" ? (
              <Activity />
            ) : (
              <Redirect />
            )
          }
        />
        <Route
          path={"/balance"}
          element={
            localStorage.getItem("isAdmin") === "1" ? <Balance /> : <Redirect />
          }
        />
        <Route
          path={"/discount"}
          element={
            localStorage.getItem("isAdmin") === "1" ? (
              <Discount />
            ) : (
              <Redirect />
            )
          }
        />
        <Route
          path={"/discount/new"}
          element={
            localStorage.getItem("isAdmin") === "1" ? (
              <NewDiscount />
            ) : (
              <Redirect />
            )
          }
        />
        <Route
          path={"/member"}
          element={
            localStorage.getItem("isAdmin") === "1" ? <Member /> : <Redirect />
          }
        />
        <Route
          path={"/post"}
          element={
            localStorage.getItem("isAdmin") === "1" ? <Posts /> : <Redirect />
          }
        />
        <Route
          path={"/newpost"}
          element={
            localStorage.getItem("isAdmin") === "1" ? <NewPost /> : <Redirect />
          }
        />
        <Route
          path={"/notification"}
          element={
            localStorage.getItem("isAdmin") === "1" ? <Noti /> : <Redirect />
          }
        />
        <Route
          path={"/payment"}
          element={
            localStorage.getItem("isAdmin") === "1" ? <Pay /> : <Redirect />
          }
        />
        <Route
          path={"/setting"}
          element={
            localStorage.getItem("isAdmin") === "1" ? <Setting /> : <Redirect />
          }
        />
        <Route
          path={"/security"}
          element={
            localStorage.getItem("isAdmin") === "1" ? (
              <Security />
            ) : (
              <Redirect />
            )
          }
        />
        <Route
          path={"/product/list"}
          element={
            localStorage.getItem("isAdmin") === "1" ? <Product /> : <Redirect />
          }
        />
        <Route
          path={"/product/:id"}
          element={
            localStorage.getItem("isAdmin") === "1" ? <New /> : <Redirect />
          }
        />
        <Route
          path={"/product/category"}
          element={
            localStorage.getItem("isAdmin") === "1" ? (
              <Category />
            ) : (
              <Redirect />
            )
          }
        />
        <Route
          path={"/product/category/:id"}
          element={
            localStorage.getItem("isAdmin") === "1" ? (
              <NewCategory />
            ) : (
              <Redirect />
            )
          }
        />
        <Route
          path={"/product/order"}
          element={
            localStorage.getItem("isAdmin") === "1" ? (
              <OrderList />
            ) : (
              <Redirect />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
