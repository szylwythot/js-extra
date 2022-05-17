// "use strict"
// console.dir(this);

// "use strict";
// (function (){
//     console.dir(this);
// })()

const user = {
    name : "Gyuszi",
    logname : function(){
        console.log("1", this); // logs Gyuszi
        (function (){
            console.log("2", this); // logs window object...
        })();
        const arrowFunc = () => {
            // console.log(this);""
            console.log("3", this);
        }
        arrowFunc();
        // console.log(this);
    }
};

// user.logname();

const ugn = user.logname;
ugn();

window.addEventListener("load", function(){
    console.log(this);
});

