import React, { useState } from 'react';

const faqData = [
  {
    question: 'What documents do I need to rent a car?',
    answer:
      'Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor saerror sed earum a magni soluta quam minus dolor dolor sed earum a magni soluta autem dolor error error sit',
  },
  {
    question: 'What age do I need to be to rent a car?',
    answer:
      'Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor saerror sed earum a magni soluta quam minus dolor dolor sed earum a magni soluta autem dolor error error sit',
  },
  {
    question: 'How do I clean and maintain wallpaper?',
    answer:
      'Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor saerror sed earum a magni soluta quam minus dolor dolor sed earum a magni soluta autem dolor error error sit',
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(false);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-four" id="faq">
      <div className="container">
        <div className="row gutter-y-40">
          <div className="col-lg-6">
            <div className="faq-four__thumb wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
              <div className="faq-four__thumb__item">
                <img src="/assets/images/resources/image-faq.png" alt="image" />
              </div>
              <div className="faq-four__thumb__cerle">
                <img src="/assets/images/shapes/cercle-2-1.png" alt="image" />
              </div>
              <div className="faq-four__thumb__item-small">
                <img src="/assets/images/resources/image-faq-2-1.png" alt="image" />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="faq-four__content">
              <div className="sec-title sec-title--five text-start">
                <h6 className="sec-title__tagline bw-split-in-right">asked question</h6>
                <h3 className="sec-title__title bw-split-in-left">
                  We Care Of Your Safety <br /> And Convenience
                </h3>
              </div>

              <div className="faq-page__accordion rentol-accrodion wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="300ms">
                {faqData?.map((faq, index) => (
                  <div key={index} className={`accrodion ${activeIndex === index ? 'active' : ''}`}>
                    <div className="accrodion-title" onClick={() => toggleAccordion(index)} style={{ cursor: 'pointer' }}>
                      <h4 className="accrodion-title__text">
                        <span className="accrodion-title__icon" />
                        {faq.question}
                      </h4>
                    </div>
                    <div className="accrodion-content" style={{ display: activeIndex === index ? 'block' : 'none' }}>
                      <div className="inner">
                        <p className="inner__text">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
