function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show less";
    moreText.style.display = "inline";
  }
}
function myFunction2() {
  var dots2 = document.getElementById("dots2");
  var more2Text = document.getElementById("more2");
  var btn2Text = document.getElementById("myBtn2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btn2Text.innerHTML = "See more";
    more2Text.style.display = "none";
  } else {
    dots2.style.display = "none";
    btn2Text.innerHTML = "Show less";
    more2Text.style.display = "inline";
  }
}

function showResults(){
	letscore=0;
	let question1=document.getElementById("q-1").value;
	let question2=document.getElementById("q-2").value;
	let question3=document.getElementById("q-3").value;
	let question4=document.getElementById("q-4").value;
	let results=document.getElementById("result");
	
	if(question1=="& nbsp;"){
		score++;
		results.innerHTML+="<p>Question 1 - Correct </p>"
}

let slideIndex = 1;
showSlides(slideIndex);
//Next prev controls
function plusSlides(n) {
	showSlides(slideIndex +=n);
}
//Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementByClassName("mySlides");
	let dots = document.getElementByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slide.length}
	for (i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace("active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += "active";
}

setInterval(changeSlide, 10000);
	