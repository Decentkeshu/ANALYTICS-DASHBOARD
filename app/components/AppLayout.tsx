"use client"

import { useState } from "react"
import Sidebar from "./sidebar"
import Navigation from "./navbar"

export default function AppLayout ({children }: {children : React.ReactNode}) {
    const [sidebarOpen , setSidebarOpen] = useState<boolean>(true)
  return<>
        
 <Navigation ontoggle={() => setSidebarOpen(prev => !prev)} />
<div className="main">
    <Sidebar isopen={sidebarOpen} />
    
    <div className="children">
        {children}
    </div>
</div>

  </>
}