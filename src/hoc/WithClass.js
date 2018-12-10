import React from 'react';

const withClass = (props) => (
    <div className={props.clasess}>
        {props.children}
    </div>
);

export default withClass;