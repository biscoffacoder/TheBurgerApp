
import React from 'react';

import Auxillary from '../../hoc/Auxillary';
import './Layout.css';

const layout = ( props ) => (
    <Auxillary>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className="Content">
            {props.children}
        </main>
    </Auxillary>
);

export default layout;