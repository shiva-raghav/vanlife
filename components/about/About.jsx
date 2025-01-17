import { Link } from "react-router-dom";

export default function About({ children }) {
  return (
    <>
      <div className="about-img-container">
        <img
          className="hero-image"
          alt="man sitting on top of van"
          src="../../public/assets/man_sitting_on_caravan.png"
        />
      </div>
      <div className="container about-container">
        <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="cta">
          <p>Your destination is waiting.</p>
          <p>Your van is ready.</p>
          <Link to="/vans">Explore our vans</Link>
        </div>
      </div>
    </>
  );
}
