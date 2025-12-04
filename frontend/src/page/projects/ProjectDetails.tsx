import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatDate } from "@/lib/utils";
import github_icon from "../../assets/projects/github_icon.png";
import { commonIconStyles } from "@/lib/styles";
import RadioGroup from "@/component/projects/radioGroup";
import ReactMarkdown from "react-markdown";
import { Toggle } from "@/component/shadcn/toggle";
import { Button } from "@/component/shadcn/button";
import alert_icon from "../../assets/projects/alert_icon.png";
// import projectDetailsMD from "../../store/mdexample.md?raw";

export const ProjectDetails: React.FC = () => {
  type DisplaySectionType = "Project Description" | "Community Submissions" | "My Submissions";
  const { projectId } = useParams<{ projectId: string }>();
  const project = useSelector((state: any) =>
    state.projects.projectsList.find((proj: any) => proj.projectId === projectId)
  );
  const [displaySection, setDisplaySection] = useState<DisplaySectionType>("Project Description");
  function handleDisplaySectionChange(value: DisplaySectionType) {
    setDisplaySection(value);
  }

  return (
    <div className="text-left mt-2 pt-3 space-y-2 pl-9 bg-gray-800/20 rounded-2xl shadow-2xl w-7xl mx-auto h-[90vh]">
      <h1 className="text-left mt-2 text-4xl font-extralight text-white">{project?.title}</h1>
      <p className="text-white text-[1.5rem] font-light">{project?.shortDescription}</p>
      <p className="text-white text-[1.2rem]">
        <span>Created By: {project?.creator}</span> | Last Update: {project.lastUpdated && formatDate(new Date(project.lastUpdated))}
      </p>

      {project.startingRepoLink &&
        <div className="rounded-[.8rem] grid grid-rows-2 mt-4 overflow-hidden w-[90%]">
          {/* Top Section - Dark Background with Warning Icon/Text */}
          <div className="bg-gray-700 w-full text-white pl-5 p-1 py-2 flex items-center gap-2">
            {/* Placeholder for Warning Icon */}
            <img src={alert_icon} alt="Alert Icon" className={`${commonIconStyles} w-6`} />
            <span className="text-sm font-semibold">This project contains a starting repository. This means you should clone this repository and build your solution from it.</span>
          </div>

          {/* Bottom Section - White Background with GitHub Link */}
          <div className="bg-white flex items-center pl-5 p-1 gap-2">
            {/* Placeholder for GitHub Icon */}
            <img
              src={github_icon}
              alt="GitHub Link: "
              className={`${commonIconStyles} w-6`}
            />
            <a
              href={project?.startingRepoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {project?.startingRepoLink}
            </a>
          </div>
        </div>
      }

      <div className="flex justify-start items-center gap-5">
        <RadioGroup
          options={["Project Description", "Community Submissions", "My Submissions"]}
          selected={displaySection}
          onClick={handleDisplaySectionChange}
          isHorizontal={true}
          className="w-[50%] mt-6"
          // rounded upper borders
          buttonClassName="rounded-t-lg"
        />
        <div className="self-baseline-last space-x-5">
          <Button
            variant="outline"
            onClick={() => {
              // Implement share functionality here
            }}
            className="rounded-3xl cursor-pointer"
          >
            Share
          </Button>
          <Toggle
            pressed={false} //later dynamically determine if user is tracking this project
            onPressedChange={() => { }} //handle tracking logic here
            className="text-white cursor-pointer"
          >
            Track this project
          </Toggle>
        </div>
      </div>
      <div>
        {displaySection === "Project Description" && (
          <div>
            <div className="prose prose-invert max-w-none mt-4 text-white text-left">
              <ReactMarkdown>
                {project?.details || "No project details available."}
              </ReactMarkdown>
            </div>
          </div>
        )}
        {displaySection === "Community Submissions" && (
          <div>
            <h2>Community Submissions</h2>
          </div>
        )}
        {displaySection === "My Submissions" && (
          <div>
            <h2>My Submissions</h2>
          </div>
        )}
      </div>
    </div>
  )
}