var myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');
myHeading.innerHTML = 'Hello world!';

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'Images/Bag_1.jpg') {
      myImage.setAttribute ('src','Images/Bag_2.jpg');
    } else {
      myImage.setAttribute ('src','Images/Bag_1.jpg');
    }
}