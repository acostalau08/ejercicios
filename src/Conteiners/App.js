import '../Styles/App.css';
import ClassComponent from '../Components/ClassComponent';
import FunctionComponent from '../Components/FunctionComponent';

function App() { < div className = 'App' >
        <
        h3 > Invitados: < /h3>   <
    ClassComponent nombre = "Nicolas"
    estaEnLista = { true }
    / > <
    ClassComponent nombre = "Laura"
    estaEnLista = { false }
    / > <
    ClassComponent nombre = "Camila"
    estaEnLista = { true }
    / > <
    ClassComponent nombre = "Sofia"
    estaEnLista = { true }
    / > <
    h3 > Tareas: < /h3>  <
    FunctionComponent nombre = "Nicolas"
    tarea = "papas Fritas" / >
        <
        FunctionComponent nombre = "Sofia"
    tarea = "pizza" / >
        <
        FunctionComponent nombre = "Camila"
    tarea = "Cerveza" / >
        <
        /div >
}

export default App;