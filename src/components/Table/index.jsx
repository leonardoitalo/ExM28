const Table = () => {
    return (
        <div className="container w-50 d-flex justify-content-center">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">VALOR DO IMC</th>
                        <th scope="col">CLASSIFICAÇÃO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Menor que 18,5</th>
                        <td >Baixo peso</td>
                    </tr>
                    <tr>
                        <th scope="row">De 18,5 a 24,99</th>
                        <td>Normal</td>
                    </tr>
                    <tr>
                        <th scope="row">De 25 a 29,99</th>
                        <td>Sobre peso</td>
                    </tr>
                    <tr>
                        <th scope="row">Maior que 30</th>
                        <td>Obesidade</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table