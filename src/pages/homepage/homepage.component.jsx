import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';
import '../../components/directory/directory.styles.scss';
import '../../components/menu-item/menu-item.styles.scss';

const HomePage = () => (
    <div className="homepage">
       <Directory />
    </div>
);

export default HomePage;