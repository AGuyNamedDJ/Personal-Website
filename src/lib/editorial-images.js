// Each core-page photograph has one editorial placement. Collection thumbnails
// remain navigation to their complete albums.
const chicago = (key) => `https://9-1-2023.s3.us-east-2.amazonaws.com/${key}`;
const graduation = (key) =>
  `https://masters-graduation.s3.us-east-2.amazonaws.com/${key}`;
export const editorialImages = {
  homeHero: chicago("Sep1O-169.jpeg"),
  lifeHero: chicago("Sep1O-181.jpeg"),
  homeLife: chicago("Sep1O-115.jpeg"),
  homePortrait: graduation("GRADO-6817.jpeg"),
  featured: {
    "9-1-2023": chicago("Sep1O-163.jpeg"),
    "masters-graduation": graduation("GRADO-6795.jpeg"),
    "daddy-daughter-photoshoot":
      "https://daddy-daughter-photoshoot.s3.us-east-2.amazonaws.com/E11-E.jpg",
  },
};
