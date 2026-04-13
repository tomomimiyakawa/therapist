document.addEventListener('click', e => {
  const paragraph = document.querySelector('p');
  const dropbtn = document.querySelector('.dropbtn');
  const dropdown = document.querySelector('.dropdown');
  
  if (e.target === dropbtn && !dropdown.classList.contains('open')) {
    // Button clicked - open menu if not already open
    dropdown.classList.add('open');
    paragraph.classList.add('hidden');
    document.querySelector('.backdrop').classList.add('active');
  }
});

document.addEventListener('keydown', e => { 
  if (e.key === 'Escape') {
    const paragraph = document.querySelector('p');
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.remove('open');
    paragraph.classList.remove('hidden');
    document.querySelector('.backdrop').classList.remove('active');
  }
});


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}