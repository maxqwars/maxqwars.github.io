import "simple-jekyll-search";

export default async function initSimpleJekyllSearch() {

  const $searchInput = document.getElementById("search-input")

  if ($searchInput !== null) {
    document.getElementById("search-input").focus()
    var sjs = SimpleJekyllSearch({
      searchInput: document.getElementById("search-input"),
      resultsContainer: document.getElementById("results-container"),
      json: "/search.json",
    });
  }

}
