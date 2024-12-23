export async function getPayments() {
  const url = process.env.BASE_API_URL + `/payments`;
  try {
    const response = await fetch(url, {
      next: {
        revalidate: 3600,
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch payments : ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
    return null;
  }
}