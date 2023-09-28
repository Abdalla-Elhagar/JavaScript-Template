
// setting code

let settingBox = document.querySelector(".setting-box");

let SettingIcon = document.querySelector(".setting-icon");
let settingIcon = document.querySelector(".setting-icon i");

SettingIcon.onclick = ()=>{
    settingBox.classList.toggle("open");
    settingIcon.classList.toggle("rotate")
}

// setting color

let colors = document.querySelectorAll(".colors ul li");

if (localStorage.saveColor) {
    document.documentElement.style.setProperty("--main-color", localStorage.saveColor);
    colors.forEach((ele)=>{
        ele.classList.remove("active");
        if(ele.dataset.color === localStorage.saveColor) {
            ele.classList.add("active");
        }
        

        let aboutUsImage = document.querySelector(".about-us img");
        if(localStorage.saveColor === "rgb(251, 140, 4)") {
            aboutUsImage.src = "images/about-us/02.png";
        }
        else if (localStorage.saveColor === "rgb(1, 201, 198)") {
         aboutUsImage.src = "images/about-us/03.png";
        }
        else if (localStorage.saveColor === "rgb(210, 15, 190)") {
            aboutUsImage.src = "images/about-us/04.png";
        }
        else if (localStorage.saveColor === "rgb(4, 132, 251)") {
            aboutUsImage.src = "images/about-us/01.png";
        }
        else if (localStorage.saveColor === "rgb(235, 83, 2)") {
            aboutUsImage.src = "images/about-us/02.png";
        }
    })
}

colors.forEach((ele)=>{
    ele.onclick=(e)=>{
        colors.forEach((li) =>  li.classList.remove("active"));
        ele.classList.add("active");
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color)
        window.localStorage.saveColor = e.target.dataset.color;
        let aboutUsImage = document.querySelector(".about-us img");
    if(e.target.dataset.color === "rgb(251, 140, 4)") {
        aboutUsImage.src = "images/about-us/02.png";
    }
    else if (e.target.dataset.color === "rgb(1, 201, 198)") {
        aboutUsImage.src = "images/about-us/03.png";
    }
    else if (e.target.dataset.color === "rgb(210, 15, 190)") {
        aboutUsImage.src = "images/about-us/04.png";
    }
    else if (e.target.dataset.color === "rgb(4, 132, 251)") {
        aboutUsImage.src = "images/about-us/01.png";
    }
    else if (e.target.dataset.color === "rgb(235, 83, 2)") {
        aboutUsImage.src = "images/about-us/02.png";
    }
    }
});

// random background setting
let backgroundItem = window.localStorage.backgroundItem;
let randomOption = true;
let backgroundInterval;
if (localStorage.backgroundItem) {
    
    if(localStorage.backgroundItem === "true") {
        randomOption = true;

    }
    else {
        randomOption = false;
    }
    let yesNo = document.querySelectorAll(".setting-container span");

    yesNo.forEach((element)=>element.classList.remove("active"));

    if (backgroundItem === "true") {
        document.querySelector(".setting-container .on").classList.add("active")
    }
    else {
        document.querySelector(".setting-container .off").classList.add("active")
    }

}

let yesNo = document.querySelectorAll(".random-background span");

yesNo.forEach((ele)=>{
    ele.addEventListener("click" , (e)=>{
        e.target.parentElement.querySelectorAll(".active").forEach((element)=>element.classList.remove("active"));
        ele.classList.add("active");
        window.localStorage.activeClass = e.target.dataset.background;
        if(e.target.dataset.background === "on") {
            randomOption = true;
            randomImage();

            window.localStorage.backgroundItem = true;
        }
        else {
            randomOption = false;
            clearInterval(backgroundInterval);
            window.localStorage.backgroundItem = false;

        }
    });
});

// Hide Pullet

let bullets = document.querySelectorAll(".pulletHiding div span");
let showBullet = document.querySelector(".navBullets");

