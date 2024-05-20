const result='<405 Hello ,Mike,'
console.log(result.substring(result.indexOf('<')+1,result.indexOf(' ')));
console.log(result.substring(result.indexOf('<'),result.indexOf(' ')));