import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import Home from './pages/Home';
import SearchWallet from './pages/SearchWallet'
import ListBlocks from './pages/ListBlocks'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchWallet/:id" element={<SearchWallet />} />
        <Route path="/blocks" element={<ListBlocks/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
