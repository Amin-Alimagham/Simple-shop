import React, { useState, useEffect, useContext } from "react";
import "../style/product.css";
import { Link } from "react-router-dom";
import CartContext from "../context";
import "react-dropdown/style.css";
import { Pagination } from "react-bootstrap";
import { useMemo } from "react";

function Product() {
  const { add } = useContext(CartContext);
  let [data, setData] = useState([]);
  const [sortData, setSortData] = useState(data);
  const fakeStore = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const js = await res.json();
    setData(js);
  };
  useEffect(() => {
    fakeStore();
  }, []);
  const sendFunc = (id) => {
    add(id);
  };

  const [page, setPage] = useState(1);

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    handelSort("all");
  }, [data]);

  function searchCheck() {
    setSearchValue((text) => {
      return text.toLowerCase();
    });
    let searchList = data.filter((el) => {
      if (searchValue === "" || searchValue.length <= 3) {
        fakeStore();
        return el;
      } else {
        return el.title.toLowerCase().includes(searchValue);
      }
    });
    setData(searchList);
  }
  function handelSort(event) {
    let newData = [];
    if (event === "all") {
      setSortData(data);
    } else {
      data.forEach((element) => {
        if (element.category == event) {
          newData.push(element);
        }
      });
      setSortData(newData);
    }
  }
  const paginat = useMemo(() => {
    const help = [];
    for (let index = 0; index < data.length / 9; index++) {
      help.push(index + 1);
    }
    return help;
  }, [data]);
  return (
    <>
      <div className="search-box w-50" >
        <input
        className="w-50"
          onChange={(inputText) => {
            setSearchValue(inputText.target.value);
          }}
          type="text"
          value={searchValue}
        />
          <button onClick={searchCheck}>جستجو</button>
   <select
        className="w-100"
        onChange={(e) => {
          handelSort(e.target.value);
        }}
        name="selectList"
        id="selectList"
      >
        <option value="all">همه</option>
        <option value="electronics">وسایل الکترونیکی</option>
        <option value="jewelery">جواهرات</option>
        <option value="men's clothing">لباس مردانه</option>
        <option value="women's clothing">لباس زنانه</option>
      </select>
      </div>
      
      <section
        className="d-flex justify-content-start flex-wrap justify-content-around m-5"
        id="sec-pro"
      >

      {sortData.slice((page - 1) * 9, page * 9).map((value, index) => {

          return (
            <div
            key={index}
              className="card d-flex  justify-content-center m-4 p-3 border-dark-1 "
              id="box-1"
            >
              <img
                className="card-img-top mb-4"
                src={value.image}
                alt="s"
                id="img-product"
              />
              <h5 className="card-title ">{value.title}</h5>
              <p className="card-text ">{value.price} $</p>
              <Link
                to="/productPage"
                className="btn btn-primary"
                onClick={() => sendFunc(value.id)}
              >
                نمایش اطلاعات
              </Link>
            </div>
          );
        })}
      </section>
    
      <Pagination style={{ display: "flex", justifyContent: "center" }}>
        <Pagination.First onClick={() => setPage(1)} />
        <Pagination.Prev
          onClick={() =>
            page > 1 ? setPage((page) => page - 1) : window.scrollTo({ top: 0 })
          }
        />
        {paginat.map((item, index) => (
          <Pagination.Item
            active={page === item}
            onClick={() => setPage(index + 1)}
            key={index}
          >
            {item}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => page < data.length / 9 && setPage((page) => page + 1)}
        />
        <Pagination.Last onClick={() => setPage(data.length / 9)} />
      </Pagination>
    </>
  );
}

export default Product;
