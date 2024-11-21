export async function getBlogs({categoryId} = {}) {
  const url = process.env.BASE_API_URL + `/news?categoryId=${categoryId || ''}&page=`;
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
