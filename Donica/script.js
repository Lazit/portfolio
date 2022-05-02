const projectList = document.querySelectorAll(".project");

const leftBtnList = [];
const rightBtnList = [];
const img = [];
const indicator = [];
const indexList = [];
const maxIndexList = [];


projectList.forEach(project => {
    leftBtnList.push(project.querySelector(".left"));
    rightBtnList.push(project.querySelector(".right"));
    img.push(project.querySelectorAll(".slide .slide-img"));
    indicator.push(project.querySelectorAll(".slide-box .box"));
    indexList.push(0);
    maxIndexList.push(project.querySelectorAll(".slide .slide-img").length - 1);
});

// new
const handleLeftBtn = (i) => {
    const prev = indexList[i] - 1 < 0 ? maxIndexList[i] : indexList[i] - 1;

    img[i][indexList[i]].classList.toggle("active");
    img[i][prev].classList.toggle("active");

    indicator[i][indexList[i]].classList.toggle("active");
    indicator[i][prev].classList.toggle("active");

    indexList[i] = prev;
}

const handleRightBtn = (i) => {
    const next = indexList[i] + 1 <= maxIndexList[i] ? indexList[i] + 1 : 0;

    img[i][indexList[i]].classList.toggle("active");
    img[i][next].classList.toggle("active");

    indicator[i][indexList[i]].classList.toggle("active");
    indicator[i][next].classList.toggle("active");

    indexList[i] = next;
}

const handleParam = (index, index2) => {
    if(indexList[index] == index2) return;

    img[index][indexList[index]].classList.toggle("active");
    img[index][index2].classList.toggle("active");

    indicator[index][indexList[index]].classList.toggle("active");
    indicator[index][index2].classList.toggle("active");

    indexList[index] = index2;
}

leftBtnList.forEach((e, index) => {
    e.addEventListener("click", () => handleLeftBtn(index));
});
rightBtnList.forEach((e, index) => {
    e.addEventListener("click", () => handleRightBtn(index));
});
indicator.forEach((e, index) => {
    e.forEach((param, index2) => {
        param.addEventListener("click", () => handleParam(index, index2));
    })
})

const headerList = document.querySelectorAll(".project-header");

const handleHeaderClick = (e) => {
    const parent = e.parentNode;
    const projectBody = parent.querySelector(".project-body");
    if (projectBody.clientHeight) {
        projectBody.style.height = 0;
    } else {
        projectBody.style.height = projectBody.scrollHeight + 'px';
    }
}

headerList.forEach(element => {
    element.addEventListener("click", () => handleHeaderClick(element));
});


// https://horrorkist.github.io/clone-donicaida/ 참고

