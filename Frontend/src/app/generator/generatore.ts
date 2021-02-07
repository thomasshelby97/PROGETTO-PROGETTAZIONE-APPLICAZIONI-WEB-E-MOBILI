export interface Generatore {
    data_ora:Date,
    energia_elettrica_prodotta_khw:string,
    energia_termica_prodotta_kWh:string,
    percent_ore_di_funzionamento:string,
    percent_carichi_parziali:string,
    rendimento_elettrico:string,
    rendimento_termico:string
}