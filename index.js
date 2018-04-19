
let fs = require("fs")

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'TopSong_db'

});






connection.connect((error) => {
    if (error) throw error
    console.log('connected as ', connection.threadId)

    //connection.query("select * from item ", (error, response) => {

    
        
        fs.readFile('Topsongs.csv', 'utf8', (error, data) => {
            if (error) throw "NOPE"
            //console.log(data.split("/n"))
            var data1 = data.split("\n")
            //console.log(data1)
            for (i = 0; i < data1.length; i++) {
                //console.log(data1[i])
                //console.log(data1[i].split(","))
                var arr = data1[i].split(",")
                //    for (a=0;a<9;a++){
    
                //    }
                var insert1 = "insert into item (song,artist,date1,rating )VALUES (" + arr[1] + "," + arr[2] + "," + arr[3] + "," + arr[4] + ");"
                console.log(insert1)
                connection.query(insert1, (error, response) => {
                    if (error) throw error
                });
            }
        })  

    connection.query("select * from item ", (error, response) => {

        if (error) throw error
        console.log(response[0].song)
    })
    connection.end()
}


)