(async () => {
    try{

        const fs = require("fs/promises")
        const file =  await fs.readFile('../data/inside-airbnb-filter.json', 'utf-8')
        const properties = JSON.parse(file)

        const response = await fetch('http://127:0.0.1:8080/api/admin/properties', {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify(properties)
        })

        const result =  await response.json() 
        
    }catch(err){

    }
})()