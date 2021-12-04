import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import Home from './pages/Home';
import SearchWallet from './pages/SearchWallet'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchWallet/:id" element={<SearchWallet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
