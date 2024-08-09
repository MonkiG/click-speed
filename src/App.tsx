import { useEffect, useState } from 'react'
import ClickArea from './components/ClickArea'
import TimeButton from './components/TimeButton'

const avalibleSeconds = [1, 5, 10, 30, 50, 100]

function App(): JSX.Element {
	const [timerSeconds, setTimerSeconds] = useState<number>(5)
	const [timer, setTimer] = useState({ init: false, value: 0 })
	const [clicks, setClicks] = useState<number>(0)

	useEffect(() => {
		let intervalId: number | undefined

		if (timer.init) {
			intervalId = setInterval(() => {
				setTimer((prev) => ({ ...prev, value: prev.value + 1 }))
			}, 1)
		}

		if (timer.value === timerSeconds * 1000) {
			clearInterval(intervalId)
		}

		return () => clearInterval(intervalId)
	}, [timer.init, timer.value, timerSeconds])

	const handleClickArea = () => {
		if (timer.value === timerSeconds * 1000) return
		if (clicks === 0) {
			setTimer((prev) => ({ ...prev, init: true }))
		}
		setClicks((prev) => prev + 1)
	}

	const getClicksBySecond = () => {
		const avgClicks = clicks / timerSeconds
		return avgClicks.toFixed(0) // <= 0 || isNaN(avgClicks) ? 0 : avgClicks.toFixed(0)
	}
	return (
		<>
			<h1>Click speed</h1>
			<div>
				Chose the test:
				{avalibleSeconds.map((s) => (
					<TimeButton
						key={`${s}-value`}
						onClick={() => {
							setTimerSeconds(s)
						}}
						selected={timerSeconds === s}
						value={s}
					/>
				))}
			</div>
			{timer.value}
			<h2>Total clicks: {clicks}</h2>
			<h2>Clicks by second: {getClicksBySecond()}</h2>
			<ClickArea onClick={handleClickArea} />
		</>
	)
}

export default App
