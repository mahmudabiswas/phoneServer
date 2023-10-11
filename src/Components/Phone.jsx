import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Phone = () => {
  const phone = useLoaderData();
  console.log(phone);
  return (
    <div>
      <h1> All phone are here : {phone.length} </h1>
    </div>
  );
};

export default Phone;

{
  /* <li key={phone.id}>
          <Link to={`/phones/${phone.id}`}> {phone.name} </Link>
        </li>; */
}
