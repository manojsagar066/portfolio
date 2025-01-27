import { Briefcase } from "lucide-react";
import "./Experience.css";

const experiences = [
  {
    id: 1,
    company: "Draup",
    position: "Python Distributed System Engineer I",
    period: "Jan 2023 - Present",
    responsibilities: [
      "Automated major scraping workflow using ChatGPT and Puppeteer, eliminating manual GraphQL query writing and config deployment, reducing deployment time from 2-3 hours to near-instant, and enabling bulk scraping of 100,000+ websites.",
      "Refactored and migrated the Puppeteer webpage rendering service to TypeScript,enhancing its design and functionality. Introduced task-level metrics to monitor performance and evaluated the service’s throughput and efficiency. Implemented autoscaling for Puppeteer workers in AWS, leveraging performance insights to optimize scalability.",
      "Implemented URL checker store with AWS OpenSearch, preventing duplicate URL scraping and improving data quality, resulting in an 80% cost reduction.",
    ],
  },
  {
    id: 2,
    company: "Draup",
    position: "Associate Python Distributed System Engineer",
    period: "Aug 2018 - Dec 2023",
    responsibilities: [
      "Developed high-volume API service using Puppeteer and Nodejs, successfully scraping millions of dynamically rendered pages from previously challenging websites.",
      "Implemented an auto-scaling policy for Celery workers on EC2 by exposing Celery queue size metrics to CloudWatch. This enabled dynamic scaling of workers, eliminating manual intervention and reducing costs by 50%.",
      "Enhanced open-source Flaresolverr project to bypass Cloudflare detection and integrated Prometheus for metric collection and visualization. Contributed improvements to the main Flaresolverr repository. Also contributed to the Flaresolverr open source project to add Prometheus metrics.",
    ],
  },
  {
    id: 3,
    company: "Draup",
    position: "Software Developer Intern",
    period: "April 2018 - July 2018",
    responsibilities: [
      "Authored production-grade code adhering to industry best practices, resulting in a 20% decrease in bug reports.",
      "Monitored and analyzed ELK (Elasticsearch, Logstash, Kibana) logs to identify and resolve performance bottlenecks.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-heading">
        <Briefcase className="icon" />
        Experience
      </h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <h3 className="experience-position">{exp.position}</h3>
            <p className="experience-company">
              {exp.company} | {exp.period}
            </p>
            <ul className="responsibilities-list">
              {exp.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
