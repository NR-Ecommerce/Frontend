import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./AccountLayout.scss";

const AccountLayout = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <div className="accountLayout">
        <div className="accountLayout__Container">
          <div className="accountLayout__title">اکانت</div>
          {/* اطلاعات */}
          <div className="accountLayout__det">
            <div className="accountLayout__det-black">ماهان نجفی</div>{" "}
            ,09399445617
          </div>
          <div className="accountLayout__links">
            <Link
              to="/dashboard/accountInfo"
              className={
                location.pathname == "/dashboard/accountInfo"
                  ? "accountLayout__active accountLayout__link"
                  : "accountLayout__link"
              }
            >
              <div>اطلاعات اکانت</div>
            </Link>
            <Link
              to="/dashboard/likes"
              className={
                location.pathname == "/dashboard/likes"
                  ? "accountLayout__active accountLayout__link"
                  : "accountLayout__link"
              }
            >
              <div>لایک شده ها</div>
            </Link>
            <Link
              to="/dashboard/orders"
              className={
                location.pathname == "/dashboard/orders"
                  ? "accountLayout__active accountLayout__link"
                  : "accountLayout__link"
              }
            >
              <div>سفارشات</div>
            </Link>
            <Link
              to="/dashboard/repass"
              className={
                location.pathname == "/dashboard/repass"
                  ? "accountLayout__active accountLayout__link"
                  : "accountLayout__link"
              }
            >
              <div>تعویض رمز</div>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default AccountLayout;
