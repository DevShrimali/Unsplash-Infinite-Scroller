const imageConatainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = '1B7F84af7Hnsx7oFj5qynaFKZySqAw_odxUP0V5ZDsw';
const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&count${count}`;

// Helper Function to Set Attributes on DOM Elements 
function setAttributes (element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

// Create Elelment For Links & Photos, Add to DOM
function displayPhotos() {
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
       
        // Create <img>
        const img = document.createElement('img');
        
        setAttributes(img, {
            scr: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        // Put <img> inside <a>
        item.appendChild(img);
        imageConatainer.appendChild(item);

    });
}
// Get Photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        //console.log(photosArray);
        displayPhotos();
        
    } catch (error) {
        // Catch Error Here
        console.log(error);
    }
}

// On Load 
//displayPhotos();
getPhotos();