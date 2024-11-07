import { LivePreview } from "@/components/ui/live-preview";
import React from "react";
import type { PathRouteProps } from "react-router-dom";

const Home = React.lazy(() => import("@/lib/pages/home"));
const Test = React.lazy(() => import("@/lib/pages/test"));

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "dry-run",
    element: <Test />,
  },
  {
    path: "live-preview",
    element: <LivePreview />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
