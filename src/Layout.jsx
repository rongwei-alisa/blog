import React, { Fragment } from 'react';
import NavBar from './components/NavBar';
import ContentPage from './components/ContentPage';

function Layout() {
    return (
        <Fragment>
            <NavBar />
            <ContentPage />
        </Fragment>
    );
}

export default Layout;