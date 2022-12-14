import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return(`
       <ul class="list-group articles">
         ${
        posts.map(p => {
            return(PostSummaryItem(p));
        }).join('')
    }
      </ul>
   `);
}
export default PostSummaryList;