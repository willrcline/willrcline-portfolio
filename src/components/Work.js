import React from 'react';
import workData from '../assets/db/work.json';

export default function Work() {
    const importImage = (imageFileName) => {
        return require(`../assets/images/project-images/${imageFileName}`);
    };

    return (
        <section id="work">
            <div className="headers d-flex flex-column justify-content-center align-items-center">
                <h3 id="work-header">Full Stack Projects</h3>
                <h2 className="subheading">Take a look through my Web Development Work</h2>
            </div>
            <div id="work-body" className="section-body p-0" style={{ padding: '0 !important' }}>
                <div id="work-row" className="row p-0" style={{ padding: '0 !important' }}>
                    {workData.map((item, index) => {
                        const image = importImage(item.imageFileName);
                        return (
                            <div key={index} className="col col-sm-6 col-12 d-flex justify-content-center p-0">
                                <a className="portfolio-img-a" href={item.link} target="_blank" rel="noopener noreferrer">
                                    <img src={image} className="portfolio-img" alt={item.title} />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
