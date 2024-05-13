var numAux = document.getElementById('resAux')
var tot1=''
var tot2=''
var simbolo = ''
var nan = ''
function insert(num)
    {
        
        
        var n = document.getElementById('painel-input').value
        var n2 = document.getElementById('painel-input').value = n + num
        
        if(num=="CE"){
            document.getElementById('painel-input').value = ''
        }
        if(num=="C"){
            document.getElementById('painel-input').value = ''
            numAux.innerHTML=""
        }
        if(num=="<"){
            var n2 = document.getElementById('painel-input').value = n
            var n2 = document.getElementById('painel-input').value = n2.slice(0, -1)
        }
        if(num=="+"){

            simbolo='+'
            var r2=n2
            document.getElementById('painel-input').value = ''
            var n = document.getElementById('painel-input').value
            var n2 = document.getElementById('painel-input').value = n
            tot1 = parseFloat(r2.slice(0, -1));
            numAux.innerHTML=tot1+"+"
            
            
        }
        
        if(num=="-"){
            simbolo='-'
            var r2=n2
            document.getElementById('painel-input').value = ''
            var n = document.getElementById('painel-input').value
            var n2 = document.getElementById('painel-input').value = n
            tot1 = parseFloat(r2.slice(0, -1));
            numAux.innerHTML=tot1+""
        }
        if(num=="/"){
            simbolo='÷'
            var r2=n2
            document.getElementById('painel-input').value = ''
            var n = document.getElementById('painel-input').value
            var n2 = document.getElementById('painel-input').value = n
            tot1 = parseFloat(r2.slice(0, -1));
            numAux.innerHTML=tot1+"÷"
        }
        if(num=="x"){
            simbolo='X'
            var r2=n2
            document.getElementById('painel-input').value = ''
            var n = document.getElementById('painel-input').value
            var n2 = document.getElementById('painel-input').value = n
            tot1 = parseFloat(r2.slice(0, -1));
            numAux.innerHTML=tot1+"x"
        }
        if(num=="%"){
            simbolo='%'
            var r2=n2
            document.getElementById('painel-input').value = ''
            var n = document.getElementById('painel-input').value
            var n2 = document.getElementById('painel-input').value = n
            tot1 = parseFloat(r2.slice(0, -1));
            numAux.innerHTML=tot1+"%"
        }
        if(num=="="){
            
            var r1 = n2
            var n = document.getElementById('painel-input').value
            var n2 = document.getElementById('painel-input').value = n
            tot2 = parseFloat(r1.slice(0, -1))
            
            if(simbolo=='+'){
                numAux.innerHTML=tot1+tot2
                document.getElementById('painel-input').value = tot1+tot2
            }
            if(simbolo=='-'){
                numAux.innerHTML=tot1-tot2
                document.getElementById('painel-input').value = tot1-tot2
            }
            if(simbolo=='÷'){
                numAux.innerHTML=tot1/tot2
                document.getElementById('painel-input').value = tot1/tot2
            }
            if(simbolo=='X'){
                numAux.innerHTML=tot1*tot2
                document.getElementById('painel-input').value = tot1*tot2
            }
            if(simbolo=='%'){
                numAux.innerHTML=tot1*100/tot2
                document.getElementById('painel-input').value = tot1*100/tot2
            }
            if(!tot1 || !tot2 || tot1==undefined || tot2==undefined || tot2==null){
                document.getElementById('painel-input').value = ''
                numAux.innerHTML=""
            }
            simbolo=''
        }
        
        
        
        
        

        // var n = document.getElementById('painel-input').value
        // if(num=='='){
            
        //     console.log(tot1)
        //     console.log(tot2)
        //     n.value = ''
        //     var numero1 = Number(tot1);
        //     var numero2 = Number(tot2);
            
        //     if(tot1>=0 && tot2>=0){
        //         if (simbolo=='+'){
        //             var resultado = numero1 + numero2
                    
                    
        //         }
            
        //     }

        // }
        // if(num=="+"){
        //     simbolo = '+'
        //     tot1 = n
        //     numAux.innerHTML = tot1 + simbolo
        //     document.getElementById('painel-input').value = ''
            

        // }else{
            
        //     var n2 = document.getElementById('painel-input').value = n+num
        //     tot2=n2
            
        // }
        
        

    
    }
