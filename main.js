const assignment1 = document.querySelector('.assignment-one');
const assignment2 = document.querySelector('.assignment-two');
const assignment3 = document.querySelector('.assignment-three');
const assignmentAdvance = document.querySelector('.assignment-advance');




assignment1.innerHTML =`
<p style='white-space: pre';>
    function max(...numbers){
        let maxNumber = '';
        maxNumber = numbers[0];//從第一個數開始
        for(let i = 0;i < numbers.length;i++){
            if(maxNumber < numbers[i]){
                maxNumber = numbers[i];
            }
        }
        return maxNumber
    }
</p>
`

assignment2.innerHTML =`
<p style='white-space: pre';>

    //第一種
    class Args{
        constructor(n1, n2){
            this.op = "-";
            this.n1 = 1;
            this.n2 = 2;
        }
    }

    let args = new Args();
    calculate(args);

    //第二種
    let args = new Object();
    args.op = "+";
    args.n1 = 3;
    args.n2 = 5;
    
    calculate(args);
</p>
`

assignment3.innerHTML =`
<p style='white-space: pre';>
    function avg(data){
        let totalPrice = 0;
        data.products.forEach(item => totalPrice += item.price);
        let averagePrice = Math.round(totalPrice / data.size);
        return averagePrice;
    } 

    avg(
    {
        size:3,
        products:[
            {
                name:"Product 1",
                price:100 
            },
            {
                name:"Product 2",
                price:700
            },
            {
                name:"Product 3",
                price:250
            }
        ]
    }
    );  
</p>
`

assignmentAdvance.innerHTML =`
<p style='white-space: pre';>
function twoSum(nums, target){
    let index = 0;
    let resultIndex = [];
        while(resultIndex.length === 0 && index < (nums.length - 1)){
                nums.slice(index + 1).forEach(number => {
                    if(number === (target - nums[index])){
                        resultIndex.push(index, nums.indexOf(number));
                    }else if(nums[index] === target && resultIndex.length === 0){
                      resultIndex.push(index); //預防一個數字就是答案
                    }
            })
            index++
        }
    return resultIndex
    }

    想法：固定最左邊的數，向右邊查找相對應的數目(forEach); 若無，則固定左邊第二個數字再向右查找(while迴圈)
    問題：
       1. 有可能一個數字就是答案嗎？就是不需要加另一個數子就可以達到要求
       
</p>
`
