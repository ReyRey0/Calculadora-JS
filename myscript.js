var historico = new Array();
           
            function insert(num){
                var input = document.getElementById('input').value;
                if(input === '0'){
                    document.getElementById('input').value = input;
                }else{
                     document.getElementById('input').value = input + num;
                }
            }
            function calcular(){
                var input = document.getElementById('input').value;
                historico.push(document.getElementById('input').value+" = "+eval(input));
                if(input){
                    document.getElementById('input').value = eval(input);   
                            }
                        }

        function porcentagem(){
            var input = document.getElementById('input').value;
            document.getElementById('input').value = (parseInt(input)/100);
        }

        function negativoPositivo(){
            var input = document.getElementById('input').value;
            if(input > '0'){
                document.getElementById('input').value = (-input);
            }
        
        }
                 function clean(){
                document.getElementById('input').value = "";
            }
            function voltar(){
                var input = document.getElementById('input').value;
                document.getElementById('input').value = input.substring(0, input.length -1);
            }
           function mostrarHistorico(){

            var exibir = document.getElementById("exibir");
            for (var i=0; i<historico.length; i++) {
                exibir.innerHTML += historico[i]+"<hr><br>";
                }
                var container = document.querySelector('.column');
    
            if(container.style.display === 'block') {
                container.style.display = 'none';
                exibir.innerHTML = "";
            } else {
                container.style.display = 'block';
            }
            }
            