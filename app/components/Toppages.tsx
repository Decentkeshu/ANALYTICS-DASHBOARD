"use client"

type Pages = {
    rank : number
    page : string
    views : number
    visitors : number 
    Avgtime : string
    bouncerate : number 

}

const pageviews : Pages [] = [
    {rank : 1 , page : "/home", views : 4200 , visitors : 3100 , Avgtime : "3m 20s", bouncerate : 24  },
    {rank : 2 , page : "/Dashboard", views : 3000 , visitors : 2300 , Avgtime : "2m 45s", bouncerate : 34  },
    {rank : 3 , page : "/Analytics", views : 2200 , visitors : 2100 , Avgtime : "2m 20s", bouncerate : 44  },
    {rank : 4 , page : "/Users", views : 2400 , visitors : 3000 , Avgtime : "3m 00s", bouncerate : 32  },
    {rank : 5 , page : "/Revenue", views : 4000 , visitors : 2700 , Avgtime : "2m 30s", bouncerate : 24  },
    {rank : 6 , page : "/Reports", views : 3800 , visitors : 2600 , Avgtime : "2m 50s", bouncerate : 44  },
    {rank : 7 , page : "/Settings", views : 2000 , visitors : 2500 , Avgtime : "1m 30s", bouncerate : 14  },

]

const maxviews = Math.max(...pageviews.map((p) => p.views))

export default function TopPages (){
      const getBounceStyle = (rate: number) => {
  if (rate < 25) return "bg-green-100 text-green-700"
  if (rate < 40) return "bg-yellow-100 text-yellow-700"
  return "bg-red-100 text-red-600"
}

    return<>
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-5 flex flex-col gap-4 w-full mt-3 ">
           <div className="flex items-center justify-between">
               <h2 className="text-sm font-medium text-gray-800">Top Pages</h2>
               <button className="text-xs text-purple-600 hover:text-purple-800 transition-colors cursor-pointer">
                       View all
             </button>
           </div>
           <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left text-xs font-medium text-gray-400 pb-3 pr-4">#</th>
              <th className="text-left text-xs font-medium text-gray-400 pb-3 pr-4">Page</th>
              <th className="text-left text-xs font-medium text-gray-400 pb-3 pr-4">Views</th>
              <th className="text-left text-xs font-medium text-gray-400 pb-3 pr-4">Visitors</th>
              <th className="text-left text-xs font-medium text-gray-400 pb-3">Avgtime</th>
              <th className="text-left text-xs font-medium text-gray-400 pb-3">bouncerate</th>
              <th className="text-left text-xs font-medium text-gray-400 pb-3">Traffic</th>
              
            </tr>
          </thead> 
          <tbody>
           {pageviews.map((Pages) =>(
            <tr key={Pages.rank}
            className="border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer "
            >
                <td className="py-3 pr-4 text-xs font-medium text-gray-700">{Pages.rank}</td>
                <td className="py-3 pr-4 text-xs font-medium text-gray-700">{Pages.page}</td>
                <td className="py-3 pr-4 text-xs font-medium text-gray-700">{Pages.views}</td>
                <td className="py-3 pr-4 text-xs font-medium text-gray-700">{Pages.visitors}</td>
                <td className="py-3 pr-4 text-xs font-medium text-gray-700">{Pages.Avgtime}</td>
                <td>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${getBounceStyle(Pages.bouncerate)}`}>
               {Pages.bouncerate}%
            </span>
              </td>
                   <td>
  <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
    <div
      className="h-full bg-purple-600 rounded-full"
      style={{ width: `${Math.round((Pages.views / maxviews) * 100)}%` }}
    />
  </div>
</td>
            </tr>
           ))}
          </tbody>
         </table>
        </div>
        </div>
    </>
}