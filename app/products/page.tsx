import React from "react";
import RecommedationBtn from "../components/RecommedationBtn";
import Filters from "../components/Filters";
import LikedBtn from "../components/LikedBtn";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const ProductsPage = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  return (
    <div>
      <div className="nav flex items-center justify-between w-full border-y h-16 px-5 sm:px-16">
        <div className="row flex items-center">
          <h1 className="text-xl font-bold mr-4">3425 ITEMS</h1>
          <h3 className="text-md text-slate-500 hidden sm:block"> {"< HIDE FILTER"}</h3>
        </div>
        <div className="recommeded relative float-right">
          <RecommedationBtn />
        </div>
      </div>
      <div className="body flex justify-center">
        <div className="artical hidden md:block">
          <Filters />
        </div>
        <div className="flex flex-wrap justify-around">
          {products.map((product) => {
            return (
              <div className="card card-compact w-72 p-2 bg-white m-2 rounded shadow-xl">
                <figure>
                  <img
                    className="aspect-square"
                    src={product.image}
                    alt={product.title}
                  />
                </figure>
                <div className="card-body flex flex-row items-center bg-white">
                  <h2 className="truncate font-bold w-11/12">
                    {product.title}
                  </h2>
                  <LikedBtn />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
