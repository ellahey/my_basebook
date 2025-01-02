function getImage(person) {

    let image = person.image;
    if (image === null) {
       image = "https://via.placeholder.com/150";
    }
  return `${person.image}`;
}

export { getImage };