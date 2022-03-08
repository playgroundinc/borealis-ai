import { namespace } from "../helper-functions/constants";
import defaultAttrs from "../helper-functions/default-attrs";

export default function selectPostBlock(postObject) {
  const { icon, slug, single, parent } = postObject;
  const { registerBlockType } = wp.blocks;
  const { withSelect } = wp.data;
  const { SelectControl } = wp.components;

  const MySelectControl = ({ post, setAttributes, ...props }) => (
    <SelectControl
      label="Select A Post: "
      value={post ? post : 0}
      options={props.options}
      onChange={(post) => {
        setAttributes({ post: post });
      }}
    />
  );

  const stringAttrs = ["post"];
  const attributes = defaultAttrs(stringAttrs);
  registerBlockType(`${namespace}/select-${slug}`, {
    title: `Select ${single}`,
    description: "Allows user to select a post",
    icon,
    category: "selects",
    attributes,
    parent,
    edit: withSelect((select) => {
      return {
        posts: select("core").getEntityRecords("postType", slug, {
          per_page: -1,
        }),
      };
    })(({ posts, attributes, setAttributes }) => {
      if (!posts) {
        return (
          <div className={`custom-component`}>
            <p className="block-title">{`Select ${single}`}</p>
            <p>Loading...</p>
          </div>
        );
      }

      if (posts && posts.length === 0) {
        return (
          <div className={`custom-component`}>
            <p className="block-title">{`Select ${single}`}</p>
            <p>No Posts</p>
          </div>
        );
      }
      const options = posts.map((post) => {
        return {
          value: post.id,
          label: post.title.rendered,
        };
      });

      options.unshift({ value: 0, label: "Select" });

      return (
        <div className={`custom-component`}>
          <p className="block-title">{`Select ${single}`}</p>
          <MySelectControl
            setAttributes={setAttributes}
            options={options}
            post={attributes.post}
          />
        </div>
      );
    }),
    save: function ({ attributes }) {
      const { post } = attributes;
    },
  });
}
