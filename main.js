var myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cat_3.png") {
    myImage.setAttribute("src", "images/cat_meatball.png");
  } else {
    myImage.setAttribute("src", "images/cat_3.png");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'MY CAT IS THE BEST, ' + myName;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = "MY CAT IS THE BEST, " + storedName;
  }
    
  myButton.onclick = function () {
    setUserName();
  };  