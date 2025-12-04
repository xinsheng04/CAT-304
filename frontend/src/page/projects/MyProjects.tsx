import React from "react";
import SearchBar from "@/component/searchBar";
import { useState } from "react";
import RadioGroup from "../../component/projects/radioGroup.tsx";
import type { ProjectType } from "../../store/projectsSlice.ts";
import { useSelector } from "react-redux";
import { categoryList } from "@/lib/types.ts";
import { useNavigate } from "react-router";
import ProjectCard from "../../component/projects/projectCard.tsx";


export const MyProjects: React.FC = () => {
  const selections = ["All", ...categoryList];
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(selections[0]);
  // const username = useSelector((state: any) => state.user.username);
  const username = "Alice"; // Replace with actual logged-in username
  const projects = useSelector((state: any) => state.projects.projectsList)
    .filter((project: ProjectType) => project.creator === username);

  const navigate = useNavigate();

  function handleCategoryChange(value: string) {
    setCategory(value);
  }

  function navigateToProjectDetails(projectId: string) {
    navigate(`/project/${projectId}`);
  }

  const hasProjectsToShow = category === "All" || projects.some((project: ProjectType) => project.category === category);
  return (
    <div className="pt-6 px-3 w-full mx-auto flex flex-col">
      <div className="sticky">
        <h1 className="text-3xl font-bold text-white">My Projects</h1>
        <div className="w-[80%] mx-auto my-5">
          <SearchBar
            placeholder="Search projects by title or description"
            query={query}
            setQuery={setQuery}
            className="mt-4"
          />
        </div>
      </div>
      <div className="w-full fixed bottom-0 top-50 px-10 grid grid-cols-[200px_1fr] gap-10">
        <RadioGroup
          options={selections}
          selected={category}
          onClick={handleCategoryChange}
          isHorizontal={false}
          className="w-50"
        />
        {
          hasProjectsToShow ?
            <div className="grid grid-cols-3 gap-2 scroll-auto">
              {projects.map((project: ProjectType) => {
                if (category !== "All" && project.category !== category) return null;
                if (query && !project.title.toLowerCase().includes(query.toLowerCase()) &&
                  !project.shortDescription.toLowerCase().includes(query.toLowerCase())) {
                  return null;
                }
                return (
                  <ProjectCard key={project.projectId} project={project}
                    onClick={() => navigateToProjectDetails(project.projectId)}
                  />
                );
              })}
            </div> :
            <p className="text-white font-light text-4xl text-center mt-10">No {category === "All" ? "" : category} projects found</p>
        }
      </div>
    </div>
  );
};