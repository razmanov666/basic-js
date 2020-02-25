module.exports = 
function transform(arr) {
    for (let i=0; i<3; i++){   
        arr.forEach(element => {
            switch (element){
                case '--discard-next':
                    {
                    /* if (arr.length == 1) 
                            doNothing();
                        else{*/
                            let index = arr.indexOf('--discard-next',0);
                            /*console.log(arr);
                            console.log(arr[index+1]);*/
                            arr.splice(index, 1);
                            arr[index+1] == undefined ? arr.splice(0,1):
                            //console.log(arr[index])
                                arr.splice(index, 1);
                            
                        // }
                        break;
                    }
                case '--discard-prev':
                    {   
                        /*if (arr.length == 1) 
                            doNothing();
                        else{*/
                            let index = arr.indexOf('--discard-prev',0);
                            arr.splice(index, 1);
                            arr[index-1] == undefined ? arr.splice(-1,1):
                                arr.splice(index-1, 1);
                            //console.log(arr);
                            //}
                            break;
                    }
                case '--double-prev':
                    {
                        let index = arr.indexOf('--double-prev',0);
                        arr[index-1] == undefined ? arr.splice(arr.indexOf('--double-prev',0),1): arr[index] = arr[index-1];
                        //console.log(arr);
                        break;
                    }
                case '--double-next':
                    {
                        let index = arr.indexOf('--double-next',0);
                        arr[index+1] == undefined ? arr.splice(arr.indexOf('--double-next',0),1) : arr[index] = arr[index+1];
                        //console.log(arr);
                        break;
                    }
            }
        });
        arr.forEach(element => {element == undefined ? arr.splice(arr.indexOf(element,0),1) : doNothing()})
    }
    return arr;
};

function doNothing(){

}
/*
let test=["--discard-prev"];
console.log(transform(test));*/