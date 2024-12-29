import { Progress } from '@/components/ui/progress'
import React, { useEffect, useState } from 'react'

export default function LoadingProgress() {
  const [progress, setProgress] = useState(13)
  useEffect(() => {
    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 10 : 100))
      }, 500)

      return () => clearInterval(interval)
    }, [])

  }, [])

  return (
    <>
      <Progress value={progress} className="w-[60%]" />
    </>
  )
}
