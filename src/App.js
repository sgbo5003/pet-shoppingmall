import ContentComponent from "./components/ContentComponent.tsx";
import Header from "./components/Header.tsx";
import SliderComponent from "./components/SliderComponent.tsx";

function App() {
  return (
    <div className="relative w-full mx-auto my-0">
      <Header />
      <SliderComponent />
      <ContentComponent />
    </div>
  );
}

export default App;
