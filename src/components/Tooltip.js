import React from "react";

const Tooltip = ({parentClass}) => {
  return (
    <div className={`${parentClass}__tooltip tooltip`}>
      <span>добавлено в избранное</span>
    </div>
  );
};

export default Tooltip;
