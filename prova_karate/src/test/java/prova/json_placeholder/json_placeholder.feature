Feature: Testando o método POST na API json_placeholder.

Scenario: Criando um novo elemento.
    Given url "https://jsonplaceholder.typicode.com"
    And path "/posts"
    And request { title: "Teste", body: "Teste", userId: 1}
    When method post
    Then status 201
