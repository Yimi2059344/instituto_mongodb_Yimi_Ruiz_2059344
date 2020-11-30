use institutoYimi;

db.createCollection("profesores");

db.usuarios.insertMany([
    {
        nombre:'oscar',
        apellido: 'gutierrez',
        correo:'gutierrez@gmail.com',
        documento:'3456789'
        
    },
    {
        nombre:'andres',
        apellido: 'ramirez',
        correo:'andres@gmail.com',
        documento:'1256698'
        
    },
    {
        nombre:'julian',
        apellido: 'gonzalez',
        correo:'julian@gmail.com',
        documento:'8976543'
        
    },
    {
        nombre:'juan',
        apellido: 'amador',
        correo:'juan@gmail.com',
        documento:'35454654'

    },
    {
        nombre:'santiago',
        apellido: 'vargas',
        correo:'santiago@gmail.com',
        documento:'8976543'
    }
])

db.createCollection("estudiantes");

db.estudiantes.insertMany([
   {
        nombre:'daniela',
        apellido: 'gutierrez',
        correo:'daniela@gmail.com',
        documento:'111111111'
        
    },
    {
        nombre:'fabiana',
        apellido: 'ramirez',
        correo:'fabiana@gmail.com',
        documento:'22222222'
        
    },
    {
        nombre:'maria',
        apellido: 'gonzalez',
        correo:'maria@gmail.com',
        documento:'3333333'
        
    },
    {
        nombre:'paola',
        apellido: 'amador',
        correo:'paola@gmail.com',
        documento:'444444'

    },
    {
        nombre:'michel',
        apellido: 'vargas',
        correo:'michelo@gmail.com',
        documento:'555555'
    },
     {
        nombre:'diana',
        apellido: 'gutierrez',
        correo:'diana@gmail.com',
        documento:'666666'
        
    },
    {
        nombre:'marcela',
        apellido: 'ramirez',
        correo:'marcela@gmail.com',
        documento:'7777777'
        
    },
    {
        nombre:'juliana',
        apellido: 'gonzalez',
        correo:'juliana@gmail.com',
        documento:'88888'
        
    },
    {
        nombre:'lina',
        apellido: 'amador',
        correo:'lina@gmail.com',
        documento:'99999'

    },
    {
        nombre:'vanesa',
        apellido: 'vargas',
        correo:'vanesa@gmail.com',
        documento:'10101010'
    },
     {
        nombre:'karol',
        apellido: 'gutierrez',
        correo:'karol@gmail.com',
        documento:'12121212'
        
    },
    {
        nombre:'catalina',
        apellido: 'ramirez',
        correo:'catalina@gmail.com',
        documento:'1313131313'
        
    },
    {
        nombre:'tatiana',
        apellido: 'gonzalez',
        correo:'tatiana@gmail.com',
        documento:'1414141414'
        
    },
    {
        nombre:'yeimi',
        apellido: 'amador',
        correo:'yeimi@gmail.com',
        documento:'15151515'

    },
    {
        nombre:'heidy',
        apellido: 'vargas',
        correo:'heidy@gmail.com',
        documento:'16161616'
    },
     {
        nombre:'stefania',
        apellido: 'gutierrez',
        correo:'stefania@gmail.com',
        documento:'1717171717'
        
    },
    {
        nombre:'yulieth',
        apellido: 'ramirez',
        correo:'yulieth@gmail.com',
        documento:'18181818'
        
    },
    {
        nombre:'gimena',
        apellido: 'gonzalez',
        correo:'gimena@gmail.com',
        documento:'19191919'
        
    },
    {
        nombre:'daniel',
        apellido: 'amador',
        correo:'daniel@gmail.com',
        documento:'20202020'

    },
    {
        nombre:'yimi',
        apellido: 'vargas',
        correo:'yimi@gmail.com',
        documento:'21212121'
    }

])

db.createCollection("cursos");

db.cursos.insertMany([

      {
        nombre:'html',
        creditos: '10'
        
        
    },
    {
        nombre:'css',
        creditos: '15'
        
        
    },
    {
        nombre:'js',
        creditos: '40'
        
        
    },
    {
        nombre:'php',
        creditos: '54',
        

    },
    {
        nombre:'java',
        creditos: '54',
        
    },
    {
        nombre:'c#',
        creditos: '87',
        
        
    },
    {
        nombre:'bd',
        creditos: '60',
        

    },
    {
        nombre:'python',
        creditos: '70',
        
    }
]);


db.profesores.find(),pretty();
db.estudiantes.find(),pretty();
db.cursos.find(),pretty();

