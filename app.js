const toggleBar = document.querySelector('.fa-bars');
const navBar = document.querySelector('.navbar');
const navItems = document.querySelectorAll('.navbar a')
toggleBar.addEventListener('click', function(){
    navBar.classList.toggle('sidenav');
    this.classList.toggle('fa-times');
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      toggleBar.classList.remove("fa-times");
      navBar.classList.remove("sidenav");
    });
  });