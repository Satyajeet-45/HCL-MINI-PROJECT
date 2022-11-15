// alert("Loading");
function addnewworkexp(){

    //making nodes

    let newNode=document.createElement('textarea');

    newNode.classList.add('form-control');
    newNode.classList.add('we-field');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder",'More' );

    let weExpOb=document.getElementById("weExp");
    let weAddButtonOb=document.getElementById('weAddButton');

    weExpOb.insertBefore(newNode,weAddButtonOb); 
    
}

function newEdu(){
    let newNode=document.createElement('textarea');

    newNode.classList.add('form-control');
    newNode.classList.add('edu');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder",'More' );

    let ureduOb=document.getElementById("uredu");

    let eduAddButtonOb=document.getElementById("eduAddButton");

    ureduOb.insertBefore(newNode,eduAddButtonOb); 

}

//Gnerating cv code

function generateCV()

{

    // console.log("hey");

    let fname=document.getElementById("fname").value;
    let nameT1=document.getElementById("nameT1")
    nameT1.innerHTML = fname;

        // direct
    document.getElementById('name2T').innerHTML=fname;

    //context
    document.getElementById("contactT").innerHTML=document.getElementById('contactN').value;

    document.getElementById("addressT").innerHTML=document.getElementById('address').value;

    document.getElementById("fbT").innerHTML=document.getElementById('fblink').value;

    document.getElementById("insT").innerHTML=document.getElementById('inslink').value;

    document.getElementById("lkT").innerHTML=document.getElementById('lklink').value;

    
    // objective
    document.getElementById("objectiveT").innerHTML=document.getElementById('objectiveField').value;

    //work experience
    let wes=document.getElementsByClassName('we-field');
    let str="";

    for(let e of wes){
        str=str + `<li> ${e.value} </li>`;
    }

    document.getElementById("wrkexpT").innerHTML=str;

    //Skills

    document.getElementById("skillsT").innerHTML=document.getElementById('skillsField').value;

    //education qualification


    let aqs=document.getElementsByClassName("edu");

    let str1="";

    for(let e of aqs){

        str1=str1 + `<li> ${e.value} </li>`;
    }

    document.getElementById("acadT").innerHTML=str1;

    //Profile Picture

    let file=document.getElementById('imgField').files[0]

    console.log(file);
    
    let reader=new FileReader()
    reader.readAsDataURL(file);

    console.log(reader.result);

    //setting image to template
    reader.onloadend=function(){
        document.getElementById('imgTemplate').src=reader.result;
    }

    document.getElementById("cv-form").style.display="none";

    document.getElementById("cv-template").style.display="block";


}

//print cv
function printCV() {
    window.print();
}