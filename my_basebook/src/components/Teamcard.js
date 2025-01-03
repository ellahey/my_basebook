import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const TeamCard = ({ name, quote, src, alt }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const fallbackImage = "./avatar.png";

  const handleError = (event) => {
    console.error("Image failed to load:", {
      attemptedUrl: imageSrc,
      errorEvent: event,
    });

    if (imageSrc !== fallbackImage) {
      setImageSrc(fallbackImage);
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <div style={{ height: 200, display: "flex", justifyContent: "center" }}>
        <img
          src={imageSrc}
          alt={alt}
          onError={handleError}
          style={{
            height: "100%",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {quote}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
