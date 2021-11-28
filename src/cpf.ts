
const isNuloOuUndefined = (cpf: String): boolean => (cpf === null || cpf === undefined) ? true : false

const retirarFormatacao = (cpf: String): String => cpf.replace('.', '').replace('.', '').replace('-', '').replace(" ", "")

const isTodosDigitosIguais = (cpf: String): boolean => cpf.split("").every(digito => digito === cpf[0])

const isTamanhoInvalido = (cpf: String): boolean => (cpf.length < 11 || cpf.length > 14) ? true : false

const calcularDigitoVerificador = (cpfParte: String): number => {
    let acumulador: number = 0
    let multiplicador = cpfParte.length + 1
    for (let ind = 0; ind < cpfParte.length ; ind++) {
        let digito = parseInt(cpfParte.substring(ind, ind + 1));
        acumulador += (multiplicador * digito)
        multiplicador--
    };
    let resto = acumulador % 11
    return (resto < 2) ? 0 : (11 - resto);
}

const isCpfValido = (cpf: String): boolean => {
    if (isNuloOuUndefined(cpf) || isTamanhoInvalido(cpf)) return false;
    cpf = retirarFormatacao(cpf);
    if (isTodosDigitosIguais(cpf)) return false;

    try {
        let noveDigitosDoCpf = cpf.substring(0, 9)
        let primeroDV = calcularDigitoVerificador(noveDigitosDoCpf)
        let segundoDV = calcularDigitoVerificador(noveDigitosDoCpf + primeroDV.toString());
        let cpfCorreto = noveDigitosDoCpf + primeroDV.toString() + segundoDV.toString()

        return (cpf !== cpfCorreto) ? false : true;
    } catch (e) {
        console.error("Erro !" + e);
        return false;
    }
}

export default isCpfValido;

