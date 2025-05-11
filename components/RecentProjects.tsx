"use client";

import { projects } from "@/data";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-5" id="projects">
      <h1 className="heading">
        A small selection of <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-2 gap-16 mt-2">
        {projects.map((item) => (
          <CardContainer key={item.id} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {item.title}
              </CardItem>

              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {item.des}
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={item.img}
                  height="1000"
                  width="1000"
                  className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>

              {/* ✅ Updated buttons with links */}
              <div className="mt-20 flex items-center justify-between gap-4">
                <a
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium dark:text-white hover:underline"
                >
                  Live Demo <FaExternalLinkAlt size={12} />
                </a>

                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  GitHub <FaGithub size={14} />
                </a>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
