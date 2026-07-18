export const resumeData = {
  header: {
    name: "Siddharth Raj Dash",
    contact: "(323) 220-3804 | srdash@usc.edu",
    github: "https://github.com/SiDdHaRtHrAjDaSh",
    linkedin: "https://www.linkedin.com/in/siddharth-raj-dash-636499189/",
  },
  skills: {
    title: "Skills",
    content: [
      { category: "Programming Languages", items: ["Java", "Python", "C/C++", "SQL", "JavaScript"] },
      { category: "Frameworks", items: ["Spring Boot", "React.js", "Node.js", "Django", "Flask", "Android"] },
      { category: "Cloud", items: ["AWS EC2", "AWS S3", "AWS Lambda", "AWS API Gateway", "AWS ELB", "AWS ECS", "AWS SQS", "AWS Route 53", "AWS Amplify", "Azure", "GCP", "FastAPI"] },
      { category: "Devops", items: ["Git", "Docker", "Jenkins", "Linux", "Terraform", "Redis"] },
      { category: "AI/ML", items: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Generative AI", "Diffusion Models (Stable Diffusion)", "LoRA Fine-Tuning", "Langchain", "Prompt Engineering", "AI Model Optimization", "TensorFlow", "PyTorch", "Scikit-learn", "NLP (NLTK)", "Computer Vision", "Claude Code", "GitHub Copilot", "RAG", "LLM API’s"] },
      { category: "Databases", items: ["Postgres", "MySQL", "MongoDB", "DuckDB"] },
      { category: "Observability", items: ["OpenSearch", "Snowflake", "Grafana", "Prometheus", "Graylog"] },
      { category: "System Architecture", items: ["Microservice Architecture", "Distributed Systems", "Multithreading", "RESTful API", "Database Systems"] },
      { category: "Project management", items: ["Scrum", "Jira", "Leadership"] },
      { category: "Testing", items: ["Selenium", "Pytest", "JUnit", "Mockito", "Playwright"] }
    ]
  },
  experience: {
    title: "Experience",
    content: [
      {
        company: "GBCS Group",
        logo: "https://logo.clearbit.com/gbcsgroup.com",
        role: "Summer Intern - Backend development",
        date: "Jun 2025 - Aug 2025",
        location: "Los Angeles, CA, USA",
        bullets: [
          "Spearheaded development of a scalable Azure-based emission tracking system supporting 60+ international regulations, leveraging AI assistants (Copilot) to accelerate implementation and validation, cutting development turnaround time by 60%",
          "Decoupled a monolithic 3-portal system into independently scalable Azure services with well-defined boundaries and implemented role-based access control via Azure AD/IAM to enhance security and maintainability",
          "Constructed React-based emissions analytics dashboard with API-response caching, slashing API and database query calls by 50% and providing real-time monitoring of performance, load and carbon footprint",
          "Developed unit and integration test suites using PyTest, achieving 93% code coverage and ensuring reliable API validation, data integrity, and database persistence in the greenhouse gas tracking system",
          "Implemented a scalable VIN decoding microservice to standardize and manage data for 6,000+ vehicles, improving asset classification, data validation accuracy, and backend processing efficiency"
        ]
      },
      {
        company: "Athenahealth Technologies",
        logo: "https://logo.clearbit.com/athenahealth.com",
        role: "Member of Technical Staff",
        date: "Dec 2023 - Jul 2024",
        location: "Chennai, India",
        bullets: [
          "Led development of a HIPAA compliant, scalable microservice built on React and Spring Boot, allowing clients to securely store, validate and retrieve FHIR resources, ensuring regulatory adherence and data integrity",
          "Created a AWS Lambda driven caching pipeline to preload large Snowflake tables into a shared Redis cluster, delivering low-latency access to all microservices and cutting total processing time from 4 hours to 1.5 hours",
          "Leveraged Spring Boot to build a real-time, fault-tolerant, distributed lab-reports service on AWS (API Gateway, ECS, Load Balancers, SQS) with multithreaded request processing, enabling low-latency handling of 1,000+ API requests per hour",
          "Integrated Terraform Infrastructure as Code into CI/CD pipelines to automate provisioning and scaling of AWS services (ECS, API Gateway, SQS, IAM), improving deployment reliability and reducing setup time by 40%",
          "Created UI test suites using React Testing Library for the FHIR validator, achieving 90%+ component test coverage and improving reliability of critical validation workflows across client-facing interfaces",
          "Engineered an automated end-to-end (E2E) and smoke testing framework using Selenium, integrated into CI/CD pipelines, that creates test users, executes workflows, and performs database and log validation, generating detailed reports and reducing manual testing effort by 70%, accelerating deployment cycles",
          "Optimized backend microservices and internal APIs to shorten client turnaround time and boost data handling capacity by 20% with existing infrastructure, elevating overall efficiency of services",
          "Designed a patient dashboard using React and Node.js, hosted on AWS EC2, to display insurance details and medical history by integrating external insurance APIs and querying patient records from a Snowflake data lake in real time",
          "Architected cross-region AWS disaster recovery using Terraform IaC and Jenkins, automating failover across EC2, SQS, VPC, S3, RDS, and API Gateway, achieving 2-hour RTO aligned with cron-based workload requirements",
          "Created automated test data creation pipelines using playwright to generate test patients from a predefined test suite which is used in end to end testing and smoke testing. Reduced manual work of creating test patients by 95%. Creates test patients in staging and dev environments for backends to consume"
        ]
      },
      {
        company: "Athenahealth Technologies",
        logo: "https://logo.clearbit.com/athenahealth.com",
        role: "Associate Member of Technical Staff",
        date: "Jul 2022 - Nov 2023",
        location: "Chennai, India",
        bullets: [
          "Built distributed, event-driven microservices on AWS ECS processing 10M+ messages per day, incorporating AWS SQS with multithreaded JMS consumers and a shared PostgreSQL store for end-to-end event lifecycle traceability",
          "Redesigned the client onboarding process by introducing standardized adapters and infrastructures within services, accelerating onboarding from 30 to 12 days, and integrating 3 new clients with the upgraded system",
          "Improved CI/CD pipelines by implementing automated end-to-end testing with Selenium, quality checks and optimized branch management strategies, shortening release timelines from 7 days to 3 days",
          "Migrated all services and AWS Lambda functions to an OpenSearch based logging and monitoring stack, enhancing long-term system support (LTSS), observability, and enabling scalable dashboards for development and maintenance",
          "Designed and implemented robust unit and integration tests using JUnit and Mockito for distributed Java microservices, achieving 97% code coverage measured via JaCoCo while validating complex business logic, inter-service communication, and API reliability in an event-driven architecture",
          "Conducted REST API and performance testing using Postman for backend microservices, validating response times (<200ms), payload accuracy, and system stability under sustained load of 5000+ API requests/hour with zero critical failures",
          "Created intricate data views, dashboards, and metrics on Snowflake, ensuring reliable and efficient data access for services, minimizing metrics collection time by 80%",
          "Automated the healthcare gaps component by background extraction of patient risk and care gap data from medical history, reducing manual gap requests by 85% and enabling providers to review and close gaps instantly",
          "Created dynamic Grafana dashboards and data visualization pipelines using Prometheus, ensuring reliable and efficient data access for performance monitoring, minimizing metrics collection time by 80%",
          "Leveraged AWS API Gateway, AWS Amplify and Load Balancers, to handle over 1000 API calls per hour, facilitating seamless communication between external client APIs and private cloud services, while ensuring robust security"
        ]
      }
    ]
  },
  projects: {
    title: "Projects",
    content: [
      {
        name: "Raft KV",
        tech: "C, C++, Docker, Linux",
        bullets: [
          "Built a fault-tolerant distributed key-value store in C++ using Raft and gRPC, supporting Put/Get/Append operations with linearizable consistency across replicated nodes.",
          "Integrated Raft-based log replication for request processing (propose → commit → apply), ensuring consistency under concurrent clients, failures, and network partitions.",
          "Implemented duplicate request detection (RIFL) and leader-aware request handling, preventing stale reads and ensuring correct responses during retries and leader changes.",
          "Developed benchmarking tools to measure latency and throughput, and optimized system performance to improve scalability under high-concurrency workloads."
        ]
      },
      {
        name: "Adaptive NimbusVault",
        tech: "C, C++, Docker, Linux",
        bullets: [
          "Designed Adaptive NimbusVault, a distributed storage system supporting adaptive replication and workload-aware data placement while preserving linearizable consistency under concurrency and failures, with metadata managed by a replicated, strongly consistent service enforcing a single global order of operations",
          "Implemented policy-driven adaptive replication that dynamically adjusts per-chunk replication factors based on workload characteristics (access frequency, temporal locality, node signals), improving availability for hot data by 70% while archiving cold data to reduce in-memory storage usage; ensured safe replica set evolution using a joint (overlapping) configuration protocol with quorum intersection",
          "Built a linearizable metadata service using write-ahead logging and quorum-based replication, establishing a global linearization point, and evaluated the system under skewed, bursty, and failure scenarios to validate improvements in latency, throughput, storage overhead, and fault tolerance"
        ]
      },
      {
        name: "Learned Indexes in DuckDB",
        tech: "C, C++, Docker, Linux, Machine Learning",
        bullets: [
          "Designed a learned indexing mechanism using recursive ML models to exploit data distribution patterns in DuckDB, decreasing index memory usage by 60% compared to the ART index",
          "Predicted tight key intervals and executed localized linear scans to resolve exact positions, reducing search space and delivering up to 25% faster query processing compared to DuckDB’s inbuilt indexing algorithm"
        ]
      },
      {
        name: "Forensics Sketch Generation with Generative AI",
        tech: "Diffusion Models, Fine-tuning",
        bullets: [
          "Fine-tuned a text to image forensic sketch generation model using Stable Diffusion and LoRA, training on 100,000+ image caption pairs for high-fidelity face reconstruction",
          "Applied AI model optimization techniques including GPU-efficient inference and LLaMA 3 caption conditioning, yielding an average FID score of 125 and CLIP similarity up to 90%, significantly improving generation speed and facial feature accuracy"
        ]
      },
      {
        name: "Postgres B-tree Optimizations",
        tech: "C, Docker, Linux, PostgresQL",
        bullets: [
          "Implemented performance enhancements for PostgreSQL indexing by introducing leaf page prefetching and an adaptive linear search strategy for small leaf sets, helping reduce cache stalls and improve query lookup speed",
          "Enabled optimizations on a session level to allow flexible tuning for different workloads, resulting in up to 70 % lower query latency on IMDB benchmark datasets and noticeably smoother index scan performance"
        ]
      },
      {
        name: "API Code Generation from documentation",
        tech: "QWEN, GPT, Starcoder, NLP",
        bullets: [
          "Applied LoRA fine-tuning to StarCoder-1B, QWEN-2.5B and GPT-2 using the API-Pack dataset to generate correct, ready-to-run code snippets across multiple programming languages based on natural-language API descriptions",
          "Evaluated model quality using BLEU and ROUGE-L metrics to benchmark post-training accuracy, demonstrating the effectiveness of LoRA fine-tuning for API code generation and achieving a 200%+ improvement in performance"
        ]
      },
      {
        name: "Skin Cancer Prediction (Published in IJRASET)",
        tech: "Python, Django, Keras",
        bullets: [
          "Innovated a custom deep learning algorithm integrating two MobileNet models: one trained on base images and the other on Canny edge diagrams derived from the same image set. This innovative approach enhances feature extraction and improves performance, achieving a triple prediction accuracy of 98.41%"
        ]
      },
      {
        name: "Workplus - The AI-Powered fitness app (Published in IJRAR)",
        tech: "Tensorflow, POSENET, Android",
        bullets: [
          "Engineered a fitness application utilizing Flutter, integrating the POSENET model for real-time posture monitoring via camera, providing users with valuable insights such as workout accuracy, posture, and count, and achieving an average accuracy of 91% in tracking various exercises"
        ]
      },
      {
        name: "Proximity Clustering Chat Application",
        tech: "Node.js, React.js, Clustering, Google Maps API",
        bullets: [
          "Built a real-time chat platform that dynamically clusters users into proximity-based groups using location data and clustering algorithms, enabling efficient communication within geographically relevant clusters"
        ]
      }
    ]
  },
  education: {
    title: "Education",
    content: [
      {
        school: "University of Southern California",
        logo: "https://logo.clearbit.com/usc.edu",
        degree: "Master of Science in Computer Science",
        gpa: "3.82"
      },
      {
        school: "Vellore Institute of Technology",
        logo: "https://logo.clearbit.com/vit.ac.in",
        degree: "Bachelor of Technology in Computer Science and Engineering (Honors)",
        gpa: "9.14"
      }
    ]
  },
  extracurriculars: {
    title: "Extra Curriculars",
    content: [
      {
        role: "Graduate Student worker",
        org: "USC Rossier School of Education",
        bullets: [
          "Developed and managed advanced Qualtrics surveys, implementing complex logic, validations, and dynamic behavior using JavaScript to support research and data collection workflows.",
          "Designed math-focused educational images, animations, and short videos for K–12 learning using Canva and digital visualization tools, translating abstract concepts into accessible, visually engaging content.",
          "Built and maintained structured JSON datasets to support educational content pipelines, ensuring consistency and correctness across JSON, Word documents, and digital learning materials.",
          "Proofread, edited, and standardized instructional and research materials for accuracy and clarity, while also assisting with departmental operations, event coordination, and inventory management."
        ]
      },
      {
        role: "Treasurer",
        org: "USC Hindu Student Organization",
        bullets: [
          "Proficient in designing and executing engaging social media campaigns and creating visually compelling content, increasing student engagement by 15% and effectively promoting events",
          "Coordinated large-scale cultural events to celebrate significant Indian festivals, such as Dusshera, Ganesh Chaturthi, and the flagship Diwali event, bringing together over 800 participants",
          "Managed event logistics, stage decorations, vendor coordination for refreshments, and crafted promotional and media coverage content to ensure seamless execution and engagement for large-scale cultural events."
        ]
      },
      {
        role: "Editorial Head",
        org: "The Fine Arts Club VIT",
        bullets: [
          "Compiled event reports, financial statements, sponsorship agreements, and audit logs, ensuring seamless operations and precise documentation of event data for future reference",
          "Secured $4000 in event sponsorships by proactively engaging with sponsors and ensuring the timely delivery of agreed-upon benefits and deliverables."
        ]
      },
      {
        role: "Graphic Designer",
        org: "Student Technical Community VIT",
        bullets: [
          "Collaborated with cross-functional teams to develop applications for university students, including a peer-based online education platform and a calendar organizer app integrated with the VIT academic schedule.",
          "Facilitated \"Tech Talks VIT,\" a platform that enabled students to share knowledge through interactive tech demos and knowledge transfer sessions, fostering peer learning and collaboration."
        ]
      },
      {
        role: "Event coordinator",
        org: "Riviera Fest",
        bullets: [
          "Organized and coordinated diverse arts and crafts competitions and exhibitions at Riviera, Vellore Institute of Technology's annual college fest, ensuring smooth execution and participant engagement.",
          "Ensured seamless event operations and high participant satisfaction by effectively managing resources and adhering to budget constraints."
        ]
      }
    ]
  }
};
