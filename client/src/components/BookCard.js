import React from "react";

const styles = {
    image: {
      margin: 30,
      height: "220px",
      width: "220px"
    }
}

function BookCard(props) {
  return (
    <div 
      className="col-lg-3"
      id={props.id}
      key={props.id}
      >
      <div className="img-container">
        <h5>{props.title}</h5>
        <h6>{props.authors}</h6>
        <img 
            alt={props.title} 
            src={props.image} 
            style={styles.image}
        />
        <p><a href={props.link}>LINK</a></p>
        <p>{props.description}</p>
        <p><a onClick={() => props.handleClick(props)} href="/search">SAVE BOOK</a></p>
      </div>
    </div>
  );
}

export default BookCard;