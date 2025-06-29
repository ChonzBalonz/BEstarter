import React, { useState } from 'react';

const faqData = [
  {
    question: 'What Courses do you offer?',
    answer: (
      <>
        We offer the following courses for beginner and advanced artists:<br />
        Lip Blush<br />
        Ombré Powder Brows<br />
        Nano Brows<br />
        Microblade & Shading<br />
        Nano Combo Brows
      </>
    ),
  },
  {
    question: 'What is the Course Outline?',
    answer: (
      <>
        • 1-2 Brow/Lip Training + live model<br />
        • 1-2 Brow/Lip Touch Up Training<br />
        • $350+ machine + premium kit included<br />
        • Pigment bottles suitable for all clientele<br />
        • Students work on a live model <br />
        • In depth PMU Theory + all guidelines <br />
        • Hands-on exercises on practice skin <br />
        • Full supplies & vendors list <br />
        • Secret photo editing tips <br />
        • How to get started & simple steps to acquire clientele <br />
        • Certificate of Completion
      </>
    ),
  },
  {
    question: 'What is included?',
    answer: (
      <>
        • $350+ premium kit, supplies & all necessary tools. <br />
        • Professional wireless tattoo machine that can be used for brows, lips, eyeliner, and fine line tattoos & a full box of universal cartridges. <br />
        • Full-sized pigments suitable for clients of all skin tones. <br />
        • Fully loaded and in-depth student training manual for all beginners. <br />
        • In-person live demos from your instructor. <br />
        • Live model practice for all in-person training courses (unless stated otherwise for specific courses) <br />
        • Certificate of Completion. <br />
        • After class support & direct contact with your Instructor
      </>
    ),
  },
  {
    question: 'Who is this course for?',
    answer: (
      <>
        • Beginners with no experience looking to join the brow industry <br />
        • Students who have taken previous brow classes but just don't feel confident <br />
        • Existing artists who are looking to advance their skills or add new services <br />
        • Anyone who wants to make their own hours, have work-life balance & gain financial freedom
      </>
    ),
  },
  {
    question: 'Will I be able to work on a live model?',
    answer: (
      <>
        All in-person beginner and advanced training includes a live model practice portion where students will be able to apply what they've learned onto a live model with close supervision from your instructors. During this time you will be able to take pictures and videos of your client and we will teach you how to effectively edit for your new portfolio to market your business.
      </>
    ),
  },
  {
    question: 'What will you learn?',
    answer: (
      <>
        • Intro to Brows or Lip Blush Theory <br />
        • Brow mapping & design <br />
        • Color theory & pigments <br />
        • Skin anatomy, skin types & conditions <br />
        • Procedural guidelines <br />
        • Color corrections <br />
        • Proper Health & Sanitation Practices <br />
        • Machine Fundamentals <br />
        • What to avoid <br />
        • Supplies & Vendors <br />
        • Photo & video editing apps & tips <br />
        • Setting your prices & business practices <br />
        • Marketing & how to acquire clientele <br />
        • 60 pages of fully loaded materials
      </>
    ),
  },
  {
    question: 'Is there a deposit required?',
    answer: (
      <>$500 Non-Refundable, Non-Transferable deposit is required for enrolling and will go towards the total cost of the class fee.</>
    ),
  },
  {
    question: 'Is there licensing required?',
    answer: (
      <>
        • No esthetician or cosmetology license required (excluding some specific states) <br />
        • No beauty experience required <br />
        • Must be 18+ to enroll
      </>
    ),
  },
  {
    question: 'Do you offer financing?',
    answer: (
      <>
        Yes, we offer financing options for our training courses. Please send us an email to{' '}
        <a href="mailto:BeautyEmpress1@icloud.com">BeautyEmpress1@icloud.com</a> to apply.
      </>
    ),
  },
  {
    question: 'Our Classes',
    answer: (
      <>
        <div><strong>Combo Nano Class:</strong> $2,000.00</div>
        <div><strong>Create your own package (2 classes):</strong> $3,100.00</div>
        <div><strong>Hyaluron Pen:</strong> $1,500.00</div>
        <div><strong>Lip Blush:</strong> $1,800.00</div>
        <div><strong>Microblade & Shading:</strong> $2,400.00</div>
        <div><strong>Ombré Powder Brows:</strong> $1,800.00</div>
      </>
    ),
  },
];

export default function Faq() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleIndex = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="faq-container">
      {faqData.map((item, idx) => (
        <div className="faq-item" key={item.question}>
          <div
            className={`faq-question${openIndexes.includes(idx) ? ' active' : ''}`}
            onClick={() => toggleIndex(idx)}
          >
            {item.question}
          </div>
          <div className={`faq-answer${openIndexes.includes(idx) ? ' open' : ''}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
