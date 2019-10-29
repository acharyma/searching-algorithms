var table = document.getElementById("array_table_full");
var table2 = document.getElementById("array_table_one");
var table3 = document.getElementById("array_table_two");
var table4 = document.getElementById("array_table_three");

var array = [1,2,3,4,5,6,7,8,9];
var arrays = [];
var arrays_index=0;
var mids=[];
var val = 4;

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

    if(mids[0] != val){
        createTableCount();
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
    console.log('mids: '+mids)
    console.log('mids:'+mids[2]);
    console.log('val'+val);

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

}

var answer = binary_search(array,0,8,val);
createTable();
console.log(arrays);
console.log(arrays.length);
console.log(mids);

document.getElementById("search").innerHTML = "The number "+val +" is found at index: "+answer
