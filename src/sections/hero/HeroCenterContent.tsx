import { motion } from "framer-motion";
import { FiCode } from "react-icons/fi";
import { Button } from "../../components/common/Button";
import { skillsData } from "../../data/skills.data";


export const HeroCenterContent = () => {
  const mobileSkills = skillsData.leftColumn.slice(0, 3);

  return (
    <div className="flex flex-col items-center text-center space-y-[clamp(1.5rem,4vw,3rem)] px-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-[clamp(4rem,10vw,6rem)] h-[clamp(4rem,10vw,6rem)] mb-2 inline-flex items-center justify-center bg-linear-to-br from-blue-500 to-blue-500 rounded-full"
      >
        <FiCode className="text-[clamp(1.25rem,3vw,1.875rem)]" />
      </motion.div>

      <div className="space-y-[clamp(0.75rem,2vw,1rem)]">
        <h1 className="text-[clamp(1.8rem,6vw,3.75rem)] font-bold text-blue-200 cursor-default leading-tight">
          Simonas <span className="text-blue-400">Adomaitis</span>
        </h1>

        <div className="inline-block px-[clamp(1rem,3vw,2rem)] py-[clamp(0.5rem,1.5vw,1rem)] bg-linear-to-br from-blue-600 to-blue-600 text-blue-200 rounded-lg lg:rotate-2 hover:rotate-0 transition-transform">
          <h2 className="text-[clamp(1.1rem,2.5vw,2.25rem)] font-bold cursor-default whitespace-nowrap">
            Front-End Developer
          </h2>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex lg:hidden gap-[clamp(0.5rem,2vw,0.75rem)]"
      >
        {mobileSkills.map(skill => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="flex items-center gap-2 px-[clamp(0.5rem,1.5vw,1rem)] py-2 bg-gray-800/60 border border-gray-700 rounded-lg text-[clamp(0.7rem,1.5vw,0.875rem)] font-semibold text-gray-200 whitespace-nowrap"
            >
              <Icon className={`${skill.color} w-[clamp(1rem,2vw,1.25rem)] h-[clamp(1rem,2vw,1.25rem)]`} />
              {skill.name}
            </div>
          );
        })}
      </motion.div>

      <div className="text-center w-[min(80vw,320px)] h-0.5 bg-linear-to-r from-transparent via-gray-600 to-transparent" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-gray-300 text-[clamp(0.875rem,2vw,1.5rem)] max-w-[min(90vw,42rem)] cursor-default lg:-rotate-1 leading-relaxed"
      >
        Crafting digital experiences that blend beautiful design with cutting-edge technology.
      </motion.p>
      <div className="flex flex-row gap-[clamp(0.5rem,2vw,1.5rem)] w-full justify-center">
        <Button
          as="a"
          href="#projects"
          className="px-[clamp(1rem,3vw,2.5rem)] py-[clamp(0.5rem,1.5vw,1rem)] text-[clamp(0.75rem,1.5vw,1.125rem)] lg:-rotate-6 hover:rotate-0 whitespace-nowrap"
        >
          Explore My Work
        </Button>
        <Button
          as="a"
          href="#contact"
          variant="outline"
          className="px-[clamp(1rem,3vw,2.5rem)] py-[clamp(0.5rem,1.5vw,1rem)] text-[clamp(0.75rem,1.5vw,1.125rem)] lg:rotate-1 hover:rotate-0 transition-transform whitespace-nowrap"
        >
          Let's Connect
        </Button>
      </div>
    </div>
  );
};
