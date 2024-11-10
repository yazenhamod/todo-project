import React from 'react';

// CSS
import './home.css';

// Components
import TopNav from '../../Components/TopNav/topNav';
import List from '../../Components/List/list';

// Main Function
function Home() {


    // Navigation Handle
    // const navigate = useNavigate();

    return (
        <div className='home-wrapper'>
            <TopNav />
            <List />
        </div>

    )
}

export default Home;