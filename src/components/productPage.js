import React, { useContext, useState, useEffect } from "react";
import "../style/productPage.css";
import CartContext from "../context";
import * as mdIcons from "react-icons/md";
import * as imIcons from "react-icons/im";
import { MdPlusOne } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AddToCard } from "../store/Action";
const ProductPage = () => {
  const dispatch = useDispatch();
  // const response = useSelector((response) => response);
  const { value } = useContext(CartContext);
  let [data, setData] = useState([]);
  useEffect(() => {
    const fakeStore = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${value}`);
      const js = await res.json();
      setData(js);
    };
    fakeStore();
  });
  function handleAddToCard() {
    // dispatch(AddToCard(9));
    dispatch(AddToCard(data.id));
  }
  return (
    <>
      <div className="container bg-dark mt-5" id="con-pp">
        <div className="row bg-light" id="r-pp">
          <div className="col-5 p-2 ">
            <img className=" p-4 me-5" id="img-pp" src={data.image} alt="ss" />
          </div>
          <div className="col-7 p-2">
            <div className="row h-25  text-dark m-2 ">
              <div className="col">
                <p>
                  <mdIcons.MdOutlineTitle /> : {data.title}
                </p>
              </div>
            </div>
            <div className="row h-25  text-dark m-2 ">
              <div className="col">
                <p className="text-dark">
                  <imIcons.ImPriceTag /> : {data.price} $
                </p>
              </div>
            </div>
            <div className="row text-dark m-2">
              <div className="col">
                <p>
                  <mdIcons.MdStarRate /> : 3.5
                </p>
              </div>
            </div>
            <div
              onClick={handleAddToCard}
              className="row h-25 text-dark my-2 add-to-card"
            >
              <div className="col">
                <p>
                  <MdPlusOne />
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-dark m-2" />
        <div className="row">
          <div className="col-12 text-light mt-2 mb-2 p-3">
            <p id="number-dir">{data.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductPage;
