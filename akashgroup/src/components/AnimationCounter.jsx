import { FaRocket, FaUserAlt } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AnimationCounter = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  const stats = [
    {
      id: 1,
      icon: <HiDocumentText className="text-6xl text-red-600" />,
      value: 256,
      label: "Projects",
    },
    {
      id: 2,
      icon: <FaRocket className="text-6xl text-red-600" />,
      value: 210,
      label: "Clients",
    },
    {
      id: 3,
      icon: <FaUserAlt className="text-6xl text-red-600" />,
      value: 20,
      label: "Team Members",
    },
  ];


  return (
    <div id="ourwork" ref={ref} className="h-screen md:h-1/2 flex items-center justify-center text-white px-4 py-12" style={{
      backgroundImage: "url('/countbg.jpg')",
    }}>
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-x-64">
        {stats.map((stat) => (
          <div key={stat.id} className="text-center">
            <div className="flex justify-center mb-3">{stat.icon}</div>
            <h2 className="text-5xl font-semibold">
              {inView && <CountUp end={stat.value} duration={2} />}
            </h2>
            <p className="text-md mt-2 text-zinc-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimationCounter