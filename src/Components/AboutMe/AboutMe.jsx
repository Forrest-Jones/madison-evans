function AboutMe() {
	return (
		<div className="flex flex-col items-center justify-center py-12 px-12 bg-gray-100 md:flex-row md:py-24 md:px-4">
			{ProfilePic()}
			{Introduction()}
		</div>
	);

	// introduction
	function Introduction() {
		return (
			<div className="mt-6 md:mt-0 md:w-1/2 md:pl-10">
				<h1 className="text-3xl font-bold mb-2">Hi, I'm Madison</h1>
				<p className="text-lg text-gray-700 mb-6">
					I'm a passionate designer with a love for creating beautiful and
					functional digital experiences. I have experience in user interface
					design, user experience design, and graphic design.
				</p>
				<a
					href="/"
					className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					View My Portfolio
				</a>
			</div>
		);
	}

	// Profile Pic
	function ProfilePic() {
		return (
			<div className="md:w-1/2">
				<img
					src="https://via.placeholder.com/300"
					alt="Madison Profile"
					className="rounded-full shadow-md"
				/>
			</div>
		);
	}
}

export default AboutMe;
