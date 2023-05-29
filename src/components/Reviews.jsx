import { FaQuoteRight } from "react-icons/fa"
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs"
import people from "../data.jsx"
import { useState } from "react"

const Reviews = () => {
  const [index, setIndex] = useState(0)
  const { id, name, job, image, text } = people[index]

  const checkIndex = (num) => {
    if (num >= people.length) {
      return 0
    }
    if (num < 0) {
      return people.length - 1
    }
    return num
  }

  const nextPerson = () => {
    setIndex(checkIndex(index + 1))
  }

  const prevPerson = () => {
    setIndex(checkIndex(index - 1))
  }

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length)
    if (randomIndex === index) {
      randomIndex += 1
    }

    setIndex(checkIndex(randomIndex))
  }

  return (
    <article className="person-card">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-span">
          <FaQuoteRight className="quote-icon" />
        </span>
      </div>
      <h1 className="person-name">{name}</h1>
      <h3 className="person-job">{job}</h3>
      <p className="person-info">{text}</p>
      <div className="arrow-btn-wrapper">
        <button onClick={prevPerson}>
          <BsChevronCompactLeft className="arrow-icon" />
        </button>
        <button onClick={nextPerson}>
          <BsChevronCompactRight className="arrow-icon" />
        </button>
      </div>
      <button onClick={randomPerson} className="surprise-btn">
        surprise me
      </button>
    </article>
  )
}
export default Reviews
