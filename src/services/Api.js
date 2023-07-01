const getDataFromApi = () => {
    return (
        fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        const cleanData = data.results.map((obj) => {
          return {
            id: obj.id,
            photo: obj.image,
            name: obj.name,
            species: obj.species,
          };
        });
        return cleanData;
      })
    )
};

export default getDataFromApi;