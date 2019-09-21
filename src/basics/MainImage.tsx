import React from "react";
import styled from "styled-components";

const MainImageOuter = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 256px;

  & img {
    width: 100%;
  }
`;

const MainImage: React.FC = () => {
  const src = `${process.env.PUBLIC_URL}/profile_marie.jpg`;
  return (
    <MainImageOuter className="MainImage">
      <img src={src} alt="" />
    </MainImageOuter>
  );
};

export default MainImage;
