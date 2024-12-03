export async function getAuthors() {
    const url = process.env.BASE_API_URL + `/authors`;
    try {
      const response = await fetch(url, {
        next: {
            revalidate: 80000
        }
      });
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