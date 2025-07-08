'use client'

import DailyLimitGauge from './components/DailyLimitGauge'
import { useUser } from '@clerk/nextjs'

export default function HomePage() {
  const { user } = useUser()
  return (
    <main className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Welcome {user?.firstName ?? 'Guest'}</h1>
      <DailyLimitGauge limit={100} used={42} />
    </main>
  )
}
