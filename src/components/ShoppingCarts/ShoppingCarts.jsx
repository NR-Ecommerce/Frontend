import { useEffect, useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./ShoppingCarts.scss";
const productsApi = [
  {
    picture:
      "https://fastly.picsum.photos/id/302/200/200.jpg?hmac=pq7hvNyk4pwuEe5cs2qejMNTc7S1kgev72rC8bSHdJE",
    title: "محصول 1",
    price: "2,000,000",
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
    price: "2,000,000",
    color: "قرمز",
    is_available: true,
    size: "xl",
    number: 3,
    id: "2",
  },
  {
    picture:
      "https://fastly.picsum.photos/id/302/200/200.jpg?hmac=pq7hvNyk4pwuEe5cs2qejMNTc7S1kgev72rC8bSHdJE",
    title: "محصول 2",
    price: "2,000,000",
    color: "قرمز",
    is_available: true,
    size: "xl",
    number: 3,
    id: "3",
  },
  {
    picture:
      "https://fastly.picsum.photos/id/302/200/200.jpg?hmac=pq7hvNyk4pwuEe5cs2qejMNTc7S1kgev72rC8bSHdJE",
    title: "محصول 2",
    price: "2,000,000",
    color: "قرمز",
    is_available: true,
    size: "xl",
    number: 3,
    id: "4",
  },
  {
    picture:
      "https://fastly.picsum.photos/id/302/200/200.jpg?hmac=pq7hvNyk4pwuEe5cs2qejMNTc7S1kgev72rC8bSHdJE",
    title: "محصول 2",
    price: "2,000,000",
    color: "قرمز",
    is_available: true,
    size: "xl",
    number: 3,
    id: "5",
  },
  {
    picture:
      "https://fastly.picsum.photos/id/302/200/200.jpg?hmac=pq7hvNyk4pwuEe5cs2qejMNTc7S1kgev72rC8bSHdJE",
    title: "محصول 3",
    price: "2,000,000",
    color: "سفید",
    is_available: false,
    size: "xl",
    number: 1,
    id: "6",
  },
];

const ShoppingCarts = () => {
  const [products, setProducts] = useState(productsApi);

  // useEffect(() => {
  //   setProducts(localStorage.getItem('products'))
  // }, [products]);


  return (
    <div className="shoppingCarts">
      <div className="shoppingCarts__container">
        <div className="shoppingCarts__title">سبد خرید</div>
        <div className="shoppingCarts__all">
          <div className="shoppingCarts__products">
            {products.map((product) => {
              return (
                <ShoppingCart setProducts={setProducts} product={product} />
              );
            })}
            {/* <ShoppingCart/> */}
          </div>
          <div className="shoppingCarts__price--container">
            <div className="shoppingCarts__price">
              <div className="shoppingCarts__price--title">خلاصه سفارش</div>
              <div className="shoppingCarts__price--boxes">
                <div className="shoppingCarts__price--boxes-right">
                  جمع کل محصولات
                </div>
                2,000,000
              </div>
              <div className="shoppingCarts__price--boxes">
                <div className="shoppingCarts__price--boxes-right">
                  هزینه ارسال
                </div>
                200,000
              </div>
              <div className="shoppingCarts__price--boxes">
                <div className="shoppingCarts__price--boxes-right">مالیات</div>
                19,0000
              </div>
              <div className="shoppingCarts__price--boxes shoppingCarts__price--boxes-imps">
                <div className="shoppingCarts__price--boxes-imp">جمع کل</div>
                3,000,000
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
