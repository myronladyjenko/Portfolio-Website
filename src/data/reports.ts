import type { WorkTermReport } from '../types/report';

export const reports: WorkTermReport[] = [
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
        content: `As a part of SAP, I participated in multiple events: weekly intern meetings, learning sessions, board game breaks, and company-wide events. The two most memorable events were Pi Day and the SAP d-com conference. SAP's d-com conference was fantastic: multiple tech talks that would fascinate anyone and a fun time spent with the team during food breaks.`
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
    id: 'coming-soon',
    company: 'New Opportunities',
    position: 'More exciting experiences to share',
    workType: 'full-time',
    location: 'remote',
    term: 'Future',
    date: 'Stay Tuned',
    thumbnail: '/path-to-thumbnail.jpg',
    technologies: ['More to come...'],
    sections: [
      {
        title: 'Coming Soon',
        content: 'More exciting experiences and opportunities coming soon!',
      }
    ]
  }
]; 