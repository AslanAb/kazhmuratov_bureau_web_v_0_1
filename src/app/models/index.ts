export interface IImages {
	id: number
	src: string
}

export interface IProject {
	id: number
	project_name: string
	location: string
	area: number | false
	year: number
	src_of_images: {
		img_id: number
		src: string
	}[]
}
