let customers = [
    { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true, dateJoined: '1/1/2019'},
    { id: 2, name: 'larry', email: 'larry@gmail.com', isVIP: true, dateJoined: '3/15/2018'},
    { id: 4, name: 'shep', email: 'shep@gmail.com', dateJoined: '6/15/019'},
   ];

   customers.forEach((element) =>{
       element.dateJoined=new Date(element.dateJoined)
       const diff = (new Date()-element.dateJoined)
       const oneYear= 1000*60*60*24*365
       const numOfYears = diff/oneYear
       element.memberFor=numOfYears.toFixed(2)
   })

   customers.sort((a,b)=>a.dateJoined-b.dateJoined)

   let i=0
   customers.forEach((element)=>{
        document.querySelectorAll('#customer')[i].innerHTML=`${element["name"]} Joined on ${element["dateJoined"].toLocaleDateString()}. Has been a customer for ${element['memberFor']} years.`;
        if(element.hasOwnProperty('isVIP')){
            document.querySelectorAll('#customer')[i].className = 'vip';
        }else{
            document.querySelectorAll('#customer')[i].className='nonvip';
        }
        i++
   })
   let form = document.querySelector('form')
   form.addEventListener('submit', (ev)=>{
    ev.preventDefault()

    let nameInput = form.querySelector('[name="name"]');
    let dateJoinedInput = form.querySelector('[name="dateJoined"]');
    let vipInput = document.querySelector('[name="isCHECK"]')

    let customerContainer = document.querySelector('.customerContainer')
    
    if(vipInput.checked){
        customerContainer.innerHTML += `<div class='vip' id='customer'>${nameInput.value}</div>`
    } else{
        customerContainer.innerHTML += `<div class='nonvip' id='customer'>${nameInput.value} 
        Joined on ${dateJoinedInput.value}. Has been a customer </div>`
    }
    
    console.log(nameInput.value)
   })


