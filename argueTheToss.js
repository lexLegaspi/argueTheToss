function anArgument() {
//Your code goes here

  let count = arguments.length
  let argsArr = Array.from(arguments)
  let args = ""
   if (argsArr.length == 0 ){
     return `You didn't give me any arguments.`
   }  else if(argsArr.length > 1) {
     args = `You gave me ${count} arguments and they are`
  }   else {
        return `You gave me ${count} argument and it is "${argsArr[0]}".`
  }
  
  
  argsArr.forEach((x,i) => {
    if(i === argsArr.length - 1){
      args += ` and "${x}".`;
    } else if(i === argsArr.length - 2) {
        args += ` "${x}"`
    } else args += ` "${x}",`
  })
  
  return args
}