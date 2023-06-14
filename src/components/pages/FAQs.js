import React, { useState } from "react";

const FAQs = () => {
    const FAQList = [
        {
            question: "What kind of music do you enjoy, and how does it influence your work?",
            answer: "I love R&B, Jazz, & Gospel. They all help to relax my mind and they give me white noise to listen to while working. Even more, I enjoy listening to live music.  I love to hear people sing about love."
        },
        {
            question: "What inspired you to become a software developer?",
            answer: "I was directed to the field by God..literally.  I just decided to go all in on it and here I am."
        },
        {
            question: "Can I see examples of your previous work or projects?",
            answer: "Yes, all of my projects are under the Project section.  There's things from Coding to Trading to Writings and etc."
        },
        {
            question: "What skills do you specialize in?",
            answer: "I specialize in Fullstack development, derivative trading, & healthcare & the life sciences."
        },
        {
            question: "What is your approach to a new project?",
            answer: "Whenever I'm beginning any type of new project or planning, I craft out my end goal with everything I want it to have. Then I work backwards creating chapter marks or goals to help me expand on. Then I expand on the chapter marks."
        },
        {
            question: "What is your preferred programming language or technology and why?",
            answer: "Javascript & SQL. I have the most experience and time with these frameworks."
        },
        {
            question: "What resources do you recommend for someone looking to learn coding?",
            answer: "Almost everything you want to learn is on Youtube. Figure out what you want to do or be and find out what the requirements are. Check out Codeacademy, HarvardX, Khan Academy, Udacity, & again Youtube."
        },
        {
            question: "Where can I find your resume or CV?",
            answer: "My resume is under the Credentials section. You can also see my full Curriculum Vitae and other credentials that I have."
        },
        {
            question: "Do you provide any free resources or content?",
            answer: "I have some resources on my personal Youtube Channel & add new videos frequently. Find my Youtube channel in the Connect section."
        },
        {
            question: "What do you enjoy doing in your free time?",
            answer: "Outside of work, I enjoy being on the water, I enjoy the arts, traveling, and I enjoy food experiences.  I'm a foodie at heart."
        }
    ]

    const [activeFAQ, setActiveFAQ] = useState(null);

    const handleClick = (index) => {
        if (activeFAQ === index) {
            setActiveFAQ(null);
        } else {
            setActiveFAQ(index);
        }
    }

    return(
        <div>
            {/* Page Title */}
            <div id="titleSection">
                <h1>FAQs</h1>
            </div>
            <div id="faqPage" className="page">

                {FAQList.map((faq, index) => (
                    <div className="faq" key={index}>
                        <h2 onClick={() => handleClick(index)}>{faq.question}</h2>
                        {activeFAQ === index && <p>{faq.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default FAQs;
