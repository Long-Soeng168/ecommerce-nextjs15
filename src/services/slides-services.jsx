export async function getSlides({position} = {}) {
  const url = process.env.BASE_API_URL + `/slides?position=${position || ''}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch Slides : ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
    return null;
  }
}
 