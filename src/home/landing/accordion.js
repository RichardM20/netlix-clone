import React, { useState } from 'react';
import './accordion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
function CustomAccordion() {

    const [clicked, setClicked] = useState(false);
    const toggle = (i) => {
        if (clicked === i) {
            return setClicked(false);
        }
        setClicked(i);
    }
    return (
        <div className='wrapper--accordion'>
            <div className="accordion">
                {
                    data.map((item, index) => (
                        <div className="accordion--item" onClick={() => toggle(index)}>
                            <div className="accordion--item-title">
                                <p>{item.title}</p>
                                <FontAwesomeIcon icon={clicked === index ? faMinus : faPlus} />
                            </div>
                            <div className={clicked === index ? "accordion--item-content show" : "accordion--item-content"}>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    );

}

const data = [
    {
        title: 'What is Netflix?',
        content: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
            + "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
    },
    {
        title: 'How much does Netflix cost?',
        content: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from COP16,900 to COP38,900 a month. No extra costs, no contracts.'
    },
    {
        title: 'Where can I watch?',
        content: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
            + "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
        title: 'How do I cancel?',
        content: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        title: 'What can I watch on Netflix?',
        content: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
        title: 'Is Netflix good for kids?',
        content: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
            + "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }

];

export default CustomAccordion;