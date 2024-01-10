import { createApi } from "unsplash-js";


const unsplashApiKey = import.meta.env.VITE_API_KEY;



const unsplash = createApi({
  accessKey: unsplashApiKey,
});


export default unsplash;
