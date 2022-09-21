import Wrapper from "./pages/Wrapper";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Sub01 from "./pages/Sub01";
import Sub02 from "./pages/Sub02";
import Sub03 from "./pages/Sub03";
import Sub04 from "./pages/Sub04";
import Board from "./pages/Board";
import Footer from "./pages/Footer";
import { Route, Routes } from "react-router-dom";
import './css/basic.scss'

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Sub01" element={<Sub01 />} />
        <Route path="/Sub02" element={<Sub02 />} />
        <Route path="/Sub03" element={<Sub03 />} />
        <Route path="/Sub04" element={<Sub04 />} />
        <Route path="/Board" element={<Board />} />
      </Routes>
      <Footer />
    </Wrapper>
  )
}

export default App;
