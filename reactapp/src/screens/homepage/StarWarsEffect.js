import React, { useState, useEffect, useRef } from 'react'

import '../../stylesheets/StarWarsEffect.css'

export default function StarWarsEffect() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    const callbackFunction = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) setIsVisible(true);
            if (!entry.isIntersecting) setIsVisible(false);
        });
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction);
        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        }
    }, [containerRef])

    const content = []
    let i = 0
    while (i < 10) {
        content.push(<>
            <div class="title">
                <p style={{ paddingTop: "50vh" }}>Episode I</p>
                <h1>Dompter l'étincelle</h1>
            </div>

            <p>Le numérique impacte tous les modèles politiques, productifs et démocratiques. Les crises passées montrent à quel point une maturité numérique est essentielle au fonctionnement du monde au XXIème siècle.</p>
            <p>Il est indispensable de s’y former pour reprendre le contrôle.</p>
            <p style={{ paddingBottom: "100vh" }}>Nous formons la première O.N.G. francophone et francophile ayant pour vocation d'être un espace d'échange et de collaboration, pour fédérer les énergies du monde francophone autour des enjeux de demain.</p>
        </>);
        i++;
    }

    return (
        <>
            <div className="fade" ref={containerRef}></div>

            <section className="star-wars">

                <div className={isVisible ? "crawl" : ""}>
                    {content}
                </div>

            </section>
        </>
    )
}