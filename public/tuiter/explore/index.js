import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList";
import ExploreComponent from "../ExploreComponent";

function exploreComponent() {
    $('#wd-explore').append(`
  <div class="row mt-2">
  
       <div class="col-2 col-md-2 col-lg-1 col-xl-2">
        ${NavigationSidebar()}
       </div>
       
        <div class="col-10 col-lg-7 col-xl-6 text-white">
        ${ExploreComponent()}
       </div>
       
       <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white">
        ${WhoToFollowList()}
       </div>
       
      
       
       
       
       
  </div>
   `);
}
$(exploreComponent);

// <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
// <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-10 col-sm-10">
// <div className="col-xxl-4 col-xl-4 col-lg-3 d-none d-lg-block">