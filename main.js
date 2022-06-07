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
    category:"Python",
    img:"./image/projects-1.jpg",
    title:"Stock Market Price Prediction",
    content:"Trying to predict the stock price of any ticker 3 days ahead. Using Machine learning(LSTM), keras, sklearn, pandas, matplotlib",
},
{
    id:2,
    category:"Python",
    img:"./image/projects-2.jpg",
    title:"SMA Buy and Sell Signal",
    content:"Using 30 day and 100 day simple moving average(SMA) to trigger buy or sell signal, Using  libraries such as Pandas and matplotlib ",
},
{
    id:3,
    category:"power bi",
    img:"./image/projects-3.jpg",
    title:"Daily Performance Dashboard",
    content:"using Dax Formulas to calculate Total Fund, Reference Portfolio return, Currency Return, local return, Base return, market return",
},
{
    id:4,
    category:"Python",
    img:"./image/projects-4.jpg",
    title:"Loan prediction approval",
    content:"Predicting whether or not the loan will approve based on the personal information given by the clients, using machine learning, sklearn, seaborn ",
},
{
    id:5,
    category:"power bi",
    img:"./image/projects-5.jpg",
    title:"membership count dashboard",
    content:"Total membership by quarter, Ratio of active to retired members, Active membership, Retirements, Terminations, New Enrolments to the pension plan, New Entrants age, Retired Member and Spouse Deaths    ",
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