import Header from "./Header.js";
import Highlights from "./Highlights.js";
import Specials from "./Specials.js";
import { BrowserRouter as Router} from "react-router-dom";



function App() {
  return(
    <Router>
    <Header/>
    <Highlights/>
    <Specials/>
    </Router>
  );
}

export default App;
