Feature: Testando API Pokemon.

Background: Executa antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2/'

Scenario: Verificando existencia do Charizard na API.
    Given url url_base
    And path "pokemon/charizard"
    When method get
    Then status 200

Scenario: Verificando se Charizard não é dragão :( .
    Given url url_base
    And path '/pokemon/charizard'
    When method get
    Then status 200
    And match $.types[0].type.name != "dragon"
    And match $.types[1].type.name != "dragon"  

Scenario: [ERRO] Verificando existencia de Miraidon na API.
    Given url url_base
    And path "pokemon/miraidon"
    When method get
    Then status 404

Scenario: Verificando os tipos do move Curse.
    Given url url_base
    And path "move/curse"
    When method get
    Then status 200
    And match $.past_values[0].type.name == "unknown"
    And match $.type.name == "ghost"

Scenario: Verificando a linhagem evolutiva do Dratini é sequencial na API.
    Given url url_base
    And path 'pokemon?limit=151&offset=0'
    When method get
    Then status 200
    And match $.results[146].name == "dratini" 
    And match $.results[147].name == "dragonair"  
    And match $.results[148].name == "dragonite" 

    