import React, { Component } from 'react';
import './Homefirstrow';
import './Homesecondrow';
import './Homefirstrow';
import '../../Container/About';
import '../../Container/service';
import '../../Container/SliderAll';

class Main {
  constructor() {
    plusSlides(this.props.n);
  }
}
var slideIndex=1;
// document.getElementById("abouthidden").style.display='none';
// document.getElementById("serviceHidden").style.display='none';
document.innerHTML=""
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
    var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
     for (i = 0; i < slides.length; i++) {
         //bay5fy kol aly ablyh
      slides[i].style.display = "none";
  }

    //dah aly byzhrny
     slides[slideIndex-1].style.display = "block";
}
function gotoStyle(){
    document.getElementById("whiteSlider").style.backgroundColor ='white'
}
export default Main;
