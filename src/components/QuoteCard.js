import React from 'react';
import './QuoteCardStyle.css';



function QuoteCard ({quote}) {  
    return (
    <div><figure className="QuoteCard">
        <img src={quote[0].image} alt={quote[0].character} />
        <figcaption>
          <blockquote>{quote[0].quote}</blockquote>
          <p>
            <cite>{quote[0].character}</cite>
          </p>
        </figcaption>        
      </figure>      
    </div>
    )  
}

export default QuoteCard;
