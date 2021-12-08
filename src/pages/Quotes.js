import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    // This variable prevents race condition
    let current = 1;
    const cycleReviews = () => {
      if (current === 5) {
        current = 1;
      } else {
        current += 1;
      }
      setActiveSlide(current);
    };
    // intervalId identified so it can be canceled on unmount
    const intervalId = setInterval(() => {
      cycleReviews();
    }, 10000);
    // Removes interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  const reviews = [
    {
      name: 'Katherine Johnson',
      citation: 'African-American mathematician',
      quote:
        'We will always have STEM with us. Some things will drop out of the public eye and go away, but there will always be science, engineering, and technology. And there will always, always be mathematics.',
    },
    {
      name: 'Richard Courant',
      citation: 'German-American mathematician',
      quote:
        'Mathematics as an expression of the human mind reflects the active will, the contemplative reason, and the desire for aesthetic perfection. Its basic elements are logic and intuition, analysis and construction, generality and individuality.',
    },
    {
      name: 'Marston Morse',
      citation: 'American mathematician',
      quote:
        'Mathematics are the result of mysterious powers which no one understands, and which the unconscious recognition of beauty must play an important part. Out of an infinity of designs a mathematician chooses one pattern for beauty’s sake and pulls it down to earth.',
    },
    {
      name: 'Shakuntala Devi',
      citation: 'Indian writer and mental calculator',
      quote:
        'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers.',
    },
    {
      name: 'John von Neumann',
      citation: 'Hungarian mathematician',
      quote:
        'If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.',
    },
  ];

  return (
    <div className="carousel">
      <ul className="carousel__list">
        {reviews.map((review, index) => {
          const { citation, name, quote } = review;
          const count = index + 1;
          return (
            <li
              className={`carousel__item
                ${count === activeSlide ? ' active' : ''}
                ${count < activeSlide ? ' left' : ''}
                ${count > activeSlide ? ' right' : ''}
              `}
              key={count}
            >
              <blockquote className="carousel__quote">
                <cite>
                  <span className="carousel__name">{name}</span>
                  <span className="carousel__citation">{citation}</span>
                </cite>
                <p>
                  &quot;
                  {quote}
                  &quot;
                </p>
              </blockquote>
            </li>
          );
        })}
        <li className="carousel__indicator">
          <span
            className={`carousel__dot${activeSlide === 1 ? ' active' : ''}`}
          />
          <span
            className={`carousel__dot${activeSlide === 2 ? ' active' : ''}`}
          />
          <span
            className={`carousel__dot${activeSlide === 3 ? ' active' : ''}`}
          />
          <span
            className={`carousel__dot${activeSlide === 4 ? ' active' : ''}`}
          />
          <span
            className={`carousel__dot${activeSlide === 5 ? ' active' : ''}`}
          />
        </li>
      </ul>
    </div>
  );
};

export default Quotes;
