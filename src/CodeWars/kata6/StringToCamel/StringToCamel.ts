function transform(str: string): any {
    let regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}

console.log(transform("the_stealth_warrior"));
console.log(transform("The-Stealth-Warrior"));
console.log(transform("A-B-C"));

//sys outprtl ? procces.exit(0) : continue;
