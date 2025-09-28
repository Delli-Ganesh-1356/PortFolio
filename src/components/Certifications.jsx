import React from "react";

export const Certifications = () => {
  const certs = [
    {
      title: "Full Stack Java Developer",
      issuer: "Great Learning",
      date: "Aug 2025",
      link: "https://example.com/certificate1",
      image: "https://via.placeholder.com/400x250?text=Certificate+1",
    },
    {
      title: "Frontend Development",
      issuer: "Udemy",
      date: "Jun 2025",
      link: "https://example.com/certificate2",
      image: "https://via.placeholder.com/400x250?text=Certificate+2",
    },
    {
      title: "React & Tailwind Mastery",
      issuer: "Coursera",
      date: "May 2025",
      link: "https://example.com/certificate3",
      image: "https://via.placeholder.com/400x250?text=Certificate+3",
    },
  ];

  return (
    <section className="min-h-screen bg-background text-foreground pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          🏅 My <span className="text-primary">Certifications</span>
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 overflow-hidden flex flex-col"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold mb-1">{cert.title}</h2>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="text-xs text-gray-500 mb-3">{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-primary text-sm font-medium hover:underline"
                >
                  View Certificate →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
