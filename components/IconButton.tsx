import Link from 'next/link'

const IconButton = ({
	link, children
}: {
	link: string
	children: React.ReactNode
}) => (
	<button type="button" className="w-8 h-8 bg-primary-900 lg:hover:bg-primary-700 rounded-full">
		<Link href={link} target="_blank">
			{children}
		</Link>
	</button>
)

export default IconButton