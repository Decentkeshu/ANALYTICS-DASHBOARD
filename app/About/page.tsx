import SettingsHeader from "../components/About_header";
import About from "../components/About_page";

export default function Settings(){
    return<div  className="pt-4 px-6 pb-6 flex flex-col gap-4 flex-1">
      <div className="col-span-1">  
      <SettingsHeader />
      </div>
       <div className="col-span-1">  
      <About />
      </div>
    </div>
}