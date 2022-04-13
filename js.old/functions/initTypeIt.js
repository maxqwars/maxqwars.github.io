import TypeIt from "typeit";

export default async function initTypeIt(selector) {
  try {
    new TypeIt(selector, { speed: 50, startDelay: 500 }).go();
  } catch (e) {
    console.log("Failed init typeIt reason:", e);
  }
}
