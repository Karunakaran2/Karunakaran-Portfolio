import React, { Children } from "react";

const BannerSection = ({ id, children, className }) => {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
};

export default BannerSection;
