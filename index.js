let data = new Date()

let hora = data.getHours()

let min = data.getMinutes()

let saudacao
if (hora <= 08) {
  saudacao = 'Bom dia!'
} else if (hora <= 18) {
  saudacao = 'Boa Tarde!'
} else {
  saudacao = 'Boa noite.'
}

console.log('Ola!' + saudacao)
console.log('Agora sao' + hora + 'horas e minutos.')
