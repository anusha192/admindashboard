
import StatsGrid from "./StatsGrid";
import Chartsection from "./Chartsection";
import TableSection from "./TableSection";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <StatsGrid />
      {/* charts secction */}

      <Chartsection />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
         <div className="xl:col-span-2">
          <TableSection/>
         </div>
      </div>
    </div>
  );
};

export default Dashboard;