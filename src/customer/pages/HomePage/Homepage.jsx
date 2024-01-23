import React from "react";
import "./HomePage.css";
import MultipleItemsCarousel from "./MultipleItemsCarousel";
import { restaurants } from "../../../Data/Restaurants";
import RestaurantCrad from "./RestaurantCrad";
const HomePage = () => {
  return (
    <div>

      {/* hero section start */}
      <section className="-z-50 banner relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-7xl font-bold z-10 py-5">Bite Box</p>
          <p className="z-10 text-gray-300 text-xl lg:text-4xl">
            Order, eat, repeat.
          </p>
        </div>
        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadeout"></div>
      </section>
      {/* hero section end */}

      {/* top meeels section start */}

      <section className="p-10 lg:py-10 lg:px-20">
        <div className="">
          <p className="text-2xl text-gray-400 py-3 pb-10">Top Meels</p>
        </div>
      
        <MultipleItemsCarousel/>
      </section>
      {/* top meeels section end */}


      {/* handpicked fav section */}
      <section className="px-5 lg:px-20">
        <div>
          <h1 className="text-2xl font-semibold text-gray-400 py-3">
            Order From Our Handpicked Favorites
          </h1>
          <div className="flex flex-wrap items-center justify-around">
            {restaurants.map((item, index)=><RestaurantCrad item={item} index={index}/>)}
          </div>
        </div>

      </section>
      {/* handpicked fav section */}
    </div>
  );
};

export default HomePage;
