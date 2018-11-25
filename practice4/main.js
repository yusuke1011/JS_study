const exec = document.getElementById("exec");
const inputBuzzNum = document.getElementById("inputBuzzNum");
const inputFizzNum = document.getElementById("inputFizzNum");
const output = document.getElementById("output");

exec.addEventListener("click", () => {

    const max = 100;
    const fizzNumber = parseFloat(inputFizzNum.value);
    const buzzNumber = parseFloat(inputBuzzNum.value);
    let compareFizzNum = fizzNumber;
    let compareBuzzNum = buzzNumber;

    //初期化
    output.innerText = "";
    
    //文字列が入力された場合、整数ではない数値が入力された場合、何も入力されていない場合はメッセージ表示
    if(!(fizzNumber && buzzNumber) || !Number.isInteger(fizzNumber) || !Number.isInteger(buzzNumber)){
        output.innerText = "整数値を入力してください";
    }
    else{
        //出力する値が100を超えるまでループ
        while(Math.min(compareFizzNum,compareBuzzNum) < max){
            //値が小さい方を出力した後、更新する
            if(compareFizzNum < compareBuzzNum){
                output.innerText += "Fizz " + compareFizzNum + "\n"
                compareFizzNum += fizzNumber;       
            }
            else if(compareBuzzNum < compareFizzNum){
                output.innerText += "Buzz " + compareBuzzNum + "\n"
                compareBuzzNum += buzzNumber;       
            }
            //値が等しい時はどちらも更新する
            else{
                output.innerText += "FizzBuzz " + compareFizzNum + "\n"
                compareFizzNum += fizzNumber;  
                compareBuzzNum += buzzNumber;   
            }
        }
    }
});

