let customers = [
    { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true, dateJoined: '1/1/2019'},
    { id: 2, name: 'larry', email: 'larry@gmail.com', isVIP: true, dateJoined: '3/15/2018'},
    { id: 4, name: 'shep', email: 'shep@gmail.com', dateJoined: '6/15/019'},
   ];

    
   let i=0
   customers.forEach((element)=>{
        document.querySelectorAll('#customer')[i].innerHTML=`${element["name"]} Joined on ${element["dateJoined"]}`;
        if(element.hasOwnProperty('isVIP')){
            document.querySelectorAll('#customer')[i].className = 'vip';
            console.log(document.querySelectorAll('#customer')[i].className)
        }else{
            document.querySelectorAll('#customer')[i].className='nonvip';
            console.log(document.querySelectorAll('#customer')[i].className)
        }
        i++
   })
