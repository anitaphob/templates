console.log("its working")

//for(let i=0; i<10; i++){
  let spaceshipsContainer = document.querySelector("#spaceships");

  console.log(spaceshipsContainer)

  let template = document.querySelector("#spaceshipTemplate").content;
  console.log(template)

  let myCopy = template.cloneNode(true);

  let templateHeader = myCopy.querySelector("h1");
  templateHeader.textContent = "Apollo " + i;

  let secondLi = myCopy.querySelector("li:nth-child(2)");
  secondLi.textContent = "Armstrong";


  spaceshipsContainer.appendChild(myCopy);
//}