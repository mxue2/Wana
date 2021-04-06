import { useState, Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';


import './App.scss';

const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <Fragment>
            <div className="container">
                <Navbar sidebarOpen={sidebarOpen} openSidebarFunc={openSidebar} />
                <h1>Dashboard</h1>
                <Sidebar sidebarOpen={sidebarOpen} closeSidebarFunc={closeSidebar} />
                <Main />
            </div>
        </Fragment>
  );
}

export default App;
