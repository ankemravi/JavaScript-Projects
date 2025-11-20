let obj=JSON.parse(localStorage.getItem('score')) || 
        {
        Wins:0,
        Losses:0,
        Ties:0
        }
        document.querySelector('.js-score').innerHTML=`Wins: ${obj.Wins},Losses: ${obj.Losses},Ties: ${obj.Ties}`

        function selectOption(selectParameter){
             let com=computerMove();
             let res='';
             if (selectParameter=='Scissors'){
                if (com=='Rock'){
             res='You Lose';
             }else if(com=='Paper'){
             res='You Win';
             }else{
             res='Tie';
             }
            }else if (selectParameter=='Paper'){
                if (com=='Rock'){
             res='You Win';
             }else if(com=='Paper'){
             res='Tie';
             }else{
             res='You Lose';
             }
            }else if (selectParameter == 'Rock'){
                if (com=='Rock'){
             res='Tie';
             }else if(com=='Paper'){
             res='You Lose';
             }else{
             res='You Win';
             }
            }
             if (res=='You Win'){
             obj.Wins+=1;
             }else if(res=='You Lose'){
                obj.Losses+=1;
             }else{
                obj.Ties+=1;
             }

             localStorage.setItem("score",JSON.stringify(obj));

             document.querySelector('.js-result').innerHTML=`${res}`
             
             document.querySelector('.js-moves').innerHTML=`Your move <img class="img-move" src="images/${selectParameter}-emoji.png" alt="">  Computer move <img class="img-move" src="images/${com}-emoji.png" alt="">`

             scoreFunction();
             }
             function scoreFunction(){
                 document.querySelector('.js-score').innerHTML=`Wins: ${obj.Wins},Losses: ${obj.Losses},Ties: ${obj.Ties}`
             }

        function computerMove(){
            var ran= Math.floor(Math.random()*3)
             let com='';
             if (ran==1){
             com='Rock';
             }else if(ran==2){
             com='Paper'
             }else{
             com='Scissors'
             }
            return com
        }