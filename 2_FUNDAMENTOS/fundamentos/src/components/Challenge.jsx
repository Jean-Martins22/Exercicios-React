const Challenge = () => {
    const n1 = 10;
    const n2 = 15;
    const Soma = () => {
        console.log("A soma é", n1 + n2);
    }

    return (
        <div>
            <h2>{n1}</h2>
            <h2>{n2}</h2>
            <div>
                <button onClick={Soma}>Clique aqui para somar {n1} com {n2}</button>
            </div>
        </div>
    )
};

export default Challenge;