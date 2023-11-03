import * as icons from 'react-icons/fa6'

const Tag = ({
	title, icon
}: {
	title: string
	icon?: 'FaHashtag' | 'FaReact' | 'FaDatabase'
}) => {
	const Icon = icon ? icons[icon] : icons.FaHashtag

	return (
		<div className="inline-flex gap-1 py-1 px-2 mr-2 my-1 rounded-full bg-primary-300 text-gray-800">
			<Icon className='w-4 h-4 self-center'/>
      <span>{title}</span>
    </div>
	)
}

export default Tag