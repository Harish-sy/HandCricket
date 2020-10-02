let userscore = 0;
let computerscore=0;
const tossdiv   = document.getElementById("toss");
const buttonodd = document.getElementById("odd");
const buttoneven = document.getElementById("even");
const tossstatus = document.getElementById("tossstatus");
const tossresult = document.getElementById("tr");
const tosspics  = document.getElementById("tosspics")
const doketoss = document.getElementById("zerotoss");
const onetoss = document.getElementById("onetoss");
const twotoss = document.getElementById("twotoss");
const threetoss = document.getElementById("threetoss");
const fourtoss = document.getElementById("fourtoss");
const fivetoss = document.getElementById("fivetoss");
const sixtoss = document.getElementById("sixtoss");
const fieldstatus = document.getElementById("fieldstatus");
const fieldresult = document.getElementById("fr");
const imguser  = document.getElementById("imguser");
const imgcomp = document.getElementById("imgcomp");
const choose = document.getElementById("choose");
const choosebat =document.getElementById("bat");
const choosebowl =document.getElementById("bowl");
const userid = document.getElementById("userid");
const computerid = document.getElementById("computerid");
const doke_bat_first = document.getElementById("zero_bat_first");
const one_bat_first = document.getElementById("one_bat_first");
const two_bat_first = document.getElementById("two_bat_first");
const three_bat_first = document.getElementById("three_bat_first");
const four_bat_first = document.getElementById("four_bat_first");
const five_bat_first = document.getElementById("five_bat_first");
const six_bat_first = document.getElementById("six_bat_first");
const doke_bowl_first = document.getElementById("zero_bowl_first");
const one_bowl_first = document.getElementById("one_bowl_first");
const two_bowl_first = document.getElementById("two_bowl_first");
const three_bowl_first = document.getElementById("three_bowl_first");
const four_bowl_first = document.getElementById("four_bowl_first");
const five_bowl_first = document.getElementById("five_bowl_first");
const six_bowl_first = document.getElementById("six_bowl_first");
const doke_bat_second = document.getElementById("zero_bat_second");
const one_bat_second = document.getElementById("one_bat_second");
const two_bat_second = document.getElementById("two_bat_second");
const three_bat_second = document.getElementById("three_bat_second");
const four_bat_second = document.getElementById("four_bat_second");
const five_bat_second = document.getElementById("five_bat_second");
const six_bat_second = document.getElementById("six_bat_second");
const doke_bowl_second = document.getElementById("zero_bowl_second");
const one_bowl_second = document.getElementById("one_bowl_second");
const two_bowl_second = document.getElementById("two_bowl_second");
const three_bowl_second = document.getElementById("three_bowl_second");
const four_bowl_second = document.getElementById("four_bowl_second");
const five_bowl_second = document.getElementById("five_bowl_second");
const six_bowl_second = document.getElementById("six_bowl_second");
const icons_bat_first = document.getElementById("icons_bat_first");
const icons_bowl_first = document.getElementById("icons_bowl_first");
const icons_bat_second = document.getElementById("icons_bat_second");
const icons_bowl_second = document.getElementById("icons_bowl_second");
const result = document.getElementById("result");    
const refresh = document.getElementById("refresh");
const tapbat_first = document.getElementById("tapbat_first");
const tapbowl_first = document.getElementById("tapbowl_first");
const tapbat_second = document.getElementById("tapbat_second");
const tapbowl_second = document.getElementById("tapbowl_second");
const targettext = document.getElementById("targettext");
const targeth = document.getElementById("targeth");
const trnext = document.getElementById("trnext");
/*------------------------------ Declaration process--------------------------------------------------- */
/*------------------------------Computer Selections-------------------------------------------------------*/
function computer(){
    const choices = ["0","1","2","3","4","5","6"];
    const randomnumber = Math.floor(Math.random() * 7);
    return choices[randomnumber];
}
function computerfieldselection(){
    const field = ["bat","bowl"];
    const randomfield = Math.floor(Math.random()*2);
    return field[randomfield];
}
/* ------------------------------Get choices and numbers randomly from computer-----------------------*/
/*======================================================================================================*/
/* -------------------------------oddman evenman functions for toss process---------------------------*/
function evenman(usereventosschoice){
  const computereventosschoice = computer();
  const totalevenmantoss = Number(computereventosschoice) + Number(usereventosschoice);
  if(totalevenmantoss % 2 == 0){
         tosswin();
    }
    else{
         tossloss();
     }
};
function oddman(useroddtosschoice){
   const computeroddtosschoice = computer();
    const totaloddmantoss = Number(computeroddtosschoice) + Number(useroddtosschoice);
    if(totaloddmantoss % 2 != 0){
     tosswin();
     }
    else{
     tossloss();
    }
}
/*------------------------------------------------------------------------------------------------------*/
  function odd(){
     buttoneven.disabled = true;
     tosspics.style.display = "block";
    doketoss.addEventListener("click",function(){oddman(0)})
   onetoss.addEventListener("click",function(){oddman(1)});
   twotoss.addEventListener("click",function(){oddman(2)});
   threetoss.addEventListener("click",function(){oddman(3)});
   fourtoss.addEventListener("click",function(){oddman(4)});
   fivetoss.addEventListener("click",function(){oddman(5)});
   sixtoss.addEventListener("click",function(){oddman(6)});
}/*---------------------- Get numbers from user for odd selection process------------------------------*/
  function even(){
    buttonodd.disabled = true;
    tosspics.style.display = "block";
    doketoss.addEventListener("click",function(){evenman(0)});
    onetoss.addEventListener("click",function(){evenman(1)});
    twotoss.addEventListener("click",function(){evenman(2)});
    threetoss.addEventListener("click",function(){evenman(3)});
    fourtoss.addEventListener("click",function(){evenman(4)});
    fivetoss.addEventListener("click",function(){evenman(5)});
    sixtoss.addEventListener("click",function(){evenman(6)});
}/*-----------------------Get numbers from user for even selection process-----------------------------*/
 /*-------------------------------Tosswin Function------------------------------------------------------*/
