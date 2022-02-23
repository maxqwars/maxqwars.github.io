import TypeIt from "typeit";

export default function typeIt(id) {
  if (document.getElementById(id)) {
    new TypeIt(id, { speed: 50, startDelay: 500 }).go();
  }
}
