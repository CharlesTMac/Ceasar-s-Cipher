function rot13(str) {
    var alphaB=["A", "B", "C", "D","E", "F", "G","H", "I", "J","K", "L", "M","N",
     "O", "P","Q", "R","S", "T", "U","V", "W", "X","Y", "Z"];
     var numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
     
var newString=str.split("");
console.log(newString);
var testIt1=newString.indexOf("?");
var testIt2=newString.indexOf(".");
var testIt3=newString.indexOf("!");

    if(testIt1>=0||testIt2>=0||testIt3>=0){
        var concato=newString.pop();
    }
    console.log(newString);

 
console.log(concato);
     //testing stuff
     
     var biko=[];
     
     console.log(newString);
for(var i=0; i<newString.length; i++){
    
     biko.push(alphaB.indexOf(newString[i]));

          };

          console.log(biko);
         // adding 13

         for(var i=0; i<newString.length; i++){
            
            biko[i]= biko[i] + 14;
         }
    
         console.log(biko);

         //removing spaces
for(var i=0; i<newString.length; i++){
    if(biko[i]==13){
        biko[i]=" ";
    }
}
//matching letters for outliers
         for(var i=0; i<newString.length; i++){
             if(biko[i]>26){
                 biko[i]=biko[i]-26;
             }
            
         }
         console.log(biko);

         //matching back to alphabet

         var numStr=[];
         for(var i=0; i<newString.length;i++){
             if(biko[i]>=0){
            numStr.push(numbers.indexOf(biko[i]));
             
          }
        }
       
         console.log(numStr);


         var finalStr=[];
        for(var i=0; i<numStr.length;i++){
             if(numStr[i]<0){
                finalStr.push(" ");
            }else if (numStr[i]=="!"){
                finalStr.push("!")
            }else{
           finalStr.push(alphaB[numStr[i]]);
            }
            }
            if(testIt1>=0||testIt2>=0||testIt3>=0){
            var result=finalStr.concat(concato);
           
            }else{
                var result=finalStr;
            }
            str= result.join("").toString();
        console.log(finalStr);
        console.log(result);
       
        console.log(str);
        return str;
     }
