// src/App.tsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";
import Products from "./pages/Products";
import Description from "./pages/Description";
import Activity from "./pages/Activity";
import Acheter from "./pages/Acheter";
import Juridique from "./pages/Juridique";
import PageWrapper from "./components/PageWrapper";

export default function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          index
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/produits"
          element={
            <PageWrapper>
              <Products />
            </PageWrapper>
          }
        />
        <Route
          path="/descriptif"
          element={
            <PageWrapper>
              <Description />
            </PageWrapper>
          }
        />
        <Route
          path="/activites"
          element={
            <PageWrapper>
              <Activity />
            </PageWrapper>
          }
        />

        <Route
          path="/acheter"
          element={
            <PageWrapper>
              <Acheter />
            </PageWrapper>
          }
        />

        <Route
          path="/juridique"
          element={
            <PageWrapper>
              <Juridique />
            </PageWrapper>
          }
        />

        <Route
          path="*"
          element={
            <PageWrapper>
              <NotFound />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
