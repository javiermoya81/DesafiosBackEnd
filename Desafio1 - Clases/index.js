class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
      (this.nombre = nombre),
      (this.apellido = apellido),
      (this.libros = libros),
      (this.mascotas = mascotas)
  }

  getFullName() {
    console.log(`Usuario: ${this.nombre} ${this.apellido}`)
  }
  addMascotas(mascota) {
    this.mascotas.push(mascota)
  }
  countMascotas() {
    console.log(`Cantidad de mascotas: ${this.mascotas.length}`)
  }
  addBoks(libro, autor) {
    this.libros.push({ nombre: libro, autor: autor })
  }
  getBookNames() {
    console.log(
      this.libros.map((libro) => {
        return libro.nombre
      }),
    )
  }
}

const usuarioNuevo = new Usuario(
  'Javier',
  'Moya',
  [
    { nombre: 'Los tres mosqueteros', autor: 'Alejandro Dumas' },
    { nombre: 'La vuelta al mundo en 80 dias', autor: 'Julio Verne' },
  ],
  ['Kimba', 'Simon']
)
console.log(usuarioNuevo)
usuarioNuevo.getFullName()
usuarioNuevo.addMascotas('Pepe')
console.log(usuarioNuevo.mascotas)
usuarioNuevo.countMascotas()
usuarioNuevo.addBoks('Moby-Dick', 'Herman Melville')
console.log(usuarioNuevo.libros)
usuarioNuevo.getBookNames()
