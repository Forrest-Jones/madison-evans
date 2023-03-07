import profilePic from "../../assets/images/sample-image.jpeg";

function AboutMe() {
	return (
		<div className="flex flex-col items-center justify-center bg-gray-100 md:flex-row md:py-24 md:px-4">
			{ProfilePic()}
			{Introduction()}
		</div>
	);

	// introduction
	function Introduction() {
		return (
			<div className="mt-6 md:mt-0 md:w-1/2 md:pl-10 px-6">
				<h1 className="text-3xl font-bold mb-2">Hi, I'm Madison</h1>
				<p className="text-lg text-gray-700 mb-6">
					I'm a passionate designer with a love for creating beautiful and
					functional digital experiences. I have experience in user interface
					design, user experience design, and graphic design.
				</p>
			</div>
		);
	}

	// Profile Pic
	function ProfilePic() {
		return (
			<div className="md:w-1/2 w-full">
				<img src={profilePic} alt="Madison Profile" className="w-full h-full" />
			</div>
		);
	}
}

export default AboutMe;
