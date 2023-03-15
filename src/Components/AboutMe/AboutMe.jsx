// import profilePic from "../../assets/images/sample-image.jpeg";

function AboutMe() {
	return (
		<div
			style={{ height: "100vh" }}
			id="about-me"
			className="bg-white flex flex-col items-center justify-start md:flex-row md:py-24 md:px-4">
			{Introduction()}
		</div>
	);

	// introduction
	function Introduction() {
		return (
			<div
				className="
				pt-10 px-6 flex justify-center h-full flex-col w-96
				md:pl-10 md:w-full text-primary">
				<h1 className="text-2xl md:text-3xl font-bold mb-2 text-left">
					Hi, I'm
				</h1>
				<h1
					className="
					text-7xl md:text-8xl font-bold mb-2 text-left">
					Madison
				</h1>
				<p className="text-sm md:text-lg text-gray-700 mt-12">
					I'm a passionate designer with a love for creating beautiful and
					functional digital experiences. I have experience in user interface
					design, user experience design, and graphic design.
				</p>
			</div>
		);
	}

	// // Profile Pic
	// function ProfilePic() {
	// 	return (
	// 		<div className="md:w-1/2 w-full ">
	// 			<img
	// 				src={profilePic}
	// 				alt="Madison Profile"
	// 				style={{ objectFit: "cover", maxHeight: "34em", width: "100%" }}
	// 				className="md:h-3/6"
	// 			/>
	// 		</div>
	// 	);
	// }
}

export default AboutMe;
