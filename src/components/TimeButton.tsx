export default function TimeButton({
	selected,
	value,
	onClick
}: {
	selected: boolean
	value: number
	onClick: () => void
}): JSX.Element {
	return (
		<button
			style={{ backgroundColor: selected ? 'rgba(255,255,255, 0.2)' : 'initial' }}
			key={`${value}-value`}
			onClick={onClick}
		>
			{value}
		</button>
	)
}
