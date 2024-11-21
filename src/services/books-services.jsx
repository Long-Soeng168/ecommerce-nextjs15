export async function getNewArrivalBooks() {
  const url = process.env.BASE_API_URL + `/books_new_arrival`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch New Arrival Books : ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

export async function getBestSellingBooks() {
  const url = process.env.BASE_API_URL + `/books_best_selling`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch Best Selling Books : ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
    return null;
  }
}
 