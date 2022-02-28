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

export default class PersonView {
  constructor() {
    this.$widget = document.getElementById("github-widget");
    this.$userName = this.$widget.querySelector("#user-name");
    this.$userBio = this.$widget.querySelector("#user-bio");
    this.$profileImage = this.$widget.querySelector("#user-image");
    this.$userLogin = this.$widget.querySelector("#user-login");
  }

  render(data) {
    this.$userName.innerHTML = data.name;
    this.$userBio.innerHTML = data.bio;
    this.$userLogin.innerHTML = `@${data.login}`;
    this.$profileImage.src = data.avatar_url;
  }
}
