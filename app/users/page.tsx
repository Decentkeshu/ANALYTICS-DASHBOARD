import Usercard from "../components/usercard"
import { User, UserCheck, UserPlus, Users } from "lucide-react";
import UsersOverTime from "../components/usersovertime";
import WorldMap from "../components/Userbycountry";
import Usergrowth from "../components/Usergrowth";

export default function users(){

  const stats = [
    {label : "Total Users", value : "24,588" , change : 12.5 , icon : Users},
    {label : "Active Users", value : "18,442" , change : 8.3 , icon : UserCheck },
    {label : "New Users", value : "6,789" , change : 15.7 , icon : UserPlus},
    {label : "Returning Users", value : "11,553" , change : 5.2, icon : User }
  ]


    return<div className="pt-4 px-6 pb-6 flex flex-col gap-4 flex-1">
       <div className="grid grid-cols-4 gap-3">
                 {stats.map((s ) => <Usercard key={s.label} {...s} />)}
               </div>
               <div className="col-span-1">
                                  <UsersOverTime />
                                </div>
                 <div className="col-span-1">
                 <div className="col-span-2">
                                  <WorldMap />
                                </div>
                         <div className="col-span-1 gap-3">
                                  <Usergrowth />
                                </div>       
                 </div>
    </div>
}