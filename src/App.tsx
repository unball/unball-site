import "@/i18n";

import type { ReactElement } from "react";
import {
  createBrowserRouter,
  Navigate,
  type RouteObject,
  RouterProvider,
} from "react-router-dom";

import Layout from "@/components/layout/Layout";
import About from "@/components/pages/about";
import Contact from "@/components/pages/contact";
import Home from "@/components/pages/home";
import Papers from "@/components/pages/papers";
import Partners from "@/components/pages/partners";
import LanguageGuard from "@/i18n/LanguageGuard";
import { type RouteKey, ROUTES, SUPPORTED_LANGS } from "@/i18n/routesMap";

const PAGES: Record<RouteKey, ReactElement> = {
  home: <Home />,
  about: <About />,
  papers: <Papers />,
  partners: <Partners />,
  contact: <Contact />,
};

const toRelative = (path: string) => path.split("/").slice(2).join("/");

const pageRoutes = ROUTES.flatMap<RouteObject>(({ key, paths }) => {
  const element = PAGES[key];
  if (key === "home") return { index: true, element };
  return SUPPORTED_LANGS.map((lang) => ({
    path: toRelative(paths[lang]),
    element,
  }));
});

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Navigate to="/pt" replace /> },
      {
        path: "/:lang",
        element: <LanguageGuard />,
        children: [
          ...pageRoutes,
          { path: "*", element: <Navigate to=".." relative="path" replace /> },
        ],
      },
      { path: "*", element: <Navigate to="/pt" replace /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
