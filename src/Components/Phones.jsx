import React from "react";
import { useLoaderData } from "react-router-dom";

const Phones = () => {
  const phones = useLoaderData();
  console.log(phones);
  return (
    <div>
      Phones: {phones.length}
      {/* {phones.map((item) => {
        <li>{item.name}</li>;
      })} */}
    </div>
  );
};

export default Phones;
