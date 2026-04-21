"use client";

import { useState, useMemo } from "react";

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

const data: Row[] = [
  {company:'Acme Corp',    name:'Sarah Chen',   email:'s.chen@acme.com',         plan:'Enterprise', mrr:2400, status:'Active',  joined:'Jan 12, 2024', usage:87, initials:'SC', color:0},
  {company:'Bright IO',    name:'Marcus Lee',   email:'m.lee@bright.io',          plan:'Pro',        mrr:890,  status:'Active',  joined:'Mar 5, 2024',  usage:62, initials:'ML', color:1},
  {company:'CloudStack',   name:'Priya Nair',   email:'p.nair@cloudstack.dev',    plan:'Enterprise', mrr:3100, status:'Active',  joined:'Nov 2, 2023',  usage:91, initials:'PN', color:2},
  {company:'DataBridge',   name:'Tom Russo',    email:'t.russo@databridge.io',    plan:'Starter',    mrr:149,  status:'Trial',   joined:'Apr 1, 2024',  usage:23, initials:'TR', color:3},
  {company:'ElevateHQ',    name:'Lisa Park',    email:'l.park@elevatehq.com',     plan:'Pro',        mrr:890,  status:'Paused',  joined:'Sep 18, 2023', usage:8,  initials:'LP', color:4},
  {company:'FlowBase',     name:'Ankit Shah',   email:'a.shah@flowbase.co',       plan:'Enterprise', mrr:2400, status:'Active',  joined:'Dec 7, 2023',  usage:74, initials:'AS', color:5},
  {company:'GrowthPad',    name:'Nina Brooks',  email:'n.brooks@growthpad.io',    plan:'Starter',    mrr:149,  status:'Active',  joined:'Feb 14, 2024', usage:41, initials:'NB', color:0},
  {company:'HelixSoft',    name:'James Yuen',   email:'j.yuen@helixsoft.com',     plan:'Pro',        mrr:890,  status:'Churned', joined:'Oct 30, 2023', usage:0,  initials:'JY', color:1},
  {company:'Inferra AI',   name:'Dena Watts',   email:'d.watts@inferra.ai',       plan:'Enterprise', mrr:3100, status:'Active',  joined:'Aug 21, 2023', usage:95, initials:'DW', color:2},
  {company:'JetLayer',     name:'Chris Mol',    email:'c.mol@jetlayer.io',        plan:'Starter',    mrr:149,  status:'Trial',   joined:'Apr 3, 2024',  usage:18, initials:'CM', color:3},
  {company:'KernelOS',     name:'Sofia Cruz',   email:'s.cruz@kernelos.dev',      plan:'Pro',        mrr:890,  status:'Active',  joined:'Jan 28, 2024', usage:55, initials:'SC', color:4},
  {company:'LightBase',    name:'Omar Farouk',  email:'o.farouk@lightbase.io',    plan:'Enterprise', mrr:2400, status:'Active',  joined:'Jul 9, 2023',  usage:80, initials:'OF', color:5},
  {company:'Mobi Labs',    name:'Yuki Tanaka',  email:'y.tanaka@mobilabs.jp',     plan:'Starter',    mrr:149,  status:'Active',  joined:'Mar 22, 2024', usage:30, initials:'YT', color:0},
  {company:'Nexora Inc',   name:'Beth Collins', email:'b.collins@nexora.com',     plan:'Pro',        mrr:890,  status:'Paused',  joined:'Feb 2, 2024',  usage:12, initials:'BC', color:1},
  {company:'Orbit HQ',     name:'Ravi Iyer',    email:'r.iyer@orbithq.io',        plan:'Enterprise', mrr:3100, status:'Active',  joined:'Nov 15, 2023', usage:88, initials:'RI', color:2},
  {company:'PulseKit',     name:'Ella Morse',   email:'e.morse@pulsekit.io',      plan:'Starter',    mrr:149,  status:'Trial',   joined:'Apr 8, 2024',  usage:6,  initials:'EM', color:3},
  {company:'Quorum AI',    name:'Leo Stavros',  email:'l.stavros@quorum.ai',      plan:'Pro',        mrr:890,  status:'Active',  joined:'Dec 19, 2023', usage:67, initials:'LS', color:4},
  {company:'Reflex Co',    name:'Maya Singh',   email:'m.singh@reflex.co',        plan:'Enterprise', mrr:2400, status:'Active',  joined:'Oct 4, 2023',  usage:73, initials:'MS', color:5},
  {company:'Sienna Labs',  name:'Finn Walsh',   email:'f.walsh@siennalabs.io',    plan:'Starter',    mrr:149,  status:'Churned', joined:'Jan 5, 2024',  usage:0,  initials:'FW', color:0},
  {company:'TideSync',     name:'Ama Asante',   email:'a.asante@tidesync.com',    plan:'Pro',        mrr:890,  status:'Active',  joined:'Feb 27, 2024', usage:48, initials:'AA', color:1},
  {company:'Ubiqlo',       name:'Dan Pierce',   email:'d.pierce@ubiqlo.io',       plan:'Enterprise', mrr:3100, status:'Active',  joined:'Sep 1, 2023',  usage:92, initials:'DP', color:2},
  {company:'Vantage AI',   name:'Chloe Kim',    email:'c.kim@vantage.ai',         plan:'Pro',        mrr:890,  status:'Trial',   joined:'Apr 10, 2024', usage:34, initials:'CK', color:3},
  {company:'WaveCast',     name:'Arjun Dev',    email:'a.dev@wavecast.io',        plan:'Starter',    mrr:149,  status:'Active',  joined:'Mar 1, 2024',  usage:22, initials:'AD', color:4},
  {company:'Xcelerate',    name:'Julia Ernst',  email:'j.ernst@xcelerate.com',    plan:'Enterprise', mrr:2400, status:'Active',  joined:'Aug 14, 2023', usage:79, initials:'JE', color:5},
];

