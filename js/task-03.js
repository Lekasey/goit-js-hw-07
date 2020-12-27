const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const galleryRef = document.querySelector('#gallery')


  // const imageUpdate = image => {
       
  //   images.forEach(image => {
  //     const liRef = document.createElement('li');
  //     liRef.classList.add('gallery__item');

  //     const imgRef = document.createElement('img');     
  //     imgRef.classList.add('gallery__image');
  //     imgRef.src = image.url;
  //     imgRef.alt = image.alt;

  //     liRef.append(imgRef)
  //     galleryRef.append(liRef)
  //     })
    
  //   return galleryRef
  // }

  // imageUpdate(images)


  // const imageUpdate = image => {
       
  //   images.forEach(image => {
  //     `<li class="gallery__item">
  //     <img class="gallery__image" src=${image.url} alt=${image.alt}></li>`)
  //     })
    
  //   return galleryRef
  // }

  // imageUpdate(images)

 const createGalleryItem = images.reduce((acc, img) => {
   acc += `<li class="gallery__item"><img class="gallery__image" src="${img.url}" alt="${img.alt}"></li>`;
   return acc
  },``)
 
 galleryRef.insertAdjacentHTML("beforeend", createGalleryItem)