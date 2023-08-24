
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
    const skillbox1 = document.querySelector('#skillbox1')
    const skillbox2 = document.querySelector('#skillbox2')
    const skillbox3 = document.querySelector('#skillbox3')
    const skillbox4 = document.querySelector('#skillbox4')
    const faqpart = document.querySelector("#faqpart");
    const accordion = document.querySelector("#acordion");
    const accordion1 = document.querySelector("#acordion2");
    const accordion2 = document.querySelector("#acordion3");
    const accordion3 = document.querySelector("#acordion4");
    const accordion4 = document.querySelector("#acordion5");
    const accordion5 = document.querySelector("#acordion6");
    const youtube = document.querySelector("#youtube");
    const i = document.querySelector("#i");


    let one = "bodyBlack";
    let two = "textWhite";
    let three = "textBlack";
    let four = "middleWhite";
    let five = "middleBlack";
    let six = "bodyWhite"


    function other(){
        flag=!flag;
        console.log(flag)
        
            if (flag===true){
                body.classList.add(one)
                i.classList.add("fa-sun")
                secondpart.classList.add(two);
                thirdpart.classList.add(two);
                thirdpart.classList.add(five);
                fifthpart.classList.add(five);
                fifthpart.classList.add(two);
                firstprice.classList.add(five);
                firstpricep.classList.add(two);
                secondprice.classList.add(five);
                secondpricep.classList.add(two);
                skillpart.classList.add(two);
                skillpart.classList.add(five);
                skillbox1.classList.add(five);
                skillbox1.classList.add(two);
                skillbox2.classList.add(five);
                skillbox2.classList.add(two);
                skillbox3.classList.add(five);
                skillbox3.classList.add(two);
                skillbox4.classList.add(five);
                skillbox4.classList.add(two);
                faqpart.classList.add(two);
                faqpart.classList.add(five);
                accordion.classList.add(two);
                accordion1.classList.add(two);
                accordion2.classList.add(two);
                accordion3.classList.add(two);
                accordion4.classList.add(two);
                accordion5.classList.add(two);
                youtube.classList.add(two);
                // youtube.classList.add(five);

                body.classList.remove(six);
                secondpart.classList.remove(three);
                thirdpart.classList.remove(three);
                thirdpart.classList.remove(four)
                fifthpart.classList.remove(four)
                fifthpart.classList.remove(three);
                firstprice.classList.remove(four);
                firstpricep.classList.remove(three);
                secondprice.classList.remove(four);
                secondpricep.classList.remove(three);
                skillpart.classList.remove(three);
                skillpart.classList.remove(four);
                skillbox1.classList.remove(four);
                skillbox1.classList.remove(three);
                skillbox2.classList.remove(four);
                skillbox2.classList.remove(three);
                skillbox3.classList.remove(four);
                skillbox3.classList.remove(three);
                skillbox4.classList.remove(four);
                skillbox4.classList.remove(three);
                faqpart.classList.remove(three);
                faqpart.classList.remove(four);
                accordion.classList.remove(three);
                accordion1.classList.remove(three);
                accordion2.classList.remove(three);
                accordion3.classList.remove(three);
                accordion4.classList.remove(three);
                accordion5.classList.remove(three);
                youtube.classList.remove(three);
                i.classList.remove("fa-moon")
            } else {
                body.classList.add(six);
                secondpart.classList.add(three);
                thirdpart.classList.add(three);
                thirdpart.classList.add(four)
                fifthpart.classList.add(four)
                fifthpart.classList.add(three);
                firstprice.classList.add(four);
                firstpricep.classList.add(three);
                secondprice.classList.add(four);
                secondpricep.classList.add(three);
                skillpart.classList.add(three);
                skillpart.classList.add(four)
                firstprice.classList.add(four);
                firstpricep.classList.add(three);
                skillbox1.classList.add(four);
                skillbox1.classList.add(three);
                skillbox2.classList.add(four);
                skillbox2.classList.add(three);
                skillbox3.classList.add(four);
                skillbox3.classList.add(three);
                skillbox4.classList.add(four);
                skillbox4.classList.add(three);
                faqpart.classList.add(three);
                faqpart.classList.add(four);
                accordion.classList.add(three);
                accordion1.classList.add(three);
                accordion2.classList.add(three);
                accordion3.classList.add(three);
                accordion4.classList.add(three);
                accordion5.classList.add(three);
                youtube.classList.add(three);
                i.classList.add("fa-moon")

                

                body.classList.remove(one)
                secondpart.classList.remove(two);
                thirdpart.classList.remove(two);
                thirdpart.classList.remove(five);
                fifthpart.classList.remove(five);
                fifthpart.classList.remove(two);
                firstprice.classList.remove(five);
                firstpricep.classList.remove(two);
                secondprice.classList.remove(five);
                secondpricep.classList.remove(two);
                skillpart.classList.remove(two);
                skillpart.classList.remove(five);
                skillbox1.classList.remove(five);
                skillbox1.classList.remove(two);
                skillbox2.classList.remove(five);
                skillbox2.classList.remove(two);
                skillbox3.classList.remove(five);
                skillbox3.classList.remove(two);
                skillbox4.classList.remove(five);
                skillbox4.classList.remove(two);
                faqpart.classList.remove(two);
                faqpart.classList.remove(five);
                accordion.classList.remove(two);
                accordion1.classList.remove(two);
                accordion2.classList.remove(two);
                accordion3.classList.remove(two);
                accordion4.classList.remove(two);
                accordion5.classList.remove(two);
                youtube.classList.remove(two);
                i.classList.remove("fa-sun")
            }
    }
    
    theme.addEventListener('click', other);
