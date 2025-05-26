
// filepath: /workspaces/Reactprograms/React/my-app/src/Components/DashboardMainContent/dashboard/dashboard_main.js
import React from 'react';
import CalendarView from '../calendar_view/calendar';
// If you have a DashboardOverview component, import it correctly:
// import DashboardOverview from '../DashboardOverview'; // Adjust path as needed

// Remove or fix this if the CSS file does not exist
// import './DashboardMainContent.css';

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main-content">
      {/* <DashboardOverview /> */}
      <div className="main-grid">
        <div className="left-column">
          <CalendarView />
        </div>
        <div className="right-column">
            <h2 className="right-column-title">Upcoming Events</h2>
            {/* Add your event components here */}
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;