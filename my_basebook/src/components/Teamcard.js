import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";

const TeamCard = ({ name, quote, src, alt }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const fallbackImage = "./avatar.png";
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (quote.startsWith("Lorem")) {
    console.log("Quote is a placeholder:", quote);
    quote = "";
  }

  quote = isHovered ? 'visible' : 'hidden';



  // const onmouseenter = () => {
  //   quote.style.visibility = "visible";
  // };

  // const onmouseleave = () => {
  // quote.style.visibility = "hidden";

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
    <CardActionArea >
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
    </CardActionArea>
  );
};

export default TeamCard;
