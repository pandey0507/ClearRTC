// let IS_PROD = false;
// const server = IS_PROD ?
//     "https://mukundzoombackend.onrender.com" :

//     "http://localhost:8000"


// export default server;

let IS_PROD = true;

const server = IS_PROD
  ? "https://clear-rtc-backend.onrender.com"  // your working backend URL
  : "http://localhost:8000";

export default server;