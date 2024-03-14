import React from "react";

const PreloadedBackgroundImage = ({ imageUrl }) => {
  // Create a preload link for the image
  React.useEffect(() => {
    const imageLink = document.createElement("link");
    imageLink.rel = "preload";
    imageLink.href = imageUrl;
    imageLink.as = "image";
    document.head.appendChild(imageLink);
    return () => {
      document.head.removeChild(imageLink);
    };
  }, [imageUrl]);

  // Style for the background image
  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrl})`,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1, // Set the z-index to a negative value to place it behind other content
  };

  // Render a div with the preloaded image as a background
  return <div className="preloaded-background-image" style={backgroundImageStyle} />;
};

export default PreloadedBackgroundImage;
