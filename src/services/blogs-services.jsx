export async function getBlogs() {
    const url = process.env.BASE_API_URL + '/news';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }   