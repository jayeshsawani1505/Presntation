
// import React, { useState, useEffect, useRef } from 'react';
// import image1 from '../assets/01 BURNIZ.jpg';
// import image2 from '../assets/02 new.jpg';
// import image3 from '../assets/03 new.jpg';
// import image4 from '../assets/04 new.jpg';
// import image5 from '../assets/05 new.jpg';
// import image6 from '../assets/06 new.jpg';
// import image7 from '../assets/07 new.jpg';
// import image8 from '../assets/08 new.jpg';
// import image9 from '../assets/09 new.jpg';
// import image10 from '../assets/10 new.jpg';
// import image11 from '../assets/11 new.jpg';
// import image12 from '../assets/12 new.jpg';
// import image13 from '../assets/13 new.jpg';
// import image14 from '../assets/14 new.jpg';
// import image15 from '../assets/15 new.jpg';
// import image16 from '../assets/potrait-1.jpg';
// import image17 from '../assets/potrait-2.jpg';
// import image18 from '../assets/potrait-3.jpg';
// import image19 from '../assets/potrait-4.jpg';

// const images = [
// //   { url: image16, name: 'Portrait 1' },
// //   { url: image17, name: 'Portrait 2' },
// //   { url: image18, name: 'Portrait 3' },
// //   { url: image19, name: 'Portrait 4' },
// //   { url: image1, name: 'Burniz' },
// //   { url: image2, name: 'Image 2' },
// //   { url: image3, name: 'Image 3' },
//   { url: image4, name: 'Image 4' },
//   { url: image5, name: 'Image 5' },
//   { url: image6, name: 'Image 6' },
//   { url: image7, name: 'Image 7' },
//   { url: image8, name: 'Image 8' },
//   { url: image9, name: 'Image 9' },
//   { url: image10, name: 'Image 10' },
//   { url: image11, name: 'Image 11' },
//   { url: image12, name: 'Image 12' },
//   { url: image13, name: 'Image 13' },
//   { url: image14, name: 'Image 14' },
//   { url: image15, name: 'Image 15' },
// ]
// const Doctor2 = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isPaused, setIsPaused] = useState(false);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [suggestions, setSuggestions] = useState([]);
//     const intervalRef = useRef(null);
//     const timeoutRef = useRef(null);
//     const activeThumbnailRef = useRef(null);
//     const sidebarRef = useRef(null);
  
//     const startSlider = () => {
//       intervalRef.current = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//       }, 5000);
//     };
  
//     const stopSlider = () => {
//       clearInterval(intervalRef.current);
//     };
  
//     const resetSlider = () => {
//       stopSlider();
//       setIsPaused(true);
  
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
  
//       timeoutRef.current = setTimeout(() => {
//         setIsPaused(false);
//         startSlider();
//       }, 15000);
//     };
  
//     useEffect(() => {
//       startSlider();
  
//       return () => {
//         stopSlider();
//         if (timeoutRef.current) {
//           clearTimeout(timeoutRef.current);
//         }
//       };
//     }, []);
  
//     const handleImageClick = (index) => {
//       setCurrentIndex(index);
//       resetSlider();
//     };
  
//     const handleSearchChange = (e) => {
//       const term = e.target.value;
//       setSearchTerm(term);
//       if (term) {
//         const filteredSuggestions = images.filter((image) =>
//           image.name.toLowerCase().includes(term.toLowerCase())
//         );
//         setSuggestions(filteredSuggestions);
//       } else {
//         setSuggestions([]);
//       }
//     };
  
//     const handleSuggestionClick = (index) => {
//       const imageIndex = images.findIndex((img) => img.name === index.name);
//       if (imageIndex !== -1) {
//         setCurrentIndex(imageIndex);
//         setSearchTerm('');
//         setSuggestions([]);
//         resetSlider();
//       }
//     };
  
//     useEffect(() => {
//       if (activeThumbnailRef.current && sidebarRef.current) {
//         const sidebar = sidebarRef.current;
//         const activeThumbnail = activeThumbnailRef.current;
    
//         const isMobile = window.innerWidth <= 768;
    
//         if (isMobile) {
//           const sidebarWidth = sidebar.clientWidth;
//           const thumbnailLeft = activeThumbnail.offsetLeft;
//           const thumbnailWidth = activeThumbnail.clientWidth;
    
//           sidebar.scrollLeft = thumbnailLeft - (sidebarWidth / 2) + (thumbnailWidth / 2);
//         } else {
//           const sidebarHeight = sidebar.clientHeight;
//           const thumbnailTop = activeThumbnail.offsetTop;
//           const thumbnailHeight = activeThumbnail.clientHeight;
    
//           sidebar.scrollTop = thumbnailTop - (sidebarHeight / 2) + (thumbnailHeight / 2);
//         }
//       }
//     }, [currentIndex]);
  
  
//     useEffect(() => {
//       window.scrollTo(0, document.body.scrollHeight);
//     }, []);
//   return (
//     <div className="image-slider">
//     <div className="sidebar" ref={sidebarRef}>
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
//           onClick={() => handleImageClick(index)}
//           ref={currentIndex === index ? activeThumbnailRef : null}
//         >
//           <img src={image.url} alt={`Slide ${index + 1}`} />
//           <p>{image.name}</p>
//         </div>
//       ))}
//     </div>
//     <div className="main-image">
//       <input
//         type="text"
//         placeholder="Search product name"
//         value={searchTerm}
//         onChange={handleSearchChange}
//       />
//       {suggestions.length > 0 && (
//         <ul className="suggestions">
//           {suggestions.map((suggestion, index) => (
//             <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
//               {suggestion.name}
//             </li>
//           ))}
//         </ul>
//       )}
//       <img src={images[currentIndex].url} alt={`Slide ${currentIndex + 1}`} />
//       <div className="buttons_d">
//         <button onClick={() => {
//           setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//           resetSlider();
//         }}>prev</button>
//         <button onClick={() => {
//           setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//           resetSlider();
//         }}>next</button>
//       </div>
//     </div>
//     <div className='main_image_mobile'>
//       <div className="main-image1">
//       <input
//         type="text"
//         placeholder="Search product name"
//         value={searchTerm}
//         onChange={handleSearchChange}
//       />
//       {suggestions.length > 0 && (
//         <ul className="suggestions">
//           {suggestions.map((suggestion, index) => (
//             <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
//               {suggestion.name}
//             </li>
//           ))}
//         </ul>
//       )}
//         <img src={images[currentIndex].url} alt={`Slide ${currentIndex + 1}`} />
//         <div className='buttons_d'>
//           <button onClick={() => {
//             setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//             resetSlider();
//           }}>prev</button>
//           <button onClick={() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//             resetSlider();
//           }}>next</button>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Doctor2