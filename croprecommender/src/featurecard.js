import React from 'react';
const FeatureCard = ({ title, imageSrc, description, linkText }) => {
   // Use props for customization
   return (
      <>
         <div className="w-full md:w-1/3 lg:w-1/3 px-1">
            <div className="m-10 bg-white border bor rounded-lg overflow-hidden mb-10">
               <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg"
                  alt="image"
                  className="w-full"
                  />
               <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h2>
                     <a
                        href="javascript:void(0)"
                        className="
                        font-bold
                        text-blue-500 text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        
                        "
                        >
                     {title}
                     </a>
                  </h2>
                  <a
                     href={linkText}
                     className="
                     "
                     >
                  <button>TRY NOW</button>
                  </a>
               </div>
            </div>
         </div>
      </>

   );
 };
 
 export default FeatureCard;