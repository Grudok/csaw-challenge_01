// smooth scrolling function
const links = document.querySelectorAll('a[href*="#"]');

for (const link of links) 
{
  link.addEventListener("click", clickHandler);
}

function clickHandler(event) 
{
  event.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll
  ({
    top: offsetTop,
    behavior: "smooth"
  });
}

//menu toggling 
let menu = document.querySelector("#menu-bars");
let header = document.querySelector('header');

menu.onclick = () =>
{
    menu.classList.toggle('bi-x-lg');
    header.classList.toggle('active');
}

window.onscroll = () =>
{
  menu.classList.remove('bi-x-lg');
  header.classList.remove('active');
}


// portfolio array
const portfolio = [
    {
      id: 1,
      title: 'Unity Game Project',
      description: 'Thats my biggest project i actually have. Its not finished yet but i hope i will be in the future. I work with C# and the unity engine. I started this project for my Wifi-Diplomia and i am continully working on this as hobbie.',
      category: 'Game Development',
      image: ['../screenshots/game2.png', '../screenshots/game1.png','../screenshots/game3.png','../screenshots/game4.png', '../screenshots/game5.png', '../screenshots/Gamescreenshot05.png',] ,
      coding: "C#"
    },
    {
      id: 2,
      title: 'First Webpage',
      description: 'That is my first attempt to create a webpage on my own. It was only for learning purposes.',
      category: 'Webdevelopment',
      image: ['../screenshots/Webpage.png', ],
      coding: "Html, CSS, JS"
    },
    {
      id: 3,
      title: 'Calculator',
      description: 'Thats a simple calculator. For the basic calculation types',
      category: 'Software Development',
      image: ['../screenshots/calculatorforms.png', '../screenshots/calculator.png', '../screenshots/ergebnisse.png',],
      coding: "C#"
    },
    {
      id: 4,
      title: 'Lotto',
      description: 'That is a little lotto game where you can guess the lotto numbers.',
      category: 'Game Development',
      image: ['../screenshots/lottoergebnis.png', '../screenshots/lotto.png', '../screenshots/Coding.png',],
      coding: "C#"
    },
    {
      id: 5,
      title: 'Text Adventure',
      description: 'Its a little text adventure where you have a default windows forms overlay there are buttons to interact with the enviorment',
      category: 'Game Development',
      image: ['../screenshots/wifiadvenureforms.png', '../screenshots/wifiadventure.png', '../screenshots/wifiadventurecode.png', ],
      coding: "C#"
    },
    {
      id: 6,
      title: 'Personalverrechnung',
      description: 'This little project was a attempt to create a "personalverrechnung" at the end you can see which person gets money',
      category: 'Software Development',
      image: ['../screenshots/personalverrechner1.png','../screenshots/personalverrechner2.png','../screenshots/personalverrechner3.png',],
      coding: "C#"
    },
    {
      id: 7,
      title: 'Database',
      description: 'That was a little Database lecture to learn how it works.',
      category: 'Database Management',
      image: ['../screenshots/musik1.png', '../screenshots/musik2.png','../screenshots/musik3.png','../screenshots/musik4.png',],
      coding: "C# and SQL"
    },
    {
      id: 8,
      title: 'Button example',
      description: 'I create a button for learning purposes',
      category: 'Webdevelopment',
      image: ['../screenshots/counter.png', ],
      coding: "Html, CSS, JS"
    },
    {
      id: 9,
      title: 'SASS Project',
      description: 'That was a project to learn sass and install the template',
      category: 'Webdevelopment',
      image: ['../screenshots/sass.png', '../screenshots/sass1.png', '../screenshots/sass2.png','../screenshots/sass3.png',],
      coding: "Html, Sass/CSS"
    },
    {
      id: 10,
      title: 'Tailwind Project',
      description: 'That was a project to learn about Tailwind',
      category: 'Webdevelopment',
      image: ['../screenshots/tailwind1.png',],
      coding: "Html, Tailwind/CSS"
    },
]

// foreach function to display objects of the array 
const portfolioDisplay = document.getElementById("portfolio-container");

portfoliosDisplay();

function portfoliosDisplay()
{
    portfolio.forEach((entrie) =>
    {
        const card = document.createElement("div");
        card.classList.add("container");

        const title = document.createElement("h3");
        title.innerText = entrie.title;
        card.appendChild(title);

        const image = document.createElement("img");
        image.classList.add("box-image");
        image.src = entrie.image[0];
        card.appendChild(image);

        const description = document.createElement("p");
        description.innerText = entrie.description;
        card.appendChild(description);

        const category = document.createElement("p");
        category.innerText = entrie.category;
        card.appendChild(category);

        const coding = document.createElement("p");
        coding.innerText = entrie.coding;
        card.appendChild(coding);

        portfolioDisplay.appendChild(card);
    });
};

//function to display picture slider 
document.addEventListener('DOMContentLoaded', function () 
{
  new Splide('#portfolio01', 
  {
		cover: true,
    heightRatio: 0.5,
  }).mount();
});

document.addEventListener('DOMContentLoaded', function () 
{
  new Splide('#portfolio02', 
  {
		cover: true,
    heightRatio: 0.5,
  }).mount();
});

document.addEventListener('DOMContentLoaded', function () 
{
  new Splide('#portfolio03', 
  {
		cover: true,
    heightRatio: 0.5,
  }).mount();
});

document.addEventListener('DOMContentLoaded', function () 
{
  new Splide('#portfolio04', 
  {
		cover: true,
    heightRatio: 0.5,
  }).mount();
});

document.addEventListener('DOMContentLoaded', function () 
{
  new Splide('#portfolio05', 
  {
		cover: true,
    heightRatio: 0.5,
  }).mount();

});document.addEventListener('DOMContentLoaded', function () 
{
  new Splide('#portfolio06', 
  {
		cover: true,
    heightRatio: 0.5,
  }).mount();

});document.addEventListener('DOMContentLoaded', function () 
{
  new Splide('#portfolio07', 
  {
		cover: true,
    heightRatio: 0.5,
  }).mount();

});document.addEventListener('DOMContentLoaded', function () 
{
  new Splide('#portfolio08', 
  {
		cover: true,
    heightRatio: 0.5,
  }).mount();

});document.addEventListener('DOMContentLoaded', function () 
{
  new Splide('#portfolio09', 
  {
		cover: true,
    heightRatio: 0.5,
  }).mount();

});document.addEventListener('DOMContentLoaded', function () 
{
  new Splide('#portfolio10', 
  {
		cover: true,
    heightRatio: 0.5,
  }).mount();
});