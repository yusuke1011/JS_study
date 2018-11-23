function onButtonClick(){

    const num1 = parseFloat(document.forms.fizzBuzz.fizzNum.value);
    const num2 = parseFloat(document.forms.fizzBuzz.buzzNum.value);
    const intNum1 = parseInt(document.forms.fizzBuzz.fizzNum.value);
    const intNum2 = parseInt(document.forms.fizzBuzz.buzzNum.value);
    let compareNum1 = num1;
    let compareNum2 = num2;
    const max = 100;

    let output = document.getElementById("output");

    //文字列が入力された場合、整数ではない数値が入力された場合、何も入力されていない場合はメッセージ表示
    //【コメント】
    //何も入力されていない場合やaなどの文字列が入力された場合は、numもintNumもNaNになります。
    //この場合、（num1 === intNum1）がfalseになるようなので、最初の（num1 && num2）の条件はいらないかと思いましたが、可読性を上げるために追加してみました。。
    if(!(num1 && num2) || !(num1 === intNum1) || !(num2 === intNum2)){
        output.innerText = "整数値を入力してください";
    }
    else{
        //出力する値が100を超えるまでループ
        while(Math.min(compareNum1,compareNum2) < 100){
            //値が小さい方を出力した後、更新する
            if(compareNum1 < compareNum2){
                output.innerText += "Fizz " + compareNum1 + "\n"
                compareNum1 += num1;       
            }
            else if(compareNum2 < compareNum1){
                output.innerText += "Buzz " + compareNum2 + "\n"
                compareNum2 += num2;       
            }
            //値が等しい時はどちらも更新する
            else{
                output.innerText += "FizzBuzz " + compareNum1 + "\n"
                compareNum1 += num1;  
                compareNum2 += num2;   
            }
        }
    }
}

