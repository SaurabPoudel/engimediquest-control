import React from "react";
import { lazyLoadComponent, FullPageLoader } from "./components";

const App = React.lazy(() => import("./App"));

const LazyApp = lazyLoadComponent(
  App,
  <FullPageLoader title="EngiMediQuest" />
);

export default function Boot() {
  return <LazyApp />;
}
