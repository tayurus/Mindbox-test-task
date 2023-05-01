import React, {
  FC,
  useState,
  useCallback,
  useEffect,
  ChangeEvent,
} from "react";
import "./style.scss";
import { cn } from "src/helpers/bem";

const b = cn("invites");

type Props = {
  invites: string[];
  onAdd: (name: string) => void;
};

export const Invites: FC<Props> = ({ invites, onAdd }) => {
  const [name, setName] = useState("");
  const handleChangeName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    [setName]
  );
  const handleSubmit = useCallback(() => {
    onAdd(name);
  }, [name, onAdd]);

  useEffect(() => {
    setName("");
  }, [invites]);

  return (
    <div className={b()}>
      <div className={b("form")}>
        <input
          className={b("form-input")}
          onChange={handleChangeName}
          type="text"
          value={name}
        />
        <button
          disabled={name.trim() === ""}
          className={b("form-submit")}
          onClick={handleSubmit}
        >
          Invite
        </button>
      </div>
      <div className={b("delimiter")} />
      <ul className={b("items")}>
        {invites.map((name, index) => (
          <li key={name + index} className={b("item")}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
