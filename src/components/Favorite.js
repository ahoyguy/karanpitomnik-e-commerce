import React from "react";
import Icons from "../assets/images/icons.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  deleteFromFavorite,
  hideToolTip,
} from "../features/favorite/favoriteSlice";

const Favorite = ({ parentClass, id, title, slug }) => {
  const dispatch = useDispatch();
  const { favoriteProducts } = useSelector((store) => store.favorite);
  const isFavorite = favoriteProducts.find((item) => item.id === id) || false;
  return (
    <>
      <span
        className={`${parentClass}__favorite favorite`}
        onClick={() => {
          if (isFavorite) {
            dispatch(deleteFromFavorite(id));
          } else {
            dispatch(addToFavorite({ id, title, slug, isNew: true }));
            setTimeout(() => {
              dispatch(hideToolTip(id));
            }, 1000);
          }
        }}
      >
        {isFavorite ? (
          <svg>
            <use xlinkHref={`${Icons}#icon-favorite-fill`} />
          </svg>
        ) : (
          <svg>
            <use xlinkHref={`${Icons}#icon-favorite-stroke`} />
          </svg>
        )}
      </span>
    </>
  );
};

export default Favorite;
