import SectionTitle from './SectionTitle'
import Timeline from './Timeline'

const JobHistory = () => (
	<div className='mb-12'>
		<SectionTitle title="Timeline" />
		<div>
			<Timeline
				date="1998"
				description="Born in New Taipei, Taiwan."
			/>
			<Timeline
				date="2021"
				description='Complete Bachelor Degree in National Taiwan University of Science and Technology(NTUST).'
			/>
			<Timeline
				date="2021 ~ 2024"
				description='Worked at Cacdi(綠擊掌數位有限公司).'
			/>
			<Timeline
				date="2024 ~ Now"
				description='Working at Aiii.ai(類神經網路股份有限公司).'
			/>
		</div>
	</div>
)

export default JobHistory