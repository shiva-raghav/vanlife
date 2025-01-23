import { Link } from "react-router-dom";
import Badge from "../badge/Badge";
import "./productTile.css";

export default function ProductTile({ id, imageUrl, name, price, type }) {
  return (
    <>
      <div className="product-tile">
        <Link to={`/vans/${id}`}>
          <img
            className="product-image"
            src={imageUrl}
            alt={`${name} van image`}
          />
          <div className="info">
            <h3 className="title-info">{name}</h3>
            <div className="cost-info-wrapper">
              <span className="cost-info">{`$${price}`}</span>
              <span className="per-day-info">/day</span>
            </div>
          </div>
          <Badge type={type}>
            {type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}
          </Badge>
        </Link>
      </div>
    </>
  );
}
