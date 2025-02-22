# AngularRevisao
revisando conceitos antigos e novos

# Signals

 Um signal é um invólucro em torno de um valor que notifica os consumidores interessados ​​quando esse valor muda. Os sinais podem conter qualquer valor, desde primitivos até estruturas de dados complexas.

 Você lê o valor de um sinal chamando sua função getter, que permite ao Angular rastrear onde o sinal é usado.

 Os sinais podem ser graváveis ​​ou somente leitura.

 - https://angular.dev/guide/signals


# Observables

- Angular faz uso de observáveis ​​como interface para 
lidar com uma variedade de operações assíncronas comuns

- https://v17.angular.io/guide/observables-in-angular

# Form

 - Verifica a propriedade "invalid" e "valid", não 
 usa a propriedade status.

 - Cada controle tem a sua validação.

 - form Reativo é quando a configuração fica no TS.

 - propriedade prostine, está original ninguem mexeu.

 - prop touched, não foi tocado.

 - prop value, o valor.

 - dirty: status sujo.

 - Ele gerencia classes CSS com base nessas propriedades, 
 exemplo a classe "ng-intouched", "ng-pristine", "ng-invalid"
 aparece antes que o input seja usado.

 - 