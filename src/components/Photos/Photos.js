import "./Photos.css";


export const Photos = ({ parentNode, src, alt = "", width = "250px", heigth = "250px" }) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.style.width = width;
  img.style.height = heigth;
  parentNode.appendChild(img);
};