function tosswin(){
    tossdiv.style.display="none";
    tosspics.style.display="none";
    userselection();
}/*---------------------------------Tosslose Function--------------------------------------------------*/
function tossloss(){
    tossdiv.style.display="none";
    tosspics.style.display="none";
  computerselection();
}
/*---------------------------------user-field selection process--------------------------------------*/
function userselection(){
 tossresult.innerHTML = "You Won the Toss";    /*userselection -> userfieldseltion*/
 choose.style.display = "block";
}
function userfieldselection(userfield){
    if( userfield === "bat"){
        trnext.style.display = "block";
        trnext.innerHTML = "Chooses to bat first"; 
        choose.style.display = "none";
        firstcase();
         }
       else{
        trnext.style.display = "block";
        trnext.innerHTML = "Chooses to bowl first"; 
        choose.style.display = "none";
        secondcase();
     }
}
/*-----------------------------Bat and Bowl Buttons for userfield selection---------------------------*/
choosebat.addEventListener("click",function(){userfieldselection("bat")});
choosebowl.addEventListener("click",function(){userfieldselection("bowl")});
 /*--------------------------------Computer-field selection process------------------------------------*/
 function computerselection(){
 const computerfield = computerfieldselection() 
 if("bat" == computerfield){
    tossresult.innerHTML = "You Lost the Toss";
    trnext.style.display = "block";
    trnext.innerHTML = "Computer chooses to Bat first";
   secondcase();
    }
 else{
      tossresult.innerHTML = "You Lost the Toss"
      trnext.style.display = "block";
      trnext.innerHTML="Computer Chooses to Bowl first"; 
      firstcase();
     }
}
/*-------------------------Bat and Bowl selection randomly from computer-------------------------------*/
buttonodd.onclick = odd;
buttoneven.onclick = even;
/*---------------------------Odd and Even Buttons------------------------------------------------------*/
/*=====================================================================================================*/
/*----------------------------------CASES--------------------------------------------------------------*/
/*-------------------------Firstcase:firstbatting()----------------------------------------------------*/
/*-------------------------Secondcase:firstbowling()---------------------------------------------------*/
/*=====================================================================================================*/
/*-----------------------------First Case-------------------------------------------------------------*/
function firstcase(){
   tapbat_first.style.display = "inline-block";
   tapbat_first.onclick = main_first;
}
     function main_first(){
       tapbat_first.style.display = "none";
       icons_bat_first.style.display="block";
       function firstinnings_first(num){
      const userbattingchoice = num; 
      const computerbowlingchoice =computer();
      if(computerbowlingchoice==0){imgcomp.innerHTML="✊🏼"};
      if(computerbowlingchoice==1){imgcomp.innerHTML="☝🏼"};
      if(computerbowlingchoice==2){imgcomp.innerHTML="✌🏼"};
      if(computerbowlingchoice==3){imgcomp.innerHTML="👌🏼"};
      if(computerbowlingchoice==4){imgcomp.innerHTML="🤚🏼"};
      if(computerbowlingchoice==5){imgcomp.innerHTML="🖐🏼"};
      if(computerbowlingchoice==6){imgcomp.innerHTML="👍🏼"};
      fieldresult.innerHTML = "You're Batting now";
      tossstatus.style.display = "none";
      if(computerbowlingchoice != userbattingchoice && computerscore==0){
       userscore=Number(userscore)+Number(userbattingchoice);
       userid.innerHTML = userscore;
       }
   else{
       
        result.innerHTML = "You Out in " +userscore+ " runs";
        targettext.style.display = "block";
        const target = Number(userscore) + Number(1)
        targeth.innerHTML="Computer-Target : " + target;
        fieldresult.innerHTML = "You're Bowling Now";
        icons_bat_first.style.display = "none";
        tapbowl_first.style.display = "inline-block";
        tapbowl_first.onclick = maintwo_first;
   }
  }
  doke_bat_first.addEventListener("click",function(){firstinnings_first(0)});
  one_bat_first.addEventListener("click",function(){firstinnings_first(1)});
  two_bat_first.addEventListener("click",function(){firstinnings_first(2)});
  three_bat_first.addEventListener("click",function(){firstinnings_first(3)});
  four_bat_first.addEventListener("click",function(){firstinnings_first(4)});
  five_bat_first.addEventListener("click",function(){firstinnings_first(5)});
  six_bat_first.addEventListener("click",function(){firstinnings_first(6)});
}
      function maintwo_first(){
        tapbowl_first.style.display = "none";
        icons_bowl_first.style.display = "block";
        function secondinnings_first(num){
        const userbowlingchoice = num;
        const computerbattingchoice = computer();
        if(computerbattingchoice==0){imgcomp.innerHTML="✊🏼"};
        if(computerbattingchoice==1){imgcomp.innerHTML="☝🏼"};
        if(computerbattingchoice==2){imgcomp.innerHTML="✌🏼"};
        if(computerbattingchoice==3){imgcomp.innerHTML="👌🏼"};
        if(computerbattingchoice==4){imgcomp.innerHTML="🤚🏼"};
        if(computerbattingchoice==5){imgcomp.innerHTML="🖐🏼"};
        if(computerbattingchoice==6){imgcomp.innerHTML="👍🏼"};
        
         if(userbowlingchoice != computerbattingchoice ){
          computerscore=Number(computerscore)+Number(computerbattingchoice);
          computerid.innerHTML = computerscore;
        
        }    
        if(computerscore>userscore){
          icons_bowl_first.style.display = "none";
          results_first();
         } 
        
        if(userbowlingchoice == computerbattingchoice)
        {
          icons_bowl_first.style.display = "none";
          results_first();
        }

        if(userbowlingchoice == computerbattingchoice && computerscore==userscore)
        {
          icons_bowl_first.style.display = "none";
          results_first();
        }
       
      }
        function results_first(){
            if(userscore>computerscore){
                result.innerHTML = "You Won The Match";
                targettext.style.display="none";
               const total = userscore - computerscore;
               fieldresult.innerHTML = "You Won in "+total+" runs";
                refresh.style.display="inline-block";
                win.play();
            }
            else if(userscore==computerscore) {
                result.innerHTML = "Match Draw";
                targettext.style.display="none";
                fieldstatus.style.display="none";
                refresh.style.display="inline-block";
                
              

            }
            else{
                result.style.color = "red";
                result.innerHTML = "You lost The Match"
                targettext.style.display="none";
                const total = computerscore - userscore;
                fieldresult.innerHTML = "Computer Won in "+total+" runs";
                 refresh.style.display="inline-block";
                loss.play();
            }
           }
                  doke_bowl_first.addEventListener("click",function(){secondinnings_first(0)});
                  one_bowl_first.addEventListener("click",function(){secondinnings_first(1)});
                  two_bowl_first.addEventListener("click",function(){secondinnings_first(2)});
                  three_bowl_first.addEventListener("click",function(){secondinnings_first(3)});
                  four_bowl_first.addEventListener("click",function(){secondinnings_first(4)});
                  five_bowl_first.addEventListener("click",function(){secondinnings_first(5)});
                  six_bowl_first.addEventListener("click",function(){secondinnings_first(6)});
          } 
          
  /*-------------------------------------Second Case -----------------------------------------------------*/
 function secondcase(){
  tapbowl_second.style.display = "inline-block";
  tapbowl_second.onclick = main_second;
}
  function main_second(){
  tapbowl_second.style.display="none";
  icons_bowl_second.style.display="block";
  function firstinnings_second(a){
     const userbowlingchoice = a;
     const computerbattingchoice = computer();
     if(computerbattingchoice==0){imgcomp.innerHTML="✊🏼"};
     if(computerbattingchoice==1){imgcomp.innerHTML="☝🏼"};
     if(computerbattingchoice==2){imgcomp.innerHTML="✌🏼"};
     if(computerbattingchoice==3){imgcomp.innerHTML="👌🏼"};
     if(computerbattingchoice==4){imgcomp.innerHTML="🤚🏼"};
     if(computerbattingchoice==5){imgcomp.innerHTML="🖐🏼"};
     if(computerbattingchoice==6){imgcomp.innerHTML="👍🏼"};
     fieldresult.innerHTML = "You're Bowling now";
     tossstatus.style.display = "none";
    if(userbowlingchoice != computerbattingchoice && userscore==0){
        computerscore=Number(computerscore)+Number(computerbattingchoice);
        computerid.innerHTML = computerscore;
         }
     else{
        result.innerHTML = "Computer Out in " +computerscore+ " runs";
        targettext.style.display = "block";
        const target =  Number(computerscore) + Number(1)
        targeth.innerHTML = "User-Target : " + target; 
        fieldresult.innerHTML = "You're Batting now";
        icons_bowl_second.style.display = "none";
        tapbat_second.style.display = "inline-block";
        tapbat_second.onclick = maintwo_second;
     }
    }
      doke_bowl_second.addEventListener("click",function(){firstinnings_second(0)});
      one_bowl_second.addEventListener("click",function(){firstinnings_second(1)});
      two_bowl_second.addEventListener("click",function(){firstinnings_second(2)});
      three_bowl_second.addEventListener("click",function(){firstinnings_second(3)});
      four_bowl_second.addEventListener("click",function(){firstinnings_second(4)});
      five_bowl_second.addEventListener("click",function(){firstinnings_second(5)});
      six_bowl_second.addEventListener("click",function(){firstinnings_second(6)});
  }
        function maintwo_second(){
         tapbat_second.style.display= "none";
         icons_bat_second.style.display = "block"
        function secondinnings_second(a){
        const userbattingchoice=a;
        const computerbowlingchoice = computer();
        if(computerbowlingchoice==0){imgcomp.innerHTML="✊🏼"};
        if(computerbowlingchoice==1){imgcomp.innerHTML="☝🏼"};
        if(computerbowlingchoice==2){imgcomp.innerHTML="✌🏼"};
        if(computerbowlingchoice==3){imgcomp.innerHTML="👌🏼"};
        if(computerbowlingchoice==4){imgcomp.innerHTML="🤚🏼"};
        if(computerbowlingchoice==5){imgcomp.innerHTML="🖐🏼"};
        if(computerbowlingchoice==6){imgcomp.innerHTML="👍🏼"};
        
         if(userbattingchoice != computerbowlingchoice ){
         userscore=Number(userscore)+Number(userbattingchoice);
         userid.innerHTML = userscore;
         }
        if(userscore>computerscore){
          icons_bat_second.style.display = "none";
          results_second();
         }
        if(userbattingchoice == computerbowlingchoice ){
          icons_bat_second.style.display = "none";
          results_second();
        }
         
        if(userbattingchoice == computerbowlingchoice && userscore==computerscore){
          icons_bat_second.style.display = "none";
          results_second();
        }
       
        } 
       
          function results_second(){
           if(userscore>computerscore){
              result.innerHTML = "You Won The Match";
              targettext.style.display = "none";
              const total = userscore - computerscore;
              fieldresult.innerHTML = "You Won in "+total+" runs";
              refresh.style.display="inline-block";
              win.play();
             
              }
             else if(userscore==computerscore) {
                 result.innerHTML = "Match Draw";
                 targettext.style.display = "none";
                 fieldstatus.style.display="none";
                 refresh.style.display="inline-block";
                } 
                else{
                 result.style.color = "red";
                 result.innerHTML = "You lost The Match";
                 targettext.style.display = "none";
                 const total = computerscore - userscore;
                 fieldresult.innerHTML = "Computer Won in "+total+" runs";
                 refresh.style.display="inline-block";
                 loss.play();

                    }
                  }
                  doke_bat_second.addEventListener("click",function(){secondinnings_second(0)});
                  one_bat_second.addEventListener("click",function(){secondinnings_second(1)});
                  two_bat_second.addEventListener("click",function(){secondinnings_second(2)});
                  three_bat_second.addEventListener("click",function(){secondinnings_second(3)});
                  four_bat_second.addEventListener("click",function(){secondinnings_second(4)});
                  five_bat_second.addEventListener("click",function(){secondinnings_second(5)});
                  six_bat_second.addEventListener("click",function(){secondinnings_second(6)});
     
                    };
