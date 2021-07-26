// Global varibales
let date="";
// Element Selectors
const dateInput=document.getElementById("date-input");
const checkBtn=document.querySelector(".check-btn");
const luckyNum=document.getElementById("lucky-num");
const result=document.querySelector(".result");
const policyModal=document.getElementById('alert');
const policyLink=document.getElementById("policyLink");
const numWarning=document.querySelector(".number-warning");
const dateWarning=document.querySelector(".date-warning");
//Event Listeners
dateInput.addEventListener("change",function getDate(e){
    date=e.target.value;
    
})
checkBtn.addEventListener("click",isLucky);
policyLink.addEventListener("click",()=>{
    if(policyModal.classList.contains('closeIt')){
        policyModal.classList.remove("closeIt");
        policyModal.style.display="block";
    }
})

//Functions
function isLucky(e){
    // prevents from refreshing the page on submit
    e.preventDefault();
    
    if(luckyNum.value>=1 && date){
        //console.log(date);
        let sum=0;
        numWarning.innerText="";
        dateWarning.innerText="";
        // Splits date into array by using "-" 
        //adds every element from an array into a variable(sum) using map
        date.split("-").map((element)=>{
        
            for(i of element){
                sum+=Number(i);
                
            
        }
         
    });
    // Checks the if sum of date digits are divisible by lucky number or not
    if(sum%luckyNum.value==0){
        result.innerHTML='<p>Yay!! You are Lucky!</p><img class="lucky-img" id="show-img"  src="images/Celebrating Success.svg" alt="">'
    }
    else{
        result.innerHTML='<p style="text-align:center">Oops! Your Birthdate is not a lucky number</p><img class="lucky-img" width=50% height=50% src="images/Error Plant.svg" alt="">'
    }
    
    }
    else{
        if(luckyNum.value<=0){
            // Gives warning if lucky number input is less or equal to 0
        numWarning.innerText="Enter number greater than or equal to 1";
        }
        if(!date){
            dateWarning.innerText="Enter your birthdate";
        }
        if(date){
            dateWarning.innerText="";
        }
    }
    
    
}
function closePolicy(){
    
        // adds class "closeIt" in policy modal to close the modal
        policyModal.classList.add("closeIt");
        policyModal.addEventListener("transitionend",()=>{
            policyModal.style.display="none";
        })
        
   
    
}
