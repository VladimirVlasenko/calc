document.addEventListener('DOMContentLoaded', ()=>{
    let input = document.querySelector('input');
    let log = document.querySelector('.log');
    if(!localStorage.items) {
        let itemsArray = [];
        localStorage.setItem('items', JSON.stringify(itemsArray));
    } 
    let itemsArray = JSON.parse(localStorage.getItem('items'));
    
    
    let data = JSON.parse(localStorage.getItem('items'));
    // console.log(data);
    
    
    if(data) {
        for(let m=0; m<data.length; m++) {
            
            let line = document.createElement("div");
            line.textContent = data[m];
            log.appendChild(line);
        }
    }

    
    document.addEventListener('click', (event)=>{
        let curInput = input.value;
        for (let c = 0; c < curInput.length; c++) {
            
            
            
            if ((curInput[c] === "+" || curInput[c] === "-" || curInput[c] === "*" || curInput[c] === "/" ||
                curInput[c] === "%" || curInput[c] === "√" || curInput[c] === "^") && (event.target.textContent === "+" ||
                    event.target.textContent === "-" || event.target.textContent === "*" || event.target.textContent === "/" ||
                    event.target.textContent === "%" || event.target.textContent === "√" || event.target.textContent === "^")) {
                
                let arr = curInput.split("");
                
                arr.splice((arr.length-1), 1);
                
                arr.join('');
                
                input.value = arr;
            }


        }

        for(let b=0;b<curInput.length;b++) {
            if(curInput[b]==="=") {
                input.value="";
            }
        }


        if(event.target.classList.contains('button') && !event.target.classList.contains('equal')) {
            let curInput = input.value;

            // if(curInput.length===0) {
            //     input.value += event.target.textContent;
            // }
            input.value += event.target.textContent;
            // console.log(curInput.length);

        }

        if((curInput.length === 0) && (event.target.textContent==="*" || event.target.textContent==="/" || event.target.textContent==="+" ||
        event.target.textContent==="-" || event.target.textContent==="^" || event.target.textContent==="√")) {
            
            input.value="";
       }


        if(event.target.classList.contains('clear')) {
            input.value="";
        }
        if(event.target.classList.contains('equal')) {
            let curInput = input.value;
            for(let char=0; char < curInput.length; char++) {
                if(curInput[char]=="+" || curInput[char]==="-" || curInput[char]==="*" || curInput[char]==="/") {
                    input.value += "=" + eval(curInput);
                    let line = document.createElement("div");
                    line.textContent = input.value;
                    log.appendChild(line);
                    
                    itemsArray.push(input.value);
                    
                    localStorage.setItem("items", JSON.stringify(itemsArray));
                    data = JSON.parse(localStorage.getItem('items'));

                    if(data.length>100) {
               
                        itemsArray.splice(0, 1);
                        localStorage.setItem('items',JSON.stringify(itemsArray));
                        data=JSON.parse(localStorage.getItem('items'));
                        
                        log.innerHTML="";
                        for(let m=0; m<data.length; m++) {
                            
                            let line = document.createElement("div");
                            line.textContent = data[m];
                            log.appendChild(line);
                        }
                    }
                    
                    
                }
                if(curInput[char]==="%") {
                    
                    for (let a = 0;a <= curInput.length; a++) {
                        
                        if(curInput[a] === "%") {
                            
                            let firstNumReceive = function(){
                                let firstNum = [];
                                for(let x=0; x < a; x++) {
                                    
                                    firstNum.push(curInput[x]);
                                    
                                }
                                return firstNum.join('');
                            }
                            
                            let secondNumReceive = function() {
                                let secondNum = [];
                                for(let y=char+1; y < curInput.length; y++) {
                                    secondNum.push(curInput[y]);
                                    
                                }
                                return secondNum.join('');
                            }
                            input.value += "=" + Math.round((1*firstNumReceive())/(1*secondNumReceive())*100);
                        }
                        
                    }
                    let line = document.createElement("div");
                    line.textContent = input.value;
                    log.appendChild(line);

                    itemsArray.push(input.value);
                    
                    localStorage.setItem("items", JSON.stringify(itemsArray));
                    data = JSON.parse(localStorage.getItem('items'));

                    if(data.length>100) {
               
                        itemsArray.splice(0, 1);
                        localStorage.setItem('items',JSON.stringify(itemsArray));
                        data=JSON.parse(localStorage.getItem('items'));
                        
                        log.innerHTML="";
                        for(let m=0; m<data.length; m++) {
                            
                            let line = document.createElement("div");
                            line.textContent = data[m];
                            log.appendChild(line);
                        }
                    }
                    
                    
                }
                if(curInput[char]==="^") {
                    
                    for (let a = 0;a <= curInput.length; a++) {
                        
                        if(curInput[a] === "^") {
                            
                            let firstNumReceive = function(){
                                let firstNum = [];
                                for(let x=0; x < a; x++) {
                                    
                                    firstNum.push(curInput[x]);
                                    
                                }
                                return firstNum.join('');
                            }
                            
                            let secondNumReceive = function() {
                                let secondNum = [];
                                for(let y=char+1; y < curInput.length; y++) {
                                    secondNum.push(curInput[y]);
                                    
                                }
                                return secondNum.join('');
                            }
                            input.value += "=" + Math.pow(firstNumReceive(), secondNumReceive())
                        }
                        
                    }
                    let line = document.createElement("div");
                    line.textContent = input.value;
                    log.appendChild(line);

                    itemsArray.push(input.value);
                    
                    localStorage.setItem("items", JSON.stringify(itemsArray));
                    data = JSON.parse(localStorage.getItem('items'));

                    if(data.length>100) {
               
                        itemsArray.splice(0, 1);
                        localStorage.setItem('items',JSON.stringify(itemsArray));
                        data=JSON.parse(localStorage.getItem('items'));
                        
                        log.innerHTML="";
                        for(let m=0; m<data.length; m++) {
                            
                            let line = document.createElement("div");
                            line.textContent = data[m];
                            log.appendChild(line);
                        }
                    }
                    
                    
                }
            }
            
        }
        if(event.target.classList.contains('root')) {
            let curInput = input.value;
            let firstNumReceive = function(){
                let firstNum=[];
                
                for(let i=0; i<(curInput.length-1); i++) {
                    firstNum.push(curInput[i]);
                    
                }
                return firstNum.join('');
            }
            input.value += "=" + Math.sqrt(firstNumReceive());
            let line = document.createElement("div");
            line.textContent = input.value;
            log.appendChild(line);

            itemsArray.push(input.value);
            
            localStorage.setItem("items", JSON.stringify(itemsArray));
            data = JSON.parse(localStorage.getItem('items'));
            
            if(data.length>100) {
               
                itemsArray.splice(0, 1);
                localStorage.setItem('items',JSON.stringify(itemsArray));
                data=JSON.parse(localStorage.getItem('items'));
                
                log.innerHTML="";
                for(let m=0; m<data.length; m++) {
                    
                    let line = document.createElement("div");
                    line.textContent = data[m];
                    log.appendChild(line);
                }
            }
        }
        
        
        



    })
})