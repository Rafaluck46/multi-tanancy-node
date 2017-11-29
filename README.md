# multi-tanancy-node
An application for multi-tenancy

Criada para estudo, essa aplicação tem como objetivo representar o modelo de pattern multi-tenancy com nodejs

A aplicacao conecta por padrão em um banco de configuracoes: tenancydb para adição de clientes ou tenancyId
após isso, cria-se os dados do cliente no banco. Então é passado o nome do cliente nos headers da requisicao
