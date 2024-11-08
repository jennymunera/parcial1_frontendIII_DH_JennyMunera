import {useState} from "react";
import styles from './Formulario.module.css';
import Card from './Card';



function Formulario() {
    const [formData, setFormData] = useState({
        nombre:"",
        apellido:"",
        edad:0,
        corredorFavorito:"",
        constructorFavorito:"",
        pistaFavorita:""
    });

    const [showCard, setShowCard] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
        if (parseInt(formData.edad) <= 18 || isNaN(parseInt(formData.edad))) {
            setErrorMessage('Por favor chequea que la información sea correcta');
            setShowCard(false);
            return;
        }
        if (formData.corredorFavorito.length < 2 || formData.corredorFavorito.startsWith(' ')) {
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
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>Apellido:</label>
                    <input
                        type="text"
                        name="apellido"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>Edad:</label>
                    <input
                        type="number"
                        name="edad"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>Corredor Favorito:</label>
                    <input
                        type="text"
                        name="corredorFavorito"
                        value={formData.favoriteDriver}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>Constructor Favorito:</label>
                    <input
                        type="text"
                        name="constructorFavorito"
                        value={formData.favoriteTeam}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>Pista Favorita:</label>
                    <input
                        type="text"
                        name="pistaFavorita"
                        value={formData.favoriteTrack}
                        onChange={handleChange}
                    />
                </div>
            <button type="submit">Enviar</button>
            </form>
    
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            {showCard && (
                <Card
                    nombre={formData.nombre}
                    apellido={formData.apellido}
                    corredorFavorito={formData.corredorFavorito}
                    constructorFavorito={formData.constructorFavorito}
                    pistaFavorita={formData.pistaFavorita}
                />
            )}
        </div>
    );
};

export default Formulario;