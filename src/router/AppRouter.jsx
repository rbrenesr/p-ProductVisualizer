import { Navigate, Route, Routes } from "react-router-dom";
import { ProductsView } from "../modules/products";
import { Login } from "../modules/auth";

export const AppRouter = () => {
  const status = "authenticatedf";

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<ProductsView />} />
      ) : (
        <Route path="/auth/*" element={<Login />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
