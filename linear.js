var table = document.getElementById("array_table_full");
var table2 = document.getElementById("array_table_one");
var table3 = document.getElementById("array_table_two");
var table4 = document.getElementById("array_table_three");
var table5 = document.getElementById("array_table_four");
var table6 = document.getElementById("array_table_five");
var table7 = document.getElementById("array_table_six");
var table8 = document.getElementById("array_table_seven");
var table9 = document.getElementById("array_table_eight");


var array = [];
var found=0;
var reveal_counter=0;

var hard_count=0;

var compare1 = document.getElementById("compare-one");
var compare2 = document.getElementById("compare-two");
var compare3 = document.getElementById("compare-three");
var compare4 = document.getElementById("compare-four");
var compare5 = document.getElementById("compare-five");
var compare6 = document.getElementById("compare-six");
var compare7 = document.getElementById("compare-seven");
var compare8 = document.getElementById("compare-eight");
var compare9 = document.getElementById("compare-nine");



function hideAll(){
    table2.style.visibility = "hidden";
    table3.style.visibility = "hidden";
    table4.style.visibility = "hidden";
    table5.style.visibility = "hidden";
    table6.style.visibility = "hidden";
    table7.style.visibility = "hidden";
    table8.style.visibility = "hidden";
    table9.style.visibility = "hidden";
    compare2.style.visibility = "hidden";
    compare3.style.visibility = "hidden";
    compare4.style.visibility = "hidden";
    compare5.style.visibility = "hidden";
    compare6.style.visibility = "hidden";
    compare7.style.visibility = "hidden";
    compare8.style.visibility = "hidden";
    compare9.style.visibility = "hidden";
    document.getElementById("found").style.display = "none";

    document.getElementById("not-found").style.display = "none";
    if(array[0] == val){
        document.getElementById("found").style.display = "block";
    }
    else if(val==-1){
        notFound = 1;
    }
}

function run(){
  if(hard_count>0){
    return;
  }
  console.log("ran");
  finalArray= document.getElementById("array_field").value.split(',');
  var result = finalArray.map(function (x) {
    return parseInt(x, 10);
  });
  array=result;
  console.log(array);

  if(array.length != 9){
    alert("PLEASE ENTER A ARRAY OF SIZE 9");
    return;
  }


  var search_for=[];


  search_for = document.getElementById("search_field").value.split(',');
  val=search_for[0];

  if(search_for.length!=1){
    alert("PLEASE ENTER EXACTLY ONE VALUE TO SEARCH FOR");
    return;
  }
  document.getElementById("search").innerHTML = ("Looking for "+val+" in the array:");
  document.getElementById("search").style.fontWeight = 'bold';
  document.getElementById("search").style.fontSize = 'xx-large';
  document.getElementById("search").style.textDecoration = "overline";
  createTable();
  hideAll();

  hard_count+=1
}
function createTable(){
    var row = table.insertRow(0);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    var cell7=row.insertCell(6);
    var cell8=row.insertCell(7);
    var cell9=row.insertCell(8);
    cell1.innerHTML=(array[0]);
    cell2.innerHTML=(array[1]);
    cell3.innerHTML=(array[2]);
    cell4.innerHTML=(array[3]);
    cell5.innerHTML=(array[4]);
    cell6.innerHTML=(array[5]);
    cell7.innerHTML=(array[6]);
    cell8.innerHTML=(array[7]);
    cell9.innerHTML=(array[8]);
    cell1.style.backgroundColor = "orange";
    compare1.innerHTML = "In the Array = " + array[0] + " Value Looking For = "+val;
    //DO STUFF
    if(array[0]!=val){
      createTable2();
    }
    else{
      found=1;
      document.getElementById("found").innerHTML = "The number "+val +" is FOUND at index: 0";
      document.getElementById("found").style.fontWeight = 'bold';
    }
}

function createTable2(){
    var row = table2.insertRow(0);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    var cell7=row.insertCell(6);
    var cell8=row.insertCell(7);
    var cell9=row.insertCell(8);
    cell1.innerHTML=(array[0]);
    cell2.innerHTML=(array[1]);
    cell3.innerHTML=(array[2]);
    cell4.innerHTML=(array[3]);
    cell5.innerHTML=(array[4]);
    cell6.innerHTML=(array[5]);
    cell7.innerHTML=(array[6]);
    cell8.innerHTML=(array[7]);
    cell9.innerHTML=(array[8]);
    cell2.style.backgroundColor = "orange";
    compare2.innerHTML = "In the Array = " + array[1] + " Value Looking For = "+val;
    //DO STUFF
    if(array[1]!=val){
      createTable3();
    }
    else{
      found=1;
      document.getElementById("found").innerHTML = "The number "+val +" is FOUND at index: 1";
      document.getElementById("found").style.fontWeight = 'bold';
    }
}

