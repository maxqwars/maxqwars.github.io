import TypeIt from "typeit";

export default function typeIt(id) {
  try {
    new TypeIt(id, { speed: 50, startDelay: 500 }).go();
  } catch (e) {
    console.log(e);
  }
}
