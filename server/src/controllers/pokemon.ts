

export function createPokemon(name: string, level: number) {
  try {
    return JSON.stringify({ "message": "Level: " + level + " Pokemon created. Name: " + name })
  } catch (e: unknown) {
    console.error(`Error creating pokemon: ${e}`);
  }
}