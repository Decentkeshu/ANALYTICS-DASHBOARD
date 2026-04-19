import { TrendingUp, BarChart2, Users, DollarSign, AlertCircle, Activity } from "lucide-react";
import Mrrcard from "../components/MRRcard"
import Mrrgraph from "../components/mrrgraph";
import StateCard from "../components/statecard";
import State from "../components/state";
import Breakdown from "../components/Breakdown";
import Breakcard from "../components/Breakdown";
import Breakstate from "../components/breakstate";
import CustomerGrowthChart from "../components/customerchart";



export default function Revenue() {
  return (
    <div className="pt-4 px-6 pb-6 flex flex-col gap-4 flex-1">
      <State />
      <Mrrgraph />
      <Breakstate />
      <CustomerGrowthChart />
    </div>
  );
}