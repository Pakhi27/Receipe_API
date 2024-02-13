const apiId='dbd1a911'
const apiKey='957bfd8e588d42a8d436001a98e792a2'

const searchBox=document.getElementById("search-input");
const searchBtn=document.getElementById("search");
const addmore=document.querySelector(".btn2")

let currentIndex=0;

async function receipe(dish,index)
{
    const response=await fetch(`https://api.edamam.com/search?q=${dish}&app_id=${apiId}&app_key=${apiKey}`)

    if(response.status==404){
        document.querySelector(".error").style.display="block";
    }
    else{
        var data=await response.json();
        console.log(data);
        const image=document.querySelector("img")
        const label=document.querySelector(".label")
        const cuisonType=document.querySelector(".cusionType");
        const dishType=document.querySelector(".dishType")
        label.textContent=data.hits[index].recipe.label
        image.src=data.hits[index].recipe.image;
        cuisonType.textContent=data.hits[index].recipe.cuisineType
        dishType.textContent=data.hits[index].recipe.dishType
    }
}
searchBtn.addEventListener("click",()=>{
    receipe(searchBox.value,currentIndex);
})
addmore.addEventListener("click",()=>{
    currentIndex++;
    receipe(searchBox.value,currentIndex);
})