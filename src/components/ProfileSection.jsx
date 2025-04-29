const ProfileSection = () => {
  return (
    <div className="bg-[linear-gradient(to_right,_#4731D3_67%,_#CBF281_33%)] flex flex-col h-screen  items-center ">
      <div className="flex w-2/3 my-auto mx-auto">
        <div className="flex flex-row md:flex-row justify-between items-center h-full gap-6">
          <div className="text-white max-w-md text-center md:text-left">
            <h1 className="text-4xl font-bold text-lime-300 mb-4">
              I am a Frontend Developer...
            </h1>
            <p className="text-lg mb-6">
              ...who likes to craft solid and scalable frontend products with
              great user experiences.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-100"
              >
                Github
              </a>
              <a
                href="#"
                className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-100"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <img
            src="https://picsum.photos/seed/pfp/300"
            alt="Profile"
            className="w-[288px] h-[288px] object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
