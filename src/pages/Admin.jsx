// import React, { useState } from 'react';
// import './admin.css';
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

// const Admin = () => {
//   const [phone, setPhone] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [categoryName, setCategoryName] = useState('');
//   const [selectedImages, setSelectedImages] = useState([]);
//   const [generatedLinks, setGeneratedLinks] = useState([]);

//   const images = [
//     { url: image16, name: 'Portrait 1' },
//     { url: image17, name: 'Portrait 2' },
//     { url: image18, name: 'Portrait 3' },
//     { url: image19, name: 'Portrait 4' },
//     { url: image1, name: 'Burniz' },
//     { url: image2, name: 'Image 2' },
//     { url: image3, name: 'Image 3' },
//     { url: image4, name: 'Image 4' },
//     { url: image5, name: 'Image 5' },
//     { url: image6, name: 'Image 6' },
//     { url: image7, name: 'Image 7' },
//     { url: image8, name: 'Image 8' },
//     { url: image9, name: 'Image 9' },
//     { url: image10, name: 'Image 10' },
//     { url: image11, name: 'Image 11' },
//     { url: image12, name: 'Image 12' },
//     { url: image13, name: 'Image 13' },
//     { url: image14, name: 'Image 14' },
//     { url: image15, name: 'Image 15' },
//   ];

//   const handleLogin = () => {
//     if (phone === '1234567890') {
//       setIsLoggedIn(true);
//     } else {
//       alert('Invalid phone number');
//     }
//   };

//   const handleCopy = (text) => {
//     navigator.clipboard.writeText(text);
//     alert('URL copied to clipboard!');
//   };

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setCategoryName('');
//     setSelectedImages([]);
//   };

//   const handleSelectImage = (image) => {
//     if (selectedImages.includes(image)) {
//       setSelectedImages(selectedImages.filter((img) => img !== image));
//     } else {
//       setSelectedImages([...selectedImages, image]);
//     }
//   };

//   const handleGenerateLink = () => {
//     const newLink = {
//       categoryName,
//       images: selectedImages,
//       link: `/slider?category=${encodeURIComponent(categoryName)}`
//     };
//     setGeneratedLinks([...generatedLinks, newLink]);
//     handleCloseModal();
//   };

//   const listdoctor = [
//     "/doctor1",
//     "/doctor2"
//   ];

//   return (
//     <section className='admin_main'>
//       <div className='admin_login_wrapper'>
//         {!isLoggedIn ? (
//           <div className='admin_login'>
//             <h2>Admin Login</h2>
//             <input
//               type='text'
//               placeholder='Enter your phone number'
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//             <button onClick={handleLogin}>Login</button>
//           </div>
//         ) : (
//           <div className='admin_dashboard'>
//             <h2>Welcome, Admin!</h2>
//             {listdoctor.map((item, index) => {
//               const fullUrl = `${window.origin}${item}`;
//               return (
//                 <div key={index} className='url_item'>
//                   <h3>Doctor {index+1}</h3>
//                   <p>{fullUrl}</p>
//                   <button className='copy_button' onClick={() => handleCopy(fullUrl)}>Copy</button>
//                 </div>
//               );
//             })}
            
//             {/* New Section for Adding Category */}
//             <button onClick={handleOpenModal} className='add_category_button'>Add Category</button>
//             <div className='generated_links'>
//               {generatedLinks.map((link, index) => (
//                 <div key={index} className='url_item'>
//                   <h3>{link.categoryName}</h3>
//                   <p>{window.origin}{link.link}</p>
//                   <button className='copy_button' onClick={() => handleCopy(`${window.origin}${link.link}`)}>Copy</button>
//                 </div>
//               ))}
//             </div>
            
//             {isModalOpen && (
//               <div className='modal'>
//                 <div className='modal-content'>
//                   <h2>Create Category</h2>
//                   <input
//                     type='text'
//                     placeholder='Enter Category Name'
//                     value={categoryName}
//                     onChange={(e) => setCategoryName(e.target.value)}
//                   />
//                   <div className='image-selection'>
//                     {images.map((image, index) => (
//                       <div key={index} className='image-option'>
//                         <input
//                           type='checkbox'
//                           checked={selectedImages.includes(image)}
//                           onChange={() => handleSelectImage(image)}
//                         />
//                         <img src={image.url} alt={image.name} />
//                         <p>{image.name}</p>
//                       </div>
//                     ))}
//                   </div>
//                   <button onClick={handleGenerateLink}>Generate Link</button>
//                   <button onClick={handleCloseModal}>Close</button>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Admin;
