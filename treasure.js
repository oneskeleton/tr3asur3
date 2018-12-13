size = prompt("Welcome!\n Hover your mouse over the chests to find the hidden treasure\nPlease enter desired size of the game:\n (size must not be greater than 50)");
while(size>50){
    alert("Size is too large, please insert a valid size integer..");
    size = prompt("Welcome!\n\nPlease enter desired size of the game:\n (size must not be greater than 50)");
}
function initial(){
    var pictures=[10];
    var tablejutsu="";
    for (var i=1;i<=9;i++){
        pictures[i]="https://raw.githubusercontent.com/oneskeleton/tr3asur3/master/images/pic_"+i+".png";
    }

    var num;
    var point=1;

    for (var i=1; i<=size; i++){
        tablejutsu+="<tr>";
        for(var j=1;j<=size;j++) {
            num = Math.floor((Math.random()*9)+1);
            if(i%2==1){
                tablejutsu += "<td> <img id='"+point +"' src='"+pictures[num]+"'/> </td>";j++;point++;
                tablejutsu += "<td> <img src='https://raw.githubusercontent.com/oneskeleton/tr3asur3/master/images/empty.png'></td>";}
            else{
                tablejutsu += "<td> <img src='https://raw.githubusercontent.com/oneskeleton/tr3asur3/master/images/empty.png'></td>";j++;
                tablejutsu += "<td> <img id='"+point +"' src='"+pictures[num]+"'/> </td>"; point++;
            }
        }
        tablejutsu+="</tr>";
    }
    tablejutsu+="<tr> <td colspan='3'> <button  id='yield' value='yield'> Surrender! </button></td>";
    tablejutsu+="<td colspan='3'> <button  value='restart' onclick='initial()'> Restart! </button>  </td>";
    tablejutsu+="</tr>";

    document.getElementById("table").innerHTML = tablejutsu;

    num=Math.ceil((Math.random()*point));
    document.getElementById(""+num).onmouseover = function () {
        mouseover(this)
    };
    document.getElementById("yield").onclick=function () {
        yield(num) };
}

function yield(y) {
    document.getElementById(""+y).src="https://raw.githubusercontent.com/oneskeleton/tr3asur3/master/images/treasure_picture.png";
    document.getElementById(""+y).onmouseover="";
}

function mouseover(a)
{
    alert("Congratulations, you found the treasure!! \n:D");
    a.src="https://raw.githubusercontent.com/oneskeleton/tr3asur3/master/images/treasure_picture.png";}
