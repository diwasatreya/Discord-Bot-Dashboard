let isMobile;

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|NetCast|SMART-TV|SmartTV/i.test(navigator.userAgent)) {
    
    isMobile = true;
} else {
    isMobile = false;
}


if (isMobile == true) moveToMobile();

function moveToMobile() {
    let nav = document.getElementById('nav');
    let navdiv = document.getElementById('navtext-div');
    let navtext = document.getElementById('navtext');
    let logomain = document.getElementById('logo-main-1');
    let author = document.getElementById('creper92yt')
    let mainbuttons = document.getElementById('main-buttons');
    let mainbutton2 = document.getElementById('main-button-2')

    let memberimg1 = document.getElementById('developers-img1');
    let memberimg2 = document.getElementById('developers-img2');
    let memberimg3 = document.getElementById('developers-img3');
    let memberimg4 = document.getElementById('developers-img4');

    let developersgrid = document.getElementById('developers-grid')
    let developersgrid2 = document.getElementById('developers-grid2')
    let developersgrid3 = document.getElementById('developers-grid3')

    let developersgrade = document.getElementById('developers-grade')
    let developersgrade2 = document.getElementById('developers-grade2')
    let developersgrade3 = document.getElementById('developers-grade3')

    nav.style.padding = "50px 0 50px";
    navdiv.style.justifyContent = "none";
    navdiv.style.display = "grid";
    navdiv.style.textAlign = "center"
    navdiv.style.margin = "5px 0";

    
    let logomainheight = innerHeight/4

    logomainheight = Math.round(logomainheight)

    logomain.style.height = logomainheight + "px"

    mainbuttons.style.display = "grid";
    mainbutton2.style.marginTop = "20px";

    memberimg1.style.maxWidth = logomainheight + "px";
    memberimg2.style.maxWidth = logomainheight + "px";
    memberimg3.style.maxWidth = logomainheight + "px";
    memberimg4.style.maxWidth = logomainheight + "px";

    developersgrid.style.display = "grid";
    developersgrid2.style.display = "grid";
    developersgrid3.style.display = "grid";

    developersgrade.style.fontSize = "30px";
    developersgrade2.style.fontSize = "30px";
    developersgrade3.style.fontSize = "30px";
}
