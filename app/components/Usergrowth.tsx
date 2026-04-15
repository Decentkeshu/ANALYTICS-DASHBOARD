"use client"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const data = [
    {date : "jan 1", visitors : "1000", pageviews : "2000"},
    {date : "jan 2", visitors : "1200", pageviews : "2200"},
    {date : "jan 3", visitors : "900", pageviews : "1100"},
    {date : "jan 4", visitors : "1100", pageviews : "2100"},
    {date : "jan 5", visitors : "1400", pageviews : "2400"},
    {date : "jan 6", visitors : "1200", pageviews : "2200"},
    {date : "jan 7", visitors : "1300", pageviews : "2300"},
    {date : "jan 8", visitors : "800", pageviews : "1800"},
    {date : "jan 9", visitors : "1000", pageviews : "2000"},
    {date : "jan 10", visitors : "700", pageviews : "1700"},
    {date : "jan 11", visitors : "1500", pageviews : "2500"},
    {date : "jan 12", visitors : "1100", pageviews : "2100"},
    {date : "jan 13", visitors : "1200", pageviews : "2200"},
    {date : "jan 14", visitors : "700", pageviews : "1700"},
    {date : "jan 15", visitors : "1800", pageviews : "2800"},
    {date : "jan 16", visitors : "1200", pageviews : "2200"},
]

const formatYAxis = (value: number) => `${(value / 1000).toFixed(0)}k`
const formatTooltip = (value: number) => value.toLocaleString()

export 