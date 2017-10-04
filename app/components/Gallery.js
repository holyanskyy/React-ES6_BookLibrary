import React, {Component} from 'react';

class Gallery extends Component {
  render() {
    let alternate = 'https://www.iconfinder.com/icons/2247138/lost_page_lost_web_page_missing_page_missing_web_page_page_missing_web_icon';

    return (
      <div>
      {
        this.props.items.map((item, index) => {
          let {title, imageLinks, infoLink} = item.volumeInfo;
          return (
            <a
              key={index}
              className="book"
              href={infoLink}
              target="_blank"
            >
            <img
              src={imageLinks !== undefined ? imageLinks.thumbnail : alternate}
              alt="book image"
              className="book-img"
            />
            <div className="book-text">
            {title}
            </div>
            </a>
          )
        })
      }
      </div>
    )
  }
}

export default Gallery;