/*--------------------------------------pics-------------------------------------------------------------*/
    function pics(p){
       if(p==0){imguser.innerHTML="✊"};
       if(p==1){imguser.innerHTML="☝"};
       if(p==2){imguser.innerHTML="✌"};
       if(p==3){imguser.innerHTML="👌"};
       if(p==4){imguser.innerHTML="🤚"};
       if(p==5){imguser.innerHTML="🖐"};
       if(p==6){imguser.innerHTML="👍"};
     }
  doke_bat_first.addEventListener("click",function(){pics(0)});
   one_bat_first.addEventListener("click",function(){pics(1)});
   two_bat_first.addEventListener("click",function(){pics(2)});
   three_bat_first.addEventListener("click",function(){pics(3)});
   four_bat_first.addEventListener("click",function(){pics(4)});
   five_bat_first.addEventListener("click",function(){pics(5)});
    six_bat_first.addEventListener("click",function(){pics(6)});

    doke_bowl_first.addEventListener("click",function(){pics(0)});
   one_bowl_first.addEventListener("click",function(){pics(1)});
   two_bowl_first.addEventListener("click",function(){pics(2)});
   three_bowl_first.addEventListener("click",function(){pics(3)});
   four_bowl_first.addEventListener("click",function(){pics(4)});
   five_bowl_first.addEventListener("click",function(){pics(5)});
    six_bowl_first.addEventListener("click",function(){pics(6)});

    doke_bat_second.addEventListener("click",function(){pics(0)});
    one_bat_second.addEventListener("click",function(){pics(1)});
    two_bat_second.addEventListener("click",function(){pics(2)});
    three_bat_second.addEventListener("click",function(){pics(3)});
    four_bat_second.addEventListener("click",function(){pics(4)});
    five_bat_second.addEventListener("click",function(){pics(5)});
     six_bat_second.addEventListener("click",function(){pics(6)});
 
     doke_bowl_second.addEventListener("click",function(){pics(0)});
    one_bowl_second.addEventListener("click",function(){pics(1)});
    two_bowl_second.addEventListener("click",function(){pics(2)});
    three_bowl_second.addEventListener("click",function(){pics(3)});
    four_bowl_second.addEventListener("click",function(){pics(4)});
    five_bowl_second.addEventListener("click",function(){pics(5)});
     six_bowl_second.addEventListener("click",function(){pics(6)});
  /*--------------------------------------Refresh-------------------------------------------------------*/
   refresh.onclick=refreshpage;
   function refreshpage(){
        location.reload();
   }
  /*-------------------------------------Audio----------------------------------------------------------*/ 
   var win = new Audio("audio/win.mp3");
   var loss = new Audio("audio/loss.mp3");
/*--------------------------------------THE END---------------------------------------------------------*/
