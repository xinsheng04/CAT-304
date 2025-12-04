import { Card, CardTitle, CardDescription, CardFooter } from "@/component/shadcn/card";
import people_icon from "../../assets/projects/people_icon.png";
import submission_icon from "../../assets/projects/submission_icon.png";
import { TagPill } from "@/component/tag";
import { commonIconStyles } from "@/lib/styles";
import type { ProjectType } from "@/store/projectsSlice";
import { ellipsifyText } from "@/lib/utils";

type ProjectCardProps = {
  project: ProjectType
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const customIconStyles = `${commonIconStyles} inline-block mr-1`;
  return (
    <Card key={project.projectId} className="p-5 h-58 cursor-pointer bg-white block pl-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardTitle className="text-2xl text-black text-left mb-0.5">
        {project.title}
      </CardTitle>
      <CardDescription className="text-black/80 mb-2">
        <div>
          <p className="text-left mb-3 text-[1rem]">Created by: <span className="italic">{project.creator}</span></p>
          <ul className="flex gap-2 mb-2 list-none">
            <li><TagPill tag={{ label: project.difficulty, type: "Difficulty" }} /></li>
            <li><TagPill tag={{ label: project.category, type: "Category" }} /></li>
          </ul>
          <p className="text-left"> {ellipsifyText(project.shortDescription, 90)} </p>
        </div>
      </CardDescription>
      <CardFooter className="block px-0 text-black/80 space-y-1 text-sm">
        <div className="text-left">
          <img src={people_icon} alt="" className={customIconStyles} />
          {project.trackCount} Started
        </div>
        <div className="text-left">
          <img src={submission_icon} alt="" className={customIconStyles} />
          {project.submissionCount} Submissions
        </div>
      </CardFooter>
    </Card>
  )
};

export default ProjectCard;