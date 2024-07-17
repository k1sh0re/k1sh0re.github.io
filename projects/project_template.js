const LButton = document.getElementById('slideLeft');
const RButton = document.getElementById('slideRight');
var scroll_id = document.getElementById('project_image_scroll');
const W = scroll_id.scrollWidth ;
reset_colors(1+parseInt(scroll_id.scrollLeft/W*4));

scroll_id.addEventListener("scroll", () => {
    const W = scroll_id.scrollWidth;
    reset_colors(1 + parseInt(scroll_id.scrollLeft / W * 4));
});

LButton.onclick = () => {
    const W = scroll_id.scrollWidth ;// document.documentElement.clientWidth

    if (parseInt(scroll_id.scrollLeft/W*4) == 0){
        scroll_id.scrollLeft += 3*W/4;
    }
    else{
        scroll_id.scrollLeft -= W/4;
    }
    // scroll_id.scrollLeft -= W/4;
    reset_colors(1+parseInt(scroll_id.scrollLeft/W*4));

}

RButton.onclick = () => {
    const W = scroll_id.scrollWidth; //document.documentElement.clientWidth
    if (parseInt(scroll_id.scrollLeft/W*4) == 3){
        scroll_id.scrollLeft -= 3*W/4;
    }
    else{
        scroll_id.scrollLeft += W/4;
    }
    reset_colors(1+parseInt(scroll_id.scrollLeft/W*4));
}

function reset_colors(id){
    for (let i=1; i<5; i++){
        document.getElementById(i).style.color =  "#0087ca";
    }
    document.getElementById(id).style.color = "black";
}