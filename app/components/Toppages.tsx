"use client";

import { useEffect, useState } from "react";
import { getPageViews } from "../services/analyticsservices";

type Page = {
  rank: number;
  page: string;
  views: number;
  visitors: number;
  Avgtime: string;
  bouncerate: number;
};

export default function TopPages() {
  const [pageviews, setPageViews] = useState<Page[]>([]);

  useEffect(() => {
    const fetchPageViews = async () => {
      try {
        const { status, data } = await getPageViews();

        console.log("PageViews status:", status);
        console.log("PageViews data:", data);

        if (status === 200) {
          setPageViews(data.data);
        }
      } catch (error) {
        console.error(
          "Error fetching page views:",
          error
        );
      }
    };

    fetchPageViews();
  }, []);

  const maxviews =
    pageviews.length > 0
      ? Math.max(...pageviews.map((p) => p.views))
      : 0;

  const getBounceStyle = (rate: number) => {
    if (rate < 25)
      return "bg-green-100 text-green-700";

    if (rate < 40)
      return "bg-yellow-100 text-yellow-700";

    return "bg-red-100 text-red-600";
  };

  return (
    <div
      style={{
        background: "var(--bg)",
        color: "var(--text)",
      }}
      className="bg-gray-100 border border-gray-200 rounded-xl p-5 flex flex-col gap-4 w-full mt-3"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-800">
          Top Pages
        </h2>

        <button className="text-xs text-purple-600 hover:text-purple-800 transition-colors cursor-pointer">
          View all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left text-xs font-medium pb-3 pr-4">
                #
              </th>

              <th className="text-left text-xs font-medium pb-3 pr-4">
                Page
              </th>

              <th className="text-left text-xs font-medium pb-3 pr-4">
                Views
              </th>

              <th className="text-left text-xs font-medium pb-3 pr-4">
                Visitors
              </th>

              <th className="text-left text-xs font-medium pb-3">
                Avg Time
              </th>

              <th className="text-left text-xs font-medium pb-3">
                Bounce Rate
              </th>

              <th className="text-left text-xs font-medium pb-3">
                Traffic
              </th>
            </tr>
          </thead>

          <tbody>
            {pageviews.map((page) => (
              <tr
                key={page.rank}
                className="border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <td className="py-3 pr-4 text-xs font-medium">
                  {page.rank}
                </td>

                <td className="py-3 pr-4 text-xs font-medium">
                  {page.page}
                </td>

                <td className="py-3 pr-4 text-xs font-medium">
                  {page.views.toLocaleString()}
                </td>

                <td className="py-3 pr-4 text-xs font-medium">
                  {page.visitors.toLocaleString()}
                </td>

                <td className="py-3 pr-4 text-xs font-medium">
                  {page.Avgtime}
                </td>

                <td>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${getBounceStyle(
                      page.bouncerate
                    )}`}
                  >
                    {page.bouncerate}%
                  </span>
                </td>

                <td>
                  <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-600 rounded-full"
                      style={{
                        width: `${
                          maxviews
                            ? Math.round(
                                (page.views / maxviews) *
                                  100
                              )
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}