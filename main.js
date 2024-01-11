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

const getPhoto = async (keyword) => {
  const images = await unsplash.search.getPhotos({
    query: keyword,
    page: 1,
    perPage: 20,
  });
  return images;
};





ProfileIcon({ parentNode: divHeader, url: "../src/assets/Pinterest-logo.png" });
Button({ parentNode: divHeader, className: "start", textColor: "white", bgColor: "black", text: "Start" });
Button({ parentNode: divHeader, className: "today", textColor: "black", bgColor: "white", text: "Today" });
Button({ parentNode: divHeader, className: "create", textColor: "black", bgColor: "white", text: "Create" });
SearchBar({ parentNode: divHeader, bgColor: "#a2a0a0" });
ProfileIcon({ parentNode: divHeader, url: "../src/assets/campana.svg" });
ProfileIcon({ parentNode: divHeader, url: "../src/assets/sobre.svg" });
ProfileIcon({ parentNode: divHeader });




const photos = await getPhoto("latest");

const photoArray = photos.response.results;


const setPhoto = (photoArray) => {
  photoArray.forEach((photo, index) => {
    if (index % 6 === 0 && photoArray.length <= 30) {
      Photos({ parentNode: divMain, src: photo.urls.small, alt: photo.alt_description, width: "350px" });
    } else {
      Photos({ parentNode: divMain, src: photo.urls.small, alt: photo.alt_description });
    }
  }
  );
};



setPhoto(photoArray);


const inputElement = document.querySelector(".searchBar");

inputElement.addEventListener("input", async (e) => {
  const inputValue = e.target.value;
  if (inputValue.length >= 3) {
    const newPhotos = await getPhoto(inputValue);
    const newArray = newPhotos.response.results;
    const imgArray = document.querySelectorAll(".main img");
    imgArray.forEach((img, i) => {
      const altText = img.alt;
      if (altText.includes(inputValue)) {
        img.classList.remove("hidden");
      } else {
        img.classList.add("hidden");
      }
    });
    setPhoto(newArray);
  };
});


/* const flipImg = (photoArray) => {
  photoArray.forEach(photo => {
    photo.style.rotate = "180deg";
  });
}; */

const imgArray = document.querySelectorAll(".main img");
const startButton = document.querySelector(".start");
startButton.addEventListener("click", () => {
  imgArray.forEach(photo => {
    photo.style.rotate = "360deg";
  });
});



