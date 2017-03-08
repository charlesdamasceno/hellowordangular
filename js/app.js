var app=angular.module('helloworldApp',[]);

app.controller('mainCtrl', function ($scope) {
    $scope.entradatexto = 'Hello World';
    $scope.entradanome = 'nome';
    $scope.entradasobrenome = 'sobrenome';
    $scope.exibirConteudo = function(nome,sobrenome){
        alert(nome+' '+sobrenome);
    }
});