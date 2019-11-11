const assignment1 = document.querySelector('.assignment-one');
const assignment2 = document.querySelector('.assignment-two');
const assignment3 = document.querySelector('.assignment-three');
const assignmentAdvance = document.querySelector('.assignment-advance');




assignment1.innerHTML =`
<p style='white-space: pre';>
    function max(...numbers){
        const result = numbers.sort();
        return result[result.length - 1];
    }
</p>
`

assignment2.innerHTML =`
<p style='white-space: pre';>
    function calculate(args){ 
        let result;
        if(args.op === "+"){ 
            result = args.n1+args.n2;
        }else if(args.op === "-"){ 
            result = args.n1-args.n2;
        }else{
            result = "Not supported";
        }
        return result; 
    }

    class Args{
        constructor(n1, n2){
            this.op = "-";
            this.n1 = 1;
            this.n2 = 2;
        }
    }

    let args = new Args();
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
                    }
            })
            index++
        }
    return resultIndex
    }

    想法：固定最左邊的數，向右邊查找相對應的數目(forEach); 若無，則固定左邊第二個數字再向右查找(while迴圈)
</p>
`
