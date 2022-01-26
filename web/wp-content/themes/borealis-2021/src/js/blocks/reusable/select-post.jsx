export default function SelectPost({ slug, label = "Select a Post"}) {
    console.log(slug)
	const { SelectControl } = wp.components;
    const { useSelect } = wp.data;
    const { posts } = useSelect((select) => {
        return {
			posts: select( 'core' ).getEntityRecords( 'postType', slug ),
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
    }
    return (
        <div>
            {
                posts && posts.length > 0 ?
                <SelectControl
                    label={label}
                    value={ 0}
                    options={selectPosts}
                    onChange={(post) => {
                        console.log(post);
                    }}
                />
                : 
                <p>No posts found</p>
            }
           
        </div>
    )
}