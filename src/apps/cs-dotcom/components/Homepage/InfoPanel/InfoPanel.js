import React from "react";
import classes from "./InfoPanel.module.css";
import panelImage from './../../../assets/images/long-branch-bg.jpg';
import PageTitleText from './../../../../shared-components/PageTitleText/PageTitleText';
import InfoPanelItem from './../InfoPanelItem/InfoPanelItem';
import infoPanelData from './../../../assets/data/infopanel.json';

const infoPanel = () => (
    <div>
        <div className={classes.InfoPanelImage}><img src={panelImage} title="Long Branch, New Jersey 2021 taken by yours truly" alt="Long Branch, New Jersey 2021 taken by yours truly"/></div>
        <PageTitleText text="Software_Professional" title/>
        {infoPanelData.map((infoPanelEntry) => (
            <InfoPanelItem 
                key={infoPanelEntry.rank}
                title={infoPanelEntry.title}
                description={infoPanelEntry.description}
            />
        ))}
    </div>   
);

export default infoPanel;