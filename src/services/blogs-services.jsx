// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getBlogs({categoryId, perPage, currentPage, search} = {}) {
  const url = process.env.BASE_API_URL + `/news?categoryId=${categoryId || ''}&perPage=${perPage || ''}&search=${search || ''}&page=${currentPage || ''}`;

  // await sleep(3000);

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 3600
      }
    });
    if(response.status == 404){
      return null;
    }
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

export async function getBlog(id) {
  const url = process.env.BASE_API_URL + "/news/" + id;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch Blogs: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

export async function getBlogCategories() {
  const url = process.env.BASE_API_URL + `/news_categories`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch Blogs: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
    return null;
  }
}
