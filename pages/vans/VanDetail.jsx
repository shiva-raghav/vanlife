import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import ProductTile from "../../components/tile/ProductTile";

export default function VanDetail() {
  const [van, setVan] = useState([]);
  const { id } = useParams();
  const location = useLocation();

  const stateParams = location.state?.params || "";

  const getTypeParamValue = () => {
    let searchParam = location.state?.params || null;
    const regex = /type=([^&]+)/g;
    let matches;
    const types = [];
    if (searchParam !== null) {
      while ((matches = regex.exec(searchParam)) !== null) {
        types.push(matches[1]);
      }
    }
    return types;
  };

  const createLinkString = () => {
    let params = getTypeParamValue();
    if (params.length === 0) {
      return "Back to vans";
    }
    if (params.length === 1) {
      return `Back to ${
        params[0].charAt(0).toUpperCase() + params[0].slice(1).toLowerCase()
      } vans`;
    }
    if (params.length === 2) {
      return `Back to ${
        params[0].charAt(0).toUpperCase() + params[0].slice(1).toLowerCase()
      } and ${
        params[1].charAt(0).toUpperCase() + params[1].slice(1).toLowerCase()
      } vans`;
    }
    const lastParam = params.pop();
    return `Back to ${params
      .map(
        (param) => param.charAt(0).toUpperCase() + param.slice(1).toLowerCase()
      )
      .join(", ")}, and ${
      lastParam.charAt(0).toUpperCase() + lastParam.slice(1).toLowerCase()
    } vans`;
  };

  const linkString = createLinkString();

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, []);

  return (
    <>
      <div className="content-wrapper product-container">
        <Link to={`..${stateParams}`} relative="path">
          {linkString}
        </Link>
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
