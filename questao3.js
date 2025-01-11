function fatDiario(a){
    const diasSemFat = a.filter(valor => valor >0);
    const soma = a.reduce((acc,valor) => acc+valor, 0);
    const media = soma / diasSemFat.length;
    const acimaMedia = a.filter(a=> a > media);
    const numAcima = acimaMedia.length;
    const maior = Math.max(...a);
    const menor = Math.min(...a);
    console.log("o maior faturamento diario foi: "+maior+" o menor faturamento diario foi: "+menor+" e o numero de dias em que o faturamento foi maior que a media mensal é: "+numAcima);
}
//exemplo
fatDiario([10,5,0])