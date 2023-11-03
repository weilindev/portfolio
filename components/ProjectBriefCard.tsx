import Image, { StaticImageData } from "next/image"

const ProjectBriefCard = ({
	image, title, alt = ''
}: {
	image: StaticImageData
	title: string
	alt?: string
}) =>  (
	<div className='w-full lg:max-w-[300px]'>
		<Image src={image} alt={alt} className='rounded-md h-[170px]' />
		<div className='px-6 mt-2 text-lg break-words text-center'>{title}</div>
	</div>
)

export default ProjectBriefCard