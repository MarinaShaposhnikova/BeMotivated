var image = document.querySelector('img');
var heading = document.querySelector('h1');

image.onclick = function () {
  heading.textContent = 'Text content'
};

heading.onclick = function () {
  setUserName();
  var storedName = localStorage.getItem('name');
  heading.textContent = 'You are so cool, ' + storedName;
}
;

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
}
