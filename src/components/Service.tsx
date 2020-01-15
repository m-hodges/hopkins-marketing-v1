import React from 'react';

import { IService } from '../data'

const Service = (props: IService) => {
    return (
        <div style={{width: '200px', height: '200px', backgroundColor: 'blue', overflow: 'hidden', margin: '20px'}}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
};

export default Service;