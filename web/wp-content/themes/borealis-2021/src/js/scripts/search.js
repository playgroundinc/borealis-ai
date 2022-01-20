import SearchBarClass from './classes/class-search';

export default function search() {
    const searchForm = [...document.querySelectorAll('.search-form')];

    if (searchForm && searchForm.length > 0) {
        searchForm.forEach((form) => {
            const SearchBar = new SearchBarClass(form);
            SearchBar.init();
        });
    }
}