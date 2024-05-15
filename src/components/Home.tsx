import React from "react";
import SliderComponent from "./SliderComponent.tsx";
import ContentComponent from "./ContentComponent.tsx";

const Home = () => {
  return (
    <div className="relative w-full mx-auto my-0">
      <SliderComponent />
      <ContentComponent />
    </div>
  );
};

export default Home;
