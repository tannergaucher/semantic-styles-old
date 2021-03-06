import { Image } from "../helpers"
import React from "react"

const Card = () => (
  <div className="card">
    <h4 className="card-title">I'm a Card Title</h4>
    <Image />
    <p className="card-text text--sm">
      Card text is a paragraph element with a class of card dash text.
    </p>
  </div>
)

export default Card
