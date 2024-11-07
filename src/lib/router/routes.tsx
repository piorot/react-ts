import { LivePreview } from "@/components/ui/live-preview";
import React from "react";
import type { PathRouteProps } from "react-router-dom";

const DryRun = React.lazy(() => import("@/lib/pages/dry-run"));

export const routes: Array<PathRouteProps> = [
  {
    path: "dry-run",
    element: <DryRun />,
  },
  {
    path: "/",
    element: <LivePreview />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
