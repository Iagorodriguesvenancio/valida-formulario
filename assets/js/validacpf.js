// 705.484.450-52 "070.987.720-03
window.ValidaCpf = class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, "cpfLimpo", {
            whitable:false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g,"")
        })
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0,-2)
        const digito1 = ValidaCpf.geraDigito(cpfSemDigitos)
        const digito2 = ValidaCpf.geraDigito(cpfSemDigitos +digito1)
        this.novoCpf = cpfSemDigitos + digito1 + digito2
    }

    static geraDigito(cpfSemDigitos){
        let total = 0
        let reverso = cpfSemDigitos.length + 1
        for(let StringNumerica of cpfSemDigitos){
            total += reverso * Number(StringNumerica)
            reverso--
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : "0"
    }

    valida(){
        if(!this.cpfLimpo)return false
        if(typeof this.cpfLimpo != "string") return false
        if(this.cpfLimpo.length != 11) return false
        if(this.éSequência()) return false
        this.geraNovoCpf()
        return this.novoCpf == this.cpfLimpo
    }
    éSequência(){
        return this.cpfLimpo.charAt(0).repeat(11) == this.cpfLimpo
    }
}


