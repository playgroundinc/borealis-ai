import SelectPost from './select-post.jsx';

export default function SelectAuthors({ authors, updateAttributeValue }) {
    const authorsArray = authors !== '' ? JSON.parse(authors) : [];

    const setAuthors = (val) => {
        if (val.label && authorsArray.filter((author) => author.label === val.label).length === 0) {
            val.equal = false;
            updateAttributeValue('authors', JSON.stringify([...authorsArray, val]));
        }
    }

    const updateContribution = (e, index) => {
        e.preventDefault();
        const tempAuthors = authorsArray;
        tempAuthors[index].equal = !tempAuthors[index].equal;
        updateAttributeValue('authors', JSON.stringify(tempAuthors));
    }

    const removeAuthor = (e, index) => {
        e.preventDefault(); 
        const tempAuthors = authorsArray;
        tempAuthors.splice(index, 1);
        updateAttributeValue('authors', JSON.stringify(tempAuthors));
    }
    return (
        <div>
        <h3>Current Authors</h3>
        {
            authorsArray.length > 0 &&
            <ol style={{ padding: '16px'}}>
                { authorsArray.map((author, index) => {
                    return (
                        <li style={{ fontWeight: 700, padding: '4px 0' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ width: '33.33%'}}>{`${author.label}${author.equal ? '*' : ''}`}</span>
                                <button style={{ fontWeight: 400, width: '33.33%', border: 0, padding: '8px 24px' }}onClick={(e) => updateContribution(e, index)}>{ author.equal ? 'Remove Equal Contribution' : 'Add equal contribution' }</button>
                                <button style={{ background: '#F05C5C', width: '33.33%', border: 0, padding: '8px 24px', color: 'white'}} onClick={(e)=> removeAuthor(e, index)}>Remove Author</button>
                            </div>
                        </li>
                    )
                })}
            </ol>
        }
        <h3>Add an Author</h3>
        <SelectPost 
            slug="author"
            setValues={setAuthors}
            label="Select an Author"
        />
    </div>
    )
}