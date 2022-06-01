import React from "react";
import { Link } from "react-router-dom";

const link = [
  {
    name: "главная",
    url: "/",
  },
  {
    name: "ассортимент",
    url: "/assortment",
  },
  {
    name: "прайс-лист",
    url: "/price-list",
  },
];

const Nav = ({navClass}) => {
  return (
    <ul className={`${navClass}__list`}>
      {link.map((item, index) => {
        return <li className={`${navClass}__item`} key={index}>
            <Link to={item.url} className={`${navClass}__link`}>{item.name}</Link>
        </li>;
      })}
    </ul>
  );
};

export default Nav;
