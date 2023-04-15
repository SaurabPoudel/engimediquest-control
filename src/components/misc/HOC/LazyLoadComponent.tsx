import { ComponentType, Suspense, useEffect, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Fallback = () => {
  return (
    <ClimbingBoxLoader
      color="#36d7b7"
      loading={true}
      size={30}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export function lazyLoadComponent<T extends object>(
  Component: ComponentType<T>,
  FallbackComponent: React.ReactElement = <Fallback />
) {
  return (componentProps: T) => (
    <Suspense fallback={FallbackComponent}>
      <Component {...componentProps} />
    </Suspense>
  );
}