function createTable3(){
    var row = table3.insertRow(0);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    var cell7=row.insertCell(6);
    var cell8=row.insertCell(7);
    var cell9=row.insertCell(8);
    cell1.innerHTML=(array[0]);
    cell2.innerHTML=(array[1]);
    cell3.innerHTML=(array[2]);
    cell4.innerHTML=(array[3]);
    cell5.innerHTML=(array[4]);
    cell6.innerHTML=(array[5]);
    cell7.innerHTML=(array[6]);
    cell8.innerHTML=(array[7]);
    cell9.innerHTML=(array[8]);
    cell3.style.backgroundColor = "orange";
    compare3.innerHTML = "In the Array = " + array[2] + " Value Looking For = "+val;
    //DO STUFF
    if(array[2]!=val){
      createTable4();
    }
    else{
      found=1;
      document.getElementById("found").innerHTML = "The number "+val +" is FOUND at index: 2";
      document.getElementById("found").style.fontWeight = 'bold';
    }
}

function createTable4(){
    var row = table4.insertRow(0);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    var cell7=row.insertCell(6);
    var cell8=row.insertCell(7);
    var cell9=row.insertCell(8);
    cell1.innerHTML=(array[0]);
    cell2.innerHTML=(array[1]);
    cell3.innerHTML=(array[2]);
    cell4.innerHTML=(array[3]);
    cell5.innerHTML=(array[4]);
    cell6.innerHTML=(array[5]);
    cell7.innerHTML=(array[6]);
    cell8.innerHTML=(array[7]);
    cell9.innerHTML=(array[8]);
    cell4.style.backgroundColor = "orange";
    compare4.innerHTML = "In the Array = " + array[3] + " Value Looking For = "+val;
    //DO STUFF
    if(array[3]!=val){
      createTable5();
    }
    else{
      found=1;
      document.getElementById("found").innerHTML = "The number "+val +" is FOUND at index: 3";
      document.getElementById("found").style.fontWeight = 'bold';
    }
}

function createTable5(){
    var row = table5.insertRow(0);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    var cell7=row.insertCell(6);
    var cell8=row.insertCell(7);
    var cell9=row.insertCell(8);
    cell1.innerHTML=(array[0]);
    cell2.innerHTML=(array[1]);
    cell3.innerHTML=(array[2]);
    cell4.innerHTML=(array[3]);
    cell5.innerHTML=(array[4]);
    cell6.innerHTML=(array[5]);
    cell7.innerHTML=(array[6]);
    cell8.innerHTML=(array[7]);
    cell9.innerHTML=(array[8]);
    cell5.style.backgroundColor = "orange";
    compare5.innerHTML = "In the Array = " + array[4] + " Value Looking For = "+val;
    //DO STUFF
    if(array[4]!=val){
      createTable6();
    }
    else{
      found=1;
      document.getElementById("found").innerHTML = "The number "+val +" is FOUND at index: 4";
      document.getElementById("found").style.fontWeight = 'bold';
    }
}

function createTable6(){
    var row = table6.insertRow(0);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    var cell7=row.insertCell(6);
    var cell8=row.insertCell(7);
    var cell9=row.insertCell(8);
    cell1.innerHTML=(array[0]);
    cell2.innerHTML=(array[1]);
    cell3.innerHTML=(array[2]);
    cell4.innerHTML=(array[3]);
    cell5.innerHTML=(array[4]);
    cell6.innerHTML=(array[5]);
    cell7.innerHTML=(array[6]);
    cell8.innerHTML=(array[7]);
    cell9.innerHTML=(array[8]);
    cell6.style.backgroundColor = "orange";
    compare6.innerHTML = "In the Array = " + array[5] + " Value Looking For = "+val;
    //DO STUFF
    if(array[5]!=val){
      createTable7();
    }
    else{
      found=1;
      document.getElementById("found").innerHTML = "The number "+val +" is FOUND at index: 5";
      document.getElementById("found").style.fontWeight = 'bold';
    }
}

