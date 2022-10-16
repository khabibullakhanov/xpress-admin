import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acAddCrud, acDeleteCrud, acUpdateCrud } from "./Redux/Crud";
import { useSnackbar } from "notistack";

export function Test() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.crud);
  const { enqueueSnackbar } = useSnackbar();
  const [typeHendelSubmit, setTypeHendelSubmit] = useState("Add");
  const [value, setValue] = useState({ name: "" });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const hendelSubmit = (e) => {
    e.preventDefault();
    if (typeHendelSubmit === "Add") {
      const nowDate = new Date().getTime();
      const newUser = {
        id: nowDate,
        name: value.name,
      };
      dispatch(acAddCrud(newUser));
      enqueueSnackbar(`Welcom ${value.name}`, { variant: "success" });
    } else {
      dispatch(acUpdateCrud(value));
      setTypeHendelSubmit("Add");
    }

    setValue({ name: "" });
  };

  return (
    <div >
      <h1>
        CRUD ReactJS + React + Material UI
      </h1>

      <div>
        <form
          onSubmit={hendelSubmit}>
          <input
            value={value.name}
            onChange={(e) => {
              setValue({ ...value, name: e.target.value });
            }}
          />
          <button
            type="submit">
            {typeHendelSubmit}
          </button>
        </form>

        {/* <Box
          sx={{
            width: "100%",
            height: "calc(100% - 55px)",
            overflowY: "auto",
          }}
        > */}
        {users.map((user) => {
          return (
            <div
              key={user.id}>
              <h5>
                {user.name}
              </h5>



              <div>
                <div
                  color="warning"
                  onClick={() => {
                    dispatch(acDeleteCrud(user.id));
                    enqueueSnackbar(`${user.name} deleted`, {
                      variant: "warning",
                    });
                  }}
                >
                  X
                </div>
                <div
                  color="primary"
                  onClick={() => {
                    setTypeHendelSubmit("Edit");
                    setValue(user);
                  }}
                >
                  Edite
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}