"use client";

import { useState, useMemo, useEffect } from "react";
import { getCompanyData } from "../services/analyticsservices";

type Row = {
  company: string;
  name: string;
  email: string;
  plan: string;
  mrr: number;
  status: string;
  joined: string;
  usage: number;
  initials: string;
  color: number;
};

const PAGE_SIZE = 8;

const statusStyles: Record<string, string> = {
  Active:  "bg-green-100 text-green-700",
  Trial:   "bg-blue-100 text-blue-700",
  Paused:  "bg-yellow-100 text-yellow-700",
  Churned: "bg-red-100 text-red-600",
};

export default function Reportslist() {
  const [data, setData]       = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch]   = useState("");
  const [plan, setPlan]       = useState("");
  const [status, setStatus]   = useState("");
  const [page, setPage]       = useState(1);

  useEffect(() => {
    async function load() {
      try {
        const res = await getCompanyData();
        const raw = res?.data?.data ?? res?.data;
        if (Array.isArray(raw)) setData(raw as Row[]);
      } catch (err) {
        console.error("Failed to load company data:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filtered = useMemo(() => {
    setPage(1);
    return data.filter((r) => {
      if (
        search &&
        !r.company.toLowerCase().includes(search.toLowerCase()) &&
        !r.email.toLowerCase().includes(search.toLowerCase())
      ) return false;
      if (plan && r.plan !== plan) return false;
      if (status && r.status !== status) return false;
      return true;
    });
  }, [search, plan, status, data]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }} className="rounded-xl p-5 flex flex-col gap-4 bg-gray-100 flex-1 mt-4 w-full border border-gray-200">

      <div className="flex flex-wrap gap-2 items-center w-full">
        <input
          placeholder="Search customers..."
          className="flex-1 min-w-[200px] border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border rounded-lg px-3 py-2 text-sm"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
        >
          <option value="">All plans</option>
          <option>Enterprise</option>
          <option>Pro</option>
          <option>Starter</option>
        </select>
        <select
          className="border rounded-lg px-3 py-2 text-sm"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All status</option>
          <option>Active</option>
          <option>Trial</option>
          <option>Paused</option>
          <option>Churned</option>
        </select>
        <button className="border px-3 py-2 rounded-lg text-sm">Export CSV</button>
        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm border">Generate report</button>
      </div>

      <div style={{ background: "var(--bg)", color: "var(--text)" }} className="w-full overflow-x-auto rounded-xl">
        <table className="w-full text-sm">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="text-left p-3">Company</th>
              <th className="text-left p-3">Plan</th>
              <th className="text-left p-3">MRR</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Joined</th>
              <th className="text-left p-3">Usage</th>
            </tr>
          </thead>
          <tbody>
         
            {loading &&
              Array.from({ length: PAGE_SIZE }).map((_, i) => (
                <tr key={i} className="border-t">
                  <td colSpan={6} className="p-3">
                    <div className="h-8 bg-gray-200 animate-pulse rounded-lg" />
                  </td>
                </tr>
              ))
            }

      
            {!loading && paginated.map((r, i) => (
              <tr key={i} className="border-t transition-colors">
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0">
                      {r.initials}
                    </div>
                    <div>
                      <div className="font-medium">{r.company}</div>
                      <div className="text-xs text-gray-400">{r.email}</div>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs rounded-full border">{r.plan}</span>
                </td>
                <td className="p-3 font-medium">${r.mrr.toLocaleString()}</td>
                <td className="p-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${statusStyles[r.status] ?? "bg-gray-100 text-gray-600"}`}>
                    {r.status}
                  </span>
                </td>
                <td className="p-3 text-gray-500">{r.joined}</td>
                <td className="p-3 min-w-[100px]">
                  <div className="text-xs text-gray-500 mb-1">{r.usage}%</div>
                  <div className="h-1.5 rounded-full">
                    <div
                      className="h-1.5 bg-green-500 rounded-full transition-all"
                      style={{ width: `${r.usage}%` }}
                    />
                  </div>
                </td>
              </tr>
            ))}

    
            {!loading && paginated.length === 0 && (
              <tr>
                <td colSpan={6} className="p-8 text-center text-gray-400 text-sm">
                  No customers match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>
          Showing {filtered.length === 0 ? 0 : (page - 1) * PAGE_SIZE + 1}–
          {Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length} customers
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1.5 rounded-lg border bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ← Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-8 h-8 rounded-lg border text-xs font-medium transition-colors ${
                p === page ? "bg-black text-white border-black" : "bg-white hover:bg-gray-50"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages || totalPages === 0}
            className="px-3 py-1.5 rounded-lg border bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next →
          </button>
        </div>
      </div>

    </div>
  );
}