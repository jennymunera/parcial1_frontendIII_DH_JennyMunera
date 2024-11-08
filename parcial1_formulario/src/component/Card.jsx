/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa";
import { BsPersonVcard } from "react-icons/bs";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { GiF1Car } from "react-icons/gi";
import { SiF1 } from "react-icons/si";


const Card = ({ nombre, apellido, corredorFavorito, constructorFavorito,pistaFavorita }) => {
    return (
        <div className="card">
            <h2><FaUser /> Información del Usuario</h2>
            <p><BsPersonVcard /> Nombre: {nombre}</p>
            <p><BsPersonVcard /> Apellido: {apellido}</p>
            <p><GiFullMotorcycleHelmet /> Corredor Favorito: {corredorFavorito}</p>
            <p><GiF1Car /> Constructor Favorito: {constructorFavorito}</p>
            <p><SiF1 /> Pista Favorita: {pistaFavorita}</p>
        </div>
    );
};

export default Card;