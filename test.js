// first way
//var itemImage= document.getElementsByClassName("item-image");

//var arrImg=Array.from(itemImage)  // error on old prowser
// getelementbyclassname ==> return htmlCollection but not array 
// to convert any list to array use array.form()
// second way   

var imgList=document.getElementsByClassName("item-image");
var arrImg=[];
var lightboxContainer = document.getElementById("lightBox-container");
var itemLightBox=document.getElementById("item-lightBox");

var currentIndexSlide=0;  // rkam elsoraaa el7iaaaaa
var nextBtn=document.getElementById("next");
var prevBtn=document.getElementById("prev")
var closeBtn=document.getElementById("closeIcon")

for(var i=0;i<imgList.length;i++){
    arrImg.push(imgList[i]);
}
for(var i=0;i<arrImg.length;i++){
    arrImg[i].addEventListener("click",function(eventInfo){
        currentIndexSlide= arrImg.indexOf(eventInfo.target)
        lightboxContainer.style.display="flex"


        
       var imgSrc= eventInfo.target.getAttribute("src");
       itemLightBox.style.backgroundImage="url("+imgSrc+")"
    

    })

}





function nextSlide(){
    currentIndexSlide++;  // rkam elsoraa ely 3liaaa eldoor
    if(currentIndexSlide==arrImg.length){
        currentIndexSlide=0;
    }
    itemLightBox.style.backgroundImage="url("+arrImg[currentIndexSlide].getAttribute("src")+")"
}
nextBtn.addEventListener("click",nextSlide);
function PrevSlide(){
    currentIndexSlide--;  // rkam elsoraa ely 3liaaa eldoor
    if(currentIndexSlide<0){
        currentIndexSlide=arrImg.length-1;
    }
    itemLightBox.style.backgroundImage="url("+arrImg[currentIndexSlide].getAttribute("src")+")"
}   
prevBtn.addEventListener("click",PrevSlide);
function closeSlide(){
    lightboxContainer.style.display="none";
}

closeBtn.addEventListener("click",closeSlide)   

//     lightboxContainer.addEventListener("click",function(eventInfo){
//         if(eventInfo.target!=itemLightBox){
//             lightboxContainer.style.display="none"
//         }    
// })

document.body.addEventListener("keydown",function(eventInfo){
if(eventInfo.keyCode==39){
    nextSlide();
}
else if(eventInfo.keyCode==37){
    PrevSlide();
}
else if(eventInfo.keyCode==27){
    closeSlide();
}
})