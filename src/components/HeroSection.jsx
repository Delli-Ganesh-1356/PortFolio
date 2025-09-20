import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Delli
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Ganesh
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 fw-2">
            Java Full Stack Developer | Skilled in Spring Boot, React.js, SQL, and MongoDB.  
            Experienced in building scalable web apps, REST APIs, authentication with JWT,  
            and deploying to AWS. Passionate about creating efficient and reliable solutions.
          </p>

          {/* Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button w-full sm:w-auto">
              View My Work
            </a>
            <a
              href="mailto:delliganeshofficial@gmail.com"
              className="cosmic-button w-full sm:w-auto"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
