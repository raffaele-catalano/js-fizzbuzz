const container = document.querySelector('.container')
    console.log(container);


for (let i = 1; i <= 100; i++) {
    console.log(i);
    
    const box = document.createElement('div')
    box.classList.add('box')
    console.log(box);
    
    let output = i;
    
    if (!(i % 15)){
        box.classList.add('fizzbuzz')
        output = "FizzBuzz"
    } else if (!(i % 3)){
        box.classList.add('fizz')
        output = "Fizz"
    } else if (!(i % 5)){
        box.classList.add('buzz')
        output = "Buzz"
    } 
        

    box.append(output)

    container.append(box)

    }

    





