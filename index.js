let position = 0;

const nextSlide = function ()  {
 const imageSlider = document.getElementById('imageSlider')
    position -= 800;
    imageSlider.style.transform = `translateX(${position}px)`;
    console.log(position);
}
const prevSlide = function ()  {
    const imageSlider = document.getElementById('imageSlider')
     position += 800;
     imageSlider.style.transform = `translateX(${position}px)`;
}