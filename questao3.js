function fat_diario(a){
    const dias_sem_fat = a.filter(valor => valor >0);
    const soma = a.reduce((acc,valor) => acc+valor, 0);
    const media = soma / dias_sem_fat.length;
    const acima_media = a.filter(a=> a > media);
    const num_acima = acima_media.length;
    const maior = Math.max(...a);
    const menor = Math.min(...a);
    console.log("o maior faturamento diario foi: "+maior+" o menor faturamento diario foi: "+menor+" e o numero de dias em que o faturamento foi maior que a media mensal é: "+num_acima);
}
//exemplo
fat_diario([10,5,0])