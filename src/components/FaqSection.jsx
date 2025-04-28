import React, { useState } from 'react';

const faqData = [
  {
    question: 'Was macht Transfer511 besonders?',
    answer:
      'Bei Transfer511 erleben Sie zuverlässigen Flughafentransfer auf höchstem Niveau. Unsere modernen Fahrzeuge, geschulten Fahrer und unser Fokus auf erstklassigen Service garantieren eine entspannte und pünktliche Ankunft – ob privat oder geschäftlich.',
  },
  {
    question: 'Wie kann ich eine Reservierung bei Transfer511 vornehmen?',
    answer:
      'Ihre Buchung bei Transfer511 ist ganz einfach: Über unsere benutzerfreundliche Website geben Sie Ihre Abhol- und Rückgabedaten ein, wählen Ihr Wunschfahrzeug aus und bestätigen Datum sowie Uhrzeit. Schon ist Ihr Transfer sicher gebucht!',
  },
  {
    question: 'Welche Fahrzeugoptionen gibt es bei Transfer511?',
    answer:
      'Unsere vielseitige Flotte bietet Ihnen luxuriöse Limousinen, geräumige SUVs und komfortable Shuttle-Vans. Wählen Sie das passende Fahrzeug je nach Anzahl der Personen und Gepäck – für eine stilvolle und entspannte Fahrt.',
  },
  {
    question: 'Ist Transfer511 rund um die Uhr erreichbar?',
    answer:
      'Ja, Transfer511 ist 24 Stunden am Tag, 7 Tage die Woche und 365 Tage im Jahr für Sie erreichbar. Wir wissen, dass Reisepläne flexibel sein müssen – deshalb sind wir jederzeit für Sie da, wenn Sie uns brauchen.',
  },
  {
    question: 'Kann ich meine Reservierung ändern, wenn sich meine Pläne ändern?',
    answer:
      'Bei Transfer511 steht Flexibilität an erster Stelle. Sie können Ihre Reservierung problemlos innerhalb eines festgelegten Zeitrahmens vor der Abholung ändern. Melden Sie sich einfach online in Ihrem Kundenkonto an oder kontaktieren Sie unseren Kundenservice.',
  },
  {
    question: 'Wie finde ich meinen Fahrer am Flughafen?',
    answer:
      'Transfer511 stellt Ihnen klare Anweisungen für den Treffpunkt zur Verfügung. Ihr freundlicher Fahrer erwartet Sie dort mit einem personalisierten Schild, damit Sie ihn schnell und unkompliziert finden.',
  },
  {
    question: 'Was passiert, wenn mein Flug Verspätung hat?',
    answer:
      'Transfer511 verfolgt Ihren Flug in Echtzeit. Bei Verspätungen passen wir Ihre Abholzeit automatisch an, sodass Ihr Fahrer pünktlich bei Ihrer Ankunft bereitsteht.',
  },
  {
    question: 'Kann ich Kindersitze für meine Reise anfordern?',
    answer:
      'Ja, bei Transfer511 kümmern wir uns um die Sicherheit Ihrer Familie. Geben Sie einfach während des Buchungsprozesses die Anzahl und Art der benötigten Kindersitze an.',
  },
  {
    question: 'Wie kann ich den Kundensupport von Transfer511 erreichen?',
    answer:
      'Unser freundliches Kundenserviceteam ist einfach über die auf unserer Website oder in Ihrer Bestätigungs-E-Mail angegebenen Kontaktdaten erreichbar. Wir sind jederzeit für Sie da und helfen Ihnen gerne bei allen Fragen und Anliegen.',
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
          {/* <div className="col-lg-6">
            <div
              className="about-two__thumb wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="about-two__thumb__item">
                <img
                  src="/assets/new-images/faq/faq-one.avif"
                  alt="about images"
                />
              </div>
            </div>
          </div> */}

          <div className="col-lg-12">
            <div className="faq-four__content">
              <div className="sec-title sec-title--five text-start">
                <h3 className="sec-title__title bw-split-in-left">
                  Meist gestellte Fragen
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
