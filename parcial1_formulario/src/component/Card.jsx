/* eslint-disable react/prop-types */
import React from "react";


const Card = ({ nombre, apellido, corredorFavorito, constructorFavorito,pistaFavorita }) => {
    return (
        <div className="card">
            <h2>Información del Usuario</h2>
            <p>Nombre: {nombre}</p>
            <p>Apellido: {apellido}</p>
            <p>Corredor Favorito: {corredorFavorito}</p>
            <p>Constructor Favorito: {constructorFavorito}</p>
            <p>Pista Favorita: {pistaFavorita}</p>
        </div>
    );
};

export default Card;