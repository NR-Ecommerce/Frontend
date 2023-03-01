import "./MainEplores.scss";
import { RiWomenLine } from "react-icons/ri";
import { AiOutlineMan, AiOutlineGitlab } from "react-icons/ai";
import { MdChildFriendly } from "react-icons/md";
import { useState } from "react";
import MainEplore from "../MainEplore/MainEplore";

const MainEplores = () => {
  const [select, setSelect] = useState('1');
  const changeHandler = (e) => {
    setSelect(e.target.id);
  };
  return (
    <div className="mainEplores">
      <div className="mainEplores__container">
        <div className="mainEplores__title">شروع جستجو</div>
        <div className="mainEplores__navbarCon">
          <div className="mainEplores__navbar">
            <div
              onClick={changeHandler}
              id="1"
              className={
                select === "1"
                  ? "mainEplores__items mainEplores__active"
                  : "mainEplores__items"
              }
            >
              <RiWomenLine id="1" className="mainEplores__svg" />
              <div id="1" className="mainEplores__name ">
                مردانه
              </div>
            </div>
            <div
              onClick={changeHandler}
              id="2"
              className={
                select === "2"
                  ? "mainEplores__items mainEplores__active"
                  : "mainEplores__items"
              }
            >
              <AiOutlineMan id="2" className="mainEplores__svg" />
              <div id="2" className="mainEplores__name">
                زنانه
              </div>
            </div>
            <div
              onClick={changeHandler}
              id="3"
              className={
                select === "3"
                  ? "mainEplores__items mainEplores__active"
                  : "mainEplores__items"
              }
            >
              <MdChildFriendly id="3" className="mainEplores__svg" />
              <div id="3" className="mainEplores__name">
                بچگانه
              </div>
            </div>
            <div
              onClick={changeHandler}
              id="4"
              className={
                select === "4"
                  ? "mainEplores__items mainEplores__active"
                  : "mainEplores__items"
              }
            >
              <AiOutlineGitlab id="4" className="mainEplores__svg" />
              <div id="4" className="mainEplores__name">
                زیبایی
              </div>
            </div>
          </div>
        </div>
        <div className="mainEplores__Boxes">
          <MainEplore img="https://chisnghiax.com/ciseco/static/media/explore2.1ceb7512bd65219296c27bc4ecc85ff6.svg" />
          <MainEplore img="https://chisnghiax.com/ciseco/static/media/explore1.775937cb2511726e48c3fc70025fab60.svg" />
          <MainEplore img="https://chisnghiax.com/ciseco/static/media/explore3.94b86e236316334ee0f6d22e7c41e3bc.svg" />
          <MainEplore img="https://chisnghiax.com/ciseco/static/media/explore9.9cb58d1f5a9bf47be0be877012199caa.svg" />
          <MainEplore img="https://chisnghiax.com/ciseco/static/media/explore5.31cdd38104cf6ff9b87f13d23831c063.svg" />
          <MainEplore img="https://chisnghiax.com/ciseco/static/media/explore6.d820796c6233d6fd068004c49905dda6.svg" />
        </div>
      </div>
    </div>
  );
};

export default MainEplores;
