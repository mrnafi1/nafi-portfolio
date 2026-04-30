import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Frontend Web Development",
    description:
      "I specialize in building dynamic, interactive, and high-performance web applications. My core expertise lies in React.js and Next.js, ensuring robust and scalable logic.",
  },
  {
    id: 2,
    title: "Responsive Web Design",
    description:
      "I create visually stunning websites that work perfectly on all screen sizes. Using Tailwind CSS, I ensure a seamless experience on mobile, tablet, and desktop.",
  },
  {
    id: 3,
    title: "API Integration & Performance",
    description:
      "I focus on integrating complex APIs and third-party services while optimizing code for speed and accessibility to provide the best user experience.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in crafting engaging interfaces and building robust
            frontend applications that deliver real value and usability.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines technical expertise in React and Tailwind CSS to
            deliver solutions that are both visually appealing and highly
            functional for users.
          </p>
        </div>
        <a
          href="#contact"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>

      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;