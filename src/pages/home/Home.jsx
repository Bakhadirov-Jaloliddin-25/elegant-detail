import Brands from "@/components/brands/Brands";
import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
import { useFetch } from "@/hooks/useFetch";
import React from "react";
import Category from "@/components/category/Category";
import Collection from "@/components/collection/Collection";
import Sale from "../../components/sales/Sale";
import Promotion from "../../components/promotion/Promotion";
import LastestArticles from "../../components/lastestArticles/LastestArticles";
import Instagramm from "../../components/instagramm/Instagramm";

const Home = () => {
  const { data, error, loading } = useFetch("/product/get");
  const { data: categories } = useFetch("/product-category/get");

  return (
    <div>
      <Hero />
      <Brands />
      <Products
        title={{ name: "Just in", style: "" }}
        style={{
          parent: "flex gap-3 overflow-auto",
          child: "w-[262px] min-w-[262px] ",
        }}
        isAdmin={false}
        data={data?.products}
      />
      <Category data={categories} />
      <Collection />
      <Products
        title={{ name: "Best seller", style: "text-center" }}
        style={{
          parent:
            "grid  grid-cols-4 gap-6 max-[990px]:grid-cols-3 max-[600px]:grid-cols-2",
          child: "",
        }}
        isAdmin={false}
        data={data?.products}
      />
      <Sale />
      <Promotion />
      <LastestArticles />
      <Instagramm />
    </div>
  );
};

export default Home;
