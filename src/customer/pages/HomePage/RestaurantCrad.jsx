import { Card, IconButton } from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const RestaurantCrad = ({ item, index }) => {
  const navigate = useNavigate();
const handelAddToFavorites=()=>{
    console.log("handle add to favorites...")
}
  return (
    <Card className="m-5 w-[18rem] productCard">
      <div
        onClick={()=>navigate(
          `/restaurant/${item.address}/${item.name}/${index+1}`
        )}
      >
        <img
          className="w-full h-[10rem] rounded-md object-cover"
          src={item.imageUrl}
          alt=""
        />
      </div>
      <div className="p-4 textPart lg:flex w-full justify-between ">
        <div className="space-y-1" onClick={()=>navigate(
          `/restaurant/${item.address}/${item.name}/${index+1}`
        )}>
          <p className="font-semibold text-lg">{item.name}</p>
          <p className="text-gray-500 text-sm">
            {item.description.length > 25
              ? item.description.substring(0, 25) + "..."
              : item.description}
          </p>
        </div>
        <div>
            <IconButton onClick={handelAddToFavorites}>
                {index%2===0?<FavoriteIcon color="primary"/>:<FavoriteBorderIcon/>}
            </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCrad;
