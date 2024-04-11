import Header from "./components/header";
import Title from "./components/title";
import CardOne from "./components/cardOne"; 
import CardTwo from "./components/cardTwo";
import CardThree from "./components/cardThree";
import CardFour from "./components/cardFour";

function App() {
  return (
    <div>
      <Header/>
      <Title/>
      <div className="flex">
        <CardOne/> 
        <CardTwo/>
        <CardThree/>
        <CardFour/>
      </div>
    </div>
  );
}

export default App;
