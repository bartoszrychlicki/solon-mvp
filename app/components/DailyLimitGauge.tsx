'use client'

export default function DailyLimitGauge({ limit, used }: { limit: number; used: number }) {
  const percent = Math.min(100, Math.round((used / limit) * 100))
  return (
    <div className="w-full bg-gray-200 rounded h-6">
      <div className="h-6 bg-green-500 rounded" style={{ width: `${percent}%` }} />
    </div>
  )
}
