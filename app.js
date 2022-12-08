//local reviews data
let reviews = [{
    id: 1, // key value pair
    name:'Susan Smith', // name is key, and susan smith is value
    job: 'Web Developer',
    imgFile: 'images.jpeg',
    text: ` I'm a Web developer adipisicing elit. Blanditiis reiciendis quis porro illo mollitia saepe fuga, sapiente dolores omnis, consequatur minus optio quisquam unde, magnam praesentium reprehenderit sunt odit exercitationem`,
},
{
 id: 2,
    name:'Anna John',
    job: 'Android developer',
    imgFile: 'img4.jpeg',
    text: ` I'm an Android developer adipisicing elit. Blanditiis reiciendis quis porro illo mollitia saepe fuga, sapiente dolores omnis, consequatur minus optio quisquam unde, magnam praesentium reprehenderit sunt odit exercitationem'`, 
},
{
    id: 3,
    name:'Peter Jones',
    job: 'Designer',
    imgFile: 'download.jpeg',
    text: ` I'm a Designer adipisicing elit. Blanditiis reiciendis quis porro illo mollitia saepe fuga, sapiente dolores omnis, consequatur minus optio quisquam unde, magnam praesentium reprehenderit sunt odit exercitationem`,
},
{
    id: 4,
    name:'Bill Anderson',
    job: 'CEO',
    imgFile: 'img6.jpeg',
    text: `I'm CEO of this company sit amet consectetur adipisicing elit. Blanditiis reiciendis quis porro illo mollitia saepe fuga, sapiente dolores omnis, consequatur minus optio quisquam unde, magnam praesentium reprehenderit sunt odit exercitationem`,
},

];


// set items

let authorName = document.getElementById('author');
let authorJob = document.getElementById('job');
let img = document.getElementById('person-img');
let info = document.getElementById('info');

let preBtn = document.querySelector('.btn1');
let nextBtn = document.querySelector('.btn2');
let randomBtn = document.querySelector('.random-btn');



// set starting item

let currentItem = 2;

// load initial item when loading page

window.addEventListener('DOMContentLoaded', function(){
   showPerson();

})
// show person based on item
function showPerson(){
    console.log('person-this holds the currentItem which is passed on addEventListerner', currentItem);
     let item = reviews[currentItem]; // arr[0];
   // console.log(item);
     img.src = reviews[currentItem].imgFile; //it says arr[0].key
     authorName.textContent = item.name;
     authorJob.textContent = item.job;
     info.textContent = item.text;
}


//show next person
nextBtn.addEventListener('click', function(){
currentItem++;
    if(currentItem>reviews.length-1){
        currentItem = 0;
    }
    
showPerson();
})
//show previous person
preBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem<0){
        currentItem = reviews.length-1;
            }
            showPerson();
});

// get random person

randomBtn.addEventListener('click', function(){
     currentItem = Math.floor(Math.random() * reviews.length);
   console.log(currentItem, 'this is random number');
    showPerson();
})