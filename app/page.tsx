import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductsPage from "./products/page";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <div className="container max-w-2xl mx-auto my-10">
        <h1 className="text-5xl text-center mb-5">DISCOVER OUR PRODUCTS</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          deserunt minima beatae aut! Corporis unde non, maiores nisi molestias
          commodi.
        </p>
      </div>
      <ProductsPage />
      <Footer />
    </main>
  );
}
