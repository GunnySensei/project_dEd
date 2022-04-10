import Footer from "./components/Footer";
import Home from "./pages/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <div>
        <Nav></Nav>
      </div>
      <div className="App">
        <Home />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
