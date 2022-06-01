import React from "react";
import { useDispatch } from "react-redux";
import { sortPriceList } from "../features/product/productSlice";



const Select = ({parentClass}) => {
  const dispatch = useDispatch()

  const options = [
    {
      option: "По алфавиту",
      clickEvent: () => dispatch(sortPriceList('by name')),
    },
    {
      option: "Цена по убыванию",
      clickEvent: () => dispatch(sortPriceList('low price')),
    },
    {
      option: "Цена по возрастанию",
      clickEvent: () => dispatch(sortPriceList('high price')),
    },
  ];
  
  return (
    <div className={`${parentClass}__sort sort-price`}>
      <span className="sort-price__title">Отсортировать как:</span>
      <ul className="sort-price__list">
        {
          options.map((item, index) => {
            return(
              <li className="sort-price__item" key={index} onClick={item.clickEvent}>{item.option}</li>
            )
          })
        }
      </ul>
    </div>
);
};

export default Select;
