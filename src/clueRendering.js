import { Badge } from "react-bootstrap";
function quoteRender(quote) {
  const quoteLimit = 180;

  const test =
    "As I understand it, Chaney... or Chelmsford, as he called himshelf in Texas... shot the senator's dog. When the senator remonstrated, Chelmsford shot him as well. You could argue that the shooting of the dog was merely an instance of malum prohibitum, but the shooting of a senator is indubitably an instance of malum in se.";
  var longQuote = test.length < quoteLimit ? false : true;
  return quote[0] == "No quote"
    ? "<div className='container'><p>Unforntunatley we don't have a quote for this movie... Try another clue<br /></p></div>"
    : "<div className='container'><div className='row'><h2>" +
        quote[0] +
        "<br /></h2></div>" +
        "<div className='badge bg-light text-dark'><i><h3><br/>" +
        quote[1] +
        "</h3></i></div>";
}

function characterRender(character) {
  return "<Container><Row><p>" + character + "</p></Row></Container>";
}

function plotRender(plot) {
  return plot === "loading"
    ? "<img style='height:96px;width:96px;margin-left:50%;' className='clue-plot' src='https://i.postimg.cc/NMZdZDcX/150x150.gif' />"
    : "<div>" + plot + "</div>";
}

function yearRender(year) {
  return "<div><h6>This movie was released in the year</h6>" + year + "</div>";
}

function genreRender(genreList) {
  function genreMapCB(genre) {
    return (
      '<div className="badge rounded-pill bg-light text-dark me-3">' +
      genre +
      "</div>"
    );
  }
  return (
    "<div><div>This movie belongs to the following genres:</div><div className='row gx-5'>" +
    [...genreList].map(genreMapCB).join("") +
    "</div></div>"
  );
}

export { quoteRender, characterRender, plotRender, yearRender, genreRender };
