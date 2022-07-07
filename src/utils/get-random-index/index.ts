import { INDEX } from "typings";

function getRandomIndex(): INDEX {
  return Math.floor(Math.random() * 9) as INDEX;
}

export default getRandomIndex;
