export default function SelectPost({ slug, label = "Select a Post", setValues }) {
	const { SelectControl } = wp.components;
    const { useSelect } = wp.data;
    const { posts } = useSelect((select) => {
        return {
			posts: select( 'core' ).getEntityRecords( 'postType', slug, {
                per_page: -1,
            } ),
		};
    })
    let selectPosts = []
    if (posts && posts.length > 0) {
        selectPosts = posts.map((post) => {
            return {
                label: post.title.rendered,
                value: post.id
            }
        })
        selectPosts.push({ label: 'Select', value: 0})
        selectPosts.sort((a,b) => { 
            if (a.label < b.label) { 
                return -1;
            } 
            if (a.label > b.label) {
                return 1;
            }
            return 0
        })
    }
    return (
        <div>
            {
                posts && posts.length > 0 ?
                <SelectControl
                    label={label}
                    value={ 0}
                    options={selectPosts}
                    onChange={(id) => {
                        const post = selectPosts.find((post) => {  return post.value === Number(id) });
                        setValues(post);
                    }}
                />
                : 
                <p>No posts found</p>
            }
           
        </div>
    )
}