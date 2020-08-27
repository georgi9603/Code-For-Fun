import React from 'react';
import './componentStyles/InfoBox.css';
import { Card, CardContent, Typography } from '@material-ui/core';

function InfoBox({ title, cases, total }) {
    return (
        <Card className="infobox">
            <CardContent>
                <Typography className="infobox__title">
                    {title}
                </Typography>
                <h2 className="infobox__cases">{cases}</h2>
                <Typography className="infobox__total">
                    {total}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
