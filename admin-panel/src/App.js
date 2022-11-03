import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Login from "./Pages/Login/Login";
import New from "./Pages/New/New";
import NewQuotation from "./Pages/Quotations/NewQuotation";
import PrintQuotation from "./Pages/Quotations/PrintQuotation";
import Quotations from "./Pages/Quotations/Quotations";
import SingleQuotation from "./Pages/Quotations/SingleQuotation";
import Single from "./Pages/Single/Single";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" element={<New/>}/>
          </Route>
          <Route path="products">
            <Route index element={<List/>}/>
            <Route path=":productId" element={<Single/>}/>
            <Route path="new" element={<New/>}/>
          </Route>
          <Route path="quotations">
            <Route index element={<Quotations/>}/>
            <Route path=":productId" element={<SingleQuotation/>}/>
            <Route path="new" element={<NewQuotation/>}/>
            <Route path="print/:id" element={<PrintQuotation/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
