let ObjArr = [{
        name: "manish",
        dob: "1/1/1995",
        gender: "male",
        city: "jalandhar",
        sports: [
            "swimming"
        ]
    },
    {
        name: "gopal",
        dob: "1/09/1995",
        gender: "male",
        city: "delhi",
        sports: [
            "soccer"
        ]
    },
    {
        name: "lokesh",
        dob: "1/1/1990",
        gender: "male",
        city: "mumbai",
        sports: [
            "soccer"
        ]
    }
]



let savePlayer = function (req, res) {
    let outPut = {
        status: false,
        data: "Something went wrong, Check your code."
    }
    let body = req.body;
    // find Name 
    let find = ObjArr.find((eachObject) => {
        if (eachObject.name == body.name) return true;
    })


    if (find) {
        outPut = {
            status: false,
            data: "This player name is already exist..., Try anather one."
        }
    } else {
        ObjArr.push(body);
        outPut = {
            status: true,
            data: ObjArr
        }
    }
    res.send(outPut)
}

module.exports.savePlayers = savePlayer