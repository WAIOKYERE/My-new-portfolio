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
  