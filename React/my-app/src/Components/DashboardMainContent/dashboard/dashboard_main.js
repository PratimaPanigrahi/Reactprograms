import React from 'react';
import DashboardOverview from './Dashboard/Dashboard_main';
import CalendarView from './calendar_view/calendar';

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