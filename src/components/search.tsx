import { FC } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { contextsMiddleware } from "../redux/middlewares/feature/contexts";
import { useAppSelector } from "../redux/store";

export const Search: FC = () => {
  const contexts = useAppSelector(({ contexts }) => contexts);
  const { register, handleSubmit } = useForm<{ contexts: string[] }>();
  const dispatch = useDispatch();

  return (
    <section>
      <h3>Search</h3>

      <form
        onSubmit={handleSubmit((data) => {
          //   dispatch(setNextActionFilters(data));
        })}
      >
        {contexts.map((context) => (
          <label key={context.id}>
            {context.name}

            <input
              type="checkbox"
              {...register("contexts")}
              value={context.id}
            />
          </label>
        ))}
      </form>
    </section>
  );
};
