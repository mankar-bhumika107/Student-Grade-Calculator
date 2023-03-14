var target=document.getElementById('btn');
target.addEventListener('click',function(){
    var eng=document.getElementById('eng').value;
    var hin=document.getElementById('hin').value;
    var phy=document.getElementById('phy').value;
    var mat=document.getElementById('mat').value;
   
    var total=Number(eng)+Number(hin)+Number(phy)+Number(mat);
   
    var per=(total*100)/400;  

    if(per>=80 && per<100){
        var grade ="A You are Pass";
    }
    else if(per>=60 && per<79)
    {
        var grade ="B You are Pass";
    }
    else if(per>=40 && per<59)
    {
        var grade ="C You are Pass";
    }
    else 
    {
        var grade="Your are fail";
    }


document.getElementById('text').innerHTML = `Your marks  ${total} Out of 400 <br> Your Percentage is : ${per}%  <br> Your Grade is:  ${grade}` ;

})