
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";

const TeamCard = ({ name, quote, src, alt }) => {
  const fallbackImage = "./avatar.png";

  const generateImageUrl = (src) => {
    const largerImage = src;
    if (src) {
      return largerImage;
    }
    return fallbackImage;
  };

  const [imageSrc, setImageSrc] = useState(generateImageUrl(src));
  const [isClicked, setIsClicked] = useState(false);

  if (quote.startsWith("Lorem")) {
    quote = "";
  }

  const handleError = (event) => {
    console.error("Image failed to load:", {
      attemptedUrl: imageSrc,
      errorEvent: event,
    });

    if (imageSrc !== fallbackImage) {
      setImageSrc(fallbackImage);
    }
  };

  const handleClick = () => {
    window.open(imageSrc, '_blank', 'noopener,noreferrer');
    setIsClicked(!isClicked);
    setTimeout(() => {
      setIsClicked(false); 
    }, 2000);
  };

  return (
    <Card sx={{ 
      "&:hover": {
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
        animationName: "ffect",
        animationDuration: "0.25s",
        borderLeft: "8px #ffa2b6 solid",
        boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
      },
      maxWidth: 345 
    }}>
      <div style={{ height: 200, display: "flex", justifyContent: "center" }}>
        <img
          onClick={handleClick}
          src={imageSrc}
          alt={alt}
          onError={handleError}
          style={{
            transition: "transform 0.5s ease",
            transform: isClicked ? "scale(1.5)" : "scale(1)",
            height: "100%",
            width: "auto",
            objectFit: 'contain',
            cursor: "pointer",
            margin: "10px"
          }}
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <CardActionArea
            sx={{
              "&:hover": {
                fontWeight: "bold",
                color: "primary.main",
                transition: "0.3s ease, font-weight 0.3s ease",
              },
            }}
          >
            {quote}
          </CardActionArea>
        </Typography>
      </CardContent>
    </Card>
  );
};
export default TeamCard;
