import { FC } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createProject } from "../redux/actions/projects";
import { useAppSelector } from "../redux/store";

export const Projects: FC = () => {
  const projects = useAppSelector(({ projects }) => projects);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<{ name: string }>();

  return (
    <section>
      <h2>Projects</h2>
      <form
        onSubmit={handleSubmit((data) => {
          dispatch(createProject(data));
          reset();
        })}
      >
        <input type="text" placeholder="name" {...register("name")} />
        <button>create context</button>
      </form>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </section>
  );
};
