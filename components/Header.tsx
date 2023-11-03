import Link from 'next/link'
import { Edu_TAS_Beginner} from 'next/font/google'
import Container from './Container'

const etb = Edu_TAS_Beginner({
  subsets: ['latin'],
  display: 'swap',
})

const Logo = () => (
	<Link
		href='/'
		className={`text-xl font-medium ${etb.className}`}
	>
		William Chen
	</Link>
)

const Header = () => {
	return (
		<div className="flex justify-between w-full py-2 bg-primary-100">
			<Container>
				<div />
				<Logo />
				<div />
			</Container>
		</div>
		
	)
}

export default Header