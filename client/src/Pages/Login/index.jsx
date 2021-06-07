import { useEffect, useState, useContext } from "react";
import { useFetch, postData } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./css/styles.css";
import { AuthContext } from "../../Context/AuthContext";

/* import "./../../hooks/useFetch"; */
function Login() {
  const [cpf, setCpf] = useState(null); // Setando valor padrão para null
  const [senha, setSenha] = useState(null); // Setando valor padrão para null
  const { results, error, loading, postData } = useFetch(null, null);
  //const context = useContext(AuthContext);
  let history = useHistory();
  const { handleAuth } = useContext(AuthContext);

  const handleSubmit = (e) => {
    // função acionada após botão de submit
    e.preventDefault(); // prevê que a página recarregue

    const formData = JSON.stringify({
      //constrói estrutura do formulário
      cpf: cpf,
      senha: senha,
    });
    /* const formData2 = new FormData('form_login'); */ // uso altenativo sem precisar definir cada variavel dentro da estrutura

    const options = {
      method: "POST",
      body: formData,
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        mode: "cors",
      }),
    };

    postData("https://lsdfinanc.azurewebsites.net/api/Usuario/Login", options); // url de destino dos dados e os dados
  };

  useEffect(() => {
    if (results) history.push("/home");
    history.push("/login");
  }, []);

  useEffect(() => {
    if (error) return alert("Login incorreto");
  }, [error]);

  useEffect(() => {
    if (results !== null)
      if (results[0].Cpf) {
        handleAuth(results[0]);
        history.push("/home");
      }
  }, [results]);

  return (
    <form id="form_login" onSubmit={handleSubmit}>
      {/* chama função handleSubmit ao clicar no botão submit */}
      <h1 id="loginTitle">Control_U</h1>
      <div className="loginContainer">
        <div className="login">
          <label className="login">CPF:</label>
          <input
            className="login"
            type="text"
            name="user_cpf"
            autoFocus
            required
            maxLength="11"
            minLength="11" //validações simples
            pattern="\d*"
            onChange={(e) =>
              setCpf(e.target.value)
            } /* atualiza a variável a cada mudança */
          ></input>

          <label className="login">Senha:</label>
          <input
            className="login"
            type="password"
            name="user_senha"
            required
            minLength="5" //validações simples
            maxLength="20"
            onChange={(e) =>
              setSenha(e.target.value)
            } /* atualiza a variável a cada mudança */
          ></input>
        </div>
        <div id="loginBtn">
          <button
            type="submit"
            disabled={loading ? "disabled" : ""}
            form="form_login"
            value="enviar_login"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </div>
        
      </div>
      <Link id="LinkRegistro" to="/registro">Registrar-se</Link>
      
      
    </form>
  );
}
export default Login;
