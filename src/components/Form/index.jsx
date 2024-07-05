import { useState } from "react";

const Form = (props) => {

    // Estados individuais para cada input
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [result, setResult] = useState(null);

    // Funções de manipulação para cada input
    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };

    // Função para lidar com a submissão do formulário
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Peso:', weight);
        console.log('Altura:', height);

        const heightInMeters = parseFloat(height) / 100;
        const bmi = parseFloat(weight) / (heightInMeters * heightInMeters);
        console.log(heightInMeters);
        console.log(bmi);
        setResult(bmi.toFixed(2)); // Armazena o resultado no estado
    };


    return (
        <form className="p-3" onSubmit={handleSubmit}>
            <fieldset>
                <legend>Calculador de IMC</legend>
                <div className="mb-3">
                    <label htmlFor="input" className="form-label">Peso</label>
                    <input
                        value={weight}
                        onChange={handleWeightChange}
                        type="text"
                        className="form-control"
                        placeholder="Digite seu peso"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Altura</label>
                    <input
                        value={height}
                        onChange={handleHeightChange}
                        type="text"
                        className="form-control"
                        placeholder="Digite sua altura"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </fieldset>
            {result && (
                <div className="mt-3">
                    <h3>Seu IMC é: {result}</h3>
                </div>
            )}
        </form>

    )
}

export default Form
