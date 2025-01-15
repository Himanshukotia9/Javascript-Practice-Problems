// DOM Manipulation - Creating Elements:

// Q27: Create an image gallery using dynamically generated elements.

function createGallery(src){
    let image = document.createElement('img');
    image.src = src;
    image.width = 300;
    image.height = 300;
    return image;
}
let gallery = document.getElementById('root');
let imageSrc = ['https://rukminim2.flixcart.com/image/750/900/xif0q/plant-seed/v/m/s/300-genda-phool-seeds-hybrid-high-germination-300-seeds-original-imagt2xysqh6cpew.jpeg?q=20&crop=false', 'https://m.media-amazon.com/images/I/61AOnCCQ30L.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShyIgehSo_rc4SOexoFnUKvKZ7dShTsaW22WduVFISPXRRnQ97x-gWXLo5ZKa8TPQpiAo&usqp=CAU','https://gardeningcentre.in/cdn/shop/files/marigoldorange.webp?v=1693460216'];

imageSrc.forEach(urls => gallery.appendChild(createGallery(urls)));