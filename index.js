
    const navbar = document.querySelector('#NavBar');
    // let top = navbar.offsetTop;
    function stickynavbar() {
        // if (window.scrollY >= top) {
        //     navbar.classList.add('sticky');
        // }
        // else {
        //     navbar.classList.remove('sticky');
        // }
    }
    window.addEventListener('scroll', stickynavbar);


    let flag = false;
    const body = document.querySelector('body');

    const theme = document.querySelector("#theme")
    const secondpart = document.querySelector("#secondpart")
    const thirdpart = document.querySelector("#thirdpart")

    function other(){
        flag=!flag;
        console.log(flag)
        
            if (flag===true){
                body.setAttribute("class","bodyWhite");
                secondpart.setAttribute("class","bodyBlack");
                thirdpart.setAttribute("class","bodyBlack");
            } else {
                body.setAttribute("class","bodyBlack")
                secondpart.setAttribute("class","textBlack");
                thirdpart.setAttribute("class","textBlack");
            }
    }
    
    theme.addEventListener('click', other);
