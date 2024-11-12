import bg from "./img/bg-2.jpg";

function Des() {
  return (
    <>
      {/* <section class="text-gray-600 body-font m-2 p-2"> */}

{/*  */}
<div class="w-full flex flex-col">
      <div class="max-h- flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-4 2xl:row-span-2 2xl:pb-8 ml-2 pt-4 px-6">
        {/* <!-- Beginning of the component about Daniel Clifford --> */}
        <div class="bg-indigo-600 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0">
          <div class="mx-6 my-8 2xl:mx-10">
            <img class="w-8 md:w-9 lg:w-10 2xl:w-20 h-8 md:h-9 lg:h-10 2xl:h-20 rounded-full border-2 ml-1 lg:ml-3 2xl:ml-0 md:-mt-1 2xl:-mt-4" src="https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <h1 class="text-white md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-20 2xl:mx-8">Crop Recommendation Model</h1>
            <h2 class="text-white text-opacity-50 text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 2xl:my-2 2xl:mx-8">Up and Running</h2>
          </div>
          <div class="-mt-6 relative">
            <p class="text-white text-xl 2xl:text-4xl font-bold px-7 lg:px-9 2xl:pt-6 2xl:mx-2">Your Personalized decision making assistant.<br/>
                  Our AI-powered crop advisor analyzes your soil's nutrient levels, temperature, humidity, and pH to recommend the most suitable crop varieties. 
                  Maximize your yield and resource efficiency with our expert advice
                </p>
            </div>
        </div>
        {/* <!-- Ending of the component about Daniel Clifford --> */}

        {/* <!-- Beginning of the component about Jonathan Walters --> */}
        <div class="md:block hidden bg-gray-900 lg:order-2 lg:row-span-1 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl pb-4 mb-5 lg:mb-0">
          <img alt="feature" className="rounded-xl" src={bg} />
        </div>
        {/* <!-- Ending of the component about Jonathan Walters --> */}

        {/* <!-- Beginning of the component about Jeanette Harmon --> */}
        <div class="md:block hidden bg-primary-color-white lg:order-3 lg:row-span-2 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl mb-5 lg:mb-0 2xl:mb-8">
          <img alt="feature" className="rounded-xl" src={bg} />
        </div>
        {/* <!-- Ending of the component about Jeanette Harmon --> */}

        {/* <!-- Beginning of the component about Patrick Abrams --> */}
        <div class="bg-purple-800 lg:order-4 lg:row-span-2 2xl:row-span-1 col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0 2xl:mb-8 lg:pb-14 2xl:pb-20">
          <div class="mx-8 my-8">
            <img class="w-8 md:w-9 lg:w-10 2xl:w-20 h-8 md:h-9 lg:h-10 2xl:h-20 rounded-full border-2 lg:-mt-3" src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <h1 class="text-white text-xs md:text-base 2xl:text-2xl pl-12 md:pl-14 2xl:pl-24 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-16">Disease Detection</h1>
            <h2 class="text-white text-xs md:text-base 2xl:text-2xl text-opacity-50 pl-12 md:pl-14 2xl:pl-24">Under Development</h2>
          </div>
          <div class="px-3 -mt-3 mb-5 lg:mb-0">
            <p class="text-white text-lg 2xl:text-4xl font-semibold px-4 -mt-3 lg:-mt-6 2xl:mt-8">Worried about your plants? Our AI-powered plant doctor is here to help! 
                Just upload a photo of your ailing plant, and our model will quickly identify the disease and recommend treatment. 
                A healthy plant, a bountiful harvest!</p>
             </div>
        </div>
        {/* <!-- Ending of the component about Patrick Abrams --> */}

        {/* <!-- Beginning of the component about Kira Whittle --> */}
        <div class="bg-blue-500 lg:order-2 lg:row-span-4 lg:col-span-1 rounded-lg shadow-xl mb-5 lg:pb-4">
          <div class="mx-8 my-8 lg:pl-1">
            <img class="w-8 md:w-9 lg:w-12 2xl:w-20 h-8 md:h-9 lg:h-12 2xl:h-20 rounded-full border-2 lg:-mt-4 -ml-1 lg:-ml-4" src="https://images.pexels.com/photos/3762804/pexels-photo-3762804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <h1 class="primary-color-blackish-blue text-xs md:text-base 2xl:text-2xl pl-10 md:pl-12 2xl:pl-24 -mt-8 md:-mt-10 lg:-mt-12 2xl:-mt-16">Fertilizer Recommender</h1>
            <h2 class="primary-color-blackish-blue-opacity text-xs md:text-base 2xl:text-2xl pl-10 md:pl-12 2xl:pl-24">Under Development</h2>
          </div>
          <div class="px-3 lg:px-5 lg:-mt-4 mb-5 lg:mb-0">
            <p class="primary-color-blackish-blue text-xl 2xl:text-4xl font-semibold px-4 lg:px-0 -mt-2 lg:-mt-0">
            Recommends the Fertilizer Best suited for the plant based on
            a number of variables type of soil.
            </p>
            </div>
        </div>
        {/* <!-- Ending of the component about Kira Whittle --> */}
      </div>
    </div>
{/*  */}



        {/* <div class="container px-5 py-12 mx-auto flex flex-wrap">
          <div className="px-16  lg:w-1/2 w-full mb-10 lg:mb-0 rounded-2xl overflow-hidden h-[calc(100vh-80px)]">
            <img alt="feature" className="rounded-xl" src={bg} />
          </div>

          <div class="flex flex-col flex-wrap lg:w-1/2 lg:pl-2 lg:text-left text-center">
            <div class="flex flex-col lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-blue-600 font-bold text-2xl title-font mb-2 mr-3">
                  WHY AN AGRI ASSISTANT?
                </h2>
                <p class="leading-relaxed text-lg mb-2">
                Revolutionize your gardening with AGRI ASSISTANT! 
                Our AI-powered platform provides expert insights to help you grow healthier plants, maximize yields, and minimize waste. 
                <br/>Just like in the name An Agricultural Assistant
                </p>
                <h4 className="text-black-900 font-bold text-lg">
                  1. Crop Recommendation Model
                </h4>
                <p className="text-black-900 text-lg mb-2">
                  <span className="text-blue-500">Your Personalized decision making assistant</span><br/>
                  Our AI-powered crop advisor analyzes your soil's nutrient levels, temperature, humidity, and pH to recommend the most suitable crop varieties. 
                  Maximize your yield and resource efficiency with our expert advice
                </p>
              </div>
              <div class="flex-grow">
                <h4 className="text-black-900 font-bold text-lg">
                  2. Disease Detection
                </h4>
                <p className="text-black-900 text-lg mb-2">
                Worried about your plants? Our AI-powered plant doctor is here to help! 
                Just upload a photo of your ailing plant, and our model will quickly identify the disease and recommend treatment. 
                A healthy plant, a bountiful harvest!
                </p>
              </div>
              <div class="flex-grow">
                <h4 className="text-black-900 font-bold text-lg">
                  3. Fertilizer Recommender(Under Development)
                </h4>
                <p className="text-black-900 text-lg mb-2">
                  Recommends the Fertilizer Best suited for the plant based on
                  a number of variables type of soil.
                </p>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      {/* </section> */}
    </>
  );
}

export default Des;
