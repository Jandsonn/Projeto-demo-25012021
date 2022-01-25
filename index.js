//Utilização do módulo
(async ()  => {
    const database = require('./db');
    const Notas = require('./notas')
    await database.sync();

    // //CRIA UMA NOVA NOTA E DETERMINA ESSA NOTA, SEM USO DE SQL
    // const newNota = await Notas.create({
    //     nome: 'João',
    //     n1: 10,
    //     n2: 7, 
    //     n3: 7,
    //     n4:4
    // })
    
    // console.log(newNota)


    // //Lista todos as notas como também nome de alunos
    // const notas = await Notas.findAll()
    // console.log(notas)

    const notas = await Notas.findByPk(1);
    console.log(notas);

    notas.n1 = "A nota foi alterada"
    notas.save();

})();