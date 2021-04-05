arr=[]
disp=[]
function submit() {
for (let index = 1; index <=4; index++) {
    var name= document.getElementById("name_of_the_student_"+index).value
    arr.push(name)
}
for (let index = 0; index < arr.length; index++) {
    disp.push("<h4>Name-"+arr[index]+"</h4>")
    
}
document.getElementById("submit_button").style.display = "none";
 document.getElementById("sort_button").style.display = "inline-block";
document.getElementById("display_name_with_commas").innerHTML = disp;



}
 function sorting(){
disp.join(" ")
document.getElementById("display_name_with_commas").innerHTML =disp;




 }

