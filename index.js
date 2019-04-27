randomNumber1=Math.round(Math.random()*5+1);
randomNumber2=Math.round(Math.random()*5+1);
randomImg1="images\\dice"+randomNumber1+".png";
randomImg2="images\\dice"+randomNumber2+".png";


document.body.getElementsByClassName("img1")[0].setAttribute("src",randomImg1);
document.body.getElementsByClassName("img2")[0].setAttribute("src",randomImg2);
