import Header from "./components/Header";
import Introduce from "./components/Introduce";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="bg-red-100 min-h-screen">
      <Header></Header>
      <main>
        <Introduce></Introduce>
        <Portfolio></Portfolio>
        <div className="bg-gray-100 max-w-screen-xl mx-auto h-96 flex justify-center items-center">
          내 연락처
        </div>
      </main>
      <footer className="mx-w-screen-xl mx-auto flex justify-end py-1 md:py-2">
        2023-03-30 by cony
      </footer>
    </div>
  );
}

export default App;
