const Reader = require('./Reader.js')
const Processor = require('./Processor.js')
const Table = require('./Table.js')
const HtmlParser = require('./HtmlParser.js')
const Writer = require('./Writer.js')
const PdfWriter = require('./PdfWriter.js')


const leitor = new Reader()
const escritor = new Writer()
const dados = leitor.read('./dados.csv')


async function main (){
    const dados = await  leitor.read('./dados.csv')
    const dadosProcessados = Processor.Process(dados)

    const usuarios = new Table(dadosProcessados)

    const html = await HtmlParser.Parse(usuarios)

    
    const write = await escritor.Write("htmlGerado.html",html)

    PdfWriter.WritePdf('pdfGerado.pdf',html)
    console.log(write)
    
}


main()