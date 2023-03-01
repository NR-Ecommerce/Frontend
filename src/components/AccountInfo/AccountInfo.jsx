import { useEffect, useState } from "react";
import "./AccountInfo.scss";
import axiosInstance from "../../hooks/axios";

const AccountInfo = () => {
  const [loading, isLoading] = useState(true);
  const [user, setUser] = useState({});
  useEffect(() => {
    axiosInstance.get(`/api/user/me`).then((res) => {
      console.log(res.data);
      setUser(res.data);
      isLoading(false);
    });
  }, []);
  return (
    <div className="accountInfo">
      <div className="accountInfo__container">
        <div className="accountInfo__title">اطلاعات اکانت</div>
        <div className="accountInfo__inputs">
          <div className="accountInfo__inputPac">
            <label className="accountInfo__inputTitle">
              نام :
              <input
                value={loading ? "نام کاربر" : user.first_name}
                type="text"
                className="accountInfo__input"
              />
            </label>
          </div>
          <div className="accountInfo__inputPac">
            <label className="accountInfo__inputTitle">
              نام خانوادگی :
              <input
                value={loading ? "نام خانوادگی کاربر" : user.last_name}
                type="text"
                className="accountInfo__input"
              />
            </label>
          </div>
          <div className="accountInfo__inputPac">
            <label className="accountInfo__inputTitle">
              شماره تلفن :
              <input
                value={loading ? "شماره کاربر" : user.phone_number} 
                type="text"
                className="accountInfo__input"
              />
            </label>
          </div>
          <button className="accountInfo__button">اپدیت اکانت</button>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
