# Data Engineer

> Em construção

## O que faz um Data Engineer?

Bom, de forma geral podemos dizer que o Engenheiro de Dados (Data Engineer, ou DE) é o responsável por garantir que os dados de uma organização ~existam~, estejam disponíveis, tenham qualidade, dentre outras coisas.

São muitas as possíveis atribuições de um DE, mas o trabalho primário é preparar (ou as vezes até criar/coletar) dados para utilização analítica ou operacional. Por exemplo, uma tarefa comum é estruturar bases de dados que serão utilizadas por Cientistas ou Analistas de Dados nos seus trabalhos.

## Os papéis de um Data Engineer

É muito importante ressaltar que tudo isso pode variar de empresa para empresa. Vamos considerar um panorama geral, mas tudo isso pode mudar.

### Generalistas

Dependendo do tamanho da organização ou do time, se especializar em um único assunto pode não fazer sentido. Considerando esse perfil, os generalistas vão fazer desde a coleta de dados, até a ingestão e processamento. Isso requer um vasto conhecimento em assuntos diferentes, e principalmente a habilidade de aprender e se adaptar a novas ferramentas. Isso também significa que dificilmente terá conhecimentos mais profundos em algum assunto.

Foi nesse cenário que entrei na carreira de engenharia de dados, trabalhando numa consultoria de marketing e analytics.

Um trabalho comum para esses profissionais é o desenvolvimento de dashboards (ou melhor, das bases de dados que alimentam esses dashboards) de acompanhamento de métricas. Um exemplo é [este dashboard](https://datastudio.google.com/reporting/f41ba9a4-994e-457c-b219-0e2acf763529/page/wv43C) de acompanhamento das apurações das eleições do Brasil em 2022, onde foi desenvolvido um script com planilhas Google para atualização automática da planilha que serve de fonte desses dados. O código e o link da planilha estão disponíveis no [Github](https://github.com/1cadumagalhaes/fora_bolsonaro_sheets)

### Engenheiros focados em pipelines

Conforme a maturidade digital das empresas cresce, suas necessidades com dados evoluem. Tipicamente no início da curva de maturidade as coisas são desenvolvidas com o objetivo de ter entregas rápidas e que entregam valor, o que geralmente não leva em consideração a escalabilidade ou as melhores práticas de arquitetura.

O papel do engenheiro especializado em pipelines é planejar, desenvolver e fazer a manutenção de sistemas de dados que são utilizados com frequência e precisam estar sempre atualizados. Esse profissional é especializado em ferramentas de orquestração de dados como Apache Airflow, Luigi, NiFi, Prefect, Dagster, mas também tem conhecimento para desenvolver orquestrações menos complexas utilizando ferramentas menos robustas, como aplicações gerenciadas por eventos usando Cloud Functions (no caso de Google Cloud), Lambda Functions (em AWS) e semelhantes.

Os projetos desse tipo de profissional costumam depender menos da estruturação dos dados em si (definição de schemas, datasets, tabelas) e mais das transformações que envolvem esses dados, desde a ingestão e extração até quaisquer transformações intermediárias. Um exemplo é a atualização constante de datasets utilizados por um time de ciência de dados de forma recorrente.

### Engenheiros focados em bancos de dados

Esses profissionais são os responsáveis por plenejar, implementar e fazer a manutenção de bancos analíticos (tipicamente Data Warehouses). São as pessoas que terão grandes conhecimentos de SQL e a habilidade de desenvolver tabelas da forma mais eficiente possível para análises, garantindo a qualidade dos resultados e mantendo os custos sob controle.

É a carreira que vai trabalhar muito próxima das áreas que usam os dados (sejam analistas ou cientistas) para entender as necessidades e arquitetar um modelo de dados que possa ser usado facilmente e que ajude a responder as análises levantadas.

## As responsabilidades de um Data Engineer

## Habilidades esperadas de um Data Engineer

## O que estudar para se tornar um Data Engineer
