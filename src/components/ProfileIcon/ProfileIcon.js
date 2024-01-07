import "./ProfileIcon.css";

export const ProfileIcon = ({ parentNode, url = "./src/assets/usuario.svg", name = "icon" }) => {
  const profileElement = document.createElement("div");
  profileElement.classList.add("profile");
  if (url) {
    const img = document.createElement("img");
    img.src = url;
    img.alt = name + " " + "profile";
    profileElement.appendChild(img);
  }
  parentNode.appendChild(profileElement);
};