export default function ClickArea({ onClick }: { onClick: () => void }) {
	return (
		<button
			style={{ width: '500px', height: '200px', border: '1px solid white' }}
			onClick={onClick}
		></button>
	)
}
