import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

function formatarData(data){//função auxiliadora, não é um componente, por isso inicia com letra minuscula
  return data.toLocaleDateString();

}

function FotoUsuario(props) {
  return (
    <img
      src={props.usuario.fotoUrl}
      alt={props.usuario.fotoNome}
    />
  )
}

function DadosUsuario(props){
  return(
    <div>
      <div>{props.usuario.nome}</div>
      <div>{props.usuario.hobbie}</div>
    </div>
    )
      
}

function InformacoesGerais(props){
  return(
    <div className="InformacaoUsuario">
      <FotoUsuario usuario={props.usuario}/>
      <DadosUsuario usuario={props.usuario}/>
    </div>
  )
}

function Comentarios(props){
  return(
    <div className="Comentario">
    <InformacoesGerais usuario={props.autora}/>
    <div>{props.comentario}</div>
    {formatarData(props.data)}
    </div>
  )
}

const comentario = {
  data: new Date(),
  comentario:"Esse é o comentário",
  autora: {
    nome: "Alice",
    hobbie: "Patinar",
    fotoUrl:"https://www.folhavitoria.com.br/geral/blogs/petblog/wp-content/uploads/2017/12/0512-Gatinho-chegou.jpg",
    fotoNome: "Foto gatinho"
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Comentarios
    data={comentario.data}
    comentario={comentario.comentario}
    autora={comentario.autora}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
