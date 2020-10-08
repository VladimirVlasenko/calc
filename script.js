document.addEventListener('DOMContentLoaded', ()=>{
    let input = document.querySelector('input');
    let log = document.querySelector('.log');
    if(!localStorage.items) {
        let itemsArray = [];
        localStorage.setItem('items', JSON.stringify(itemsArray));
    } 
    let itemsArray = JSON.parse(localStorage.getItem('items'));
    
    
    let data = JSON.parse(localStorage.getItem('items'));
    console.log(data);
    
    
    if(data) {
        for(let m=0; m<data.length; m++) {
            
            let line = document.createElement("div");
            line.textContent = data[m];
            log.appendChild(line);
        }
    }

    
    document.addEventListener('click', (event)=>{
        if(event.target.classList.contains('button') && !event.target.classList.contains('equal')) {
            input.value += event.target.textContent;
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
                        console.log(data);
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
                        console.log(data);
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
                        console.log(data);
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
                console.log(data);
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