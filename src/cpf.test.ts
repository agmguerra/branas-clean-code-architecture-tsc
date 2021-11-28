import isCpfValido from "./cpf";

test("Cpf não deve ser null", function () {
    expect(isCpfValido(null)).toBe(false);
});

test("Cpf não deve ser undefined", function() {
    expect(isCpfValido(undefined)).toBe(false);
})

test("Cpf não pode ter todos os digitos iguais", function() {
    expect(isCpfValido("111.111.111-11")).toBe(false);
})

test("Cpf não pode menos de 11 nem mais de 14 posicoes", function() {
    expect(isCpfValido("")).toBe(false)
    expect(isCpfValido("1111.111.111-11")).toBe(false)
})

test("Cpf inválido", function() {
    expect(isCpfValido("123.456.789-99")).toBe(false);
})

test("Cpf válido", function() {
    expect(isCpfValido("935.411.347-80")).toBe(true);
})




