import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row">
            <div class="col-11">
                <div class="input-group mb-3 rounded-pill bg-color-white">
                    <div class="input-group-prepend m-2">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input type="text" class="form-control" placeholder="Search Twitter"/>
                </div>
            </div>
            <div class="col-1 mt-1">
                <a href="#" > <i class="fa-solid fa-gear fa-2x primary"></i> </a>
            </div>
        </div>

        <ul class="nav nav-tabs mt-2">
            <li class="nav-item">
                <a href="for-you.html" class="nav-link active">For You</a>
            </li>
            <li class="nav-item">
                <a href="trending.html" class="nav-link">Trending</a>
            </li>
            <li class="nav-item">
                <a href="news.html" class="nav-link">News</a>
            </li>
            <li class="nav-item">
                <a href="sports.html" class="nav-link">Sports</a>
            </li>
            <li class="nav-item d-none d-lg-block">
                <a href="entertainment.html" class="nav-link">Entertainment</a>
            </li>
        </ul>

        <div class="article-title">
            <img src="../images/spaceship.jpg" class="img-responsive">
            <span class="overlay-text text-xl-left fw-bold">SpaceX's Starship</span>
        </div>
        ${PostSummaryList()}
`);
}
export default ExploreComponent;
