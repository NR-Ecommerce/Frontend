import { useEffect, useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./ShoppingCarts.scss";
const productsApi = [
  {
    picture:
      "https://fastly.picsum.photos/id/302/200/200.jpg?hmac=pq7hvNyk4pwuEe5cs2qejMNTc7S1kgev72rC8bSHdJE",
    title: "محصول 1",
    price: "20000",
    color: "قرمز",
    is_available: true,
    size: "xl",
    number: 3,
    id: "1",
  },
  {
    picture:
      "https://fastly.picsum.photos/id/302/200/200.jpg?hmac=pq7hvNyk4pwuEe5cs2qejMNTc7S1kgev72rC8bSHdJE",
    title: "محصول 2",
    price: "20000",
    color: "قرمز",
    is_available: true,
    size: "xl",
    number: 3,
    id: "2",
  },
];

const ShoppingCarts = () => {
  // localStorage.setItem('products', JSON.stringify(productsApi));
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products"))
  );
  const [price, setPrice] = useState();
  const [allPrice, setAllPrice] = useState();

  useEffect(() => {
    setPrice(
      products
        .reduce((accumulator, a) => {
          return accumulator + +a.price * +a.number;
        }, 0)
        .toLocaleString()
    );
    setAllPrice(
      (
        products.reduce((accumulator, a) => {
          return accumulator + +a.price * +a.number;
        }, 0) + 20000
      ).toLocaleString()
    );
    // setProducts(JSON.parse(localStorage.getItem("products")));
  }, [products]);

  return (
    <div className="shoppingCarts">
      <div className="shoppingCarts__container">
        <div className="shoppingCarts__title">سبد خرید</div>
        <div className="shoppingCarts__all">
          <div className="shoppingCarts__products">
            {products &&
              (products.length !== 0 ? (
                products.map((product) => {
                  return (
                    <ShoppingCart
                      key={product.id}
                       setProducts={setProducts}
                      products={products}
                      product={product}
                    />
                  );
                })
              ) : (
                <div className="free">سبد خرید شما خالی است.</div>
              ))}
          </div>
          <div className="shoppingCarts__price--container">
            <div className="shoppingCarts__price">
              <div className="shoppingCarts__price--title">خلاصه سفارش</div>
              <div className="shoppingCarts__price--boxes">
                <div className="shoppingCarts__price--boxes-right">
                  جمع کل محصولات
                </div>
                {products && price} تومان
              </div>
              <div className="shoppingCarts__price--boxes">
                <div className="shoppingCarts__price--boxes-right">
                  هزینه ارسال
                </div>
                20,000 تومان
              </div>

              <div className="shoppingCarts__price--boxes shoppingCarts__price--boxes-imps">
                <div className="shoppingCarts__price--boxes-imp">جمع کل</div>
                {products && allPrice} تومان
              </div>
              <button className="shoppingCarts__price--button">پرداخت</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCarts;
