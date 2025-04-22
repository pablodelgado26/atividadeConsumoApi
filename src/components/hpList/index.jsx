"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./hpList.module.css";

const HPList = () => {
  const url = "https://hp-api.onrender.com/api/characters"; // API URL

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setCharacters(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar personagens na API");
        setError("Não foi possível carregar os personagens. Tente novamente mais tarde.");
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        Carregando personagens...
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        {error}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Personagens de Harry Potter</h1>
      <div className={styles.characterGrid}>
        {characters.map((character) => (
          <div key={character.id} className={styles.characterCard}>
            <div className={styles.imageContainer}>
              <img src={character.image || "data:image/jpeg;base64,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"} alt={character.name} className={styles.image} />
            </div>
            <div className={styles.content}>
              <h2 className={styles.characterName}>{character.name}</h2>
              <p className={styles.house}>Casa: {character.house || "Desconhecida"}</p>
              <p className={styles.actor}>Ator: {character.actor || "Desconhecido"}</p>
              <p className={styles.species}>Espécie: {character.species}</p>
              <p className={styles.gender}>Gênero: {character.gender}</p>
              <p className={styles.dateOfBirth}>Data de Nascimento: {character.dateOfBirth || "Desconhecida"}</p>
              <p className={styles.ancestry}>Ancestralidade: {character.ancestry || "Desconhecida"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HPList;