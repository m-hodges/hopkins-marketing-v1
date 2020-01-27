import React from 'react';

type Props = {
    path: string
}

const Svg = ({ path }: Props) => {
    //test what i can do with an imported svg directly
    //map svg to test component
    return (
        <div>
            {path}
        </div>
    );
};

export default Svg;