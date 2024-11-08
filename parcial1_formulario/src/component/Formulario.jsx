import {useState} from "react";
import styles from "./Formulario.module.css";
import Card from "./Card";



function Formulario(){
    const [formData, setFormData] = useState({
        nombre:"",
        apellido:"",
        edad:0,
        email:"",
        corredorFavorito:"",
        constructorFavorito:"",
        pistaFavorita:""
    });

    const [showCard, setShowCard] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { nombre, value } = e.target;
        setFormData({ ...formData, [nombre]: value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validaciones
        if (formData.nombre.length < 3 || formData.nombre.startsWith(' ')) {
            setErrorMessage('Por favor chequea que la información sea correcta');
            setShowCard(false);
            return;
        }
        if (formData.apellido.length < 3 || formData.apellido.startsWith(' ')) {
            setErrorMessage('Por favor chequea que la información sea correcta');
            setShowCard(false);
            return;
        }
        if (parseInt(formData.edad) <= 0 || isNaN(parseInt(formData.edad))) {
            setErrorMessage('Por favor chequea que la información sea correcta');
            setShowCard(false);
            return;
        }
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(formData.email)) {
            setErrorMessage('Por favor chequea que la información sea correcta');
            setShowCard(false);
            return;
        }
        if (formData.corredorFavorito.length < 3 || formData.corredorFavorito.startsWith(' ')) {
            setErrorMessage('Por favor chequea que la información sea correcta');
            setShowCard(false);
            return;
        }
        if (formData.constructorFavorito.length < 4) {
            setErrorMessage('Por favor chequea que la información sea correcta');
            setShowCard(false);
            return;
        }
        if (formData.pistaFavorita.length < 4) {
            setErrorMessage('Por favor chequea que la información sea correcta');
            setShowCard(false);
            return;
        }

        setShowCard(true);
        setErrorMessage('');
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Apellido:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.apellido}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Edad:</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.edad}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Corredor Favorito:</label>
                    <input
                        type="text"
                        name="favoriteDriver"
                        value={formData.corredorFavorito}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Constructor Favorito:</label>
                    <input
                        type="text"
                        name="favoriteTeam"
                        value={formData.constructorFavorito}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Pista Favorita:</label>
                    <input
                        type="text"
                        name="favoriteTrack"
                        value={formData.pistaFavorita}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    
            {showCard && (
                <Card
                    corredorFavorito={formData.corredorFavorito}
                    constructorFavorito={formData.constructorFavorito}
                    pistaFavorita={formData.pistaFavorita}
                    name={formData.name}
                    lastName={formData.lastName}
                />
            )}
        </div>
    );
};

export default Formulario;