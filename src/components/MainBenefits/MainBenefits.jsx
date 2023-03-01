import MainBenefit from "../MainBenefit/MainBenefit";
import "./MainBenefits.scss";

const MainBenefits = () => {
  return (
    <div className="mainBenefits">
      <div className="mainBenefits__container">
        <div className="mainBenefits__benefits">
          <MainBenefit
            img="https://chisnghiax.com/ciseco/static/media/HIW1img.0a618bef4b830b5c682b.png"
            step="مرحله 1"
            title="فیلتر & انتخاب"
            dec="فیلتر کردن هوشمند و پیشنهادات یافتن آن"
            color="#991b1b"
            bgcolor="#FEE2E2"
          />
          <MainBenefit
            img="https://chisnghiax.com/ciseco/static/media/HIW2img.3d1e1bf2693a9272e96a.png"
            step="مرحله 2"
            title=" اضافه کردن به سبد خرید"
            dec="به راحتی محصول را انتخاب کرده و به سبد خرید اضافه کنید"
            color="#3730A3"
            bgcolor="#E0E7FF"
          />
          <MainBenefit
          img='https://chisnghiax.com/ciseco/static/media/HIW3img.8b344c9a046e6b85a9ab.png'
            title="ارسال سریع"
            step="مرحله 3"
            dec="به سرعت برای شما ارسال می کنیم."
            color="#854d0E"
            bgcolor="#F3F9c3"
          />
          <MainBenefit
          img='https://chisnghiax.com/ciseco/static/media/HIW4img.c6a12d19e09f27d32678.png'
            step="مرحله 4"
            title="از محصول لذت ببرید"
            dec="از محصول خود لذت ببرید."
            color="#6b21a8"
            bgcolor="#f3e8ff"
          />
          <img className="line" src="https://chisnghiax.com/ciseco/static/media/VectorHIW.1a377ddaa77cc48b5b38a6739a397aff.svg" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default MainBenefits;
