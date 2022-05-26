import React from 'react';
import LandingPageTop from '../login/login';
import Cards from './columnContent'
function LandingPage() {
    return (
        <div className='lp'>
            <LandingPageTop />
            <Cards />
        </div>
    );
}
export default LandingPage;