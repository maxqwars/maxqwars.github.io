// Copyright (C) 2022 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This file is part of @maxqwars/pathogen.
//
// @maxqwars/pathogen is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// @maxqwars/pathogen is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with @maxqwars/pathogen.  If not, see <http://www.gnu.org/licenses/>.

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
