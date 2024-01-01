import React, { useState, useEffect } from "react";
import Loading from "../components/loading/loading";

export const withLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithLoading: React.FC<P> = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const images = document.querySelectorAll("img");
      const fonts = document.fonts;

      const handleLoad = () => {
        setLoading(false);
      };

      const imageLoadPromises = Array.from(images).map((image) => {
        if (image.complete) {
          return Promise.resolve();
        } else {
          return new Promise((resolve) => {
            image.addEventListener("load", resolve);
          });
        }
      });

      const fontLoadPromise = fonts.ready.then(() => {
        return Promise.resolve();
      });

      Promise.all([...imageLoadPromises, fontLoadPromise]).then(() => {
        setLoading(false);
      });

      return () => {
        images.forEach((image) => {
          image.removeEventListener("load", handleLoad);
        });
      };
    }, []);

    return (
      <div>
        {loading ? <Loading /> : null}
        <div className={loading ? "hide-content" : ""}>
          <WrappedComponent {...props} />
        </div>
      </div>
    );
  };

  return WithLoading;
};
