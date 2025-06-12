export const genres = [
  { id: 1, name: 'Science Fiction' },
  { id: 2, name: 'Fantasy' },
  { id: 3, name: 'Classic' },
  { id: 4, name: 'Mystery' },
  { id: 5, name: 'Epic' },
  { id: 6, name: 'Historical Fiction' },
  { id: 7, name: 'Romance' },
  { id: 8, name: 'Thriller' },
  { id: 9, name: 'Non-Fiction' },
  { id: 10, name: 'Philosophy' },
  { id: 11, name: 'Memoir' },
  { id: 12, name: 'Adventure' },
];

export function getGenres(genreIds: number[]): string {
  let filterNames: string[] = genreIds
    .map((id) => genres.find((genre) => genre.id === id)) // This still gets the genre objects (or undefined)
    .filter((genre) => genre !== undefined) // This filters out any 'undefined' results
    .map((genre) => genre.name); // This extracts the 'name' property
  return filterNames.join(', ');
}
