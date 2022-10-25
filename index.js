const UI = document.getElementById('UI')

// const TabsDes = document.querySelector('.Desig')

const images = document.querySelector('.image_projects');

const UIDesig = document.querySelector('.UI_projects');

console.log(UI)


function show(){
    if(UI.classList.contains('image_projects')){
        document.querySelector('.image_projects').style.display = "none"
        
    } else{
        document.querySelector('.UI_projects').style.display = "block"
    }
}

UI.addEventListener('click', show);