const SectionTitle = ({ title }: { title: string }) => (
	<h2 className="relative w-fit mx-auto mb-4 text-xl font-bold">
		<span className="absolute h-1 w-full bottom-0 bg-primary-900 bg-opacity-50 rounded-full" />
		{title}
	</h2>
)

export default SectionTitle