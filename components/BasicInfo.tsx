import Image from "next/image"
import Link from "next/link"
import { AiOutlineRight, AiFillInstagram } from 'react-icons/ai'
import { TbBrandGithubFilled } from 'react-icons/tb'

import Tag from "./Tag"
import IconButton from "./IconButton"
import Avatar from '@/public/avatar.png'
import { PERSONAL_TAG } from "@/constants"

const BasicInfo = () => {
	return (
		<div className="flex my-12 gap-4 lg:g-6">
			<Image
				src={Avatar}
				alt='avatar'
				priority
				className="rounded-full border-4 border-white border-solid w-1/4 h-1/4 self-center"
			/>
			
			<div className="max-w-[75%] w-full">
				<p className="text-sm text-gray-500">Hello, I'm</p>
				<p className="text-2xl font-bold mb-2">William Chen</p>
				<p>A software developer based in Taiwan.</p>
				<div className="my-2 overflow-x-scroll whitespace-nowrap scrollbar-disable">
					{PERSONAL_TAG.map(tag => <Tag key={tag.id} title={tag.title} icon={tag.icon} />)}
				</div>
				<div className="flex gap-6 items-center">
					<button
						type="button"
						className="bg-button-normal rounded-lg p-2 lg:hover:bg-button-hover text-gray-700 outline-none"
					>
						<Link href="mailto:tawilliam527824@gmail.com" target="_blank" >
							Contact Me
							<AiOutlineRight className="w-4 h-4 inline self-center ml-2" />
						</Link>
					</button>
					<div className="flex gap-2">
						<IconButton link="https://github.com/weilindev">
							<TbBrandGithubFilled className="w-full h-full p-1 inline self-center text-white" />
						</IconButton>
						<IconButton link="https://instagram.com/c.wei_lin">
							<AiFillInstagram className="w-full h-full p-1 inline self-center text-white" />
						</IconButton>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BasicInfo