import "./MainCategory.scss";

const MainCategory = ({ bgcolor }) => {
  return (
    <div className="mainCategory" style={{ backgroundColor: `${bgcolor}` }}>
      <div className="mainCategory__names">
        <div className="mainCategory__dec">ورودی های جدید را کاوش کنید</div>
        <div className="mainCategory__title">
          خرید آخرین
          <br />
          از برندهای برتر
        </div>
      </div>
      <button className="mainCategory__button">مشاهده کامل</button>
      <img className="mainCategory__img" src="https://chisnghiax.com/ciseco/static/media/5.9ddc0dff360795c6f5b5.png" alt="" />
    </div>
  );
};

export default MainCategory;
