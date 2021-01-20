import React from 'react';
import LeftNavbar from '../components/LeftNavbar';

function About() {

    return(
        <div className='hmmm'>
   
        <LeftNavbar />
        <h1 className='hmm'>
        
        This webside shows the results from an survey conducted in the authum of 2020. It was conducted by me, Helgi Sævar Þorsteinsson. 
        The main objective was to get an overview of the techonolgy stack and software processes of mulitple companies in Iceland.
        The number of software companies working in Iceland is growing every year. 
        Today, there are more than 800 software companies working in Iceland. 
        The variety among IT companies is substantial, with different products targeting different markets being developed using large numbers of different software tools and programming languages, following different processes. 
        For students and startups, this variety can be confusing since there is no clear direction for best using their resources to develop a professional portfolio or a product that best fits the market. 
        For researchers, projects might not have the desired impact due to similar reasons.
        </h1>
        <h1 className='hmm'>
        Several recent studies exist that draw a picture of software engineering processes used worldwide, e.g., [3]. However, those studies are typically based on data gathered in the US or the major European countries, not necessarily representative of Iceland. Due to its unique geographic location and focus on a limited number of domains, it is not unlikely that the Icelandic IT industry is, in fact, different. Therefore, our study aims to increase knowledge of how the Icelandic IT industry works compared to the picture shown in existing research. This report describes and discusses the results of an online survey regarding how companies create software and operate, conducted in the autumn of 2020.
        The information collected was about the company's technology (the so-called “tech stack”) and the processes they use to develop software. The research was set up to answer the following questions: 
        RQ1: What software development processes are Icelandic software companies following? 
        RQ2: What technology trends can be identified in the Icelandic software development industry?
       </h1>
       <h1 className='hmm'>
            RQ1 aims to answer how software companies operate and work in Iceland. With RQ2, we wanted to get a good overview of what tools are used in Iceland. The tools are generally known as a technology stack. The technology stack differs from place to place, and there is no right technology stack. The term describes what languages and processes are used when developing software. In addition to the technology stack we wanted to take a look at internal communication tools in order to try to identify trends regarding them. 
        We sent out a survey to Icelandic software companies. 
        We asked questions regarding the companies’ tech stacks, fields/domains they operate in, and the processes they use. 
        Students in IT topics can obtain a representative picture of the technologies and processes used in the Icelandic IT industry. 
        Today, one of the common questions students in computer science have is which technologies to specialize in. 
        This project is set to help students to answer this question and decide which topics to study in more depth or which areas to specialize in.
        </h1>
        </div>
    )

}

export default About;