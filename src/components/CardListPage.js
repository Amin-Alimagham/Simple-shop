import React, { useEffect, useRef } from "react";
import "../style/CardListPage.css";
import OrderItem from "./OrderItem";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function CardListPage(data) {
  const dispatch = useDispatch();
  const { card } = useSelector((response) => response.initState.initList[0]);
  const [itemData, setItemData] = useState([]);
  const [startFetch, setStartFetch] = useState(true);
  const navigate = useNavigate();
  const handleClick = () => navigate("/products");
  async function callData() {
    try {
      const fetchPromises = card.map(async (itemId) => {
        const fetchData = await fetch(
          `https://fakestoreapi.com/products/${itemId}`
        );
        const response = await fetchData.json();
        return response;
      });

      const responses = await Promise.all(fetchPromises);
      const flattenedResponses = responses.flat();
      setItemData((last) => [...last, ...flattenedResponses]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const isInitialFetch = useRef(true);

  useEffect(() => {
    if (isInitialFetch.current) {
      isInitialFetch.current = false;
      return;
    }

    if (startFetch) {
      callData();
      setStartFetch(false);
    }
  }, [startFetch]);

  function FinishOrder() {
    setItemData([]);
    localStorage.clear("initLocalStorage");
    alert("پرداخت شد");
    setTimeout(() => {
      handleClick();
      window.location.reload();
    }, 300);
  }

  return (
    <div id="card-list-wrapper">
      {card.length === 0 ? (
        <p>هنوز محصولی برای خرید انتخاب نکرده اید!!!</p>
      ) : (
        itemData.map((itemData) => {
          return (
            <OrderItem
              imgSrc={itemData.image}
              name={itemData.title}
              price={itemData.price}
            />
          );
        })
      )}
      {card.length === 0 ? null : (
        <Button className="mt-5" onClick={FinishOrder}>
          ثبت خرید
        </Button>
      )}
    </div>
  );
}

export default CardListPage;
