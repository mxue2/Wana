import logo from '../../assets/logo.svg';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar_title">
                <div className="sidebar_img">
                    <img src={logo} alt="logo" />
                    <h1>Codersbite</h1>
                </div>
                <i
                    className="fa fa-times"
                    id="sidebarIcon"
                    onClick={() => closeSidebar()}
                    ></i>
            </div>
            <div className="sidebar_menu">
                <div className="sidebar_link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="#">Dashboard</a>
                </div>
                <h2>MNG</h2>
                <div className="sidebar_link">
                    <i className="fa fa-user-secret"></i>
                    <a href="#">Admin Management</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-building-o"></i>
                    <a href="#">Company Management</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-wrench"></i>
                    <a href="#">Employment Management</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Warehouse</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-handshake-o"></i>
                    <a href="#">Contracts</a>
                </div>
                <h2>LEAVE</h2>
                <div className="sidebar_link">
                    <i className="fa fa-question"></i>
                    <a href="#">Requests</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-sign-out"></i>
                    <a href="#">Leave Policy</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-calendar-check-o"></i>
                    <a href="#">Special Day</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-files-o"></i>
                    <a href="#">Apply for leave</a>
                </div>
                <h2>PAYROLL</h2>
                <div className="sidebar_link">
                    <i className="fa fa-money"></i>
                    <a href="#">Payroll</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-briefcase"></i>
                    <a href="#">Paygrade</a>
                </div>
                <div className="sidebar_logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Logout</a>
                </div>
            </div>
        </div>
     )
}

export default Sidebar;