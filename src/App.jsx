import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./paginas/LandingPage";
import Login from "./layout/Login";
import FormularioLogin from "./paginas/FormularioLogin";
import Dashboard from "./layout/Dashboard";
import FundamentoUseState from "./paginas/FundamentoUseState";
import FundamentoUseEffect from "./paginas/FundamentoUseEffect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
        </Route>

        <Route path="/login" element={<Login />}>
          <Route index element={<FormularioLogin />} />
        </Route>

        <Route path="/fundamentos" element={<Dashboard />}>
          <Route path="usestate" element={<FundamentoUseState />} />
          <Route path="useffect" element={<FundamentoUseEffect />} />
        </Route>

      </Routes>
    </BrowserRouter>

  )
}
export default App