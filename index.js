let dbUsers = [
    {
        username: "Nawi",
        password: "246810",
        name: "nawi",
        email: "nawi@utem.edu.my",
    },
    {
        username: "Khai",
        password: "123456789",
        name: "khai",
        email: "khai@utem.edu.my",
    },
    {
        username: "Khai",
        password: "password",
        name: "Khai",
        email: "khai@utem.edu.my",
    }
]
    function login(reUsername, reqPassword){ {
        let matchuser = dbUsers.find(
            user => user.username == requsername
        )
        console.log(matchUser)
    }

    function login (reqUsername, reqPassword){
        let matchUser = dbUsers.find(
            x => x.username == reqUsername
        )

        if(!matchUser) return "User not found!"
    }
}

    //try login
    console.log( login( "JimLaurenth", "password"))
    login("awijr","13456")