const NavigationSidebar = () => {
    return(`

            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i>
                </a>
               
               <a class="list-group-item d-flex" href="/">
                    <i class="col-2 fa-sharp fa-solid fa-house mt-1 me-3"></i>
                    <p class="col-10 d-none d-xl-flex m-auto"> Home </p>
               </a>
               
               <a class="list-group-item d-flex" href="/">
                    <i class="col-2 fa-sharp fa-solid fa-hashtag mt-1 me-3"></i>
                    <p class="col-10 d-none d-xl-flex m-auto"> Explore </p>
               </a>
               
                <a class="list-group-item d-flex" href="/">
                    <i class="col-2 fa-solid fa-bell mt-1 me-3"></i>
                    <p class="col-10 d-none d-xl-flex m-auto"> Notifications </p>
               </a>
               
                <a class="list-group-item d-flex" href="/">
                    <i class="col-2 fa-solid fa-envelope mt-1 me-3"></i>
                    <p class="col-10 d-none d-xl-flex m-auto"> Messages </p>
               </a>
               
               <a class="list-group-item d-flex" href="/">
                    <i class="col-2 fa-solid fa-bookmark mt-1 me-3"></i>
                    <p class="col-10 d-none d-xl-flex m-auto"> Bookmarks </p>
               </a>
                
                <a class="list-group-item d-flex" href="/">
                    <i class="col-2 fa-regular fa-list mt-1 me-3"></i>
                    <p class="col-10 d-none d-xl-flex m-auto"> Lists </p>
               </a>
               
                <a class="list-group-item d-flex" href="/">
                    <i class="col-2 fa-solid fa-user mt-1 me-3"></i>
                   <p class="col-10 d-none d-xl-flex m-auto"> Profile </p>
               </a>
               
                <a class="list-group-item d-flex" href="/">
                    <i class="col-2 fa-solid fa-ellipsis mt-1 me-3"></i>
                    <p class="col-10 d-none d-xl-flex m-auto"> More </p>
               </a>
            </div>
            <button class="btn btn-primary rounded-pill w-100 mt-2">Tuit</button>
 `);
}
export default NavigationSidebar;