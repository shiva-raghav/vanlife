import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data.vans));
  }, []);

  return (
    <>
      <div className="content-wrapper product-container">
        <h1>This is Van Detail Page</h1>
      </div>
    </>
  );
}
