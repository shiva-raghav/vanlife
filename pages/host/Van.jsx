import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductTile from "../../components/tile/ProductTile";

export default function Van() {
  const [van, setVan] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, []);

  return (
    <>
      <div className="content-wrapper product-container">
        <ProductTile
          id={van.id}
          imageUrl={van.imageUrl}
          name={van.name}
          price={van.price}
          description={van.description}
          type={van.type}
          tileType="product"
        />
      </div>
    </>
  );
}
