
const getRikishiData = async () => {
  const url = 'https://www.sumo-api.com/api/rikishis';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();
    
    console.log(data);
    return data;
  } catch (error) {
    console.error("Impossible de récupérer les données :", error);
  }
};
getRikishiData();


export const findUserById = async (id) => {
    // On ne gère que la base de données ici
    return await db.query("SELECT * FROM users WHERE id = ?", [id]);
};

/*
https://www.sumo-api.com/api/rikishis?shikonaEn=Asanoyama
https://www.sumo-api.com/api/rikishis?heya=Yamahibiki





*/