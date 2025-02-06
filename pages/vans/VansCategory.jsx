import { useState, useEffect } from "react";
import ProductTile from "../../components/tile/ProductTile";
import "../../src/server";
import { getVans } from "../../src/api";
import Button from "../../components/button/Button";
import { Link, useParams, useSearchParams } from "react-router-dom";
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.getAll("type");

  const setFilterType = (type, e) => {
    const newParams = new URLSearchParams(searchParams);
    if (newParams.has("type")) {
      newParams.append("type", type);
    } else {
      newParams.set("type", type);
    }
    setSearchParams(newParams);
  };

  const clearFilter = () => {
    setSearchParams({});
  };

  const filteredVans =
    typeFilter.length > 0
      ? vans.filter((van) => typeFilter.includes(van.type))
      : vans;

  useEffect(() => {
    const getVansData = async () => {
      setLoading(true);
      setError(null);
      try {
        const vansData = await getVans();
        setVans(vansData);
      } catch (err) {
        setError(err);
        setVans(null);
      } finally {
        setLoading(false);
      }
    };
    getVansData();
  }, []);

  const productTiles = filteredVans
    ? filteredVans.map((van, index) => {
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
            state={{ params: `?${searchParams.toString()}` }}
          />
        );
      })
    : null;

  const filters = ["simple", "luxury", "rugged"].map((type, index) => {
    return (
      <Button
        key={index}
        className={`${type} ${
          searchParams.getAll("type").includes(type)
            ? `${type}-filter-selected`
            : ""
        }`}
        onClickHandler={() => setFilterType(type)}
      >
        {type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}
      </Button>
    );
  });

  const errorMessage = (
    <>
      <h2>There is a problem displaying vans.</h2>
      <p>{`Error: ${error && error.message}`}</p>
    </>
  );
  const loadingText = <h2>Loading...</h2>;

  return (
    <>
      <div className="content-wrapper category-container">
        <div className="category-title">
          <h1>Explore our van options</h1>
        </div>
        {loading && loadingText}
        {productTiles && (
          <>
            <section className="filters">
              {filters}
              {typeFilter.length > 0 && (
                <Link onClick={clearFilter}>Clear filters</Link>
              )}
            </section>

            <section className="product-tiles-container">
              {productTiles}
            </section>
          </>
        )}
        {error && <section className="error-container">{errorMessage}</section>}
      </div>
    </>
  );
}
