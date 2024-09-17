
document.addEventListener("DOMContentLoaded", function() {
  const texts = [
      "Frontend Web Developer.",
      "I design responsive and interactive websites.",
      "I create clean, modern, and user-friendly interfaces.",
      "Let's build something amazing together!"
  ];
  let index = 0;
  let charIndex = 0;
  const typingSpeed = 100; // Speed for typing
  const delayBetweenTexts = 2000; // Delay before starting the next text
  const element = document.getElementById("textChange");

  function typeText() {
      if (charIndex < texts[index].length) {
          element.textContent += texts[index].charAt(charIndex);
          charIndex++;
          setTimeout(typeText, typingSpeed);
      } else {
          setTimeout(() => {
              charIndex = 0;
              index = (index + 1) % texts.length;
              element.textContent = '';
              typeText();
          }, delayBetweenTexts);
      }
  }

  typeText();
});


  


function openPage(pageName, elmnt) {
    var i, tabcontent, aboutTablink;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    aboutTablink = document.getElementsByClassName("aboutTablink");
    for (i = 0; i < aboutTablink.length; i++) {
      aboutTablink[i].style.border = "none"; 
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.border = "2px solid black"; 
  }
  
  document.getElementById("defaultOpen").click();


//   function openPortfolio(pageName, elmnt) {
//     var i, all, PortfolioBtn;
//     all = document.getElementsByClassName("all");
//     for (i = 0; i < all.length; i++) {
//       all[i].style.display = "none";
//     }
//     PortfolioBtn = document.getElementsByClassName("PortfolioBtn");
//     for (i = 0; i < PortfolioBtn.length; i++) {
//       PortfolioBtn[i].style.border = "none"; 
//     }
//     document.getElementById(pageName).style.display = "block";
//     elmnt.style.border = "2px solid black"; 
//   }



//   function openAll(all, elmnt) {
    
//     var i, all, PortfolioBtn;
//     PortfolioBtn = document.getElementsByClassName("PortfolioBtn");
//     for (i = 0; i < PortfolioBtn.length; i++) {
//       PortfolioBtn[i].style.border = "none"; 
//     }

//     all = document.getElementsByClassName("all");
//     for (i = 0; i < all.length; i++) {
//       all[i].style.display = "block";
//       elmnt.style.border = "2px solid black";

//     }
//    }

//    document.getElementById("openDefault").click();



function openPortfolio(pageName, elmnt) {
  var i, allSections, portfolioButtons;
  
  allSections = document.getElementsByClassName("all");
  for (i = 0; i < allSections.length; i++) {
      allSections[i].style.display = "none";
  }
  
  portfolioButtons = document.getElementsByClassName("PortfolioBtn");
  for (i = 0; i < portfolioButtons.length; i++) {
      portfolioButtons[i].style.border = "none";
  }
  
  document.getElementById(pageName).style.display = "flex";
  elmnt.style.border = "2px solid black";
}



function openAll(elmnt) {
  var i, allSections, portfolioButtons;
  
  allSections = document.getElementsByClassName("all");
  for (i = 0; i < allSections.length; i++) {
      allSections[i].style.display = "flex";
  }
  
  portfolioButtons = document.getElementsByClassName("PortfolioBtn");
  for (i = 0; i < portfolioButtons.length; i++) {
      portfolioButtons[i].style.border = "none";
  }
  
  elmnt.style.border = "2px solid black";
}

document.getElementById("openDefault").click();





var menuButton = document.getElementsByClassName("menuBtn")[0];
var navContainer = document.getElementsByClassName("navContainer")[0];
var menuItems = document.getElementsByClassName("menuItem");

function toggleMenu() {
  if (navContainer.style.display === "none" || navContainer.style.display === "") {
    navContainer.style.display = "flex"; 
  } else {
    navContainer.style.display = "none";  
  }
}

function hideMenu() {
  navContainer.style.display = "none";
}

menuButton.addEventListener("click", toggleMenu);

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", hideMenu);
}



