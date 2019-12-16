var table = document.getElementById("array_table_full");
var table2 = document.getElementById("array_table_one");
var table3 = document.getElementById("array_table_two");
var table4 = document.getElementById("array_table_three");
var table5 = document.getElementById("array_table_four");
var firstmed = document.getElementById("compare-two");
var secondmed = document.getElementById("compare-five");
var less_smaller = [];
var second_less_smaller = [];
var counter = 1;
var reveal_counter=1;
var lookfor = 2;

//Brute Force algorithm that finds the median of each subarray of max size 5.
function bfFindMedian(array){
  var smallright = array.length -1;
  var medIndex = Math.floor(smallright/2);
  //Nested for-loop checks whether each value is the median
  for (var k=0; k<=smallright; k++){
    var count = 0;
    for (var l=0; l<=smallright; l++){
      if (array[k]>array[l]){
        count++
      }
    }
    if (count == medIndex){
      return array[k]
    }
  }
}

function reveal(){
  if(reveal_counter==1){
    document.getElementById("compare-one").style.visibility = "visible";
  }
  if(reveal_counter==2){
    table2.style.visibility="visible";
  }
  if(reveal_counter==3){
    document.getElementById("compare-two").style.visibility = "visible";
  }
  if(reveal_counter==4){
    table3.style.visibility = "visible";
  }
  if(reveal_counter==5){
    document.getElementById("compare-three").style.visibility = "visible";
  }
  if(reveal_counter==6){
    document.getElementById("compare-three").innerHTML=("If the size of the left array is equal to the rank we are searching for, then the pivot is returned (that is what we are searching for).<br/><b>Else if the length of the left array is less than the rank, then we run QuickSelect on the right array.<b/><br/>Else if the length of the left array is greater than the rank, then we run QuickSelect on the left array");
  }
  if(reveal_counter==7){
    table4.style.visibility="visible";
  }
  if(reveal_counter==8){
    document.getElementById("compare-four").style.visibility = "visible";
  }
  if(reveal_counter==9){
    table5.style.visibility = "visible";
  }
  if(reveal_counter==10){
    document.getElementById("compare-five").style.visibility = "visible";
  }
  if(reveal_counter==11){
    document.getElementById("compare-six").style.visibility = "visible";
  }
  if(reveal_counter==12){
    document.getElementById("found").style.display = "block";
  }
  reveal_counter+=1;
}

function hideAll(){
  table2.style.visibility = "hidden";
  table3.style.visibility = "hidden";
  table4.style.visibility = "hidden";
  table5.style.visibility = "hidden";
  firstmed.style.visibility = "hidden";
  secondmed.style.visibility = "hidden";
  document.getElementById("compare-one").style.visibility = "hidden";
  document.getElementById("compare-three").style.visibility = "hidden";
  document.getElementById("compare-four").style.visibility = "hidden";
  document.getElementById("compare-six").style.visibility = "hidden";
  document.getElementById("found").style.display = "none";
}

function createTable(arrays){
    console.log(arrays);
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
    cell1.innerHTML=(arrays[0]);
    cell2.innerHTML=(arrays[1]);
    cell3.innerHTML=(arrays[2]);
    cell4.innerHTML=(arrays[3]);
    cell5.innerHTML=(arrays[4]);
    cell6.innerHTML=(arrays[5]);
    cell7.innerHTML=(arrays[6]);
    cell8.innerHTML=(arrays[7]);
    cell9.innerHTML=(arrays[8]);
    // compare1.innerHTML = "Compare: Mid = " + mids[0] + " Value = "+val;
}

function createTable2(arrays){
  var row = table2.insertRow(0);
  var cell1=row.insertCell(0);
  var cell2=row.insertCell(1);
  var cell3=row.insertCell(2);
  var cell4=row.insertCell(3);
  var cell5=row.insertCell(4);
  var cellblank = row.insertCell(5);
  var cell6=row.insertCell(6);
  var cell7=row.insertCell(7);
  var cell8=row.insertCell(8);
  var cell9=row.insertCell(9);
  cell1.innerHTML=(arrays[0]);
  cell2.innerHTML=(arrays[1]);
  cell3.innerHTML=(arrays[2]);
  cell4.innerHTML=(arrays[3]);
  cell5.innerHTML=(arrays[4]);
  cell6.innerHTML=(arrays[5]);
  cell7.innerHTML=(arrays[6]);
  cell8.innerHTML=(arrays[7]);
  cell9.innerHTML=(arrays[8]);
  cellblank.style.backgroundColor = "white";
}


function createTable3(arrays){
    var row = table3.insertRow(0);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cellblank = row.insertCell(4);
    var cell5=row.insertCell(5);
    var cell6=row.insertCell(6);
    var cell7=row.insertCell(7);
    var cell8=row.insertCell(8);
    var cell9=row.insertCell(9);
    cell1.innerHTML=(arrays[0][0]);
    cell2.innerHTML=(arrays[0][1]);
    cell3.innerHTML=(arrays[0][2]);
    cell4.innerHTML=(arrays[0][3]);
    cell5.innerHTML=(arrays[1][0]);
    cell6.innerHTML=(arrays[1][1]);
    cell7.innerHTML=(arrays[1][2]);
    cell8.innerHTML=(arrays[1][3]);
    cell9.innerHTML=(arrays[1][4]);
    cellblank.style.backgroundColor = "white";
    // cellblank.hidden = true;
}

