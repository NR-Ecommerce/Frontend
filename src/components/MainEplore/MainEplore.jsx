import { Link } from "react-router-dom";
import "./MainEplore.scss";
import { BsArrowLeft } from "react-icons/bs";

const MainEplore = ({ img }) => {
  return (
    <div className="mainEplore">
      <div className="mainEplore__numbers">
        <div className="mainEplore__num">316 محصول</div>
        <img
          src="https://chisnghiax.com/ciseco/static/media/explore1.3017824afbd558dae323.png"
          className="mainEplore__pic"
        />
      </div>
      <div className="mainEplore__titles">
        <div className="mainEplore__dec">کیف خوب</div>
        <div className="mainEplore__title">کیف</div>
      </div>
      <Link className="mainEplore__link" to="/category">
        <div className="mainEplore__see">
          مشاهده کالکشن
          <BsArrowLeft />
        </div>
      </Link>
      <img className="mainEplore__img" src={img} alt="" srcset="" />
    </div>
  );
};

export default MainEplore;
