const container = document.querySelector('.container')
    console.log(container);


for (let i = 1; i <= 100; i++) {
    console.log(i);
    

    const box = document.createElement('div')

    box.classList.add('box')
    
    if (!(i % 15)){
        box.classList.add('fizzbuzz')
        box.innerHTML = "FizzBuzz"
    } else if (!(i % 3)){
        box.classList.add('fizz')
        box.innerHTML = "Fizz"
    } else if (!(i % 5)){
        box.classList.add('buzz')
        box.innerHTML = "Buzz"
    } else {
        box.classList.add(i)
        box.innerHTML = i
        
    }

    container.append(box)
    }





