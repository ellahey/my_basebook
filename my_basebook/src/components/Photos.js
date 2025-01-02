
function getResponsiveImage(person) {
  const image = getStandardImage(person.image);

  const extensionMatch = image.match(/\.(jpg|png|jpeg)$/i);
  const extension = extensionMatch ? extensionMatch[0] : ''; 
  const imageBase = image.replace(/(-\d+x\d+)?\.(jpg|png|jpeg)$/i, ''); // Removes size indicators like "-600x600"


  if (!extension) {
    return {
      src: "https://via.placeholder.com/1280",
      srcSet: "https://via.placeholder.com/300 300w, https://via.placeholder.com/768 768w, https://via.placeholder.com/1280 1280w",
      sizes: "(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px",
    };
  }

  return {
    src: `${imageBase}${extension}`,
    srcSet: `${imageBase}-300${extension} 300w, ${imageBase}-768${extension} 768w, ${imageBase}-1280${extension} 1280w`,
    sizes: "(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px",
  };
}


function getStandardImage(person) {
let photo = person.image
  return photo;
}

function getLetterAvatars(person) {
  const firstLetter = person.firstName[0];
  const secondLetter = person.lastName[0];
  const initials = firstLetter + secondLetter;
  return initials;
}



export { getStandardImage, getResponsiveImage, getLetterAvatars } ;
