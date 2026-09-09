import React from "react";
import StatsGrid from "./StatsGrid";
import Chartsection from "./Chartsection";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <StatsGrid />
      <Chartsection />
    </div>
  );
};

export default Dashboard;