import React from 'react';

type Props = {
    path: string
}

const Svg = ({ path }: Props) => {
    return (
        <div>
            {path}
        </div>
    );
};

export default Svg;