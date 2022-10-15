const PostSummaryItem = (post) => {
    return(`

       <li class="list-group-item">
            <div class="row">
                <div class="col-sm-9 col-md-9 col-xl-9 col-xxl-9 m-auto">
                    <div class="row">
                        <div class="row gray">${post.topic}</div>
                        <div class="col-auto fw-bold p-0">${post.userName}</div>
                        <i class="col-auto fa-solid fa-circle-check m-auto ps-2"></i>
                        <div class="col p-0 gray">- ${post.time} </div>
                        <div class="row fw-bold">${post.title}</div>
                    </div>
                    <div class="row gray">${post.tweets}</div>
                </div>
                <div class="col-sm-2 col-md-2 col-xl-2 col-xxl-2 m-auto p-0">
                    <img class="w-100 rounded" src=${post.image}/>
                </div>
            </div>
        </li>

    
    `);
}
export default PostSummaryItem;