import { useState, useMemo } from 'react'
import { LabeledSlider } from '@learn-vite/core/components/LabeledSlider'

export const App = () => {
  const [weight, setWeight] = useState(60)
  const [height, setHeight] = useState(170)

  const calcBMI = useMemo(() => {
    const heightMeters = height * 0.01

    return Math.round(weight / (heightMeters * heightMeters))
  }, [weight, height])

  return (
    <>
      <LabeledSlider
        label="Weight"
        unit="kg"
        min={40}
        max={150}
        value={weight}
        onChange={setWeight}
      />
      <LabeledSlider
        label="Height"
        unit="cm"
        min={140}
        max={220}
        value={height}
        onChange={setHeight}
      />
      <p>BMI: {calcBMI}</p>
    </>
  )
}
