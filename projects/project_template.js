const LButton = document.getElementById('slideLeft');
const RButton = document.getElementById('slideRight');
const scroll_id = document.getElementById('project_image_scroll');
const image_ids = document.querySelectorAll(".project_image");
const num_images = parseInt(document.getElementById('num_images').textContent);
const W = scroll_id.scrollWidth ;

reset_colors(1+parseInt(scroll_id.scrollLeft/W*num_images));

scroll_id.addEventListener("scroll", () => {
    const W = scroll_id.scrollWidth;
    reset_colors(1 + parseInt(scroll_id.scrollLeft / W * num_images));
});

LButton.onclick = () => {
    const W = scroll_id.scrollWidth ;
    fade_toggle();
    
    if (parseInt(scroll_id.scrollLeft/W*num_images) == 0){
        scroll_id.scrollLeft += (num_images-1)*W/num_images;
    }
    else{
        scroll_id.scrollLeft -= W/num_images;
    }
    reset_colors(1+parseInt(scroll_id.scrollLeft/W*num_images));
}

RButton.onclick = () => {
    const W = scroll_id.scrollWidth; 
    fade_toggle();
    if (parseInt(scroll_id.scrollLeft/W*num_images) == (num_images-1)){
        scroll_id.scrollLeft -= (num_images-1)*W/num_images;
    }
    else{
        scroll_id.scrollLeft += W/num_images;
    }
    reset_colors(1+parseInt(scroll_id.scrollLeft/W*num_images));
    
}

function reset_colors(id){
    for (let i=1; i<num_images+1; i++){
        document.getElementById(i).style.color =  "#0087ca";
    }
    document.getElementById(id).style.color = "black";
}

function fade_toggle(){
    image_ids.forEach((el) => {el.classList.add('fade');});
    setTimeout(function() {image_ids.forEach((el) => {el.classList.remove('fade');});}, 400);
}