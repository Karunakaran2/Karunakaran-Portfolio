import React, { Children } from "react";
import styled from "styled-components";

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
`;
const SectionSubTitle = styled.p`
  color: ${({ theme }) => theme.colors.subtext};
`;

const Section = ({ id, children, className, title, subtitle }) => {
  return (
    <section id={id} className={className} style={{ marginBottom: "100px" }}>
      <div className="text-center pb-4 mb-12">
        <SectionTitle className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-pink-500 text-transparent bg-clip-text">
          {title}
        </SectionTitle>
        <SectionSubTitle className="text-gray-600 mt-3 text-lg">
          {subtitle}
        </SectionSubTitle>
      </div>
      {children}
    </section>
  );
};

export default Section;
