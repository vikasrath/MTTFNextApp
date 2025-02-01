import React from 'react';
import Image from 'next/image';
import award2024 from '../../../../../public/assets/2024awards/EARG2024.jpg';
import img1 from '../../../../../public/assets/2024IEARG/IMG1.jpg';
import img2 from '../../../../../public/assets/2024IEARG/IMG2.jpg';
import img3 from '../../../../../public/assets/2024IEARG/IMG3.jpg';
import img4 from '../../../../../public/assets/2024IEARG/IMG4.jpg';
import img5 from '../../../../../public/assets/2024IEARG/IMG5.jpg';
import Header from '@/components/Header/Header';

function Award2024() {
  return (
    <>
      <Header
        title="IEARG Award 2024"
        description="The International EARG Awards 2024, organized by MTTF with Poornima Engineering College, Jaipur, was held on March 19 in Fazilka, India. Awards were given in nine categories, including Lifetime Achievement, Academic Leadership, Research & Development, Innovation, and Young Entrepreneur."
      />

      <section className="px-6 py-16 bg-linear-to-r from-blue-50 to-blue-200">
        {/* Award Image */}
        <div className="p-12">
          <Image src={award2024} alt="Award2024" className="shadow-xl rounded-xl transform hover:scale-105 transition-all duration-300" />
        </div>

        {/* Gallery Heading */}
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
          Gallery
        </h2>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Image src={img2} alt="Image 2" className="w-full h-64 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300" />
          <Image src={img3} alt="Image 3" className="w-full h-64 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300" />
          <Image src={img4} alt="Image 4" className="w-full h-64 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300" />
          <Image src={img5} alt="Image 5" className="w-full h-64 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300" />
          <Image src={img1} alt="Image 1" className="w-full h-64 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300" />
        </div>

        {/* Videos Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Video 1 */}
          <div className="flex justify-center items-center rounded-xl shadow-xl bg-white p-4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hky36VUXAUc?controls=1&modestbranding=1&rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>

          {/* Video 2 */}
          <div className="flex justify-center items-center rounded-xl shadow-xl bg-white p-4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/EeuSbtK8XsE?controls=1&modestbranding=1&rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Award2024;
