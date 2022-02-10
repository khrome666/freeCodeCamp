function MyText(props)
{
    return (
        <p>{props.text}</p>
    );
}

function MyApp()
{
    return (
        <div>
            <h2>This is a journey</h2>
            <MyText text="Mário Almeida" />
        </div>
    );
}

// Visualização
let domContainer = document.querySelector('#app');
ReactDOM.render(<MyApp />, domContainer);
