// Async Programming - Promises:

// Q24: Use Promises to load multiple images asynchronously and display them on a webpage.

function loadImg(src){
    return new Promise((resolve, reject) => {
        let img = new Image(300,300);
        img.onload = function(){
            resolve(img);
        }
        img.onerror = function(){
            reject(new Error('Failed to load image: ' + src));
        }
        img.src = src;
    })
}
let imageContainer = document.getElementById('root');
let imageSrc = ['https://rukminim2.flixcart.com/image/750/900/xif0q/plant-seed/v/m/s/300-genda-phool-seeds-hybrid-high-germination-300-seeds-original-imagt2xysqh6cpew.jpeg?q=20&crop=false', 'https://m.media-amazon.com/images/I/61AOnCCQ30L.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShyIgehSo_rc4SOexoFnUKvKZ7dShTsaW22WduVFISPXRRnQ97x-gWXLo5ZKa8TPQpiAo&usqp=CAU','https://gardeningcentre.in/cdn/shop/files/marigoldorange.webp?v=1693460216']

Promise.all(imageSrc.map(loadImg))
.then((images) => {
    images.forEach((img) => {
        imageContainer.appendChild(img)
    })
})
.catch(err => console.error(err));