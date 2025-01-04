import React from "react";
import Header from "@/components/Header/Header";

function BioinformaticsPage() {
    return (
        <>
            
                <Header
                    title="Exploring the Future of Bioinformatics"

                    description="Unlock the potential of bioinformatics: Learn to analyze biological data and drive innovations in genomics, healthcare, and research."

                />
            
            
            <div className="bg-gradient-to-b from-blue-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-100 min-h-screen py-12">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <header className="text-center mb-16">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
                            Welcome to <span className="text-blue-600">Meth Tech Thinking Foundation</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
                            Your Gateway to Bioinformatics Learning!
                        </p>
                    </header>

                    {/* Why Learn Bioinformatics Section */}
                    <section className="mb-20">
                        <h2 className="text-4xl font-bold mb-6 text-blue-700 dark:text-blue-400">Why Learn Bioinformatics?</h2>
                        <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300">
                            Bioinformatics is revolutionizing the way we understand life sciences. It combines biology, computer science, and data analysis to unlock insights into genomics, proteomics, drug discovery, and more. As the demand for bioinformatics experts continues to grow, mastering this discipline can open doors to cutting-edge research and career opportunities in healthcare, biotechnology, and academia.
                        </p>
                    </section>

                    {/* What We Offer Section */}
                    <section className="mb-20">
                        <h2 className="text-4xl font-bold mb-6 text-blue-700 dark:text-blue-400">What We Offer</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {[
                                {
                                    title: "Expert-Led Courses",
                                    description: "Our curriculum covers topics such as genomics, protein structure prediction, and machine learning in bioinformatics.",
                                    details: [
                                        "Genomics and Next-Generation Sequencing (NGS)",
                                        "Protein Structure Prediction and Analysis",
                                        "Machine Learning in Bioinformatics",
                                        "Data Visualization and Interpretation",
                                    ],
                                },
                                {
                                    title: "Hands-On Training",
                                    description: "Learn by doing with real-world projects and practical exercises.",
                                    details: [
                                        "Analyze DNA, RNA, and protein sequences.",
                                        "Use bioinformatics tools like BLAST, Biopython, and R.",
                                        "Explore publicly available datasets like GenBank and UniProt.",
                                    ],
                                },
                                {
                                    title: "Personalized Learning Pathways",
                                    description: "Tailored learning paths for beginners, intermediates, and advanced learners.",
                                    details: [
                                        "Beginner Level: Introduction to essential tools.",
                                        "Intermediate Level: Genomics, proteomics, and transcriptomics.",
                                        "Advanced Level: Computational biology and AI-driven bioinformatics.",
                                    ],
                                },
                                {
                                    title: "Career Support",
                                    description: "Resume workshops, networking opportunities, and job placement guidance.",
                                },
                            ].map((item, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>
                                    {item.details && (
                                        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                                            {item.details.map((detail, idx) => (
                                                <li key={idx}>{detail}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Key Features Section */}
                    <section className="mb-20">
                        <h2 className="text-4xl font-bold mb-6 text-blue-700 dark:text-blue-400">Key Features of Our Platform</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {["Comprehensive Curriculum", "Interactive Learning", "Expert Mentorship", "Career Support Services", "Global Community", "Certifications", "Lifetime Access", "Accessibility", "Exclusive Insights"].map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:scale-105 transform transition"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">
                                        {index + 1}
                                    </div>
                                    <span className="text-gray-800 dark:text-gray-200">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Join Us Section */}
                    <section className="text-center">
                        <h2 className="text-4xl font-bold mb-6 text-blue-700 dark:text-blue-400">Join Us Today</h2>
                        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
                            Be part of the bioinformatics revolution! Enroll in our courses and start your journey to mastering the future of life sciences.
                        </p>
                        <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:from-blue-700 hover:to-blue-500 transition">
                            Get Started Now
                        </button>
                    </section>
                </div>
            </div>
        </>
    );
}

export default BioinformaticsPage;
