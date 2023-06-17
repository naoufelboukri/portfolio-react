import React from 'react';

import './Selected.scss';

function Selected(props: any) {
    return (
        <div className='Selected'>
            <h2>
                { props.children }
            </h2>
            <hr />
        </div>
    )
}

export default Selected;