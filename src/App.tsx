import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Loader from "./components/Loader";
const App: React.FC = () => {
  const Dashboard = lazy(() => import("./pages/Dashboard"));
  const Products = lazy(() => import("./pages/Products"));
  const Transactions = lazy(() => import("./pages/Transactions"));
  const Customers = lazy(() => import("./pages/Customers"));
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="admin/dashboard" element={<Dashboard />}></Route>
          <Route path="admin/products" element={<Products />}></Route>
          <Route path="admin/transactions" element={<Transactions />}></Route>
          <Route path="admin/customers" element={<Customers />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
