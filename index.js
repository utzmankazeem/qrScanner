import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
.prompt([
    {
        message: "Type in username: ",
        name: "URL"
    }
])
.then((answer) => {
    //console.log(answer);
    const url = answer.URL
    let qr_svg = qr.image(URL)
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url, (err) => {
        if(err) throw err;
        console.log("The file has been saved!");
    })
})
.catch((err) => {
    if(err.isTtyError) {
        //
    } else {
        //
    }
})
