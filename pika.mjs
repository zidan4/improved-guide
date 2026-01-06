

async function getPokemonData(name) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    // Check if the response is okay (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Name: ${data.name}`);
    console.log(`Height: ${data.height}`);
    
  } catch (error) {
    // This will catch the EAI_AGAIN error you saw earlier
    if (error.code === 'EAI_AGAIN') {
      console.error('DNS Lookup failed. Check your internet connection.');
    } else {
      console.error('An error occurred:', error.message);
    }
  }
}

getPokemonData('pikachu');
