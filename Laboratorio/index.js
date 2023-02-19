const  formulario  =  documento . getElementById ( 'Formulario web' ) ;
const  control  =  {
	Nombre : / ^ [ a-zA-ZÀ-ÿ \s ] { 1,40 } $ / ,
	Correo : / ^ [ a-zA-Z0-9_.+- ] + @ [ a-zA-Z0-9- ] + \. [ a-zA-Z0-9-. ] + $ / ,
    clave : / ^ . { 4,12 } $ / ,
    Confirme su clave : / ^ . { 4,12 } $ / ,
}
const  campos  =  {
	nombre : falso ,
	Clave : falsa ,
	correo : falso ,
	Confirme su clave : falso
}
if ("Nombre, Clave, Correo, Confirme su clave") are true= 