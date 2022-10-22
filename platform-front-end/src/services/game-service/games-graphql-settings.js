import { gql } from 'graphql-request'

function GetRequest() {
  
    const query = gql`
        query
        {
            jogos{
                id,
                nome,
                descricao,
                classificacaoESBR,
                generos {
                    nome
                },
                estudio {
                    nome
                }
            }
        }`;

    return query;
};

function GetByIdRequest() {
  
    const query = gql`
        query jogos($id: Int!)
        {
            jogos(where : {id: {eq: $id}}){
                id,
                nome,
                descricao,
                classificacaoESBR,
                generos {
                    nome
                },
                estudio {
                    nome
                }
            }
        }`;

    return query;
};

function PostRequest() {
  
    const query = gql`
    mutation addJogo($nome: String!, $descricao: String!, $classificacaoESBR: Rating!) {
        addJogo(input: {nome: $nome,
                        descricao: $descricao,
                        classificacaoESBR: $classificacaoESBR
        })
        {
            jogo{
                id,
                nome
            }
        }
    }`;

    return query;
};


function DeleteRequest() {
  
    const query = gql`
    mutation deleteJogo($id: Int!) {
        deleteJogo(input: {id: $id})
    }`;

    return query;
};


function UpdateRequest() {
  
    const query = gql`
        mutation updateJogo($nome: String!, $descricao: String!, $classificacaoESBR: Rating!) 
        {
            updateJogo(input: {nome: $nome,
                                descricao: $descricao,
                                classificacaoESBR: $classificacaoESBR
            })
            {
                jogo{
                    id,
                    nome
                }
            }
        }`;

    return query;
};



export function CreateGamesSettings() {

    const settings = {
        baseUrl : 'http://localhost:5143/graphql',
        headers: { 'Content-Type': 'application/json' }
    };

    settings['getRequestQuery'] = GetRequest();
    settings['GetByIdRequestQuery'] = GetByIdRequest();
    settings['PostRequestQuery'] = PostRequest();
    settings['DeleteRequestQuery'] = DeleteRequest();
    settings['UpdateRequestQuery'] = UpdateRequest();

    return settings;
};
