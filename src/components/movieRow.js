import { React, useState } from "react";
import './movieRow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';


export default ({ title, items }) => {


    const [scrollX, setScrollX] = useState(0);
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if (window.innerWidth - listW) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--left">
                <FontAwesomeIcon icon={faAngleLeft} style={{ fontSize: 50 }} onClick={handleLeftArrow} />
            </div>
            <div className="movieRow--right">
                <FontAwesomeIcon icon={faAngleRight} style={{ fontSize: 50 }} onClick={handleRightArrow} />
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list"
                    style={{
                        marginLeft: scrollX,
                        width: items.results.length * 150,
                    }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div className="movieRow--item" key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}