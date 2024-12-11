export async function getNewArrivalBooks() {
  const url = process.env.BASE_API_URL + `/books_new_arrival`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch New Arrival Books : ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

export async function getBestSellingBooks({ limit } = {}) {
  const url =
    process.env.BASE_API_URL + `/books_best_selling?limit=${limit || ""}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch Best Selling Books : ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

export async function getBooks({
  categoryId = "",
  subCategoryId = "",
  randomOrder = "",
  orderBy = "",
  orderDir = "",
  page = "",
  perPage = "",
  search = "",
  priceFrom = "",
  priceTo = "",
  yearFrom = "",
  yearTo = "",
  authorId = "",
  publisherId = "",
} = {}) {
  const queryParams = new URLSearchParams({
    categoryId,
    subCategoryId,
    randomOrder,
    page,
    search,
    perPage,
    orderBy,
    orderDir,
    priceFrom,
    priceTo,
    yearFrom,
    yearTo,
    authorId,
    publisherId,
  });

  const url = `${process.env.BASE_API_URL}/books?${queryParams}`;
  try {
    const response = await fetch(url, {
      next: {
        revalidate: 3600
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch Books : ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

export async function getBook({ id }) {
  const url = process.env.BASE_API_URL + `/books/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch Book : ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
    return null;
  }
}
