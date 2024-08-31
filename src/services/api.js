const delayFetch = (url, options) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fetch(url, options));
    }, options.delay);
  });
};

export async function fetchPokemon(id) {
  try {
    const res = await delayFetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      delay: 500,
    });
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return {
      error: null,
      response: await res.json(),
    };
  } catch (e) {
    return {
      error: e,
      response: null,
    };
  }
}
export async function fetchCat() {
  try {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return {
      error: null,
      response: await res.json(),
    };
  } catch (e) {
    return {
      error: e,
      response: null,
    };
  }
}
