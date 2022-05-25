import { FC } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createContext, deleteContext } from "../redux/actions/contexts";
import { useAppSelector } from "../redux/store";

export const Contexts: FC = () => {
  const contexts = useAppSelector(({ contexts }) => contexts);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<{ name: string }>();

  return (
    <section>
      <h2>Contexts</h2>

      <form
        onSubmit={handleSubmit((state) => {
          dispatch(createContext(state));
          reset();
        })}
      >
        <input type="text" placeholder="name" {...register("name")} />
        <button>create context</button>
      </form>
      <ul>
        {contexts.map((context) => (
          <li key={context.id}>
            {context.name}{" "}
            <button onClick={() => dispatch(deleteContext({ id: context.id }))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
