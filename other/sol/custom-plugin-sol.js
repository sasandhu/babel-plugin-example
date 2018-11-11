//Using call expression
module.exports = function(babel) {
  var t = babel.types;
  return {
    visitor: {
      CallExpression(path) {
       const isConsole = path.get("callee").matchesPattern("console", true);
       if(isConsole){
           path.remove();
       }
     }
    }
  };
};

//Using findParent
export default function(babel) {
  const { types: t } = babel;
  let parentNode;

  return {
    name: "ast-transform", // not required
    visitor: {
      Identifier(path) {
        if(path.node.name === 'console'){
    		parentNode=path.findParent((path) => path.isCallExpression());
          if(parentNode){
          	parentNode.remove();
          }
        }
      }
    }
  };
}
