// Async Programming - Async/Await:

// Q25: Use Async/Await Promises to load multiple images asynchronously and display them on a webpage.

async function loadImages(src) {
    return new Promise((resolve, reject) => {
        const img = new Image(300,300);
        img.onload = () => {
            resolve(img);
        }
        img.onerror = () => {
            reject(new Error('Failed to load image'));
        }
        img.src = src;
    })
}

async function main(){
    let imageContainer = document.getElementById('root');
    let imageSrc = ['https://rukminim2.flixcart.com/image/750/900/xif0q/plant-seed/v/m/s/300-genda-phool-seeds-hybrid-high-germination-300-seeds-original-imagt2xysqh6cpew.jpeg?q=20&crop=false', 'https://m.media-amazon.com/images/I/61AOnCCQ30L.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShyIgehSo_rc4SOexoFnUKvKZ7dShTsaW22WduVFISPXRRnQ97x-gWXLo5ZKa8TPQpiAo&usqp=CAU','https://gardeningcentre.in/cdn/shop/files/marigoldorange.webp?v=1693460216']
    try{
        let images = await Promise.all(imageSrc.map(src => loadImages(src)));
        images.forEach((img) => {
            imageContainer.appendChild(img);
        })
    }
    catch{
        console.log('Error loading images in main');
    }
}
main();