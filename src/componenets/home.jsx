import React from "react";
import Navbar from "./navbar.jsx";

function Home() {
  return (
    <div className="relative w-full">
      <div className="absolute top-3 left-0 w-full z-10">
        <Navbar />
      </div>

      <picture className="block w-full">
        <source
          media="(min-width: 1024px)"
          srcSet="https://res.cloudinary.com/ddpdocy8k/image/upload/w_3000,dpr_auto,f_auto,q_auto:best/v1770127451/HORIZON_POSTER_3x_3x_jehs0g.png"
        />
        <img
          src="https://res.cloudinary.com/ddpdocy8k/image/upload/dpr_auto,f_auto,q_auto:best/v1770143452/LOGO_HORIZON_1_3x_1_zk9pot.png"
          alt="Hero poster"
          className="w-full h-auto object-cover block"
        />
      </picture>
    </div>
  );
}

export default Home;
