import React from 'react';
import Header from "@/components/Header/Header";
import dataanalysis2 from "../../../../../public/assets/dataanalysis2.png"
import Image from 'next/image';

import { FaArrowRight } from "react-icons/fa";



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

            <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                    <div className="text-left">
                        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
                            Transform <span className="font-bold text-blue-500">Your Data</span> into Actionable Insights
                        </h2>
                        <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Our data analytics consultancy offers a suite of services to help organizations harness data for strategic growth and improved efficiency.
                        </p>
                        <div className="mt-5 sm:flex md:mt-8">
                            <div className="rounded-md shadow">
                                <a href="#"
                                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                                    Get Started
                                </a>
                            </div>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                <a href="https://api.whatsapp.com/send/?phone=918968294003&text&type=phone_number&app_absent=0" target='blank'
                                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
                    <div className="relative w-full p-3 rounded md:p-8">
                        <div className="rounded-lg bg-white text-black w-full p-6">
                            <Image src={dataanalysis2} alt="Data Analytics Consultancy" className="rounded-md" height={300}
                                width={300} />
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
                    <h3 className="text-4xl font-bold text-center text-white mb-12">
                        🚀 Our Consultancy Services
                    </h3>
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                        {services.map((service, index) => (
                            <ServiceCard key={index} title={service.title} description={service.description} index={index} />
                        ))}
                    </div>
                </div>
            </section>



            <section className="relative py-16 bg-gradient-to-r from-blue-50 to-gray-100 flex justify-center items-center">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    {/* Heading */}
                    <h3 className="text-4xl font-bold text-gray-800 mb-4">
                        Why Choose Us?
                    </h3>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We blend expertise with innovation, guiding businesses through every stage of their journey.
                        Our strategies and analytics ensure maximum growth and efficiency.
                    </p>

                    {/* Features Grid */}
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: "Expert Insights", desc: "Our professionals analyze and craft solutions that drive success." },
                            { title: "Innovative Strategies", desc: "We leverage modern technology to maximize business potential." },
                            { title: "Proven Results", desc: "Our track record speaks for itself, ensuring quality at every step." }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                                <p className="text-gray-600 mt-3">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-10 flex justify-center">
                        <a
                            href="/about"
                            className="flex items-center gap-2 px-6 py-3 text-lg font-medium text-white 
                bg-blue-600 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-500 hover:scale-105"
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
        <FaChartLine />, <FaBrain />, <FaChartBar />, <FaSearch />,
        <FaShieldAlt />, <FaRobot />, <FaBolt />, <FaLightbulb />,
        <FaTruck />, <FaLink />
    ];

    return (
        <div className="relative group flex flex-col items-center text-center w-full max-w-xs p-8 rounded-xl shadow-lg transition-all duration-500 transform hover:scale-105"
            style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)"
            }}>
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-all rounded-xl"></div>

            {/* Icon */}
            <div className="text-5xl mb-4 text-white group-hover:text-blue-400 transition-all">
                {icons[index % icons.length]}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-white">{title}</h3>

            {/* Description */}
            <p className="mt-4 text-gray-300">{description}</p>
        </div>
    );
}

export default DataAnalyticsConsultancy;






