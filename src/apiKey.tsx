const MODE = "dev";
export const SERVER_API_KEY =
  MODE === "dev"
    ? `http://localhost:80/FoodAdvisorServer`
    : `http://foodadvisor.ddns.net:80/FoodAdvisorServer`;
