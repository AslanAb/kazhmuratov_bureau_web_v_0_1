import Image from "next/image"
export default function Home() {
	return (
		<div>
			<div className="h-96 relative">
				<Image
					src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/973bc166574475.5b1a5663dec2c.jpg"
					alt="photo"
					fill={true}
					style={{ objectFit: "cover", objectPosition: "center" }}
				></Image>
			</div>
		</div>
	)
}
