index = 0;
turns=0;
function generate(){
    arr = Array();
    k=0;
    for(i = 0 ; i < 16 ; i++){
        num = parseInt(Math.random()*100) ;
        if(num<16){
            arr[i]=num;
            for(j = 0; j <i ;j++){
                if(arr[j]==arr[i]){
                    i--;
                    break;
                }
            }
        }
        else{
            i--;
        }
        
    }

    for(i = 0 ; i < 16 ; i++){
        if(arr[i]==0){
            document.forms[0].elements[i].innerHTML="";
            index = i;

        }
        else{
            document.forms[0].elements[i].innerHTML=arr[i];

        }
    }

    
}

function win(){
    flag=true;
    for(i= 0;i<15;i++){
        if(parseInt(document.forms[0].elements[i].innerHTML)!==i+1){
            flag=false;
            break;
        }
    }
    if(flag){
        alert("You won the puzzle in "+turns+" turns");
    }
}

function play(newindex,btn){
    value =parseInt(btn.innerHTML) ;
    document.forms[0].elements[index].innerHTML= value;
    btn.innerHTML="";
    turns++;
    index = newindex;

    win();
}


