Vue.component('custom-search-form', {
    template: `
      <form>
        <label for="search">Search</label>
        <input id="search" type="search" pattern=".*\\S.*" required>
        <span class="caret"></span>
      </form>
    `
  });

  new Vue({
    el: '#search-form'
  });