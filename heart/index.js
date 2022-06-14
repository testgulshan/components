console.log("called...");
const parentNode = document.createElement("div");
parentNode.setAttribute("class", "center-on-page");

const childNode = document.createElement("div");
childNode.setAttribute("class", "heart pulse");

// append parent-element
document.body.prepend(parentNode);

// append child-element
document.getElementsByClassName("center-on-page")[0].appendChild(childNode);
