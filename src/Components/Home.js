import React from "react";
import "./Home.css";
import Feature from "./Feature";

function Home() {
  return (
    <div className="home">
      <div className="top-text">
        <div className="top-text-heading">
          <div className="top-top">Digital</div>
          <div className="top-bottom">Recruitments</div>
        </div>

        <div className="top-text-text">
          Talent pool accessible to you at any time and from any location.
          <br />
          <br />
          Watch the applications pouring in as a result of your excellent job
          posting.
        </div>
      </div>

      <div className="features1">
        <Feature
          img_src="images/efficiency.png"
          heading="Improved Efficiency"
          description="Data collection and analysis on your own can be time-consuming and even unreliable in certain situations, especially if relying on human processes.
Fortunately, most recruitment tools will gather analytics automatically.
With a snapshot of your recruiting process, you will detect and remove bottlenecks in the pipeline, as well as leverage the most profitable sources of applicants for a certain job posting."
        />
        <Feature
          img_src="images/hiring.png"
          heading="Better hiring decisions"
          description="Digital transformation can improve applicant evaluation. 
To begin with, AI solutions and digital technologies enhance the screening of applications via the use of filtering choices. 
Following that, you can employ a variety of evaluation technologies with selected applicants. You can also examine applicants remotely with tools such as video interviews and video evaluations. 
In addition, hiring teams can also utilize the records to save numerous interview rounds and, as a result, less time to hire is achieved."
        />
        <Feature
          img_src="images/cost_reduced.png"
          heading="Reduced long-term Costs"
          description="There are various methods for using technology to lower the cost per hire while simultaneously assisting recruiters in managing their workloads and connecting with more applicants. "
        />
      </div>

      <div className="features2">
        <Feature
          img_src="images/social.png"
          heading="Social Media"
          description="Social media has made the recruitment process quite simpler.
You just make a job ad, distribute it via multiple platforms, and wait for applications to flood in. 
When it comes to social media platforms used for recruitment strategy, Facebook and Linkedin are always on the top of the game.
LinkedIn keeps 60% of top recruiters engaged with their recruitment tools as displayed in the below screenshot. "
        />
        <Feature
          img_src="images/ATS.png"
          heading="Applicant Tracking System"
          description="Applicant tracking systems gather and save resumes in a database that hiring managers may access.
Moreover, resumes can also be saved long after the initial position for which you applied has been filled.
Depending on the system, business recruiters or hiring managers may then search and sift through the resumes in a variety of ways.
Some recruiters continue to review every job application that comes via their applicant monitoring system."
        />
        <Feature
          img_src="images/contact.png"
          heading="Contacting us effortless"
          description="It may seem unusual, but many company owners overlook the necessity of properly sharing HR department contacts on their website and social media profiles.
A website's careers section should be followed by the contact information for your HR professionals.
Furthermore, the more contact connections you leave there (phone, email, various social media accounts), the more employment requests you will get."
        />
      </div>

    </div>
  );
}

export default Home;
