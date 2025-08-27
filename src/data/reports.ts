import type { WorkTermReport } from '../types/report';

export const reports: WorkTermReport[] = [
{
    id: 'oraclenetsuite-summer2025',
    company: 'Oracle NetSuite',
    position: 'Software Engineering Intern',
    workType: 'co-op',
    location: 'hybrid',
    term: 'Summer 2025',
    date: 'May 2025 - August 2025',
    thumbnail: '/Oracle_NetSuite_Logo.jpg',
    technologies: ['Java 21 SE', 'Oracle DB', 'Design Patterns', 'Guice'],
    sections: [
      {
        title: 'Introduction...',
        content: `I am going into my final year as a Computer Science student at the University of Guelph. I am passionate about using software to solve challenging problems. I love working in teams, learning new technologies, and challenging myself.

        A little about me... why software engineering?

        In 2019, I was a member of the International Tournament of Young Mathematicians in Barcelona, Spain. Each team in the competition had to solve ten investigational problems and present them to the jury. This competition helped me gain experience working as a team leader in a team. At first, we struggled, but when we were at our last chance to make it to the finals, we all felt immense pressure. Our team then agreed to present my solution. I was nervous but knew it was essential to remain calm and focused. We rose to the challenge and won the silver medal.

        I demonstrated leadership when it was most needed and helped my team succeed. Afterwards, I understood that math was not only about solving thousands of typical problems for competition. Still, it was also about searching for unknown answers, brainstorming solutions for unsolved problems, and bringing ideas to life. That was when I decided to become a software developer. I love to apply my mathematical and team skills to developing valuable software.`
      },
      {
        title: 'Where did I work...',
        content: `I worked at Oracle NetSuite for four months in 2025, from May to August. During my co-op term, I was on the feature development team. I worked on the core product by adding new functionality to the high-priority features. 

Oracle NetSuite is a leading provider of cloud-based enterprise resource planning (ERP) software, with over 42,000 customers in more than 200 countries and territories. NetSuite helps organizations manage core operations such as finance, customer relationship management (CRM), e-commerce, and supply chain management from a single platform. By integrating AI into its services, NetSuite provides real-time insights that empower managers to make smarter business decisions.`
},
      {
        title: 'What was I able to accomplish...',
        content: `For this work term, I have set out the following goals: 
Problem Solving - Being able to solve problems in a new environment/system. When given a problem to solve in an unknown system, can analyze, identify and fully understand the problem. 
Depth & Breadth of Understanding - Expand knowledge in the specific programming areas: Java (pick up new challenging stories, learn new design patterns/concepts and apply them; complete the Java 21 Professional certification course), Oracle DB and PL/SQL. 
Teamwork - Be able to work with team members and solve problems. Participate in team activities and engage in discussions. Collaborate and seek help when necessary. 
Integrative Communication - Improve in verbal and written communication to effectively interact with the team. Be able to contribute to team meetings and express my ideas.

Problem-solving skills are crucial in software development as they allow one to quickly learn new technologies and adapt to changes in requirements and other issues that arise in daily work. Obtaining the Java 21 SE Professional certificate will allow me to gain more in-depth knowledge of Java and use its features to the best ability. As I want to become an architect, it is important for me to understand why one technology is better than the other and what the advantages and disadvantages of it are. The trade-offs are often the reason why one is preferred over the other. Seeing what has been done over the years and where the software development best practices are, I can form my own opinions and suggest ideas on how to implement certain features and architecture.

I have worked on stories that required development in Java and PL/SQL. My everyday work involved working on the NetSuite product. I learned a lot from those tasks. I participated in the team discussions for the future work and planning, as well as the pointing sessions for the stories. I enjoyed working in the Scrum team as it involves a lot of communication. The most difficult part was getting familiar with certain parts of the codebase. It took a significant amount of time to learn certain approaches and how different parts of the system are connected. I was able to contribute to the team and deliver my stories. I obtained the certification through Oracle University, which will help my future career.`
      },
      {
        title: 'What did I work on...',
        content: `During my work term, I worked on the tasks that were a priority for my team and needed to be resolved in a short period of time. The focus was on a new feature that was being added to the NetSuite platform. In short, it included a new way of doing pricing for the customer items. The customers will be able to easily manipulate prices based on price rules (which involve multiple criteria) that can be applied to any items in the system. The pricing is flexible and able to support the custom needs of the users.

One of the highlights of my job was trying to update existing logic for asynchronous thread price updates. This involved changes to the legacy codebase, which required time to understand and read through. I spent multiple meetings talking to the senior members to understand the implications of the changes and different approaches. I was able to construct a PL/SQL procedure to update the price based on a new field, which scales up to millions of items and integrate it into the existing code. 

I have created certain fields on the UI with the backend support and the DB updates. For that, I had to work with the Product Manager and Tech Writer to get proper wording and approvals for the customer-facing text. I presented all of the changes at the end of the spring for the team demo. I have also worked on an infrastructure task that involved creating an automated task for the failed builds to be sent to our team channel so that they can be quickly triaged.

To accomplish my tasks, I had to do a lot of reading, digging through code and learning a few new technologies. Specifically, I read a lot of internal documentation to understand the architecture solution and asked questions to get clarity. 
`
},
      {
        title: 'Oracle NetSuite Culture...',
        content: `As a part of Oracle NetSuite, I participated in multiple events: intern lunches, learning sessions, board game breaks with the team, and office-wide events. My favourite ones were playing board games with the team and going together for lunch. I also enjoyed going to a Blue Jays game as an office-wide event!
`,
        images: [
          {
            src: '/oracleoage.jpg',
            alt: 'Oracle NetSuite Office'
          }
        ]
      },
      {
        title: 'To conclude...',
        content: `Working at Oracle NetSuite has been a wonderful experience. It has been a great learning experience working with such a long-standing product as NetSuite. Thousands of developers, a huge codebase and years of knowledge hidden inside the code and documentation posed multiple challenges when I tried adding new features to the system. I have learned a lot about the good and bad practices for development and deepened my knowledge in understanding certain architecture principles and why certain technologies are used nowadays compared to their older alternatives. All of it will be a great help in my future work. I was able to work on priority tasks and make contributions to production environments. I enjoyed a lot working in the team: everyone is knowledgeable, ready to help and fun to work with.`
      },
      {
        title: 'Acknowledgments...',
        content: 'I would like to acknowledge all of my team members. Everyone has been helpful and provided me with a professional, fun, and learning atmosphere in the team. I would like to say a big thank you to Roushd Ahmed, Sheldon Graham and Petr Klima and Iverson Hu. They have given me opportunities to grow, pushed me to new challenges and were always there when I needed support or just a person to talk to. '      }
    ]
  },



  {
    id: 'sap-winter2025',
    company: 'SAP',
    position: 'Cloud Infrastructure Developer Intern',
    workType: 'co-op',
    location: 'hybrid',
    term: 'Winter 2025',
    date: 'January 2025 - April 2025',
    thumbnail: '/sap_logo.png',
    technologies: ['Python', 'Kubernetes', 'Go', 'Gardener', 'Argo Workflows', 'Cloud Infrastructure'],
    sections: [
      {
        title: 'Introduction...',
        content: `I am a fourth-year Software Engineering student at the University of Guelph. I am passionate about using software to solve challenging problems. I love working in teams, learning new technologies, and challenging myself.

        A little about me... why software engineering?

        In 2019, I was a member of the International Tournament of Young Mathematicians in Barcelona, Spain. Each team in the competition had to solve ten investigational problems and present them to the jury. This competition helped me gain experience working as a team leader in a team. At first, we struggled, but when we were at our last chance to make it to the finals, we all felt immense pressure. Our team then agreed to present my solution. I was nervous but knew it was essential to remain calm and focused. We rose to the challenge and won the silver medal.

        I demonstrated leadership when it was most needed and helped my team succeed. Afterwards, I understood that math was not only about solving thousands of typical problems for competition. Still, it was also about searching for unknown answers, brainstorming solutions for unsolved problems, and bringing ideas to life. That was when I decided to become a software developer. I love to apply my mathematical and team skills to developing valuable software.`
      },
      {
        title: 'Where did I work...',
        content: `I worked at SAP for four months in 2025, from the beginning of January until the end of April. During my co-op term, I was on a 'Cloud Infrastructure' team. I worked with different cloud technologies on a part of the system used to support the infrastructure for SAP products.

      SAP (Systems, Applications, and Products) provides enterprise resource planning software, business AI platforms, and database solutions within the cloud — SAP HANA Cloud, an in-memory database that offers high-speed data processing and analytics capabilities. It's hard to limit SAP to a particular area of computer science, but SAP is primarily related to enterprise software and business computing. Specifically, SAP builds software that helps large organizations manage business operations and customer relations.

      SAP has over 100,000 employees and its offices span 130 countries. One of the interesting facts is that the University of Guelph uses the SAP SuccessFactors platform, which is a cloud-based human capital management software suite that helps organizations manage their people, processes, and talent. On the other hand, if you are a sports fan, you might be curious to know that 86% of sports shoes produced globally are managed by SAP software.`
      },
      {
        title: 'What was I able to accomplish...',
        content: `For this work term, I have set out the following goals:
      Technological literacy - expand my knowledge in the software development process. Learn new processes and technologies to become a more well-rounded developer.
        Depth & Breadth of Understanding - learn and expand my knowledge in new programming languages such as Go and Python. Have an in-depth understanding of Kubernetes clusterization and the tools used to work with it.
            Teamwork - contribute to the team's work, ask questions, and be willing to help.

        For me, the main underlying theme of all three goals was to try out part of software engineering that I had not done before. During my term, I tried to pick up new tasks and always learn something new from them through reading related documentation and understanding the architecture. As my work term progressed, I was able to improve in all of my goals.

        In today's World, cloud computing is a huge topic in software development. However, it is often disregarded or not taught in-depth in university courses. I feel like there are a lot of young specialists who have never heard of terms like pods, deployment, cluster, and so much more. As I would like to become an architect, I feel like this part of software development is crucial for me to know and understand. Seeing what infrastructure SAP has and using all related technologies, let me realize what is possible, and next time I work on the project, I will have different options in mind.

        I have worked on stories that required development in Python and Go. My everyday work involved working inside a Kubernetes cluster. I learned a lot from those tasks. The most difficult part was the amount of new information and understanding the architecture of the product our team was working with. It took a significant amount of time until I felt comfortable using the tools that I needed for my day-to-day job and was able to look through the stories and tell which part they were related to.`
      },
      {
        title: 'What did I work on...',
        content: `During my work term, I worked on the tasks that were a priority for my team and needed to be resolved in a short period of time. The focus was on the scalability of our services, which are the infrastructure required to support the SAP HANA Cloud, Data Lake solution. Our services operate in different Kubernetes clusters, which are managed by Gardener and monitor, provision, and provision different Kubernetes resources required for the solution (this includes, but is not limited to, configmaps, deployments, stateful sets, custom resources, etc).

                One of the highlights of my job was trying to improve the performance of an operator written in Python. The initial idea was to use multiple threads, which would allow to speed up processing of tasks. I spent a few days designing a solution and prototyping it, only to find out that Python (core implementation CPython) is single-threaded and has a global GIL lock, which doesn't allow for true parallelization (interesting fact: starting from Python 3.13, the GIL lock is being removed, the feature is in testing). Because of that, we had to switch our focus to using processes, which allowed for parallel processing of the tasks. This change reduced the start-up time of the operator by ~40-70%, depending on the number of cores available. It was a rewarding task as I was able to learn a lot about threads and processes in Python, develop a high-quality solution, and deploy it to our production environments.

              Another unique task was regarding adopting Vertical Pod Autoscaler (VPA) into our services. I spend a lot of time reading documentation, searching through GitHub issues, trying out the solution on our services, capturing the results, and doing a presentation to my team with all my findings, whether we were discussing whether or not we should use this tool. Unfortunately, due to its current state and limitations, we decided not to use it, so I didn't get to implement the solution into our production environments.
                        
              To accomplish my tasks, I had to do a lot of reading and learning to acquire skills that I didn't have before. Specifically, I read a lot of internal documentation to understand the architecture solution and different topics related to Kubernetes. I have also read most of the Python book called 'Fluent Python' by Luciano Ramalho, parts of which were directly applicable in my day-to-day job.`
      },
      {
        title: 'SAP Culture...',
        content: `As a part of SAP, I participated in multiple events: weekly intern meetings, learning sessions, board game breaks, and company-wide events. The two most memorable events were Pi Day and the SAP d-com conference. SAP's d-com conference was fantastic: multiple tech talks that would fascinate anyone and a fun time spent with the team during food breaks.`,
        images: [
          {
            src: '/sap_dcom.png',
            alt: 'SAP d-com conference'
          }
        ]
      },
      {
        title: 'To conclude...',
        content: `Working at SAP has been a tremendous experience. I can't describe all of the technologies that I have learned during this co-op work term and all the knowledge that I acquired. Starting from learning new languages such as Go, to working with Argo workflows in Kubernetes clusters, and reading about Gardener architecture. All of it will be a great help in my future work. I was able to work on priority tasks and make contributions to production environments. I feel like I have seen a whole new side of software development, which taught me essential skills of cloud computing.`
      },
      {
        title: 'Acknowledgments...',
        content: 'I would like to acknowledge all of my team members. Everyone has been helpful and provided me with a professional, fun, and learning atmosphere in the team. I would like to say a big thank you to Paul Geesaman, Philip Mitchell, Bryon Hummel, and Alex Domaratzki. They always pushed me and provided opportunities for me to improve.'      }
    ]
  },

   {
    id: 'ncrvoyix-summer2024',
    company: 'NCR Voyix',
    position: 'Software Engineering Intern',
    workType: 'co-op',
    location: 'hybrid',
    term: 'Summer 2024',
    date: 'May 2024 - August 2024',
    thumbnail: '/ncrvoyix.png',
    technologies: ['Java', 'PostgreSQL', 'Microservices', 'OAuth 2.0'],
    sections: [
      {
        title: 'Introduction...',
        content: `I am a fourth-year Software Engineering student at the University of Guelph with a passion for software to solve challenging problems. I love working in teams, solving challenging problems, and learning new technologies. I am always happy to expand my knowledge.

        A little about me... why software engineering?

        In 2019, I was a member of the International Tournament of Young Mathematicians in Barcelona, Spain. Each team in the competition had to solve ten investigational problems and present them to the jury. This competition helped me gain experience working as a team leader in a team. At first, we struggled, but when we were at our last chance to make it to the finals, we all felt immense pressure. Our team then agreed to present my solution. I was nervous but knew it was essential to remain calm and focused. We rose to the challenge and won the silver medal.

        I demonstrated leadership when it was most needed and helped my team succeed. Afterwards, I understood that math was not only about solving thousands of typical problems for competition. Still, it was also about searching for unknown answers, brainstorming solutions for unsolved problems, and bringing ideas to life. That was when I decided to become a software developer. I love to apply my mathematical and team skills to developing valuable software.`
      },
      {
        title: 'Where did I work...',
        content: `I worked at the NCR Voyix for the Summer 2024 semester. NCR Voyix is the world's leading enterprise provider of software, hardware and services for banks. The company's segments include Retail, Hospitality and Digital Banking. I work in the Digital Banking section of the company. We provide technology solutions to enhance online and mobile banking experiences for financial institutions, offering services such as online account management, mobile banking apps, bill payment, security features and so much more.

    I was a Software Engineering Intern who worked in the Pre-Staged('Wintermute') team. I worked on the Channel Services Platform (CSP) Teller products. For the past 4 months, I have been working on a Citibank project. The features we worked on required generating cashier checks and money order documents as well as integrating our software to connect to the printer. We have also worked on the feature to remove a polling mechanism to update balance and instead show balance updates live. To accomplish the tasks our team has been working with 3 other teams, building different components of the system. This was an exciting experience where I got to see the process of combining the work of multiple teams together on a tight deadline.`
  },
      {
        title: 'What was I able to accomplish...',
        content: `At work, I was able to continuously improve my technical and communication skills. For the duration of the Summer 2024 semester, I focused on trying to use different technologies, apply them to solve problems and come up with creative solutions. I wanted to improve the quality of my code and be able to write my code efficiently. I wanted to try myself more in architecture, trying to draw UML diagrams, suggesting ideas and discussing solutions with architects.

    During my work time, I was able to expand my knowledge of architectural design and some Java-specific language features. I was always willing to help, transfer knowledge and learn from my mistakes. I actively participated in Scrum and design meetings. I contributed to the architecture design of the product as well as its implementation whilst focusing on high-quality code and meeting deadlines. I have taken challenging tasks involving talking to new people, trying new technologies and doing research. I consistently challenged myself with complex tasks, ensuring on-time delivery and high-quality results. I have been able to exercise and improve my critical thinking skills by coming up with creative solutions and resolving any bugs. I was able to quickly analyze and solve problems whenever it was needed. 

    I wanted to work as a software engineer because it is an in-demand position, and it exercises problem-solving skills. Also, this way I can contribute to the core functionality of the projects and understand their overall architecture. NCR Voyix gave me the ability to work on products that are released to customers, participate in debugging sessions and so much more. This position also promotes versatility in my career since I can understand and work on multiple technologies. Also, I participate in planning and design meetings as well as develop, debug and test code. I wanted to get development work in Java and Spring Boot and use technologies such as Docker and Kubernetes. All of these technologies are used in enterprise development and the experience of working with them will help me in my future jobs. `
  },
      {
        title: 'What did I work on...',
        content: `As was mentioned before, I worked on multiple features. Bigger ones involved generating documents and printing a physical copy of them. Another feature that I really enjoyed working on was building a way to get the balance on the screen updated in real time. The mechanism used before was fetching the balance every 1 minute, which means that if a transaction affected the balance shown, a customer sometimes needed to wait a whole minute before the change would reflect on their screen. To develop these features, our team had to closely work with Product Owners, Product Managers and Architects to get the requirements, design the solution and then implement it. One of the more complicated parts for finishing these features was making sure that the dependencies on other teams are priorities and organized. Since 3 teams were working on the solution, everyone needed to make sure their part was done on time so that the other team was not blocked. Another great work experience that I gained was working on P1 bugs. They required me to act quickly and be able to think on my feet. I have solved a few bugs for US bank and Citibank projects. 

     As a software engineer, I was tasked with helping with some architectural design questions, doing SPIKES to gain more knowledge that we were planning on using in our solution, developing the code and testing. Throughout development, I gained a lot of experience working with Kafka, as it was the primary tool used to implement the real-time updates feature. To build the features, I had to create a Kafka library, that produces messages onto a topic and supports 2-way MTLS. For the Kafka library, I set up the Jenkins pipeline as well as Maven setup to build the project and generate a JAR. Then, I integrated that library into a microservice to notify the user about the change in the balance (the message got propagated all the way to the UI). For the printer integration feature, I got exposed to the Apache FOP library, which is used to generate different documents and images (pdf, tiff, jpg, png). I have configured the code to apply custom fonts to the documents. Overall, I have been able to actively participate in meetings with product owners and architects and contribute to the design and implementation of the project. I have immersed myself in Spring Boot, Cassandra, Apache FOP, Kafka, Kubernetes, Jenkins and Docker technologies. One of the best parts of working on these features was seeing it work after months of collaboration and different people working on all kinds of different parts of it. `},
      {
        title: 'NCR Voyix Culture...',
        content: `In January, NCR Voyix moved to a new office near Waterloo University. The new office space is amazing, with a double monitor setup and fancy meeting rooms. We also have a wonderful kitchen area! The office supports a hybrid work culture and anyone can take any spot and just hook their laptop to the system, which is a neat idea. 
        
        Even though the new office is smaller, there are still plenty of opportunities to have fun. The office has a table tennis table and a foosball table. As a part of NCR Voyix, I participated in a few work events. Our team went for lunch and we had a wide office barbeque event in July. As in previous work terms, I have really enjoyed the atmosphere and the wonderful community of people at NCR Voyix. `,
        images: [
          {
            src: '/ncrvoyixdesk.jpg',
            alt: 'NCR Voyix Desk'
          },
          {
            src: '/lastteamlunch.jpg',
            alt: 'Last Team Lunch'
          },
        ]
      },
      {
        title: 'To conclude...',
        content: `Working at NCR Voyix has been an absolutely amazing experience. In the Summer of 2024, my team worked with a customer - Citibank. It was a very cool experience to work directly with the customer and work on new features which went directly to the customer. The features were built among the existing microservices, orchestrator and UI framework. I needed to understand existing code as well as develop in an environment of constant change as other teams were making changes to the same services. I gained experience working with printers and software to generate documents. I got exposed to multiple modern technologies and further extended my understanding of planning, development, integration, and successful software delivery processes and was able to successfully contribute to these processes. Also, I had a lot of fun working with my team. With one team member, we became close friends and now go to the bouldering gym together. `
      },
      {
        title: 'Acknowledgments...',
        content: 'Throughout my journey at NCR Voyix, I learned so much. Everyone on my team has been extremely helpful and I gained a lot by working together. Specifically, I would like to acknowledge Halwasia Nikhil, Saini Arun, Pahwa Yuktika, Seth Mayank, Clifford Matthew and Noah Hinderle. All of them have been incredibly helpful throughout my time at NCR Voyix. It was a pleasure to work alongside you, thank you for your help and shared knowledge. I truly appreciate everyone\'s help in helping me become a better person, software engineer and teammate. Overall, all 16 months of working together have been truly wonderful. '      }
    ]
  },



 {
    id: 'ncrvoyix-fall2023',
    company: 'NCR Voyix',
    position: 'Software Engineering Intern',
    workType: 'co-op',
    location: 'hybrid',
    term: 'Fall 2023',
    date: 'September 2023 - December 2023',
    thumbnail: '/ncrvoyix.png',
    technologies: ['Java', 'Spring', 'Kubernetes', 'GCP', 'Protocol Buffers'],
    sections: [
      {
        title: 'Introduction...',
        content: `I am a third-year Software Engineering student at the University of Guelph with a passion for software to solve challenging problems. I love working in teams, solving challenging problems, and learning new technologies. I am always happy to expand my knowledge.

        A little about me... why software engineering?

        In 2019, I was a member of the International Tournament of Young Mathematicians in Barcelona, Spain. Each team in the competition had to solve ten investigational problems and present them to the jury. This competition helped me gain experience working as a team leader in a team. At first, we struggled, but when we were at our last chance to make it to the finals, we all felt immense pressure. Our team then agreed to present my solution. I was nervous but knew it was essential to remain calm and focused. We rose to the challenge and won the silver medal.

        I demonstrated leadership when it was most needed and helped my team succeed. Afterwards, I understood that math was not only about solving thousands of typical problems for competition. Still, it was also about searching for unknown answers, brainstorming solutions for unsolved problems, and bringing ideas to life. That was when I decided to become a software developer. I love to apply my mathematical and team skills to developing valuable software.`
      },
      {
        title: 'Where did I work...',
        content: `I worked at the NCR Voyix for the Fall 2023 semester. NCR Voyix is the world's leading enterprise provider of software, hardware and services for banks. The company's segments include Retail, Hospitality and Digital Banking. I work in the Digital Banking section of the company. We provide technology solutions to enhance online and mobile banking experiences for financial institutions, offering services such as online account management, mobile banking apps, bill payment, security features and so much more.

    I am a Java Backend developer working in the Pre-Staged('Wintermute') team. I am working on the Channel Services Platform (CSP) Teller products. For the past 4 months, I have been working on a 'Collaboration' project. This is a new solution that encompasses collaboration between the customer and the bank teller and provides many features to the customer. My team has been working on the 'Reporting' side of the solution. We were tasked with building software to produce different kinds of reports based on the collected data. The reports were to be displayed on the UI application as well as downloaded in a CSV format. For this project, multiple teams were involved from countries such as Canada, United States, England and India.`
  },
      {
        title: 'What was I able to accomplish...',
        content: `At work, I was able to continuously improve my technical and communication skills. For the duration of the Fall semester, I focused on trying to use different technologies, apply them to solve problems and come up with creative solutions. I wanted to improve the quality of my code and be able to write my code efficiently. On the other side, I tried focusing on developing relationships with the senior staff of my team and engaging in design conversations and organization of team dynamics. 

    During my work time, I grew technically and delivered sprint objectives on time. I was always willing to help, transfer knowledge and contribute as much as a senior dev in the team. I actively participated in Scrum and design meetings. I contributed to the architecture design of the product as well as its implementation whilst focusing on high-quality code and meeting deadlines. I have taken challenging tasks involving talking to new people, trying new technologies and doing research. I have been able to improve my critical thinking skills by coming up with creative solutions and resolving any bugs. I was able to quickly analyze and solve problems whenever it was needed. 

    I wanted to work as a back-end developer because it is an in-demand position, and it exercises problem-solving skills. Also, this way I can contribute to the core functionality of the projects and understand their overall architecture. This position also promotes versatility in my career since I can understand and work on multiple technologies. I wanted to get development work in Java and Spring Boot as well as work with technologies such as Docker, Kubernetes, REST API, Protobuf and Pub/Sub. All of these technologies are used in enterprise development and the experience of working with them will help me in my future jobs. `
  },
      {
        title: 'What did I work on...',
        content: `As was mentioned before, I worked on a project that involved creating a 'Reporting' service. Reporting service is used to produce different types of reports. Using it, based on the user-selected filter criteria, we can display data on the UI screen as well as download the full report in a CSV format. To build this application, our team had to work with Product Owners to get the requirements, design the solution and then implement it. The design used for the solution was new to NCR. To implement it our team had to work with people across different continents, North America, Asia and Europe. It is an amazing experience that allows me to develop cross-cultural communication skills and gain experience in multiple areas of the project.

     As a developer, I was tasked with setting up repositories, building the skeleton of the microservice implementing the APIs and deploying and connecting microservices. The microservice is built using Spring Boot technology with the use of the strategy pattern and plugin architecture applied to enhance its flexibility and extensibility. During the last four months, I have been able to participate in meetings with clients, product owners and architects and contribute to the design and implementation of the project. I have immersed myself in Spring Boot (Spring MVC), PostgreSQL, Pub/Sub, Protobuf, Docker and Kubernetes technologies. One of the best parts of my job is talking to people at work and sharing ideas. I love the architecture side of the projects. The way services communicate and work with each other astonishes me. `
    },
      {
        title: 'NCR Voyix Culture...',
        content: `As a part of NCR, I participated in multiple work events. Our team went for lunch and we had a wide office potluck event. At the NCR office, I was able to play table tennis, darts and foosball. I have really enjoyed the atmosphere and the wonderful community of people at NCR. My team in October went together to a bowling place and had food after. It was awesome to spend time together and enjoy each other's company in an outside-of-work environment. `,
        images: [
          {
            src: '/NcrVoyixTeam.jpg',
            alt: 'Bowling Team Event'
          }
        ]
      },
      {
        title: 'To conclude...',
        content: `Working at NCR has been an absolutely tremendous experience. In the Fall of 2023, I worked on a new project that is now released to a SIT environment and will soon be in production. The project was built from scratch and the experience of building production-quality software from nothing is absolutely incredible. I was able to improve on my designing, coding and communication skills. I have been exposed to multiple modern technologies and gained an understanding of development, integration, and successful software delivery processes and was able to successfully contribute to these processes. `
      },
      {
        title: 'Acknowledgments...',
        content: ' I would like to acknowledge Clifford Matthew (Architect). He has provided an incredible learning experience for me. He has always encouraged me to think creatively and enhance my programming and social skills. I genuinely appreciate his efforts in helping me become a better software engineer. Working with him has been a rewarding experience both professionally and personally.'     
       }
    ]
  },

  {
    id: 'ncrcorporation-summer2023',
    company: 'NCR Corporation',
    position: 'Backend Java Developer',
    workType: 'co-op',
    location: 'hybrid',
    term: 'Summer 2023',
    date: 'May 2023 - August 2023',
    thumbnail: '/NCR_Corporation_logo.png',
    technologies: ['Java', 'Spring', 'Jenkins', 'MySQL', 'NodeJS', 'JavaScript', 'Cassandra'],
    sections: [
      {
        title: 'Introduction...',
        content: `Hi, my name is Myron Ladyjenko. I am a third-year Software Engineering student at the University of Guelph with a passion for software to solve challenging problems. I love working in teams, solving challenging problems, and learning new technologies. I am always happy to expand my knowledge.

        A little about me... why software engineering?

        In 2019, I was a member of the International Tournament of Young Mathematicians in Barcelona, Spain. Each team in the competition had to solve ten investigational problems and present them to the jury. This competition helped me gain experience working as a team leader in a team. At first, we struggled, but when we were at our last chance to make it to the finals, we all felt immense pressure. Our team then agreed to present my solution. I was nervous but knew it was essential to remain calm and focused. We rose to the challenge and won the silver medal.

        I demonstrated leadership when it was most needed and helped my team succeed. Afterwards, I understood that math was not only about solving thousands of typical problems for competition. Still, it was also about searching for unknown answers, brainstorming solutions for unsolved problems, and bringing ideas to life. That was when I decided to become a software developer. I love to apply my mathematical and team skills to developing valuable software.`
      },
      {
        title: 'Where did I work...',
        content: `For my first co-op, I am working at the NCR Corporation. NCR is the world's leading enterprise provider of software, hardware and services for banks. I work in the NCR Digital Banking section of the company. NCR Digital Banking provides technology solutions to enhance online and mobile banking experiences for financial institutions, offering services such as online account management, mobile banking apps, bill payment, and security features.

        I am a Java Backend developer working in the Pre-Staged('Wintermute') team. I am working on the Channel Services Platform (CSP) Teller products. For my first 4 months, I have been working on the software that communicates with hardware bank machines. This software allows tellers to perform automated cash transactions and securely store incoming cash. For this project two teams have been involved: 'Wintermute' based in Waterloo and 'Orchid' based in India.`
      },
      {
        title: 'What was I able to accomplish...',
        content: `At work, I was able to continuously improve my technical and communication skills. When I first joined NCR I set myself goals so that in the end I could reflect on them and see my direction of growth. I tasked myself with improving communication, leadership, teamwork, critical thinking and technical skills. During my work time, I was able to successfully improve in all of the areas. I was able to improve on my knowledge of Agile methodology and participate in it. I was able to actively participate in the meetings and present my ideas to the architects and senior developers. I have taken challenging tasks and was able to accomplish them on time. I have been able to improve my critical thinking skills while working on the designs and implementation of different project features. I have been able to quickly analyze and solve problems whenever it was needed. 

    I wanted to work as a back-end developer because it is an in-demand position, and it exercises problem-solving skills. Also, this way I am able to contribute to the core functionality of the projects and understand their overall architecture. This position also promotes versatility in my career since I am able to understand and work on multiple technologies. I wanted to get development work in Java and Spring Boot as well as work with technologies such as Docker, Kubernetes, Kafka and REST API. All of these technologies are used in enterprise development and the experience of working with them will help me in my future jobs. `
  },
      {
        title: 'What did I work on...',
        content: `As previously mentioned, I worked on creating software that allows tellers to perform automated cash transactions. During my time at NCR and with my team, I gained valuable experience working in a team environment. As part of the team, I participated in daily scrum meetings, grooming calls, and design meetings. The project consists of multiple components, utilizing microservice architecture. During the summer term, I was able to contribute more than full-time developers on my team. I constantly challenged myself to take on the most difficult tasks and deliver them on time and with high quality. One of the most exciting aspects of my job is working with people across different continents—North America, Asia, and Europe. It has been an amazing experience that has helped me develop cross-cultural communication skills and gain experience in various areas of the project.

As a developer, I was responsible for creating multiple APIs that enabled communication between front-end and back-end services. By exposing certain endpoints to the front-end application, tellers can perform multiple cash transactions through hardware machines. I worked on developing transaction flows such as 'Deposit`
},
      {
        title: 'NCR Culture...',
        content: `As a part of NCR, I was able to participate in multiple work events. Our team went for lunch every month. At the NCR office, I was able to play table tennis and foosball. Starting from June till July NCR hosted a table tennis tournament, which was an awesome event where I got to meet multiple. I was able to win the tournament in a hard last match, winning 3:2 in a 5-set thriller. NCR has a wonderful community of people who are willing to help each other and enjoy each others' company.`,
        images: [
          // {
          //   src: '/MyrontheChamp.jpg',
          //   alt: 'NCR\'s Table Tennis Competition Winner'
          // },
          {
            src: '/WintermuteTeamlunch.jpg',
            alt: 'Team Lunch'
          }
        ]
      },
      {
        title: 'To conclude...',
        content: `Working at NCR has been a tremendous experience. I have been able to work on a project that is now released to the customers. It is truly something special to be a part of that. This experience taught me essential skills of working in a team. I have been exposed to multiple technologies and gained an understanding of development, integration, and successful software delivery processes and was able to successfully contribute to these processes.`
      },
      {
        title: 'Acknowledgments...',
        content: 'I would like to acknowledge all of my team \'Wintermute\' members, specifically Yuktika Pahwa (Technical Team Lead), Halwasia Nikhil (Team Manager) and Arun Saini (Scrum Master). They have provided a professional, fun and learning atmosphere in the team. They always pushed me and provided opportunities to improve in terms of technical and social skills. I truly appreciate your effort in helping me become a better developer. It has been a great experience to work alongside awesome developers such as Surani Azim, Singh Gurjap and Noah Hinderle.'      }
    ]
  },


 





  {
    id: 'blackberryqnx-summer2022',
    company: 'BlackBerry QNX',
    position: 'Software Developer Intern',
    workType: 'internship',
    location: 'hybrid',
    term: 'Summer 2022',
    date: 'May 2022 - August 2022',
    thumbnail: '/BlackBerryQNX.png',
    technologies: ['C', 'Bash', 'Unit / Regression / Integration Tests'],
    sections: [
      // {
      //   title: 'Introduction...',
      //   content: `I am a fourth-year Software Engineering student at the University of Guelph. I am passionate about using software to solve challenging problems. I love working in teams, learning new technologies, and challenging myself.

      //   A little about me... why software engineering?

      //   In 2019, I was a member of the International Tournament of Young Mathematicians in Barcelona, Spain. Each team in the competition had to solve ten investigational problems and present them to the jury. This competition helped me gain experience working as a team leader in a team. At first, we struggled, but when we were at our last chance to make it to the finals, we all felt immense pressure. Our team then agreed to present my solution. I was nervous but knew it was essential to remain calm and focused. We rose to the challenge and won the silver medal.

      //   I demonstrated leadership when it was most needed and helped my team succeed. Afterwards, I understood that math was not only about solving thousands of typical problems for competition. Still, it was also about searching for unknown answers, brainstorming solutions for unsolved problems, and bringing ideas to life. That was when I decided to become a software developer. I love to apply my mathematical and team skills to developing valuable software.`
      // },
      // {
      //   title: 'Where did I work...',
      //   content: `I worked at SAP for four months in 2025, from the beginning of January until the end of April. During my co-op term, I was on a 'Cloud Infrastructure' team. I worked with different cloud technologies on a part of the system used to support the infrastructure for SAP products.

      // SAP (Systems, Applications, and Products) provides enterprise resource planning software, business AI platforms, and database solutions within the cloud — SAP HANA Cloud, an in-memory database that offers high-speed data processing and analytics capabilities. It's hard to limit SAP to a particular area of computer science, but SAP is primarily related to enterprise software and business computing. Specifically, SAP builds software that helps large organizations manage business operations and customer relations.

      // SAP has over 100,000 employees and its offices span 130 countries. One of the interesting facts is that the University of Guelph uses the SAP SuccessFactors platform, which is a cloud-based human capital management software suite that helps organizations manage their people, processes, and talent. On the other hand, if you are a sports fan, you might be curious to know that 86% of sports shoes produced globally are managed by SAP software.`
      // },
      // {
      //   title: 'What was I able to accomplish...',
      //   content: `For this work term, I have set out the following goals:
      // Technological literacy - expand my knowledge in the software development process. Learn new processes and technologies to become a more well-rounded developer.
      //   Depth & Breadth of Understanding - learn and expand my knowledge in new programming languages such as Go and Python. Have an in-depth understanding of Kubernetes clusterization and the tools used to work with it.
      //       Teamwork - contribute to the team's work, ask questions, and be willing to help.

      //   For me, the main underlying theme of all three goals was to try out part of software engineering that I had not done before. During my term, I tried to pick up new tasks and always learn something new from them through reading related documentation and understanding the architecture. As my work term progressed, I was able to improve in all of my goals.

      //   In today's World, cloud computing is a huge topic in software development. However, it is often disregarded or not taught in-depth in university courses. I feel like there are a lot of young specialists who have never heard of terms like pods, deployment, cluster, and so much more. As I would like to become an architect, I feel like this part of software development is crucial for me to know and understand. Seeing what infrastructure SAP has and using all related technologies, let me realize what is possible, and next time I work on the project, I will have different options in mind.

      //   I have worked on stories that required development in Python and Go. My everyday work involved working inside a Kubernetes cluster. I learned a lot from those tasks. The most difficult part was the amount of new information and understanding the architecture of the product our team was working with. It took a significant amount of time until I felt comfortable using the tools that I needed for my day-to-day job and was able to look through the stories and tell which part they were related to.`
      // },
      // {
      //   title: 'What did I work on...',
      //   content: `During my work term, I worked on the tasks that were a priority for my team and needed to be resolved in a short period of time. The focus was on the scalability of our services, which are the infrastructure required to support the SAP HANA Cloud, Data Lake solution. Our services operate in different Kubernetes clusters, which are managed by Gardener and monitor, provision, and provision different Kubernetes resources required for the solution (this includes, but is not limited to, configmaps, deployments, stateful sets, custom resources, etc).

      //           One of the highlights of my job was trying to improve the performance of an operator written in Python. The initial idea was to use multiple threads, which would allow to speed up processing of tasks. I spent a few days designing a solution and prototyping it, only to find out that Python (core implementation CPython) is single-threaded and has a global GIL lock, which doesn't allow for true parallelization (interesting fact: starting from Python 3.13, the GIL lock is being removed, the feature is in testing). Because of that, we had to switch our focus to using processes, which allowed for parallel processing of the tasks. This change reduced the start-up time of the operator by ~40-70%, depending on the number of cores available. It was a rewarding task as I was able to learn a lot about threads and processes in Python, develop a high-quality solution, and deploy it to our production environments.

      //         Another unique task was regarding adopting Vertical Pod Autoscaler (VPA) into our services. I spend a lot of time reading documentation, searching through GitHub issues, trying out the solution on our services, capturing the results, and doing a presentation to my team with all my findings, whether we were discussing whether or not we should use this tool. Unfortunately, due to its current state and limitations, we decided not to use it, so I didn't get to implement the solution into our production environments.
                        
      //         To accomplish my tasks, I had to do a lot of reading and learning to acquire skills that I didn't have before. Specifically, I read a lot of internal documentation to understand the architecture solution and different topics related to Kubernetes. I have also read most of the Python book called 'Fluent Python' by Luciano Ramalho, parts of which were directly applicable in my day-to-day job.`
      // },
      // {
      //   title: 'SAP Culture...',
      //   content: `As a part of SAP, I participated in multiple events: weekly intern meetings, learning sessions, board game breaks, and company-wide events. The two most memorable events were Pi Day and the SAP d-com conference. SAP's d-com conference was fantastic: multiple tech talks that would fascinate anyone and a fun time spent with the team during food breaks.`,
      //   images: [
      //     {
      //       src: '/sap_dcom.png',
      //       alt: 'SAP d-com conference'
      //     }
      //   ]
      // },
      // {
      //   title: 'To conclude...',
      //   content: `Working at SAP has been a tremendous experience. I can't describe all of the technologies that I have learned during this co-op work term and all the knowledge that I acquired. Starting from learning new languages such as Go, to working with Argo workflows in Kubernetes clusters, and reading about Gardener architecture. All of it will be a great help in my future work. I was able to work on priority tasks and make contributions to production environments. I feel like I have seen a whole new side of software development, which taught me essential skills of cloud computing.`
      // },
      // {
      //   title: 'Acknowledgments...',
      //   content: 'I would like to acknowledge all of my team members. Everyone has been helpful and provided me with a professional, fun, and learning atmosphere in the team. I would like to say a big thank you to Paul Geesaman, Philip Mitchell, Bryon Hummel, and Alex Domaratzki. They always pushed me and provided opportunities for me to improve.'      
      // }
    ]
  },



]; 