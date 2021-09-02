var backgroundsky = document.querySelector(".backgroundimg .glass");

window.addEventListener("scroll",function(){
    backgroundsky.style.opacity = 1 - +window.pageYOffset/450+''
    backgroundsky.style.top = +window.pageYOffset+'px'
    backgroundsky.style.backgroundPositionY = - +window.pageYOffset/2+'px'

})

// const ham = document.querySelector('.backgroundimg .wrapper .fa-bars');
const nav = document.querySelector('.backgroundimg .wrapper');
const navbtn = document.querySelectorAll('.backgroundimg .wrapper .navbtn');
navbtn.forEach(function(nav_button){
nav_button.addEventListener('click',() => {
    nav.classList.toggle('zindex');

});
});

// categories finance related, power bi, Javascript, apps, coding related
// filtering
const projects = [{
    id:1,

    category:"finance related",
    img:"./image/projects-1.jpg",
    title:"Heading1",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum est a hic assumenda ad omnis, corrupti voluptatem consequuntur",
},
{
    id:2,
    category:"Javascript",
    img:"./image/projects-2.png",
    title:"Heading2",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum est a hic assumenda ad omnis, corrupti voluptatem consequuntur",
},
{
    id:3,
    category:"apps",
    img:"./image/projects-3.jpg",
    title:"Heading3",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum est a hic assumenda ad omnis, corrupti voluptatem consequuntur",
},
{
    id:4,
    category:"coding related",
    img:"./image/projects-4.jpg",
    title:"Heading4",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum est a hic assumenda ad omnis, corrupti voluptatem consequuntur",
},
{
    id:5,
    category:"power bi",
    img:"./image/projects-5.jpg",
    title:"Heading5",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum est a hic assumenda ad omnis, corrupti voluptatem consequuntur",
}];
const projectcontainer = document.querySelector(".projects-container");
const filterbtn = document.querySelectorAll(".filter-btn");


window.addEventListener("DOMContentLoaded",function(){
    displayprojectscard(projects);


});
// filtering function
filterbtn.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const category = e.currentTarget.dataset.category;
        const projectcategory = projects.filter(function(projectitem){
            if(projectitem.category === category){
                return projectitem;
            }
        });
        if(category === "all"){
            displayprojectscard(projects);
        } else {
            displayprojectscard(projectcategory);
        }
    });
});


function displayprojectscard(projects_card){
    let displayprojects = projects_card.map(function(item){
        // console.log(item);
        return `<div class="project-card">
        <div class="project-img">
            <img class="card-img" src=${item.img} alt=${item.title}>
        </div>
        <div class="card-content">
            <h2>${item.title}</h2>
            <p>${item.content}</p>
        </div>
    </div>`;

    })
    displayprojects = displayprojects.join("");
    projectcontainer.innerHTML = displayprojects;

}