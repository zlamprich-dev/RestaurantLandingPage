(function createPageLayout() {
    let contentPane = document.getElementById("content");

}());

function createContentArea(){
    let contentPane = document.getElementById("content");
    let heroImgDiv = document.createElement("div");
    let heroImgTextDiv = document.createElement("div");

    contentPane.append(heroImgDiv);
    heroImgDiv.append(heroImgTextDiv);

}