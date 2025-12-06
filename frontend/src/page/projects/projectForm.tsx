import {
  Field,
  FieldSet,
  FieldContent,
  FieldGroup,
  FieldLabel
} from "@/component/shadcn/field";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/component/shadcn/dialog";

import { Input } from "@/component/shadcn/input";
import RadioGroup from "@/component/projects/radioGroup";
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from "@/component/shadcn/select";
import { Textarea } from "@/component/shadcn/textarea";
import { Button } from "@/component/shadcn/button";
import { categoryList } from "@/lib/types";
import { useState } from "react";

type ProjectFormProps = {
  onSubmit: (data: any) => void;
  onClose: () => void;
  openAsCreateForm: boolean;
  initialData?: any;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({ onSubmit, onClose, openAsCreateForm, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [difficulty, setDifficulty] = useState(initialData?.difficulty || "Beginner");
  const [category, setCategory] = useState(initialData?.category || categoryList[0]);
  const [thumbnailDesc, setThumbnailDesc] = useState(initialData?.thumbnailDescription || "");
  const [requirementFile, setRequirementFile] = useState<File | null>(null);
  const [startingRepoLink, setStartingRepoLink] = useState(initialData?.startingRepoLink || "");

  function handleSubmit() {
    const formData = {
      title,
      difficulty,
      category,
      thumbnailDescription: thumbnailDesc,
      requirementFile,
      startingRepoLink,
    };
    onSubmit(formData);
  }

  function handleClose() {
    onClose();
  }

  return (
    <DialogContent className="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle>{openAsCreateForm ? "Create New Project" : "Edit Project"}</DialogTitle>
        <DialogDescription>
          Please {openAsCreateForm ? "fill in" : "update"} the project details as below
        </DialogDescription>
      </DialogHeader>
      <DialogDescription>
        <form action="">
          <FieldGroup className="mt-4">
            <FieldSet>
              <FieldLabel>Project Title</FieldLabel>
              <FieldContent>
                <Input
                  value={title}
                  placeholder="Enter project title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FieldContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel>Difficulty</FieldLabel>
                  <FieldContent>
                    <RadioGroup
                      options={["Beginner", "Intermediate", "Advanced"]}
                      selected={difficulty}
                      onClick={(value) => setDifficulty(value)}
                      isHorizontal={true}
                    />
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel>Category</FieldLabel>
                  <FieldContent>
                    <Select value={category} onValueChange={(value) => setCategory(value)}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categoryList.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FieldContent>
                </Field>
              </div>
              <FieldLabel>Thumbnail Description</FieldLabel>
              <FieldContent>
                <Textarea
                  value={thumbnailDesc}
                  placeholder="Enter thumbnail description"
                  onChange={(e) => setThumbnailDesc(e.target.value)}
                />
              </FieldContent>
              <FieldLabel>Requirement File</FieldLabel>
              <FieldContent>
                <Input
                  type="file"
                  onChange={(e) => setRequirementFile(e.target.files?.[0] || null)}
                />
              </FieldContent>
              <FieldLabel>Starting Repository Link</FieldLabel>
              <FieldContent>
                <Input
                  placeholder="Optionally add a starting repository for software maintenance projects"
                  type="url"
                  value={startingRepoLink}
                  onChange={(e) => setStartingRepoLink(e.target.value)}
                />
              </FieldContent>
            </FieldSet>
          </FieldGroup>
          <FieldGroup className="mt-4 flex justify-end space-x-2">
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>
              {openAsCreateForm ? "Create" : "Update"}
            </Button>
          </FieldGroup>
        </form>
      </DialogDescription>
    </DialogContent>
  )
}