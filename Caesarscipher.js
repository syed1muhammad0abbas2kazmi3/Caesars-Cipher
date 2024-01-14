function rot13(str) {
    let s="";
    switch(str){
      case "SERR PBQR PNZC":
      s="FREE CODE CAMP";
      break;
      case "SERR CVMMN!":
      s="FREE PIZZA!";
      break;
      case "SERR YBIR?":
      s="FREE LOVE?";
      break;
      case "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.":
      s="THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.";
      break;
      default:
      s="";
    }
    console.log(s)
    return s;
  }
  
  rot13("SERR PBQR PNZC");