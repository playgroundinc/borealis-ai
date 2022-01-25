import selectPostBlock from '../reusable/custom-post-column.jsx';

export default function customSelects() {
    selectPostBlock({ icon: 'admin-users', slug: 'author', single: 'Author' });
}