function passedTime(){

    let callCount = 0;
    let time=null;

    function getTime() {
      callCount += 1;
      switch (callCount) {
        case 1:
            time=new Date;
            console.log('Enabled');
          break;
        case 2:
            setTimeout( function() { 
                            let result=new Date; 
                            let divide=result.getSeconds()-time.getSeconds(); 
                            console.log(`${divide} seconds have passed`);
                        }
            , 2000);
          break;
        case 3:
            setTimeout( function getDate() { 
                let result=new Date; 
                let divide=result.getSeconds()-time.getSeconds(); 
                console.log(`${divide} seconds have passed`);
            }
        , 4000);
          break;
          case 4:
            setTimeout( function getDate() { 
                let result=new Date; 
                let divide=result.getSeconds()-time.getSeconds(); 
                console.log(`${divide} seconds have passed`);
            }
        , 8000);
          break;
        default:
            console.log( "Нет таких значений" );
      }
    }
    
    getTime() // 'Enabled'
    getTime() // 2 seconds have passed
    getTime() // 4 seconds have passed
    getTime() // 8 seconds have passed
   
}


function passedTime2(){
    let callCount = 0;
    let sec=1;
    let timer=setInterval(() => {
        console.log(sec);
        sec++;
        if (sec>10) {
            console.log('time end');
            clearInterval(timer);
        }
    }, 1000);
    function getTime(){
        callCount += 1;
        switch (callCount) {
          case 1:
            setTimeout( function() { 
                console.log(`start`);
            }
        , 0);
            break;
          case 2:
            setTimeout( function getDate() { 
                let result=sec-1; 
                console.log(`${result} seconds are elapsed`);
            }
        , 2000);
            break;
          case 3:
            setTimeout( function getDate() { 
                let result=sec-1; 
                console.log(`${result} seconds are elapsed`);
            }
        , 4000);
            break;
            case 4:
                setTimeout( function getDate() { 
                    let result=sec-1; 
                    console.log(`${result} seconds are elapsed`);
                }
            , 6000);
            break;
          default:
              console.log( "Нет таких значений" );
        }
    }
    getTime();
    getTime();
    getTime();
    getTime();


}


function launchTimeout(){
    const timer = time => {
        let timer = setInterval(function(){
            let result=new Date(time * 1000).toISOString().substring(14, 19)
            console.log(result);
            time--;
            if (time <=0) {
                console.log('time end');
                clearInterval(timer);
            }
        }, 1000);        
      
       }
       
       timer(120);
       timer(59);


}

function getTimeout(){
    return setTimeout(()=> console.log("Hello"),2000);
}