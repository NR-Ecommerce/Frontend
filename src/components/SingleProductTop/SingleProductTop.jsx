import { useState } from "react";
import "./SingleProductTop.scss";
import { FaStar } from "react-icons/fa";

const productApi = [
  {
    id: 1,
    title: "t-shirt",
    category: 4,
    description: "beautiful t-shirt",
    stock: 10,
    price: "200000.00",
    props: [
      {
        id: 1,
        product: 1,
        product_prop: {
          id: 1,
          name: "material",
          type: 1,
        },
        value: "thread",
      },
    ],
    images: [
      {
        id: 1,
        image:
          "https://fastly.picsum.photos/id/302/200/200.jpg?hmac=pq7hvNyk4pwuEe5cs2qejMNTc7S1kgev72rC8bSHdJE",
        alt_text: "t-shirt",
        is_preview: true,
        product: 1,
      },
      {
        id: 2,
        image:
          "https://fastly.picsum.photos/id/302/200/200.jpg?hmac=pq7hvNyk4pwuEe5cs2qejMNTc7S1kgev72rC8bSHdJE",
        alt_text: "t-shirt",
        is_preview: false,
        product: 1,
      },
      {
        id: 3,
        image:
          "https://fastly.picsum.photos/id/302/200/200.jpg?hmac=pq7hvNyk4pwuEe5cs2qejMNTc7S1kgev72rC8bSHdJE",
        alt_text: "t-shirt",
        is_preview: false,
        product: 1,
      },
    ],
    details: [
      {
        id: 1,
        product: 1,
        color: {
          id: 1,
          name: "قرمز",
          code: "#FF0000",
        },
        sizes: [
          {
            id: 1,
            name: "XS",
          },
          {
            id: 2,
            name: "S",
          },
          {
            id: 3,
            name: "M",
          },
          {
            id: 4,
            name: "L",
          },
          {
            id: 5,
            name: "XL",
          },
          {
            id: 6,
            name: "XXL",
          },
          {
            id: 7,
            name: "XXXL",
          },
        ],
      },
      {
        id: 2,
        product: 1,
        color: {
          id: 2,
          name: "آبی",
          code: "#0000FF",
        },
        sizes: [
          {
            id: 2,
            name: "S",
          },
          {
            id: 3,
            name: "M",
          },
          {
            id: 4,
            name: "L",
          },
          {
            id: 5,
            name: "XL",
          },
        ],
      },
      {
        id: 3,
        product: 1,
        color: {
          id: 3,
          name: "سبز",
          code: "#00FF00",
        },
        sizes: [
          {
            id: 3,
            name: "M",
          },
          {
            id: 4,
            name: "L",
          },
          {
            id: 5,
            name: "XL",
          },
        ],
      },
    ],
    is_available: true,
    created_at: "2023-02-23T17:17:04.557875Z",
  },
];

const SingleProductTop = () => {
  const [product, setProduct] = useState(productApi);
  const [color, setColor] = useState(product[0].details[0].color.name);
  const [size, setSize] = useState(product[0].details[0].sizes);
  const [selectedSize, setSelectedSize] = useState(size[0].name);
  // console.log(size);

  const ColorHandler = (e) => {
    let newColor = product[0].details.find((x) => x.id === +e.target.id);
    setColor(newColor.color.name);
    setSize(newColor.sizes);
    // console.log(e.target.id);
    console.log(color);
  };
  const SizeHandler = (e) => {
    let newSize = size.find((x) => x.id === +e.target.id);
    console.log(newSize);
    setSelectedSize(newSize.name);
    // console.log(size);
    // setSize(newSize)
  };

  return (
    <div className="singleProductTop">
      <div className="singleProductTop__container">
        <div className="singleProductTop__right">
          <div className="singleProductTop__title">{product[0].title}</div>
          <div className="singleProductTop__priceAndRev">
            <div className="singleProductTop__price">
              {(+product[0].price).toLocaleString()} تومان
            </div>
            <div className="singleProductTop__stars">
              <FaStar className="star" />
              <div className="singleProductTop__star">4.9</div>
            </div>
          </div>
          <div className="singleProductTop__colorsCon">
            <div className="singleProductTop__names">
              {" "}
              رنگ : <div className="singleProductTop__names-bold">{color}</div>
            </div>
            <div className="singleProductTop__colors">
              {product[0].details.map((detail) => {
                return (
                  <div
                    id={detail.id}
                    onClick={ColorHandler}
                    style={{ backgroundColor: `${detail.color.code}` }}
                    className="singleProductTop__radioColor "
                  >
                    <div
                      className={color === detail.color.name ? "active" : ""}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="singleProductTop__sizesCon">
            <div className="singleProductTop__names">
              {" "}
              سایز :{" "}
              <div className="singleProductTop__names-bold">{selectedSize}</div>
            </div>
            <div className="singleProductTop__sizes">
              {size ? (
                size.map((detail) => {
                  return (
                    <div
                      onClick={SizeHandler}
                      id={detail.id}
                      className={
                        selectedSize == detail.name
                          ? "singleProductTop__size-active singleProductTop__size"
                          : "singleProductTop__size"
                      }
                    >
                      {detail.name}
                    </div>
                  );
                })
              ) : (
                <div>اتمام سایز!</div>
              )}
            </div>
          </div>
          <div className="singleProductTop__numbersAndButton">
            <button className="singleProductTop__add">
              افزودن به سبد خرید
            </button>
            <div className="singleProductTop__number">1</div>
          </div>
          <div className="singleProductTop__description"></div>
        </div>
        <div className="singleProductTop__left">
          <img
            className="singleProductTop__left-pic"
            src={product[0].images[0].image}
            alt="a"
          />
          <div className="singleProductTop__left-container">
            <img
              className="singleProductTop__left-picCon"
              src={product[0].images[1].image}
              alt="a"
            />
            <img
              className="singleProductTop__left-picCon gaper"
              src={product[0].images[2].image}
              alt="b"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductTop;
