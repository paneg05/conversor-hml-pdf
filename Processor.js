class Processor {
    static Process(data){
        let rows =  data.split('\r\n').map((row)=>{
            return row.split(',')

        })
        rows = rows.filter(row => row.length >1)
        return rows
        
    }
}


module.exports = Processor