import { useEffect, useState } from "react";
import React from "react";
import tmdb from '../Tmdb';
import MovieRow from '../components/movieRow';
import FeaturedMovie from "../components/featuredMovie";
import Header from '../components/header/index';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './home.css';
export default () => {
    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHader] = useState(false);


    useEffect(() => {
        const loadAll = async () => {
            let list = await tmdb.getHomeList();
            setMovieList(list);
            //-----------------------obtenemos una serie random
            let originals = list.filter(i => i.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenInfo);
        }
        loadAll();
    }, []);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setBlackHader(true);
            } else {
                setBlackHader(false);
            }
        }
        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);
    return (
        <div className="page">
            <Header black={blackHeader} />
            {
                featuredData &&
                <FeaturedMovie item={featuredData} />
            }
            <section className="lists">
                {
                    movieList.map((item, key) => (
                        <MovieRow key={key} title={item.title} items={item.items} />
                    ))
                }
            </section>
            <footer>
                <div className="contact--me">
                    <p>Richard developer</p>
                    <div className="social--icons">
                        <a href="https://api.whatsapp.com/send?phone=+573022470724">
                            <FontAwesomeIcon icon={faWhatsapp} size={"lg"} />
                        </a>
                        <a href="/" >
                            <FontAwesomeIcon icon={faLinkedin} size={"lg"} />
                        </a>
                    </div>
                </div>
            </footer>

            {
                movieList.length <= 0 &&
                <div className="loading">
                    <img src="https://www.rchandru.com/images/portfolio/loading.gif" alt="loading" />
                </div>
            }
        </div>
    );
}

