import "./MainProduct.scss";
import { FaStar } from "react-icons/fa";

const MainProduct = ({ product }) => {
  const price = +product.price;

  return (
    <div className="mainProduct">
      <img
        src={product.images[0].image}
        alt={product.images[0].alt_text}
        className="mainProduct__img"
      />
      <div className="mainProduct__colors">
        {product.details.map((color)=>{
          return <div style={{backgroundColor:`${color.color.code}`}} className="mainProduct__color"></div>
        })}
        {/* <div className="mainProduct__color"></div>
        <div className="mainProduct__color"></div>
        <div className="mainProduct__color"></div> */}
      </div>
      <div className="mainProduct__title">{product.title}</div>
      <div className="mainProduct__dec">{product.id}</div>
      <div className="mainProduct__rates">
        <div className="mainProduct__rate">
          (73 نظر) 4.3
          <FaStar className="star" />
        </div>
        <div className="mainProduct__price">{price.toLocaleString()}</div>
      </div>
    </div>
    //	https://chisnghiax.com/ciseco/static/media/5.9ddc0dff360795c6f5b5.png
  );
};

export default MainProduct;
