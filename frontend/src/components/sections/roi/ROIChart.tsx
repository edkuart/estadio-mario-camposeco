"use client"

import { useEffect, useState } from "react"
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import type { ROIOutputs } from "@/lib/roi-calculator"

interface ROIChartProps {
  scenarios: {
    id: string
    name: string
    color: string
    data: ROIOutputs
  }[]
}

const COLORS = {
  conservative: "#4a4850",
  base: "#c1121f",
  optimistic: "#6fcf97",
}

function formatGTQ(value: number) {
  if (Math.abs(value) >= 1000) return `Q ${(value / 1000).toFixed(0)}K`
  return `Q ${value.toFixed(0)}`
}

export function ROIChart({ scenarios }: ROIChartProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const maxMonths = Math.max(...scenarios.map((s) => s.data.cashflowByMonth.length))

  const chartData = Array.from({ length: maxMonths }, (_, i) => {
    const month = i + 1
    const entry: Record<string, number> = { month }
    for (const scenario of scenarios) {
      const point = scenario.data.cashflowByMonth[i]
      if (point) entry[scenario.id] = point.cumulative
    }
    return entry
  })

  if (!mounted) {
    return <div className="h-72 w-full" aria-hidden="true" />
  }

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f1f24" />
          <XAxis
            dataKey="month"
            tick={{ fill: "#4a4850", fontSize: 10, fontFamily: "var(--font-jetbrains)" }}
            tickLine={false}
            axisLine={{ stroke: "#1f1f24" }}
            label={{ value: "Meses", position: "insideBottomRight", offset: -8, fill: "#4a4850", fontSize: 10 }}
          />
          <YAxis
            tick={{ fill: "#4a4850", fontSize: 10, fontFamily: "var(--font-jetbrains)" }}
            tickLine={false}
            axisLine={false}
            tickFormatter={formatGTQ}
            width={60}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#141417",
              border: "1px solid #1f1f24",
              borderRadius: "6px",
              fontFamily: "var(--font-jetbrains)",
              fontSize: "11px",
              color: "#e8e6e1",
            }}
            formatter={(value, name) => [formatGTQ(Number(value)), name]}
            labelFormatter={(label) => `Mes ${label}`}
            itemSorter={(item) => -(item.value as number)}
          />
          <ReferenceLine y={0} stroke="#2a2a30" strokeDasharray="4 2" />
          {scenarios.map((s) => (
            <Line
              key={s.id}
              type="monotone"
              dataKey={s.id}
              name={s.name}
              stroke={COLORS[s.id as keyof typeof COLORS] ?? s.color}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}


