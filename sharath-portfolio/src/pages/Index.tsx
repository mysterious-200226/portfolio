import Navigation from "@/components/Navigation";
import SkillBadge from "@/components/SkillBadge";
import ProjectCard from "@/components/ProjectCard";
import CertificationCard from "@/components/CertificationCard";
import EducationCard from "@/components/EducationCard";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePlaceholder from "@/assets/profile-placeholder.png";

const Index = () => {
  const skills = {
    cloud: ["AWS VPC", "EC2", "S3", "IAM", "Route53", "RDS"],
    programming: ["C", "Python", "SQL"],
    tools: ["Linux", "Git & GitHub", "Microsoft Office", "Adobe InDesign", "Figma"],
    bi: ["Power BI"],
  };

  const projects = [
    {
      title: "3-Tier Web Application Architecture on AWS",
      description: [
        "Built scalable architecture using EC2, RDS, and ELB",
        "Used IAM, security groups, and VPC for secure design",
        "Added auto-scaling and load balancing for high availability",
      ],
    },
    {
      title: "Cisco Packet Tracer Network Simulation",
      description: [
        "Designed star topology connecting multiple floors",
        "Configured router, L3 switch, DHCP server, and APs",
        "Implemented VLANs and DHCP pools for segmentation",
      ],
    },
    {
      title: "Transportation Management System",
      description: [
        "VB.Net & MySQL application",
        "Modules for vehicles, drivers, service logs",
        "User and admin roles",
      ],
    },
    {
      title: "Car Sales Analysis",
      description: [
        "Performed EDA using Python (Pandas, Seaborn, Matplotlib)",
        "Identified trends on pricing, mileage, fuel type, and seasonality",
      ],
    },
  ];

  const certifications = [
    {
      title: "Introduction to Big Data",
      provider: "Coursera",
      credentialUrl: "#",
    },
    {
      title: "AWS Multi-Tier VPC Architecture",
      provider: "Coursera",
      credentialUrl: "#",
    },
    {
      title: "Microsoft Azure",
      provider: "Udemy",
      credentialUrl: "#",
    },
    {
      title: "Oracle Certified Foundations Associate",
      provider: "Oracle",
      credentialUrl: "#",
    },
    {
      title: "Linux for Data Engineers",
      provider: "Udemy",
      credentialUrl: "#",
    },
  ];

  const education = [
    {
      degree: "MCA",
      institution: "RV Institute of Technology and Management",
      year: "2023 – Present",
      score: "CGPA: 7.92",
    },
    {
      degree: "B.Sc",
      institution: "SDM Degree College, Ujire",
      year: "2023",
      score: "CGPA: 6.66",
    },
    {
      degree: "PU",
      institution: "P.R.N Amritha Bharathi PU College",
      year: "2020",
      score: "66.16%",
    },
    {
      degree: "SSLC",
      institution: "Prabodhini Vidya Kendra",
      year: "2018",
      score: "74.56%",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(var(--hero-gradient-from))] to-[hsl(var(--hero-gradient-to))] text-white pt-16"
      >
        <div className="section-container text-center">
          <div className="animate-fade-in-up">
            <img
              src={profilePlaceholder}
              alt="Sharath Bhat B T"
              className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-xl object-cover"
            />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Sharath Bhat B T</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Cloud & Software Enthusiast | MCA Student
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-blue-50">
              <a
                href="tel:+917676129915"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 7676129915</span>
              </a>
              <a
                href="mailto:sharathbhat326@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>sharathbhat326@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sharathbhat-b-t"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container bg-[hsl(var(--section-bg))]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-foreground animate-fade-in-up">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Enthusiastic MCA student with a strong interest in software development, networking,
            and cloud technologies. Passionate about learning and applying concepts in real-world
            environments. I love building systems, understanding how things work, and improving
            solutions through hands-on practice.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container bg-background">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Skills</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Cloud Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.cloud.map((skill, index) => (
                <SkillBadge key={skill} skill={skill} delay={index * 50} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Programming Languages</h3>
            <div className="flex flex-wrap gap-3">
              {skills.programming.map((skill, index) => (
                <SkillBadge key={skill} skill={skill} delay={index * 50} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">BI & Visualization</h3>
            <div className="flex flex-wrap gap-3">
              {skills.bi.map((skill, index) => (
                <SkillBadge key={skill} skill={skill} delay={index * 50} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill, index) => (
                <SkillBadge key={skill} skill={skill} delay={index * 50} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section id="internship" className="section-container bg-[hsl(var(--section-bg))]">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Internship Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="card-portfolio animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-2 text-foreground">
              Sureworks Infotech Pvt Ltd
            </h3>
            <p className="text-primary font-semibold mb-4">Student Intern • Bangalore</p>
            <ul className="space-y-3">
              <li className="text-muted-foreground flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>
                  Simulated an enterprise network with VLANs, DHCP, Layer 3 switch, router, and
                  wireless APs using Cisco Packet Tracer
                </span>
              </li>
              <li className="text-muted-foreground flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>
                  Configured Windows Server for Active Directory, DHCP scopes, domain setup, user
                  and group policies, and permissions
                </span>
              </li>
              <li className="text-muted-foreground flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Used Hyper-V to create virtual machines and test domain environment</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container bg-background">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              delay={index * 100}
            />
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-container bg-[hsl(var(--section-bg))]">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Education</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <EducationCard
              key={edu.degree}
              degree={edu.degree}
              institution={edu.institution}
              year={edu.year}
              score={edu.score}
              delay={index * 100}
            />
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-container bg-background">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Certifications</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.title}
              title={cert.title}
              provider={cert.provider}
              credentialUrl={cert.credentialUrl}
              delay={index * 100}
            />
          ))}
        </div>
      </section>

      {/* Contact/Footer Section */}
      <section id="contact" className="section-container bg-[hsl(var(--hero-gradient-from))] text-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 animate-fade-in-up">Get In Touch</h2>
          <p className="text-xl mb-8 text-blue-100 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Thank you for viewing my portfolio. Feel free to reach out!
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.location.href = "mailto:sharathbhat326@gmail.com"}
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                window.open("https://www.linkedin.com/in/sharathbhat-b-t", "_blank")
              }
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-6 border-t border-border">
        <div className="text-center text-muted-foreground text-sm">
          <p>© 2025 Sharath Bhat B T. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
