function expandIt(){
    let sqEle=document.getElementById("sq");
    let curW=parseInt(sqEle.offsetWidth);
    console.log("curW:",curW);
    let curH=parseInt(sqEle.offsetHeight);
    console.log("CurH:",curH);
    let newW=curW+5;
    console.log("sum",(curH+5))
    sqEle.offsetWidth=newW;
    console.log("NewW"+sqEle.offsetWidth);
    let newH=curH+5;
    sqEle.offsetHeight=newH;
    console.log("NewH"+sqEle.offsetHeight);
    /*if(true){
        setTimeout(expandIt,40);
    }*/
}