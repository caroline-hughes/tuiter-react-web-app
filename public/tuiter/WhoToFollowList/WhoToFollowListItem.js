const WhoToFollowListItem = (who) => {
    return(`

    <li class="list-group-item">
        <div class="row">
            <div class="col-sm-3 col-md-3 col-xl-3 col-xxl-3 m-auto">
                <img class="follow-icon rounded-circle" src="../images/${who.avatarIcon}"/>
            </div>
            <div class="col-sm-5 col-md-5 col-xl-5 col-xxl-5 m-auto">
                <div class="row">
                    <div class="col-auto fw-bold p-0">${who.userName} </div>
                    <i class="col fa-solid fa-circle-check m-auto"></i>
                </div>
                <div class="row"><div class="col-12 p-0">@${who.handle} </div></div>
            </div>
            <div class="col-sm-4 col-md-4 col-xl-4 col-xxl-4 m-auto"><button class="btn btn-primary rounded-pill float-end">Follow</button> </div>
        </div>
    </li>
    
    `);
}
export default WhoToFollowListItem;