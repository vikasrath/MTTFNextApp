import React from 'react'
import ServicesCard from './ServiceCard'
import growthImg from "../../../public/assets/ServiceImages/growth.gif"
import levelup from "../../../public/assets/ServiceImages/levelup.gif"
import internship from "../../../public/assets/ServiceImages/internship.gif"
import webinar from "../../../public/assets/ServiceImages/Protection1.gif"
import growthImgstatic from "../../../public/assets/ServiceImages/growthstatic.png"
import levelupstatic from "../../../public/assets/ServiceImages/levelupstatic.png"
import internshipstatic from "../../../public/assets/ServiceImages/internshipstatic.png"
import webinarstatic from "../../../public/assets/ServiceImages/protectionstatic.png"
import cirtificate from "../../../public/assets/ServiceImages/certificate-icon.gif"
import ok from "../../../public/assets/ServiceImages/ok.gif"

function ServiceSection() {

    const servicesDetail = [
        {
            title: "Empowering Growth with Training",
            discription: "Training It provides training, which refers to the teaching and learning activities carried on for the primary purpose of helping members of an organization acquire and apply the knowledge, skills, abilities, and attitudes needed by a particular job and organization for STEM professionals.",
            giflogo: growthImg,
            staticLogo: growthImgstatic
        },
        {
            title: "Professional Certificate Program",
            discription: "Certification demonstrates your commitment to superior professionalism, upholding industry standards, and continued learning. A certificate can help ease that transition, making you feel more prepared, confident, and qualified to pursue new career opportunities.",
            giflogo: cirtificate,
            staticLogo: cirtificate
        },
        {
            title: "Skill Development Workshops",
            discription: "It organizes workshops for STEM professionals on a particular subject, to learn new projects, techniques and methods. Ensuring a proper flow of knowledge, Workshops assist in passionate interaction and active participation boosting the skills and expertise of STEM professionals.",
            giflogo: levelup,
            staticLogo: levelupstatic
        },
        {
            title: "Internship Opportunities",
            discription: "MTTF opens internships for Indian students in the area of Digital Marketing, CRM, Web-development, Graphic Designing, Content writing, Data-Analysis, Research Associates, Project Associates, etc. Applications are invited through the Internship AICTE-India portal",
            giflogo: internship,
            staticLogo: internshipstatic
        },

        {
            title: "Joint event",
            discription: "Collaborations are befitted in sharing expertise, saving time and money, reducing the workload, increasing productivity, and problem-solving. To organize a collaborative program/event, you are always welcome at MathTechGuru.",
            giflogo: ok,
            staticLogo: ok
        },
        {
            title: "Online interactive learning sessions",
            discription: "It provides a platform for STEM professionals to organize webinars. Embracing the ecosystem way, these gatherings will provide a space and time for STEM leaders to share common challenges, ideas, and resources.",
            giflogo: webinar,
            staticLogo: webinarstatic
        },


    ]

    return (
        <>



            <div className='bg-linear-to-r  from-blue-50 via-white to-indigo-100 p-4 pb-24 w-full min-h-[400px] flex flex-wrap justify-center bg-[#f8f9fe] '>
                <h1 className=' font-serif  text-2xl text-center w-full lg:text-4xl mb-8 mt-11 font-semibold'>Our Services
                </h1>

                {servicesDetail.map((service, index) => (
                    <ServicesCard
                        key={index}
                        title={service.title}
                        discription={service.discription}
                        logoGif={service.giflogo}
                        logoStatic={service.staticLogo} />
                ))}
            </div>

        </>
    )
}

export default ServiceSection