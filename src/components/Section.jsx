import React, { Children } from "react";

const Section = ({ id, children, className }) => {
  return (
    <section id={id} className={className} style={{ marginBottom: "100px" }}>
      <div className="pb-5 text-center">
        <h2 className="text-gray-300 text-uppercase fs-3">About Us</h2>
        <p className="font-semibold fs-3 text-4xl text-primary">
          Centre for Public Administration Reinvention and Transformation
        </p>
      </div>
      {children}
    </section>
  );
};

export default Section;
