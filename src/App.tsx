import "./App.css";

function App() {
    const produtos = [
        { titulo: "Red", id: 1 },
        { titulo: "Yellow", id: 2 },
        { titulo: "Orange", id: 3 },
        { titulo: "Blue", id: 4 },
        { titulo: "Green", id: 5 }
    ];

    const lista = produtos.map(produto => (
        <li key={produto.id}>{produto.titulo}</li>
    ));

    return (
        <>
            <h1>Teste</h1>
            <ol>{lista}</ol>
        </>
    );
}

export default App;
