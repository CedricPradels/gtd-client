import { FC } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createNextAction } from "../redux/actions/nextActions";
import { useAppSelector } from "../redux/store";
import { Search } from "./search";

export const NextActions: FC = () => {
  const contexts = useAppSelector(({ contexts }) => contexts);
  const projects = useAppSelector(({ projects }) => projects);
  const nextActions = useAppSelector(({ nextActions }) => nextActions);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<{
    description: string;
    contexts: string[];
    project: string;
  }>();

  return (
    <section>
      <h2>Next Actions</h2>
      <form
        onSubmit={handleSubmit((data) => {
          dispatch(createNextAction(data));
          reset();
        })}
      >
        <input
          type="text"
          placeholder="description"
          {...register("description")}
        />
        <select multiple {...register("contexts")}>
          {contexts.map((context) => (
            <option key={context.id} value={context.id}>
              {context.name}
            </option>
          ))}
        </select>

        <select {...register("project")}>
          <option value="">-- select project --</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
        <button>create action</button>
      </form>

      <Search />
      <ul>
        {nextActions.map((action) => (
          <li key={action.id}>
            {action.description} - {action.contexts.join("/")}
          </li>
        ))}
      </ul>
    </section>
  );
};
