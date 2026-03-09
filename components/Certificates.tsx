export default function Certificates() {
     const certificates = [
          { name: "Data Visualization: Empowering Business", from: "TATA iLearn", file: "tata.png" },
          { name: "Technology Job Simulation", from: "Deloitte", file: "deloitte.png" },
          { name: "Cloud Computing Fundamentals", from: "Infosys Springboard", file: "inf.png" },
          { name: "AWS Academy Cloud Foundations", from: "AWS", file: "aws.png" },
          { name: "Data Scientists Certification", from: "Data Sciences", file: "DataScientists.png" },
          { name: "Generative AI", from: "AI Essentials", file: "GenerativeAI.png" },
          { name: "IBM Certificate", from: "IBM", file: "IBM.png" },
          { name: "Accenture Developer Program", from: "Accenture", file: "acc.png" },
          { name: "Google Analyst", from: "Google Academy", file: "googleAnalyst.png" },
          { name: "Wipro Talent", from: "Wipro", file: "wipro.png" },
     ];

     return (
          <section className="py-24 bg-white/5 overflow-hidden">
               <div className="container mx-auto px-6 mb-12">
                    <h2 className="text-4xl font-heading font-bold">Verified Expertise</h2>
                    <p className="text-gray-400">Certificates & Recognitions</p>
               </div>
               <div className="flex gap-6 overflow-x-auto pb-8 px-6 no-scrollbar" style={{ scrollbarWidth: 'none' }}>
                    {certificates.map((cert, index) => (
                         <div key={index} className="flex-shrink-0 w-80 md:w-96 glass-card p-4 rounded-2xl">
                              <img
                                   alt={cert.name}
                                   className="w-full h-48 object-cover rounded-xl mb-4 bg-black/20"
                                   src={`/certificates/${cert.file}`}
                              />
                              <h4 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis">{cert.name}</h4>
                              <p className="text-sm text-gray-500">{cert.from}</p>
                         </div>
                    ))}
               </div>
          </section>
     );
}