function createTable7(){
    var row = table7.insertRow(0);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    var cell7=row.insertCell(6);
    var cell8=row.insertCell(7);
    var cell9=row.insertCell(8);
    cell1.innerHTML=(array[0]);
    cell2.innerHTML=(array[1]);
    cell3.innerHTML=(array[2]);
    cell4.innerHTML=(array[3]);
    cell5.innerHTML=(array[4]);
    cell6.innerHTML=(array[5]);
    cell7.innerHTML=(array[6]);
    cell8.innerHTML=(array[7]);
    cell9.innerHTML=(array[8]);
    cell7.style.backgroundColor = "orange";
    compare7.innerHTML = "In the Array = " + array[6] + " Value Looking For = "+val;
    //DO STUFF
    if(array[6]!=val){
      createTable8();
    }
    else{
      found=1;
      document.getElementById("found").innerHTML = "The number "+val +" is FOUND at index: 6";
      document.getElementById("found").style.fontWeight = 'bold';
    }
}

function createTable8(){
    var row = table8.insertRow(0);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    var cell7=row.insertCell(6);
    var cell8=row.insertCell(7);
    var cell9=row.insertCell(8);
    cell1.innerHTML=(array[0]);
    cell2.innerHTML=(array[1]);
    cell3.innerHTML=(array[2]);
    cell4.innerHTML=(array[3]);
    cell5.innerHTML=(array[4]);
    cell6.innerHTML=(array[5]);
    cell7.innerHTML=(array[6]);
    cell8.innerHTML=(array[7]);
    cell9.innerHTML=(array[8]);
    cell8.style.backgroundColor = "orange";
    compare8.innerHTML = "In the Array = " + array[7] + " Value Looking For = "+val;
    //DO STUFF
    if(array[7]!=val){
      createTable9();
    }
    else{
      found=1;
      document.getElementById("found").innerHTML = "The number "+val +" is FOUND at index: 7";
      document.getElementById("found").style.fontWeight = 'bold';
    }
}

function createTable9(){
    var row = table9.insertRow(0);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    var cell7=row.insertCell(6);
    var cell8=row.insertCell(7);
    var cell9=row.insertCell(8);
    cell1.innerHTML=(array[0]);
    cell2.innerHTML=(array[1]);
    cell3.innerHTML=(array[2]);
    cell4.innerHTML=(array[3]);
    cell5.innerHTML=(array[4]);
    cell6.innerHTML=(array[5]);
    cell7.innerHTML=(array[6]);
    cell8.innerHTML=(array[7]);
    cell9.innerHTML=(array[8]);
    cell9.style.backgroundColor = "orange";
    compare9.innerHTML = "In the Array = " + array[8] + " Value Looking For = "+val;
    //DO STUFF
    if(array[8]!=val){
      document.getElementById("not-found").innerHTML = "The number "+val +" is NOT IN THE ARRAY!";
      document.getElementById("not-found").style.fontWeight = 'bold';
    }
    else{
      found=1;
      document.getElementById("found").innerHTML = "The number "+val +" is FOUND at index: 8";
      document.getElementById("found").style.fontWeight = 'bold';
    }
}


function reveal(){
  if(reveal_counter==0){
    table2.style.visibility = "visible";
    compare2.style.visibility = "visible";
    if(array[1]==val){
        document.getElementById("found").style.display = "block";
    }
    reveal_counter+=1;
  }
  else if(reveal_counter==1){
    table3.style.visibility="visible";
    compare3.style.visibility="visible";
    if(array[2]==val){
        document.getElementById("found").style.display = "block";
    }
    reveal_counter+=1;
  }
  else if(reveal_counter==2){
    table4.style.visibility="visible";
    compare4.style.visibility="visible";
    if(array[3]==val){
        document.getElementById("found").style.display = "block";
    }
    reveal_counter+=1;
  }
  else if(reveal_counter==3){
    table5.style.visibility="visible";
    compare5.style.visibility="visible";
    if(array[4]==val){
        document.getElementById("found").style.display = "block";
    }
    reveal_counter+=1;
  }
  else if(reveal_counter==4){
    table6.style.visibility="visible";
    compare6.style.visibility="visible";
    if(array[5]==val){
        document.getElementById("found").style.display = "block";
    }
    reveal_counter+=1;
  }
  else if(reveal_counter==5){
    table7.style.visibility="visible";
    compare7.style.visibility="visible";
    if(array[6]==val){
        document.getElementById("found").style.display = "block";
    }
    reveal_counter+=1;
  }
  else if(reveal_counter==6){
    table8.style.visibility="visible";
    compare8.style.visibility="visible";
    if(array[7]==val){
        document.getElementById("found").style.display = "block";
    }
    reveal_counter+=1;
  }
  else if(reveal_counter==7){
    table9.style.visibility="visible";
    compare9.style.visibility="visible";
    if(array[8]==val){
        document.getElementById("found").style.display = "block";
    }
    reveal_counter+=1;
    if(found==0){
      document.getElementById("not-found").style.display = "block";
    }
  }
}
