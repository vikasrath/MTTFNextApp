
import React from 'react'
import Header from '@/components/Header/Header';
import List from '@/components/List/List';

function StudentChepter() {

  const professionalBenefits = [
    "Networking Opportunities: Student chapters provide a platform for STEM professionals to network with students, fellow professionals, and industry leaders, fostering valuable connections.",
    "Knowledge Exchange: Professionals can engage in knowledge-sharing sessions, workshops, and events organized by student chapters, enhancing their understanding of current trends and advancements in their field.",
    "Mentorship Programs: Student chapters often offer mentorship opportunities, allowing STEM professionals to guide and support the next generation of professionals, while also gaining satisfaction from contributing to their development.",
    "Skill Development: Participation in student chapter activities can contribute to the continuous development of professional skills, providing access to hands-on experiences and practical learning opportunities.",
    "Access to Talent Pool: Professionals can identify and connect with talented students through student chapters, potentially discovering future collaborators, employees, or colleagues.",
    "Professional Growth: Involvement in student chapters can contribute to a professional’s personal and career development, offering leadership opportunities, exposure to diverse perspectives, and a chance to enhance leadership and communication skills.",
    "Community Engagement: Being part of a student chapter allows professionals to engage with the local academic community, staying informed about educational initiatives, research, and potential collaborations.",
    "Stay Updated on Industry Trends: Through events and activities organized by student chapters, professionals can stay abreast of the latest industry trends, research findings, and technological advancements relevant to their field.",
    "Contribute to Education: Professionals can actively contribute to educational initiatives and programs organized by student chapters, sharing their expertise and helping shape the future of STEM education.",
    "Brand Visibility: Involvement with student chapters provides professionals with opportunities to enhance their personal and organizational visibility within the academic and professional community, potentially leading to increased recognition and opportunities."
  ];


  return (
    <>
      
    
      <Header
          title={<p className=' text-[40px] md:text-[50px] '>Why The Student Chapter ?</p>}
          description="Student chapters for STEM professionals create a supportive community, offering networking, educational events, and resources to enhance students' academic and career growth in STEM fields."
        />


      <section className="bg-linear-to-r from-blue-50 to-white py-16 px-5 md:px-20 lg:px-40 w-full">
        <div className="w-full mx-auto ">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 pb-4 border-blue-700 border-b-4">Advantages of STEM Student Chapters for Professionals</h2>
            <ul className="text-gray-700 text-md md:text-lg leading-relaxed mb-6 list-disc ml-5 space-y-4">
              <List items={professionalBenefits} textClass="text-gray-700 text-medium leading-6 md:leading-7" />
            </ul>
          </div>
        </div>
      </section>
      
      <section className="bg-linear-to-r from-blue-50 to-white py-16 px-5 md:px-20 lg:px-40 w-full">
        <div className="w-full mx-auto text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 pb-4 border-blue-700 border-b-4 inline-block">Established Chapters</h2>
          <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
            <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
              On August 12, 2023, Anand International College of Engineering in Jaipur founded the MathTech Thinking Foundation (MTTF) Student Chapter for its engineering students.
            </p>
            <p className="text-gray-700 text-md md:text-lg font-medium">
              <span className="font-semibold text-blue-800">Chapter ID:</span> MSC2023001
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default StudentChepter