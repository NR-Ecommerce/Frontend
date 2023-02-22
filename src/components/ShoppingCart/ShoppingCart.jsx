import "./ShoppingCart.scss";
import { BiPlus, BiMinus } from "react-icons/bi";

const ShoppingCart = ({ product,products, setProducts }) => {
  const addHandler = () => {
    // const updated = products.map(item => item.number );

  };
  const removeHandler = () => {
    console.log(product);
    
    const updated = products.filter(item => item.id !== product.id);

    localStorage.setItem('products', JSON.stringify(updated));
    setProducts(updated)
  };
  return (
    <div className="shoppingCart__container">
      <div className="shoppingCart__right">
        {/* <div className="shoppingCart__img"></div> */}
        <img
          src={product.picture}
          alt={product.id}
          className="shoppingCart__img"
        />
        <div className="shoppingCart__det">
          <div className="shoppingCart__title">{product.title}</div>
          <div className="shoppingCart__sizes">
            <div className="shoppingCart__color">
              <svg  viewBox="0 0 24 24" fill="none">
                <path
                  d="M7.01 18.0001L3 13.9901C1.66 12.6501 1.66 11.32 3 9.98004L9.68 3.30005L17.03 10.6501C17.4 11.0201 17.4 11.6201 17.03 11.9901L11.01 18.0101C9.69 19.3301 8.35 19.3301 7.01 18.0001Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8.35 1.94995L9.69 3.28992"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2.07 11.92L17.19 11.26"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M3 22H16"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M18.85 15C18.85 15 17 17.01 17 18.24C17 19.26 17.83 20.09 18.85 20.09C19.87 20.09 20.7 19.26 20.7 18.24C20.7 17.01 18.85 15 18.85 15Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              {product.color}
            </div>
            <div className="shoppingCart__size">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 9V3H15"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M3 15V21H9"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M21 3L13.5 10.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10.5 13.5L3 21"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              {product.size}
            </div>
          </div>
          <select className="shoppingCart__select" name="" id="">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option on value="5">
              5
            </option>
            <option value="6">6</option>
          </select>
          <div
            className={
              product.is_available
                ? "shoppingCart__available"
                : "shoppingCart__available shoppingCart__available-beta"
            }
          >
            {product.is_available ? "موجود" : "ناموجود"}
          </div>
        </div>
      </div>
      <div className="shoppingCart__center">
        <BiPlus className="shoppingCart__center--adder" onClick={addHandler} />
        {product.number}
        <BiMinus
          className="shoppingCart__center--adder"
        />
      </div>
      <div className="shoppingCart__left">
        <div className="shoppingCart__price">
          {product.price}
          <div className="shoppingCart__price--toman">تومان</div>
        </div>
        <div onClick={removeHandler} className="shoppingCart__remove">
          حذف
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
// picture: "https://loremflickr.com/640/480/city",
//     title: "محصول 1",
//     price: "2,000,000",
//     color: "قرمز",
//     is_available: true,
//     size: "xl",
//     number: 3,
//     id: "1",
