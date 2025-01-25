import { useState, useEffect } from "react";
import ProductTile from "../../components/tile/ProductTile";
import "../../src/server";
// {
//   description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!";
//   id: "1";
//   imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png";
//   name: "Modest Explorer";
//   price: 60;
//   type: "simple";
// }

export default function VansCategory() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
      });
  }, []);

  const productTiles = vans.map((van, index) => {
    return (
      <ProductTile
        key={index}
        id={van.id}
        imageUrl={van.imageUrl}
        name={van.name}
        price={van.price}
        type={van.type}
        description={van.description}
        tileType="category"
      />
    );
  });

  return (
    <>
      <div className="content-wrapper category-container">
        <div className="category-title">
          <h1>Explore our van options</h1>
        </div>
        <div className="product-tiles-container">{productTiles}</div>
      </div>
    </>
  );
}
