$(document).ready(function () {
let quizJSON=[
    {
        "title":"When did the programming language C++ came out?",
        "choices":[
            1997,
            1995,
            2000,
            1998
        ],
        "correctAnswer":3,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"When Node.js came out?",
        "choices":[
            2010,
            2011,
            2009,
            2006
        ],
        "correctAnswer":2,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"What brand of laptop do I have?",
        "choices":[
            "HP",
            "Acer",
            "Dell",
            "Lenovo"
        ],
        "correctAnswer":0,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"How old am I?",
        "choices":[
            12,
            20,
            9,
            16
        ],
        "correctAnswer":3,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"How old is Google?",
        "choices":[
            12,
            20,
            18,
            16
        ],
        "correctAnswer":2,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"	Grand Central Terminal, Park Avenue, New York is the world's?",
        "choices":[
           "Central park",
            "Central Gym",
            "Central Class",
            "Central Bus"
        ],
        "correctAnswer":1,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"Divide 10 by half and add ten?",
        "choices":[
            12,
            20,
            18,
            16
        ],
        "correctAnswer":2,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    }
     ,
    {
        "title":"Divide 50 by half and add ten?",
        "choices":[
            12,
            20,
            18,
            16
        ],
        "correctAnswer":3,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"Divide 20 by half and add ten?",
        "choices":[
            12,
            20,
            18,
            16
        ],
        "correctAnswer":0,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"Divide 30 by half and add ten?",
        "choices":[
            12,
            20,
            18,
            16
        ],
        "correctAnswer":1,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"How many months have 28 days?",
        "choices":[
            1,
            2,
            "All of them",
            "Depends if there's a leap year or not."
        ],
        "correctAnswer":2,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"The answer is really big.",
        "choices":[
            
         "THE ANSWER",
            "Really big",
            "An elephant",
            "The data given is insufficient"
        ],
        "correctAnswer":3,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"Potato was introduced to Europe by?",
        "choices":[
            "Dutch",
            "Germans",
            "Germans",
            "Portuguese"
        ],
        "correctAnswer":2,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"Private Sector Mutual Funds in Pakistan were permitted in the year:",
        "choices":[
            1964,
            1993,
            1994,
            2001
        ],
        "correctAnswer":0,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"The 17th Asian Games were held in?",
        "choices":[
            2018,
            2014,
            2016,
            2015
        ],
        "correctAnswer":0,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"Who is the Author of “The Myth of independence”?",
        "choices":[
            "Zulfikar Ali Bhutto",
            "Aysha Jalal",
            "I.H. Qureshi",
            "Shahid Rafique"
        ],
        "correctAnswer":0,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"How many sports were played in summer Olympic 2016?",
        "choices":[
            40,
            24,
            34,
            16
        ],
        "correctAnswer":3,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"How many Sports were in Winter Olympic 2018?",
        "choices":[
            "9 Sports",
            "12 Sports",
            "7 Sports",
            "19 Sports"
        ],
        "correctAnswer":2,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"Ryanair airline belongs to which Country?",
        "choices":[
            "Finland",
            "Switzerland",
            "Ireland",
            "Tajikistan"
        ],
        "correctAnswer":2,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"Easyjet airline belongs to which Country?",
        "choices":[
            "Germany",
            "France",
            "England",
            "Australia"
        ],
        "correctAnswer":0,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"Divide 100 by half and add ten.",
        "choices":[
            12,
            20,
            18,
            16
        ],
        "correctAnswer":1,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"Braathens airline belong to which Country?",
        "choices":[
            "Swedon",
            "Uraguay",
            "Iceland",
            "Norway"
        ],
        "correctAnswer":3,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"Iberia Airline belong to which Country?",
        "choices":[
            "Serbia",
            "Poland",
            "Latvia",
            "Spain"
        ],
        "correctAnswer":2,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"Katla Volcano located in which country?",
        "choices":[
            "Sawaziland",
            "Finiland",
            "England",
            "Iceland"
        ],
        "correctAnswer":2,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title": "What is always coming, but never arrives?",
        "choices":[
            "Tomorrow",
            "Today",
            "Yesterday",
            "Day"
        ],
        "correctAnswer":0,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"What can be broken, but is never held?",
        "choices":[
            "Gold",
            "Pores",
            "Wood",
            "Promise"
        ],
        "correctAnswer":3,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"What can one catch that is not thrown?",
        "choices":[
            "Cold",
            "Fever",
            "Fear",
            "Nothing"
        ],
        "correctAnswer":1,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"What has a head, a tail, but does not have a body?",
        "choices":[
            "Coin",
            "Cone",
            "Corn",
            "Chair"
        ],
        "correctAnswer":0,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"How many Questions you Answered?",
        "choices":[
            12,
            20,
            11,
            "Not Present"
        ],
        "correctAnswer":3,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    },
    {
        "title":"Which room has no walls?",
        "choices":[
            "Mushroom",
            "Dinning room",
            "Grand ROOM",
            "Room"
        ],
        "correctAnswer":0,
        "pointerEvents":false,
        "secondsLeft":20,
        "AnsweredQue":""
    }
]
 quizJSON=JSON.stringify(quizJSON);
const quiz=JSON.parse(quizJSON);
console.log(quiz);
// Json work finished
 
var questionnumber=-1;
let scndsLftOfQueArr=[];
let radioBtnChecked=[];

// Some work for DOM Manipulation start


    $("#mainButton").click(function(){
        $(".quizh1").text("Rules");
        $(".descriptionh3").text("Read the Rules and understand them.");
        $(this).parent().fadeIn();
        $(this).parent().parent().remove();
        $(".info_box").fadeIn();
   });


   $(".quit").click(function(){
    location.reload();
   });

   $(".continue").click(function(){
    $(".quizbody").slideUp(1000);
    $(".questionbody").fadeIn(1000);
    questionnumber++;
    countTotalTime();
    showquestionnum();
    showquestion();
    diablingButtons();
    saveRadioBtnValue();
    // startTimeLeft();
    // checkTODisabelPointer();
   });

   $('.btn').on('mouseenter', function () {
    $(this).addClass('active');
   });
   $('.btn').on('mouseleave', function () {
    $(this).removeClass('active');
   });
   function diablingButtons() {
       if (questionnumber==0) {
         $(".back").addClass('disable');  
       }
       else
       {
         $(".back").removeClass('disable');  
       }
   }
// Some work for DOM Manipulation end

//allowing uncheck the radio button -->
        document.querySelectorAll('input[type=radio][name=option]').forEach((elem) => {
            elem.addEventListener('click', allowUncheck);
            elem.previous = elem.checked;
        });
     

    function allowUncheck(e) {
    if (this.previous) {
        this.checked = false;
    }
    document.querySelectorAll(
        `input[type=radio][name=${this.name}]`).forEach((elem) => {
        elem.previous = elem.checked;
    });
    };
//allowing uncheck the radio button <--

// starting the quiz's logical work
   
   let randomnumber;
   let randomnumarr=[];
   let indexpre=randomnumarr[questionnumber];
   let index =quiz[indexpre];

   //getting the random number function -->
        function getrandomnumber(){
        randomnumber=Math.floor(Math.random()*29)+1;
        };
   //getting the random number function <--

     //checking the Random Number for not getting same number -->
     function checkRandomNumber() {
         for (let i = 0; i < 31; i++) {     
                getrandomnumber()
                let checkRN= jQuery.inArray( randomnumber,  randomnumarr);
                if (checkRN==-1) {
                    randomnumarr[questionnumber]=randomnumber;
                    break;
                }
                }
                indexpre=randomnumarr[questionnumber];
                index =quiz[indexpre]
     }        
    //checking the Random Number for not getting same number <--


    //showing the QUESTIONS function -->
     function showquestion() {
         radioButtons = $("input:radio[name='option']");
         if (questionnumber<randomnumarr.length) {
             indexpre=randomnumarr[questionnumber];
             index =quiz[indexpre]
            $(".que_text").text(index.title);
            $("label").eq(0).text(index.choices[0]);
            $("label").eq(1).text(index.choices[1]);
            $("label").eq(2).text(index.choices[2]);
            $("label").eq(3).text(index.choices[3]);
            for (var x = 0; x < radioButtons.length; x++) {
                var idVal = $(radioButtons[x]).attr("id");
                radioBtnCheckedVal=$("label[for='"+idVal+"']").text();
                if (radioBtnCheckedVal === radioBtnChecked[questionnumber]) {
                    radioButtons[x].checked = true;
                }
                if (radioBtnChecked[questionnumber]===" ") {
                    radioButtons[x].checked = false;
                }
            }
            if (questionnumber>0) {
                 resetingTheTime();
             }
             startTimeLeft();
        }
        else
        {
             checkRandomNumber();
            $(".que_text").text(index.title);
            $("label").eq(0).text(index.choices[0]);
            $("label").eq(1).text(index.choices[1]);
            $("label").eq(2).text(index.choices[2]);
            $("label").eq(3).text(index.choices[3]);
            $("input:radio[name='option']").each(function(i) {
                this.checked = false;
            }); 
            console.log(index.correctAnswer);
            if (questionnumber>0) {
                 resetingTheTime();
             }
             startTimeLeft();
        } 
     };
     //showing the QUESTIONS function <--



    //  starting the time of question start function-->
    let secondSetInterval;
    let width;
    function startTimeLeft() {
      secondSetInterval = setInterval(function () {
          index.secondsLeft-=1;
          width=(index.secondsLeft/20)*100;
        //   $(".time_line").css(
        //       {
        //           "width":`${width}%`,
        //           "transition": "width 1s linear"
        //       }
        //   )
            if (index.secondsLeft<10) {
              $(".timer_sec").text("0" + index.secondsLeft);
            }
            else
            {
                $(".timer_sec").text(index.secondsLeft); 
            }
            if (index.secondsLeft==0) {
            $(".option_list").addClass("pointerNone");
            index.pointerEvents=true;
            $(".quiz_box").prepend(`<marquee id="marquee" class="marquee my-2" width="100%" direction="right" height="20px">
            You cannot select any option Now.
            </marquee>`);
            // $(".time_line").hide();
            clearInterval(secondSetInterval);
            }
      },1000);
    };
    //  starting the time of question end function <--


    //  resetting the time of question start function -->
    function resetingTheTime() {
      clearInterval(secondSetInterval);
      secondsForTimeOut=index.secondsLeft;
     scndsLftOfQueArr[questionnumber] = index.secondsLeft;
      secondCount = index.secondsLeft;
      $(".timer_sec").text(index.secondsLeft);    
    };
    //  resetting  the time of question end function <--


    //  starting the time of question start function-->
    let totalSetInterval;
    let totaltime=0;
    function countTotalTime() {
      totalSetInterval = setInterval(function () {
          totaltime+=1;
      },1000);
    };
    //  starting the time of question end function <--


    //  calculating the score and storing the checked values in-->
    let radioBtnCheckedVal;
    function saveRadioBtnValue() {
        $("input:radio[name='option']").each(function(i){
            if($(this).is(':checked'))
            {
                var idVal = $(this).attr("id");
                radioBtnCheckedVal=$("label[for='"+idVal+"']").text();
                return false;
            }
            else{
                radioBtnCheckedVal=" "
            }
        });
          var userAns = radioBtnCheckedVal;
        radioBtnChecked[questionnumber] = userAns;
    }
    // calculating the score <--

     //showing the QUESTIONS Number function -->
     function showquestionnum() {
          $(".QNO").text(questionnumber+1 + " ");
     }
     //showing the QUESTIONS Number function <--


// ending the quiz's logical work

// adding the functionalities to buttons starts

$(".back").click(function(){
        if (questionnumber<20 && questionnumber>=1) {
            $(".result").hide();
            $(".next").show();
            $(".skip").removeClass('disable');
            $("#marquee").remove();
            saveRadioBtnValue();
            clearInterval(secondSetInterval);
            questionnumber--;
            showquestionnum();
            showquestion();
            diablingButtons();
            if (index.pointerEvents===true) {   
              $(".option_list").addClass("pointerNone");
               $(".quiz_box").prepend(`<marquee id="marquee" class="marquee my-2" width="100%" direction="right" height="20px">
                You cannot select any option Now.
                </marquee>`)
                clearInterval(secondSetInterval);
                $(".timer_sec").text("00");
            }
            else
            {
             $(".option_list").removeClass("pointerNone");   
            }
            
        }
        else
        {
            diablingButtons();
        }
   });


   $(".next, .skip").click(function(){
        if (questionnumber<19) {
            $("#marquee").remove(); 
            clearInterval(secondSetInterval); 
            saveRadioBtnValue();
            questionnumber++;
            showquestionnum();
            showquestion();
            diablingButtons();
            indexpre=randomnumarr[questionnumber];
            index =quiz[indexpre]
            if (index.pointerEvents===true) {   
              $(".option_list").addClass("pointerNone");
              $(".quiz_box").prepend(`<marquee id="marquee" class="marquee my-2" width="100%" direction="right" height="20px">
                You cannot select any option Now.
                </marquee>`)
                clearInterval(secondSetInterval);
                $(".timer_sec").text("00");
            }
            else
            {
             $(".option_list").removeClass("pointerNone");   
            }
        }
        if (questionnumber==19) {
            $(".skip").addClass('disable');
            $(".next").hide();
            $(".result").show();
        }
   });

//    making a function for checking results -->
let CA=0;
let SA=0;
let WA=0;
function checkResults() {
    for (let i = 0; i < randomnumarr.length; i++) {
        let indexpre=randomnumarr[i];
        let index =quiz[indexpre]; 
        if (radioBtnChecked[i]==index.choices[index.correctAnswer]) {
            CA++;
        }  
        else if (radioBtnChecked[i]== " ") {
            SA++;
        }
        else
        {
             WA++;
        }      
    }
}

//    making a function for checking results <--

// CHECKING THE PECENTAGE

let width1=0;
let perc1=0;
function gettingPerc() {
    perc1=(CA/20)*100;
    perc1=Math.round(perc1);
    width1=perc1;
    $(".perc-line").css({
        "width":`${width1}%`,
        "transition": "width 1s linear"
    });

    if (perc1 >= 10 ) {
        alert("You just earned a DLIB NFT. Congratulations!!!");
        location.href = 'http://localhost:3000/mint'
    }  
    else
    {
       
    }  

}

let width2=0;
let perc2=0;
function gettingPercTime() {
    perc2=(totaltime/400)*100;
    width2=perc2;
    $(".time-line").css({
        "width":`${width2}%`,
        "transition": "width 1s linear"
    });
}
// CHECKING THE PECENTAGE




    $(".result").click(function () {
    $(".questionbody").remove();
    $(".resultbody").fadeIn();
    saveRadioBtnValue();
    clearInterval(totalSetInterval);
    checkResults();
    gettingPerc();
    gettingPercTime();
    $(".percentage").text(`${perc1}%`);
    $(".skip-ans-given").text(SA);
    $(".wrong-ans-given").text(WA);
    $(".Correct-ans-given").text(CA);
    $(".time").text(totaltime);
    });
// adding the functionalities to buttons ends
    $(".icons i").click(function () {
        $(this).siblings().css(
            {
                "display" : "none"
            }, 1000);
            $(this).css({
                "color": "#007bff"
            });
    });
    $("library").onclick(function(){
     location.href = 'http://localhost:3000/';
     // document.write("PLEASE RELOAD THE WEB PAGE location.reload doesnot 
   });
});