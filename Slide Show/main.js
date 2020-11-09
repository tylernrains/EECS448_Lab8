document.addEventListener("DOMContentLoaded",() =>
{
    //variables
    let next_index = 0;
    let previous_index = 4;
    let images = new Array(5);
    
    //filling the array with the images
    images[0] = "image1.jpg";
    images[1] = "image2.jpg";
    images[2] = "image3.jpg";
    images[3] = "image4.jpg";
    images[4] = "image5.jpg";

    //listening for the "next" button to be clicked
    document.querySelector("#next").addEventListener("click",(e) =>
    {
        //updating the image and re-setting once it hits the top
        next_index++
        if (5 == next_index)
        {
            next_index = 0;
        }
        
        //actually updating the image
        let img_container = document.getElementById("img_container");
        img_container.src = images[next_index];
    });
    
    //listening for the "previous" button to be clicked
    document.querySelector("#previous").addEventListener("click",(e) =>
    {
        //updating the image and re-setting once it hits the beginning
        previous_index--;
        if (-1 == previous_index)
        {
            previous_index = 4;
        }
        
        //actually updating the image
        let img_container = document.getElementById("img_container");
        img_container.src = images[previous_index];
	});
});