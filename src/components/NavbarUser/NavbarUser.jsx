import "./NavbarUser.scss";
import { FaRegUser } from "react-icons/fa";
import { BiHeart, BiBulb, BiExit, BiHelpCircle } from "react-icons/bi";

import { TbClipboardList } from "react-icons/tb";

const NavbarUser = () => {
  return (
    <div className="navbarUser__container">
      <div className="navbarUser__Profile">
        <img src='https://chisnghiax.com/ciseco/static/media/Image-8.5ae85a64aab1965e33a5.png' alt="prof" className="navbarUser__pic"/>
        <div className="navbarUser__names">
          <div className="navbarUser__title">ماهان نجفی</div>
          <div className="navbarUser__loc">گیلان,لنگرود</div>
        </div>
      </div>
      <div className="navbarUser__accountDets">
        <div className="navbarUser__Det">
          <FaRegUser className="navbarUser__icon" />

          <div className="navbarUser__name">اکانت من</div>
        </div>
        <div className="navbarUser__Det">
          <TbClipboardList className="navbarUser__icon" />
          <div className="navbarUser__name">سفارش ها</div>
        </div>
        <div className="navbarUser__Det">
          <BiHeart className="navbarUser__icon" />
          <div className="navbarUser__name">لایک شده ها</div>
        </div>
      </div>
      <div className="navbarUser__sites">
        <div className="navbarUser__site">
          <BiBulb className="navbarUser__icon" />
          <div className="navbarUser__name">دارک مود</div>
          <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
        </div>
        <div className="navbarUser__site">
          <BiHelpCircle className="navbarUser__icon" />
          <div className="navbarUser__name">راهنما</div>
        </div>
        <div className="navbarUser__site">
          <BiExit className="navbarUser__icon" />

          <div className="navbarUser__name">خروج</div>
        </div>
      </div>
    </div>
  );
};

export default NavbarUser;
