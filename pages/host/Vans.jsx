import { useState, useEffect } from "react";
import ProductTile from "../../components/tile/ProductTile";
export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanList = vans.map((van, index) => {
    return (
      <li className="list-item" key={index}>
        <div className="van-info">
          <ProductTile
            key={van.id}
            id={van.id}
            imageUrl={van.imageUrl}
            name={van.name}
            price={van.price}
            tileType="list"
          />
        </div>
        <div className="edit-info">
          <a href="#">Edit</a>
        </div>
      </li>
    );
  });
  return (
    <>
      <div className="listed-vans">
        <section className="listed-vans-section">
          <div>
            <h2>Your listed vans</h2>
            <a href="#">View all</a>
          </div>
          <ul>{vanList}</ul>
        </section>
      </div>
    </>
  );
}
