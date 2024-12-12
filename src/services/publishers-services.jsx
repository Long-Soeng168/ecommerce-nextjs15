export async function getPublishers() {
    const url = process.env.BASE_API_URL + `/publishers`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch Publishers : ${response.statusText}`
        );
      }
      return await response.json();
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }