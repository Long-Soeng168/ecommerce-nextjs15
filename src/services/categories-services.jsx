export async function getCategories({limit} = {}) {
  const url = process.env.BASE_API_URL + `/categories?limit=${limit || ''}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch Categories : ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
    return null;
  }
}
 