const container = document.querySelector('.container')
    console.log(container);


for (let i = 1; i <= 100; i++) {
    console.log(i);
    

    const box = document.createElement('div')

    box.classList.add('box')
    
    let text = '' ;
    text = i;


    if (!(i % 3)){
        box.classList.add('fizz')
        text = "Fizz"
    } else if (!(i % 5)){
        box.classList.add('buzz')
        text = "Buzz"
    } 

    if (!(i % 15)) {
        box.classList.add('fizz' + 'buzz')
        text = "FizzBuzz"
    }

    box.append(text)

    container.append(box)
    }





