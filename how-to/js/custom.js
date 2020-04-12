function openTab(evt, tabName) {

    var i, content, tablinks;
  
    content = document.getElementsByClassName("sidemain");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "flow-root";
    evt.currentTarget.className += " active";
  }

  document.getElementById("defaultOpen").click();