if (localStorage.showBull) {
    if (localStorage.showBull === "on") {
        showBullet.style.display = "block";
    }
    else {
        showBullet.style.display = "none";
    }
    if(localStorage.activeBullet === "on") {
        bullets.forEach((element)=>element.classList.remove("active"));
        document.querySelector(".pulletHiding .on").classList.add("active");
    }
    else {
        bullets.forEach((element)=>element.classList.remove("active"));
        document.querySelector(".pulletHiding div .off").classList.add("active");
    }
}

active(bullets);
bullets.forEach((element)=>{
    element.onclick=(e)=>{
        localStorage.showBull = e.target.dataset.bullets;
        if(e.target.dataset.bullets === "on") {
            showBullet.style.display = "block";
            localStorage.activeBullet = e.target.dataset.bullets;
        }
        else {
            showBullet.style.display = "none";
            localStorage.activeBullet = e.target.dataset.bullets;
        }
    }
})

// Reset setting

let resetButton = document.querySelector(".reset button");

resetButton.onclick=()=>{
    localStorage.clear();
    window.location.reload()
}

//landing code

function randomImage() {
    if (randomOption === true) {
        let landingPage = document.querySelector(".landing-page")

        let landingImages = ["01.png", "02.jpg", "03.jpg", "04.jpg"];
        let rundomNums = Math.ceil(Math.random() * landingImages.length);
        
        landingPage.style.backgroundImage = 'url("images/landing/0'+ rundomNums +'.jpg")'
        
        backgroundInterval = setInterval(()=>{
            let rundomNums = Math.ceil(Math.random() * landingImages.length)
            landingPage.style.backgroundImage = 'url("images/landing/0'+ rundomNums +'.jpg")'
        },10000)
        
    }
}
randomImage();

// our skills animation
let ourSkills = document.querySelectorAll(".our-skills");

window.onscroll= function(){
    if (window.scrollY > 750) {
        let allSkills = document.querySelectorAll(".pro-lang .percentage span");
        allSkills.forEach((skill)=>{
            skill.style.width = skill.dataset.progress;
        })
    }
}
// gallery code

let galleryImges = document.querySelectorAll(".gallery .images img");

galleryImges.forEach((img)=>(
    img.onclick=()=>{
        let overlay = document.createElement("div");
        let pigImg = document.createElement("img");
        let close = document.createElement("div");
        let popBox = document.createElement("div");
        close.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        pigImg.src = img.src;
        popBox.classList.add("popBox");
        overlay.classList.add("overlay");
        pigImg.classList.add("pigImg");
        close.classList.add("closePigImage");
        popBox.appendChild(pigImg);
        popBox.appendChild(close);
        document.body.appendChild(popBox)
        document.body.appendChild(overlay);
        close.onclick=(()=>{
            overlay.remove();
            popBox.remove();
        })
    }
))
// Navegation scroll

let bullet = document.querySelectorAll(".navBullets .Bullet");

let link = document.querySelectorAll(".landing-page .links li");

active(bullet);

function scroll(elements) {
    elements.forEach((element)=> {
        element.onclick= (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            });
        };
    });
}



scroll(bullet);
scroll(link);

function active(elements) {
    elements.forEach((ele)=>{
        ele.addEventListener("click" , (e)=>{
            e.target.parentElement.querySelectorAll(".active").forEach((element)=>element.classList.remove("active"));
            ele.classList.add("active");
        });
    });
}

// bar icone

let bar = document.querySelector(".landing-page .header-section i");
let links = document.querySelector(".landing-page .header-section .links")

bar.onclick=(e)=> {
    links.classList.toggle("active");
    if (links.classList.contains("active")) {
        bar.className='fa-solid fa-xmark active'
    }
    else {
        bar.className='fa-solid fa-bars active'
    }
}
document.onclick = (e)=>{
    if(e.target !== links && e.target !== bar) {
        links.classList.remove("active");
        if (links.classList.contains("active")) {
            bar.className='fa-solid fa-xmark active'
        }
        else {
            bar.className='fa-solid fa-bars active'
        }
    }
}
