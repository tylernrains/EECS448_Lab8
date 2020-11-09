document.addEventListener("DOMContentLoaded",() =>
{
    document.querySelector("#enter").addEventListener("click",(e) =>
    {
        //grab the border variables
        let bord_red = document.getElementById('bord_red');
        let bord_green = document.getElementById('bord_green');
        let bord_blue = document.getElementById('bord_blue');
        let bord_width = document.getElementById('bord_width');
        
        //grab the background color variables
        let back_red = document.getElementById('back_red');
        let back_green = document.getElementById('back_green');
        let back_blue = document.getElementById('back_blue');
        let back_width = document.getElementById('back_width');
        
        //grabbing the paragraph
        let paragraph = document.getElementById('para');

        //changing the paragraph accordingly
        paragraph.style.border = bord_width.value + "px " + "solid " + "rgb(" + bord_red.value + ", " + bord_green.value + ", " + bord_blue.value + ")";
        paragraph.style.backgroundColor = "rgb(" + back_red.value + ", " + back_green.value + ", " + back_blue.value + ")";
        paragraph.style.width = back_width.value + "px";
	});
});