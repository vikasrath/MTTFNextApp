import React from 'react';

const FAQ = ({faqs}) => {
   

    return (
        <section className="p-8 bg-linear-to-r from-indigo-50 to-indigo-100 rounded-lg shadow-xl">
        <div className="space-y-6 lg:w-[80%] mx-auto mt-8">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
            Frequently Asked Questions
          </h2>
      
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-all hover:scale-105">
              <div className="border-b pb-4">
                <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
                  <span className="text-lg font-bold text-gray-800">{index + 1}.</span> {faq.question}
                </h3>
                <p className="text-gray-700 text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    );
};

export default FAQ;
