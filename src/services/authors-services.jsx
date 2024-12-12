export async function getAuthors() {
    const url = process.env.BASE_API_URL + `/authors`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch Authors : ${response.statusText}`
        );
      }
      return await response.json();
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }