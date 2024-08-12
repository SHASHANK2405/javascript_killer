(
    function chai(){
        console.log("DB is connected")
    }
)();                  // semi colen plays a major role

(
    (name) => {
        console.log(`DB is Two connected ${name}`)
    }
)("Shashank");