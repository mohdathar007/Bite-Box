
import {
    Radio,
  Divider,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Typography,
  Card,
} from "@mui/material";
import React, { useState } from "react";
import MenuItemCrad from "./MenuItemCrad";

const category = [
  "Thali",
  "Starters",
  "Indian Main Course",
  "Rice and Biryani",
  "Breads",
  "Accompaniments",
  "Dessert ",
];
const foodType = ["Vegetarian Only", "Non-Vegetarian Only", "Both"];
const menu=[1,1,1,1,1]
const Restaurant = () => {
  const [selectedCategory, setselectedCategory] = useState();
  const [selectedfoodType, setselectedfoodType] = useState();
    const handleFoodTypeChange=()=>{
        console.log("seleted Food Type -", selectedfoodType)
    }

  const handleCategoryChange = () => {
    console.log("Selected category -", selectedCategory);
  };
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          {`Home/India/Burger King/2/Order Online`}
        </h3>
        <div>
          <img
            className="w-full h-[40vh] object-cover"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cryv5c0c5mwn8fnmy35y"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-4xl py-1 font-semibold">{`Burger King`}</h1>
          <p className="text-gray-500">Burgers, American</p>
          <p className="py-3 text-orange-300 ">
            Open now 10:30am - 12 midnight (Today)
          </p>
        </div>
      </section>
      <Divider />

      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%]">
          <Card className="space-y-5 p-5 lg:sticky top-28">
            <div>
              <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
                Category
              </Typography>
              <FormControl component={"fieldset"}>
                <RadioGroup
                  name="category"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  {category.map((item, index) => 
                    <FormControlLabel
                      key={index}
                      value={item}
                      control={<Radio />}
                      label={item}
                      sx={{ color: "gray" }}
                    />
                  )}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
                Food Type
              </Typography>
              <FormControl component={"fieldset"}>
                <RadioGroup
                  name="foodType"
                  value={selectedfoodType}
                  onChange={handleFoodTypeChange}
                >
                  {foodType.map((item, index) => 
                    <FormControlLabel
                      key={index}
                      value={item}
                      control={<Radio />}
                      label={item}
                      sx={{ color: "gray" }}
                    />
                  )}
                </RadioGroup>
              </FormControl>
            </div>
          </Card>
        </div>
        <div className=" lg:w-[80%] space-y-5 lg:pl-10">
            {menu.map((item)=><MenuItemCrad item={item}/>)}
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
