import { TrendingUp, BarChart2, Users, DollarSign, AlertCircle, Activity } from "lucide-react";
import Mrrcard from "../components/MRRcard"
import Mrrgraph from "../components/mrrgraph";
import StateCard from "../components/statecard";
import State from "../components/state";



export default function Revenue(){
    return<div className="p-4 flex-1">
         <div className="col-span-1">
          <State/>
         </div>
           <div className="col-span-1">
            <Mrrgraph/>
           </div>
    </div>
}