const PAGE_SIZE = 8;

const statusStyles: Record<string, string> = {
  Active:  "bg-green-100 text-green-700",
  Trial:   "bg-blue-100 text-blue-700",
  Paused:  "bg-yellow-100 text-yellow-700",
  Churned: "bg-red-100 text-red-600",
};

export default function Reportslist() {
  const [search, setSearch]   = useState("");
  const [plan, setPlan]       = useState("");
  const [status, setStatus]   = useState("");
  const [page, setPage]       = useState(1);

  const filtered = useMemo(() => {
    setPage(1); // reset to page 1 on filter change
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
  }, [search, plan, status]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }} className="rounded-xl p-5 flex flex-col gap-4 bg-gray-100 flex-1 mt-4 w-full border  border-gray-200 ">

      {/* Filters */}
      <div className="flex flex-wrap gap-2 items-center w-full">
        <input
          placeholder="Search customers..."
          className="flex-1 min-w-[200px]  border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className=" border rounded-lg px-3 py-2 text-sm"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
        >
          <option value="">All plans</option>
          <option>Enterprise</option>
          <option>Pro</option>
          <option>Starter</option>
        </select>
        <select
          className=" border rounded-lg px-3 py-2 text-sm"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All status</option>
          <option>Active</option>
          <option>Trial</option>
          <option>Paused</option>
          <option>Churned</option>
        </select>
    
        <button className="border px-3 py-2 rounded-lg text-sm  ">
          Export CSV
        </button>
        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm border">
          Generate report
        </button>
      </div>

      {/* Table — full width, no max-w constraint */}
      <div  style={{ background: "var(--bg)", color: "var(--text)" }} className="w-full overflow-x-auto rounded-xl ">
        <table className="w-full text-sm">
          <thead className=" text-gray-500 border-b">
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
            {paginated.map((r, i) => (
              <tr key={i} className="border-t  transition-colors">
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full  flex items-center justify-center text-xs font-semibold shrink-0">
                      {r.initials}
                    </div>
                    <div>
                      <div className="font-medium">{r.company}</div>
                      <div className="text-xs text-gray-400">{r.email}</div>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs rounded-full border ">
                    {r.plan}
                  </span>
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
                  <div className="h-1.5  rounded-full">
                    <div
                      className="h-1.5 bg-green-500 rounded-full transition-all"
                      style={{ width: `${r.usage}%` }}
                    />
                  </div>
                </td>
              </tr>
            ))}

            {paginated.length === 0 && (
              <tr>
                <td colSpan={6} className="p-8 text-center text-gray-400 text-sm">
                  No customers match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
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
                p === page
                  ? "bg-black text-white border-black"
                  : "bg-white hover:bg-gray-50"
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