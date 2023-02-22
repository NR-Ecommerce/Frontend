import "./AccountInfo.scss";

const AccountInfo = () => {
  return (
    <div className="accountInfo">
      <div className="accountInfo__container">
        <div className="accountInfo__title">اطلاعات اکانت</div>
        <div className="accountInfo__inputs">
          <div className="accountInfo__inputPac">
            <label className="accountInfo__inputTitle">اسم کامل :
              <input value='mahan' type="text" className="accountInfo__input" />
            </label>
          </div>
          <div className="accountInfo__inputPac"> 
            <label className="accountInfo__inputTitle">ایمیل :
              <input value='mahan.nwork@gmail.com' type="text" className="accountInfo__input" />
            </label>
          </div>
          <div className="accountInfo__inputPac">
            <label className="accountInfo__inputTitle">شماره تلفن :
              <input value='09399445617' type="text" className="accountInfo__input" />
            </label>
          </div>
          <button className="accountInfo__button">اپدیت اکانت</button>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
