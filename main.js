import { Button } from './src/components/Button/Button';
import { Photos } from './src/components/Photos/Photos';
import { ProfileIcon } from './src/components/ProfileIcon/profileIcon';
import { SearchBar } from './src/components/SearchBar/SearchBar';
import unsplash from './src/utils/fetchUnsplashApi';
import './style.css';

const divApp = document.querySelector("#app");
const divHeader = document.createElement("div");
const divMain = document.createElement("div");
divHeader.classList.add("header");
divMain.classList.add("main");

divApp.appendChild(divHeader);
divApp.appendChild(divMain);

const getPhotoList = async () => {
  let res;
  try {
    res = await unsplash.photos.list({ perPage: 20 });
  } catch (error) {
    console.log("hello");
  }
  return res.response.results;
};

const photoArray = await getPhotoList();



ProfileIcon({ parentNode: divHeader, url: "../src/assets/Pinterest-logo.png" });
Button({ parentNode: divHeader, textColor: "white", bgColor: "black", text: "Start" });
Button({ parentNode: divHeader, textColor: "black", bgColor: "white", text: "Today" });
Button({ parentNode: divHeader, textColor: "black", bgColor: "white", text: "Create" });
SearchBar({ parentNode: divHeader, bgColor: "#a2a0a0" });
ProfileIcon({ parentNode: divHeader, url: "../src/assets/campana.svg" });
ProfileIcon({ parentNode: divHeader, url: "../src/assets/sobre.svg" });
ProfileIcon({ parentNode: divHeader });



photoArray.forEach((photo, index) => {
  if (index % 6 === 0) {
    Photos({ parentNode: divMain, src: photo.urls.small, alt: photo.alt_description, width: "350px" });
  } else {
    Photos({ parentNode: divMain, src: photo.urls.small, alt: photo.alt_description });
  }
}
);



const inputElement = document.querySelector(".searchBar");

inputElement.addEventListener("input", (e) => {
  const inputValue = e.target.value;

  const imgArray = document.querySelectorAll(".main img");

  imgArray.forEach((img, i) => {
    const altText = img.alt;
    if (altText.includes(inputValue)) {
      img.classList.remove("hidden");
    } else {
      img.classList.add("hidden");
      if (i === 0 && !document.querySelector(".pNoFound")) {
        const pNoFound = document.createElement("p");
        pNoFound.className = "pNoFound";
        pNoFound.innerText = "There is no photo with this description";
        divMain.appendChild(pNoFound);
      }
    }
  });
});
