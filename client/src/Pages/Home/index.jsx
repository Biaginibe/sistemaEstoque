import React, { useState, useEffect } from "react";
import "../../styles/global.css";
import { useFetch } from "../../Hooks/useFetch";

import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import useAxios from "axios-hooks";
import UserTable from "../../Components/UserTable";

const Home = () => {
  const [users, setUsers] = useState(null);
  const [forminfo, setFormInfo] = useState(null);
  const [{ data, loading, error }, refetch] = useAxios(
    "http://localhost:3333/user/stock"
  );

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:3333/admin/${id}/deleteUser`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error("Erro!!", error);
      });
  };
  const enableUser = (id, e) => {
    axios
      .put(`http://localhost:3333/admin/${id}/disable_enablePatiente`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setUsers(users);
        refetch();
        // <- o refetch funciona como um atualizador da tabela, mas ao mesmo tempo ele recarrega todos os outros componentes(faz parecer que deu refresh na página)
      })
      .catch((error) => {
        console.error("Erro!!", error);
      });
  };
  const handleSubmit = (e) => {

    e.preventDefault(); 
    // const form = new FormData();
    console.log(forminfo)
    const form = JSON.stringify({
      //constrói estrutura do formulário
      like: forminfo
     
    });
    // form.append('like', forminfo);
    console.log("log do form"+form);
    axios({
      method: "post",
      url: "http://localhost:3333/user/stock/findLike",
      data: form,
      headers: { "Content-Type": "application/json",
     },
    })  
      .then(function (response) {
        //handle success
        console.log(response.data[0].nomeProduto);
        const lmao = response.data;
        setUsers(lmao);
        // setUsers(users.filter((response)=>response));
        
        
      })
      .catch(function (response) {
        //handle error
        console.log(response);
        alert("erro na busca");
      });
  };

  // eventual função pra cancelar fetch
  const externalRefetch = async () => {
    try {
      await refetch();
    } catch (e) {}
  };

  useEffect(() => {
    if (data !== null) {
      setUsers(data);
    }
  }, [data]);

  // console.log(users);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  if (users) {
    return (
      <div className="container">
        <Navbar />

        {loading || !users ? (
          <p>Carregando...</p>
        ) : (
          <div id="form_search" className="table-container">
            <form onSubmit={handleSubmit}>
              <label>
                Buscar:
                <input
                  className="searchbar"
                  type="text"
                  name="search"
                  autoFocus
                  required
                  
                  onChange={(e) =>
                    setFormInfo(e.target.value)
                  } /* atualiza a variável a cada mudança */
                ></input>
              </label>
              <input type="submit" value="Submit" />
            </form>
            <UserTable
              users={users}
              deleteUser={deleteUser}
              enableUser={enableUser}
              title={"Usuários"}
            />
          </div>
        )}
      </div>
    );
  } else return <p>Error!</p>;
};

export default Home;
