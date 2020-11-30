import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["1111", "2222", "3333", "4444", "5555", "6666", "7777", "8888", "9999"]

  connect() {
    this.result = {}
  }

  cpf_validate(cpf) {
    var eleven_cpf = ["00000000000", "11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"]

    cpf = cpf.replace('.', "").replace('.', "").replace('-', "")
    if (cpf) {
      if (cpf.length != 11) {
        this.result = { invalid: true, message: "CPF Inválido" }
      } else if (eleven_cpf.includes(cpf)) {
        this.result = { invalid: true, message: "CPF Inválido" }

      } else {
        // prepare array
        var cpf_array = cpf.split("")

        // first digit
        var verify_digit_one = cpf_array[9].toString()
        var sum = 0
        for (var index = 0; index < cpf_array.length - 2; index++) {
          sum += (cpf_array[index] * (index + 1));
        }
        var rest = sum % 11
        var digit_one = rest.toString().slice(-1);
        if (digit_one != verify_digit_one) {
          this.result = { invalid: true, message: "CPF Inválido" }
        }

        // second digit
        var verify_digit_two = cpf_array[10].toString()
        sum = 0
        for (var index = 0; index < cpf_array.length - 1; index++) {
          sum += (cpf_array[index] * (index));
        }
        rest = sum % 11
        var digit_two = rest.toString().slice(-1);
        if (digit_two != verify_digit_two) {
          this.result = { invalid: true, message: "CPF Inválido" }
        } else {
          this.result = { invalid: false, message: "" }
        }
      }
    } else {
      this.result = { invalid: true, message: "CPF Inválido" }
    }

    return this.result
  }

  cnpj_validate(cnpj) {
    var fourteen_cnpj = ["00000000000000", "11111111111111", "22222222222222", "33333333333333", "44444444444444", "55555555555555", "66666666666666", "77777777777777", "88888888888888", "99999999999999"]

    cnpj = cnpj.replace('.', "").replace('.', "").replace('/', "").replace('-', "")

    if (cnpj) {
      if (cnpj.length != 14) {
        this.result = { invalid: true, message: "CNPJ Inválido" }
      } else if (fourteen_cnpj.includes(cnpj)) {
        this.result = { invalid: true, message: "CNPJ Inválido" }
      } else {
        // prepare array
        var cnpj_array
        cnpj_array = Array.from(String(cnpj), Number)

        // first digit
        var verify_digit_one = cnpj_array[12]
        var factor = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        var sum = 0
        for (var index = 0; index < cnpj_array.length - 2; index++) {
          sum += (cnpj_array[index] * (factor[index]));
        }

        var rest = sum % 11

        // if the rest is less than two the validator digit one must be 0
        if (rest < 2) {
          if (verify_digit_one != 0) {
            this.result = { invalid: true, message: "CNPJ Inválido" }
          }
          // if the rest is greater than or equal two the validator digit one must be 11 subtracted from the rest
        } else {
          var digit_one = (11 - rest).toString().slice(-1);
          if (digit_one != verify_digit_one) {
            this.result = { invalid: true, message: "CNPJ Inválido" }
          }
        }

        // second digit
        var verify_digit_two = cnpj_array[13]
        factor.unshift(6)
        sum = 0
        for (var index = 0; index < cnpj_array.length - 1; index++) {
          sum += (cnpj_array[index] * (factor[index]));
        }

        rest = sum % 11

        // if the rest is less than two the validator digit one must be 0
        if (rest < 2) {
          if (verify_digit_two != 0) {
            this.result = { invalid: true, message: "CNPJ Inválido" }
          }
          // if the rest is greater than or equal two the validator digit one must be 11 subtracted from the rest
        } else {
          var digit_two = (11 - rest).toString().slice(-1);
          if (digit_two == verify_digit_two) {
            this.result = { invalid: false, message: "" }
          } else {
            this.result = { invalid: true, message: "CNPJ Inválido" }
          }

        }
      }
    } else {
      this.result = { invalid: true, message: "CNPJ Inválido" }
    }

    return this.result
  }

}