import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import people from "./data";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const nextPerson = () => {
    setIndex((CurrentIndex) => {
      const newIndex = CurrentIndex + 1;
      console.log(newIndex);
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((CurrentIndex) => {
      const newIndex = CurrentIndex - 1;
      return checkNumber(newIndex);
    });
  };
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const randomPerson = () => {
    setIndex(() => {
      let randomNumber = Math.floor(Math.random() * people.length);
      if (randomNumber === index) {
        randomNumber += 1;
        console.log("duplicate number removed");
        return checkNumber(randomNumber);
      }
      console.log(randomNumber);
      return randomNumber;
    });
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="prev-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
