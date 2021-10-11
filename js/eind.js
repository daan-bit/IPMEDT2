let naam = localStorage.getItem('naam');
let name = document.getElementById("js--naamEind");
console.log(naam);
name.innerHTML = "Hallo, " + naam;

document.getElementById("js--sectionExtraInfo").style.opacity = 0;
document.getElementById("js--sectionDrieSoorten").style.opacity = 0;

window.onscroll = function(event){
  if(window.scrollY >= 200){
    document.getElementById('js--sectionDrieSoorten').style.opacity = 1;
  }
  if(window.scrollY >= 920){
    document.getElementById('js--sectionExtraInfo').style.opacity = 1;
  }
}
