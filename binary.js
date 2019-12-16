var table = document.getElementById("array_table_full");
var table2 = document.getElementById("array_table_one");
var table3 = document.getElementById("array_table_two");
var table4 = document.getElementById("array_table_three");

var hey = 0;
var hard_count=0;

var compare1 = document.getElementById("compare-one");
var compare2 = document.getElementById("compare-two");
var compare3 = document.getElementById("compare-three");
var compare4 = document.getElementById("compare-four");

var array = [];
var arrays = [];
var arrays_index=0;
var mids=[];
var val=[];

var show=0;
var where=1;
var notFound=0;
var finalArray=[];

function sortNumber(a, b) {
  return a - b;
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
  array=result.sort(sortNumber);
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


  document.getElementById("search").style.display = "block";
  document.getElementById("array_table_full").style.visibility="visible";
  document.getElementById("compare-one").style.display = "block";

  var answer = binary_search(array,0,8,val);
  createTable();
  console.log(arrays);
  console.log(arrays.length);
  console.log(mids);

  document.getElementById("search").innerHTML = ("Looking for "+val+" in the array:".bold());
  document.getElementById("search").style.fontWeight = 'bold';
  document.getElementById("search").style.fontSize = 'xx-large';
  document.getElementById("search").style.textDecoration = "overline";
  document.getElementById("search").style.fontFamily = 'Impact,Charcoal,sans-serif';
  document.getElementById("found").innerHTML = "The number "+val +" is FOUND at index: "+answer;
  document.getElementById("found").style.fontWeight = 'bold';
  document.getElementById("not-found").innerHTML = "The number "+val +" is NOT IN THE ARRAY!";
  document.getElementById("not-found").style.fontWeight = 'bold';
  hideSearch();
  hard_count+=1;
}

function hideSearch(){
  document.getElementById("found").style.display="none";
  if(mids[0] == val){
      document.getElementById("found").style.display = "block";
  }
  else if(mids[3] != val){
      notFound = 1;
  }
}

function binary_search(arr,min,max,value){
    addArrays(0,9);
    while(min<=max){
        console.log("min:"+min);
        console.log("max:"+max);
        mid = Math.floor((max+min)/2);
        console.log("mid:"+mid);
        mids.push(arr[mid]);
        if(arr[mid]>value){
            max = mid-1;
            if(max==9){
                addArrays(min,max);
            }
            else{
                addArrays(min,max+1);
            }
        }
        else if(arr[mid]<value){
            min=mid+1;
            if(max==9){
                addArrays(min,max);
            }
            else{
                addArrays(min,max+1);
            }
        }
        else{
            console.log(array[mids[0]]);
            console.log(val);
            mids.push(val);
            return mid;
        }
    }
    return -1;
}

function addArrays(start,end){
    var temp = [];
    var index=0;
    for(i=start;i<end;i++){
        temp.push(array[i]);
        index += 1;
    }
    arrays[arrays_index] = temp;
    arrays_index += 1;
    where += 1;
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
    cell1.innerHTML=(arrays[0][0]);
    cell2.innerHTML=(arrays[0][1]);
    cell3.innerHTML=(arrays[0][2]);
    cell4.innerHTML=(arrays[0][3]);
    cell5.innerHTML=(arrays[0][4]);
    cell6.innerHTML=(arrays[0][5]);
    cell7.innerHTML=(arrays[0][6]);
    cell8.innerHTML=(arrays[0][7]);
    cell9.innerHTML=(arrays[0][8]);
    cell5.style.backgroundColor = "orange";
    compare1.innerHTML = "Compare: Mid = " + mids[0] + " Value = "+val;
    //DO STUFF


    if(mids[0] != val){
        createTableCount();
    }
}

function hideAll(){
    table2.style.visibility = "hidden";
    table3.style.visibility = "hidden";
    table4.style.visibility = "hidden";
    compare2.style.visibility = "hidden";
    compare3.style.visibility = "hidden";
    compare4.style.visibility = "hidden";
    document.getElementById("found").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("array_table_full").style.visibility="hidden";
    document.getElementById("compare-one").style.display = "none";

    document.getElementById("not-found").style.display = "none";
    if(mids[0] == val){
        document.getElementById("found").style.display = "block";
    }
    else if(val==-1){
        notFound = 1;
    }
}

function reveal(){
    if(show == 0){
        table2.style.visibility = "visible";
        compare2.style.visibility = "visible";
        show+=1;
    }
    else if(show==1){
        table3.style.visibility = "visible";
        compare3.style.visibility = "visible";
        if(arrays[2].length == 1 && arrays[2][0] != val){
          document.getElementById("not-found").style.display = "block";
          show+=100;
        }
        else{
          show+=1;
        }
    }
    else if(show==2){
        table4.style.visibility = "visible";
        compare4.style.visibility="visible";
        show+=1;
    }
    console.log("where: "+where)
    console.log("show+1: "+(show+2))
    if(where == (show+2)){
        document.getElementById("found").style.display = "block";
        hey=1;
    }
    if(notFound == 1 && (show+2)>4){
        document.getElementById("not-found").style.display = "block";
    }
}

function createTableCount(){
    length = arrays.length;
    if(length>=2){
        createTable2();
    }
    if(length>=3){
        createTable3();
    }
    if(length>=4){
        createTable4();
    }
}

function createTable2(){
    console.log("hit");
    var counter=0;
    var row = table2.insertRow(0);
    for(i=0;i<(arrays[1].length);i++){
        var cell1=row.insertCell(counter);
        cell1.innerHTML=(arrays[1][i]);
        if(i==1){
            cell1.style.backgroundColor = "orange";
        }
        counter++;
    }
    compare2.innerHTML = "Compare: Mid = " + mids[1] + " Value = "+val;
    //DO STUFF
}

function createTable3(){
    var counter=0;
    var row = table3.insertRow(0);
    for(i=0;i<arrays[2].length;i++){
        var cell1=row.insertCell(counter);
        cell1.innerHTML=(arrays[2][i]);
        if(i==0){
            cell1.style.backgroundColor = "orange";
        }
        counter++;
    }
    compare3.innerHTML = "Compare: Mid = " + mids[2] + " Value = "+val;
    //DO STUFF

}

function createTable4(start,end){
    var counter=0;
    var row = table4.insertRow(0);
    for(i=0;i<arrays[3].length;i++){
        var cell1=row.insertCell(counter);
        cell1.innerHTML=(arrays[3][i]);
        if(i==0){
            cell1.style.backgroundColor = "orange";
        }
        counter++;
    }
    compare4.innerHTML = "Compare: Mid = " + mids[3] + " Value = "+val;
    //DO STUFF
}

hideAll();
