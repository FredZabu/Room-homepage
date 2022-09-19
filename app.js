// referencing to the menu and close buttons
let menu = document.querySelector(".menu");
let closeMenu = document.querySelector(".close");

// reference to the navigation bar
let section2 = document.querySelector(".nav-list");

// referencing to the arrow buttons
let left = document.querySelector(".arrow-left")
let right = document.querySelector(".arrow-right")

// referencing to the picture tag
const source1 = document.querySelector(".source1");
const source2 = document.querySelector(".source2");
const srcImage = document.querySelector(".srcImage");

// reference to the title and description text

const title = document.querySelector(".title");
const description = document.querySelector(".descript"); 

// helper in iterating through the dataText Array
let count = 0;

// the data source for the images and description text
let dataText = [{
    mobile_imgUrl: "./images/mobile-image-hero-1.jpg",
    desktop_imgUrl: "./images/desktop-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    description: "We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
},
{
    mobile_imgUrl: "./images/mobile-image-hero-2.jpg",
    desktop_imgUrl: "./images/desktop-image-hero-2.jpg",
    title: "We are available all across the globe",
    description: "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
{
    mobile_imgUrl: "./images/mobile-image-hero-3.jpg",
    desktop_imgUrl: "./images/desktop-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }];


console.log(title.innerHTML);

source1.attributes.srcset.nodeValue = dataText[count].desktop_imgUrl;
source2.attributes.srcset.nodeValue = dataText[count].mobile_imgUrl;
srcImage.attributes.src.nodeValue = dataText[count].desktop_imgUrl;

title.innerHTML = dataText[count].title;
description.innerHTML = dataText[count].description;


menu.addEventListener('click', ()=>{
    section2.style.top = "0%";
})

closeMenu.addEventListener('click', ()=>{
    section2.style.top = "-100%";
})


left.addEventListener("click",()=>{
    count--;
if(count<0){
    count = dataText.length-1;
}
    source1.attributes.srcset.nodeValue = dataText[count].desktop_imgUrl;
    source2.attributes.srcset.nodeValue = dataText[count].mobile_imgUrl;
    srcImage.attributes.src.nodeValue = dataText[count].desktop_imgUrl;

    title.innerHTML = dataText[count].title;
    description.innerHTML = dataText[count].description;
})


right.addEventListener("click",()=>{
    count++;
    if(count==dataText.length){
        count=0;
    }
    source1.attributes.srcset.nodeValue = dataText[count].desktop_imgUrl;
    source2.attributes.srcset.nodeValue = dataText[count].mobile_imgUrl;
    srcImage.attributes.src.nodeValue = dataText[count].desktop_imgUrl;

    title.innerHTML = dataText[count].title;
    description.innerHTML = dataText[count].description;
    })