function createTable4(arrays){
    var row = table4.insertRow(0);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    cell1.innerHTML=(arrays[0]);
    cell2.innerHTML=(arrays[1]);
    cell3.innerHTML=(arrays[2]);
    cell4.innerHTML=(arrays[3]);
    // compare1.innerHTML = "Compare: Mid = " + mids[0] + " Value = "+val;
}

function createTable5(arrays){
  console.log("HITTT");
  var row = table5.insertRow(0);
  var cell1=row.insertCell(0);
  var cell2=row.insertCell(1);
  var cell3=row.insertCell(2);
  var cell4=row.insertCell(3);
  cell1.innerHTML=(arrays[0]);
  cell2.innerHTML=(arrays[1]);
  cell3.innerHTML=(arrays[2]);
  cell4.innerHTML=(arrays[3]);
}


function fillFirstMedians(medians, mid){
    firstmed.innerHTML="The Medians are "+medians[0]+" and "+ medians[1]+". The median of medians is "+mid+".<br/><br/>Now sort the array into 1) less than or equal to the pivot and 2) greater than the pivot.";
    firstmed.style.textDecoration = "underline";
}

//Quick Select algorithm - finds the jth smallest number of array A (where j=1 signifies the smallest number in A and j=size of A signifies the largest number in A)
function quickSelect(A,j){
  console.log(A);
  //Initializes sublist array
  var Sublists = [];
  for (var l = 1; l <= Math.ceil(A.length/5); l++){
    Sublists.push([]);
  }

  //Forms Math.ceil(A.length/5) lists of max size 5, splitting A
  var i = 0;
  var n = 0;
  var m = 0;
  while(i<A.length){
    Sublists[n][m] = A[i];
    if (m==4){
      m=-1;
      n++;
    }
    m++;
    i++;
  }
  console.log(Sublists);

  //Finds median of the medians of each sublist
  var medians = [];
  for (i=0;i<Sublists.length;i++){
    medians.push(bfFindMedian(Sublists[i]));
  }
  console.log(medians);

  var medOfMeds = bfFindMedian(medians);

  console.log(medOfMeds);
  if(counter==1){
    fillFirstMedians(medians,medOfMeds);
  }
  if(counter==2){
    console.log(medians);
    secondmed.innerHTML="The Medians is "+medians[0] +". The median of medians is "+medOfMeds+".";
    secondmed.style.textDecoration = "underline";
  }


  var ALess=[];
  var AGreater=[];
  //Partitions A into ALess and AGreater based on whether each number is less than the pivot.
  for (k=0; k<A.length;k++){
    if(A[k]<=medOfMeds){
      ALess.push(A[k]);
    } else {
      AGreater.push(A[k]);
    }
  }

  console.log(ALess);
  console.log(AGreater);
  if(counter==1){
    less_smaller[0] = ALess;
    less_smaller[1]= AGreater;
    createTable3(less_smaller);
    createTable4(ALess);
    createTable5(ALess);
  }
  if(counter==2){
    second_less_smaller[0]=ALess;
    second_less_smaller[1]=AGreater;
    console.log(second_less_smaller);
    // createTableX(second_less_smaller);
  }

  counter +=1;
  console.log(less_smaller)
  console.log(" ")
  //If the size of ALess is equal to j, the pivot must be the jth smallest element. Otherwise, we recursively call Quick Select again based on whether the jth smallest is now in either ALess or AGreater
  if (ALess.length == j){
    return medOfMeds;
  } else if (ALess.length > j){
    return quickSelect(ALess,j);
  } else {
    return quickSelect(AGreater,j-ALess.length);
  }


}


quickSelect([2,5,3,9,6,7,1,8,4],2);
createTable([2,5,3,9,6,7,1,8,4]);
createTable2([2,5,3,9,6,7,1,8,4]);
document.getElementById("search").innerHTML = ("Looking for 2nd smallest in the array:".bold());
document.getElementById("search").style.fontWeight = 'bold';
document.getElementById("search").style.fontSize = 'xx-large';
document.getElementById("search").style.textDecoration = "overline";
document.getElementById("search").style.fontFamily = 'Impact,Charcoal,sans-serif';
document.getElementById("compare-one").innerHTML = ("Splitting the array to find the medians of the smaller arrays");
document.getElementById("compare-one").style.textDecoration = "underline";
document.getElementById("compare-three").innerHTML = ("If the size of the left array is equal to the rank we are searching for, then the pivot is returned (that is what we are searching for).<br/>Else if the length of the left array is less than the rank, then we run QuickSelect on the right array.<br/>Else if the length of the left array is greater than the rank, then we run QuickSelect on the left array");
document.getElementById("compare-three").style.textDecoration = "underline";
document.getElementById("compare-four").innerHTML = ("Splitting the array to find the medians of the smaller arrays");
document.getElementById("compare-four").style.textDecoration = "underline";
document.getElementById("compare-six").innerHTML = ("If the size of the left array is equal to the rank we are searching for, then the pivot is returned (that is what we are searching for).<br/>Else if the length of the left array is less than the rank, then we run QuickSelect on the right array.<br/>Else if the length of the left array is greater than the rank, then we run QuickSelect on the left array");
document.getElementById("compare-six").style.textDecoration = "underline";
document.getElementById("found").innerHTML = ("FOUND! The second smallest element in the array is "+lookfor+"!");
document.getElementById("found").style.fontWeight = 'bold';

hideAll();
