
process.stdin.setEncoding('utf8');

process.stdin.on('readable', ()=>{
    var input = process.stdin.read();

    if(input != null){
        //ecoa na saída o texto de entrada
        process.stdout.write(input);

        var command = input.trim();
        if (command == 'exit')
            process.exit(0);

    }
});