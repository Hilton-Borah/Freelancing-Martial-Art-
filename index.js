
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

    const theme = document.querySelector("#theme");
    const secondpart = document.querySelector("#secondpart");
    const thirdpart = document.querySelector("#thirdpart");
    const fifthpart = document.querySelector("#fifthpart")
    const firstprice = document.querySelector("#firstprice")
    const firstpricep = document.querySelector("#firstpricep")
    const secondprice = document.querySelector("#secondprice")
    const secondpricep = document.querySelector("#secondpricep")
    const skillpart = document.querySelector('#skillpart')

    let one = "bodyBlack";
    let two = "textWhite";
    let three = "textBlack";
    let four = "middleWhite";
    let five = "middleBlack";


    function other(){
        flag=!flag;
        console.log(flag)
        
            if (flag===true){
                body.classList.add("bodyBlack")
                secondpart.classList.add("textWhite");
                thirdpart.classList.add("textWhite");
                thirdpart.classList.add("middleBlack");
                fifthpart.classList.add("middleBlack");
                fifthpart.classList.add("textWhite");
                firstprice.classList.add("middleBlack");
                firstpricep.classList.add("textWhite");
                secondprice.classList.add("middleBlack");
                secondpricep.classList.add("textWhite");
                skillpart.classList.add("textWhite");
                skillpart.classList.add("middleBlack");

                body.classList.remove("bodyWhite");
                secondpart.classList.remove("textBlack");
                thirdpart.classList.remove("textBlack");
                thirdpart.classList.remove("middleWhite")
                fifthpart.classList.remove("middleWhite")
                fifthpart.classList.remove("textBlack");
                firstprice.classList.remove("middleWhite");
                firstpricep.classList.remove("textBlack");
                secondprice.classList.remove("middleWhite");
                secondpricep.classList.remove("textBlack");
                skillpart.classList.remove("textBlack");
                skillpart.classList.remove("middleWhite")
            } else {
                body.classList.add("bodyWhite");
                secondpart.classList.add("textBlack");
                thirdpart.classList.add("textBlack");
                thirdpart.classList.add("middleWhite")
                fifthpart.classList.add("middleWhite")
                fifthpart.classList.add("textBlack");
                firstprice.classList.add("middleWhite");
                firstpricep.classList.add("textBlack");
                secondprice.classList.add("middleWhite");
                secondpricep.classList.add("textBlack");
                skillpart.classList.add("textBlack");
                skillpart.classList.add("middleWhite")


                body.classList.remove("bodyBlack")
                secondpart.classList.remove("textWhite");
                thirdpart.classList.remove("textWhite");
                thirdpart.classList.remove("middleBlack");
                fifthpart.classList.remove("middleBlack");
                fifthpart.classList.remove("textWhite");
                firstprice.classList.remove("middleBlack");
                firstpricep.classList.remove("textWhite");
                secondprice.classList.remove("middleBlack");
                secondpricep.classList.remove("textWhite");
                skillpart.classList.remove("textWhite");
                skillpart.classList.remove("middleBlack");
            }
    }
    
    theme.addEventListener('click', other);
