const keyUri = {
  BACKEND_URI:'http://localhost:5000'

  // BACKEND_URI: "https://stingray-app-zzl7k.ondigitalocean.app"
// 
};

let token = localStorage.getItem("token");
const config = {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export { keyUri, config };
