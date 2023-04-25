import React from "react";
import Box from "./Box";
import { StaticImage } from "gatsby-plugin-image";

const Nav = () => (
  <nav className="navbar">
    <StaticImage
      src={"../images/icon.png"}
      alt={"Stafford community grocery logo"}
      backgroundColor="transparent"
      loading="lazy"
      objectFit="contain"
      style={{ height: "100%", width: "100%" }}
    />
  </nav>
);

export default Nav;
