import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './componentStyles/InfoBox.css';

function InfoBox({ title, cases, total, isActiveStyle, ...props }) {
    return (
        <Card onClick={props.onClick} className={`infobox ${isActiveStyle}`}>
            <CardContent>
                <Typography className="infobox__title">
                    {title}:
                </Typography>
                <h2 className="infobox__cases">{cases}</h2>
                <Typography className="infobox__total">
                    {total}
                    <span className="infobox__totalText"> Total</span>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
