import React from 'react';
import Header from "@/components/Header/Header";
import dataanalysis2 from "../../../../../public/assets/dataanalysis2.png"
import Image from 'next/image';

import { FaArrowRight, FaRocket } from "react-icons/fa";



import { FaChartLine, FaBrain, FaChartBar, FaSearch, FaShieldAlt, FaRobot, FaBolt, FaLightbulb, FaTruck, FaLink } from 'react-icons/fa';

function DataAnalyticsConsultancy() {

    const services = [
        { title: "Data Strategy Development", description: "Develop a clear data strategy aligned with business goals to drive informed decision-making." },
        { title: "Data Collection and Integration", description: "Streamline data from multiple sources to ensure data quality and accessibility." },
        { title: "Predictive Analytics", description: "Leverage predictive modeling to anticipate trends and enable proactive decisions." },
        { title: "Business Intelligence & Visualization", description: "Implement real-time data visualization for operational insights." },
        { title: "Data Governance", description: "Establish best practices for data quality, privacy, and compliance." },
        { title: "Advanced Analytics & Machine Learning", description: "Apply machine learning to gain deeper insights and enhance decision-making." },
        { title: "Risk Management Analytics", description: "Identify and mitigate potential risks with data-driven insights and predictive modeling." },
        { title: "Customer Insights & Segmentation", description: "Understand customer behaviors and preferences to enhance engagement and retention." },
        { title: "Supply Chain Optimization", description: "Optimize supply chain operations using analytics to reduce costs and improve efficiency." },
        { title: "Operational Efficiency", description: "Enhance efficiency across processes by identifying and addressing bottlenecks." }
    ];



    return (
        <>

            <Header
                title="Data Analytics Consultancy Services"
                description="Empowering businesses to unlock their full potential with data-driven strategies, analysis, and insights."
            />

            <div className="relative flex flex-col items-center max-w-(--breakpoint-xl) px-4 mx-auto md:flex-row sm:px-6 p-8">
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                    <div className="text-left">
                        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
                            Transform <span className="font-bold text-blue-500">Your Data</span> into Actionable Insights
                        </h2>
                        <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Our data analytics consultancy offers a suite of services to help organizations harness data for strategic growth and improved efficiency.
                        </p>
                        <div className="mt-5 sm:flex md:mt-8">
                            <div className="rounded-md shadow-sm">
                                <a href="#"
                                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-hidden focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                                    Get Started
                                </a>
                            </div>
                            <div className="mt-3 rounded-md shadow-sm sm:mt-0 sm:ml-3">
                                <a href="https://api.whatsapp.com/send/?phone=918968294003&text&type=phone_number&app_absent=0" target='blank'
                                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-600 focus:outline-hidden focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
                    <div className="relative w-full p-3 rounded-sm md:p-8">
                        <div className="rounded-lg bg-white text-black w-full p-6">
                            <Image src={dataanalysis2} alt="Data Analytics Consultancy" className="rounded-md" height={300}
                                width={300} />
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-16">
                <div className="max-w-(--breakpoint-xl) mx-auto px-6 lg:px-8">
                    <h3 className="text-4xl font-extrabold text-center text-indigo-800 mb-12">
                        🚀 Our Consultancy Services
                    </h3>
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                        {services.map((service, index) => (
                            <ServiceCard key={index} title={service.title} description={service.description} index={index} />
                        ))}
                    </div>
                </div>
            </section>




            <section className="relative py-16 bg-linear-to-br from-indigo-50 to-indigo-100 flex justify-center items-center">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    {/* Heading */}
                    <h3 className="text-5xl font-extrabold text-gradient bg-clip-text text-transparent mb-8"
                        style={{ fontFamily: '"Poppins", sans-serif', backgroundImage: 'linear-gradient(to right, #6EE7B7, #3B82F6)' }}>
                        Why Choose Us?
                    </h3>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12" style={{ fontFamily: '"Merriweather", serif' }}>
                        We combine cutting-edge technology with proven expertise to craft solutions that fuel growth and innovation.
                        Our unique strategies deliver measurable results with a clear path to business success.
                    </p>

                    {/* Features Grid with Icons */}
                    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Expert Insights",
                                desc: "In-depth analysis that provides clarity and drives smarter decisions.",
                                icon: <FaLightbulb className="text-6xl text-indigo-500 mb-4" />
                            },
                            {
                                title: "Innovative Strategies",
                                desc: "Utilizing the latest tools and technologies to foster growth and efficiency.",
                                icon: <FaRocket className="text-6xl text-teal-500 mb-4" />
                            },
                            {
                                title: "Proven Results",
                                desc: "A history of successful implementations that deliver tangible value.",
                                icon: <FaChartLine className="text-6xl text-yellow-500 mb-4" />
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-xl rounded-lg p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                style={{
                                    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <div className="flex justify-center mb-4">{item.icon}</div>
                                <h4 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: '"Lora", serif' }}>
                                    {item.title}
                                </h4>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-12 flex justify-center">
                        <a
                            href="/about"
                            className="flex items-center gap-4 px-8 py-4 text-lg font-medium text-white bg-linear-to-r from-indigo-600 to-teal-600 rounded-full shadow-lg transition-all duration-300 hover:from-indigo-700 hover:to-teal-700 hover:scale-105"
                        >
                            Learn More <FaArrowRight />
                        </a>
                    </div>
                </div>
            </section>




        </>
    );
}

function ServiceCard({ title, description, index }) {
    const icons = [
        <FaChartLine className="text-blue-400" />,
        <FaBrain className="text-green-400" />,
        <FaChartBar className="text-purple-400" />,
        <FaSearch className="text-yellow-400" />,
        <FaShieldAlt className="text-pink-400" />,
        <FaRobot className="text-teal-400" />,
        <FaBolt className="text-orange-400" />,
        <FaLightbulb className="text-indigo-400" />,
        <FaTruck className="text-red-400" />,
        <FaLink className="text-lime-400" />
    ];

    return (
        <div className="relative group flex flex-col items-center text-center w-full max-w-xs p-8 rounded-xl shadow-xl transition-all duration-500 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
            style={{
                background: "linear-gradient(145deg, #ffffff, #f9f9f9)", // Soft, off-white background for the card
                border: "2px solid #e2e2e2", // Subtle border for definition
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.05)" // Deep shadow for depth
            }}>
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-linear-to-r from-pink-400 via-red-500 to-yellow-500 opacity-0 group-hover:opacity-30 transition-all rounded-xl"></div>

            {/* Icon with vibrant color */}
            <div className="text-6xl mb-4 text-gray-800 group-hover:text-white transition-all ease-in-out duration-300">
                {icons[index % icons.length]}
            </div>

            {/* Title with new font */}
            <h3 className="text-3xl font-extrabold text-gray-800 mb-2" style={{ fontFamily: '"Poppins", sans-serif' }}>
                {title}
            </h3>

            {/* Description with subtle text effect */}
            <p className="mt-4 text-gray-600" style={{ fontFamily: '"Roboto", sans-serif' }}>
                {description}
            </p>
        </div>
    );
}




export default DataAnalyticsConsultancy;






