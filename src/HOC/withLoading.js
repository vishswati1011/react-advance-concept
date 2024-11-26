import React, { useEffect, useState } from "react";
export const withLoading = (WrappedComponent) => {
  const WithLoading = ({ props }) => {

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      
    }, []);

    return <WrappedComponent isLoading={isLoading} {...props} />;
  };
  WithLoading.displayName = `withLoading(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  return WithLoading;
};
