import React from "react";
import "./css/table.css"
import { IoIosRemoveCircle } from "react-icons/io";
import { IoTrashBinSharp } from "react-icons/io5";
const UserTable = (props) => {
  return (
    <div className="table-wrapper">
    
      <table className="fl-table">
        <thead>
          <tr>
            
            <th>Nome</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map((user) => {
              const { id, nomeProduto, descricao, quantidade } =
                user;

              return (
                <tr key={id}>
                  
                  <td>{nomeProduto}</td>
                  <td>{descricao}</td>
                  <td>{quantidade}</td>
                 
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
