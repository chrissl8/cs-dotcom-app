import React from "react";
import classes from "./InfoPanel.module.css";
import panelImage from './../../../assets/images/cali-sun-bg.jpg';
import PageTitleText from './../../../../shared-components/PageTitleText/PageTitleText';

const infoPanel = () => (
    <div>
        <div className={classes.InfoPanelImage}><img src={panelImage} alt="San Diego, 2005 taken by yours truly"/></div>
        <PageTitleText text="Software_Professional" title/>
        <h3><code>&gt;Who_I_Am</code></h3>
        <p>Highly ambitious and motivated software professional, my interests stem from a life long passion for technology and discovering how things work, near obsession with high quality software design and implementation, love of creatively solving problems, and developing solid code.</p>
        <h3><code>&gt;What_I_Like</code></h3>
        <p>Outside of my professional life, I enjoy spending time with my friends and family, travelling and exploring new places, coding, 90's nostalgia, pool/beach days, gaming, drawing maps, photography, aviation, transportation, cars, automotive detailing and road trips.</p>
    </div>
    
);

export default infoPanel;