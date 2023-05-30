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
        <Route path="/sign" element={<Sign_client />} />
        <Route path="/order" element={<OderHistory_page />} />
        <Route path="/forgot" element={<ForgotPass />} />
        <Route path="/forgotNext" element={<ForgotPassNext />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/accountUser" element={<Account_page />} />
        <Route path="*" element={<Error_not_found />} />
        <Route path={"/chippisoft"} element={<Intro />} />
        <Route path={"/sign"} element={<Sign_client />} />
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/activity"} element={<Activity />} />
        <Route path={"/balance"} element={<Balance />} />
        <Route path={"/discount"} element={<Discount />} />
        <Route path={"/discount/new"} element={<NewDiscount />} />
        <Route path={"/member"} element={<Member />} />
        <Route path={"/post"} element={<Posts />} />
        <Route path={"/newpost"} element={<NewPost />} />
        <Route path={"/notification"} element={<Noti />} />
        <Route path={"/payment"} element={<Pay />} />
        <Route path={"/setting"} element={<Setting />} />
        <Route path={"/security"} element={<Security />} />
        <Route path={"/product/list"} element={<Product />} />
        <Route path={"/product/new"} element={<New />} />
        <Route path={"/product/category"} element={<Category />} />
        <Route path={"/product/category/new"} element={<NewCategory />} />
        <Route path={"/product/order"} element={<OrderList />} />
      </Routes>
    </div>
  );
}

export default App;
