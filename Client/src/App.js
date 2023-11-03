import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div style={{height:'40px'}}></div>
      <AllRoutes/>
    </>
  );
}

export default App;
