import React from "react";
import "./css/table.css"
import { IoIosRemoveCircle } from "react-icons/io";
import { IoTrashBinSharp } from "react-icons/io5";
const UserTable = (props) => {
  return (
    <div className="table-wrapper">
      <div className="page-title">
          <h2>Tabela de {props.title}</h2>
        </div>
      <table className="fl-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Perfil</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map((user) => {
              const { id, nome, cpf, perfil } =
                user;

              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{nome}</td>
                  <td>{cpf}</td>
                  <td>
                    {perfil === 2
                      ? "Psicólogo"
                      : perfil === 3
                      ? "Paciente"
                      : "Administrador"}
                  </td>
                  <td>
                    <div className="btn-table">
                    <button onClick={() => props.deleteUser(id)}>
                      <IoTrashBinSharp size={"20px"} />
                    </button>
                    <button onClick={() => props.enableUser(id)}>
                      <IoIosRemoveCircle size={"20px"} />
                    </button>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4}>No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
