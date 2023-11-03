import Foodpanda from '@/public/foodpanda.png'
import CreativeExpo from '@/public/creative-expo.jpg'
import Webcrack from '@/public/webcrack.png'
import Modatie from '@/public/modatie.png'
import PDH from '@/public/pdh.png'
import Idouding from '@/public/idouding.png'
import SectionTitle from './SectionTitle'
import ProjectBriefCard from './ProjectBriefCard'

const ProjectBrief = () => (
	<div className='mb-12'>
		<SectionTitle title="Project Brief" />
		<div className='flex flex-col justify-center flex-wrap lg:flex-row gap-6 px-6 text-center'>
			<ProjectBriefCard
				image={Webcrack}
				title="WebCRACK"
				alt="WebCRACK"
			/>
			<ProjectBriefCard
				image={CreativeExpo}
				title="2023台灣文博會"
				alt="2023台灣文博會"
			/>
			<ProjectBriefCard
				image={Foodpanda}
				title="Foodpanda"
				alt="Foodpanda"
			/>
			<ProjectBriefCard
				image={Modatie}
				title="數發部產業署活動網站"
				alt="數發部產業署活動網站"
			/>
			<ProjectBriefCard
				image={PDH}
				title="PDH羅特麗磁磚"
				alt="PDH羅特麗磁磚"
			/>
			<ProjectBriefCard
				image={Idouding}
				title="idouding愛到叮公益平台"
				alt="idouding愛到叮公益平台"
			/>
		</div>
	</div>
)

export default ProjectBrief