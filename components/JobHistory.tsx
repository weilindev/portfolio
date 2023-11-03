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
				date="2020"
				description='Complete Bachelor Degree in National Taiwan University of Science and Technology(NTUST).'
			/>
			<Timeline
				date="2023"
				description='Working at Cacdi(綠擊掌數位有限公司).'
			/>
		</div>
	</div>
)

export default JobHistory