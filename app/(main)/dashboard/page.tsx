import { ChartAreaInteractive } from "@/components/main/chart-area-interactive";
import { SectionCards } from "@/components/main/section-cards";
import { DataTable } from "@/components/main/data-table";

import data from "./data.json";

const DashboardPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <DataTable data={data} />
    </div>
  );
};

export default DashboardPage;
