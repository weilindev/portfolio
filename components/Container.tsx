const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
	return (
		<div className={`max-w-screen-md w-vw mx-auto px-6 ${!!className && className}`}>
			{children}
		</div>
	)
}

export default Container