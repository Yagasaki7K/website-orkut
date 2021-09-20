import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AperkutMenu, AperkutNostalgicIconSet, AperkutProfileSidebarMenuDefault } from '../src/lib/AperkutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'


export default function Home() {
    const githubUser = 'Yagasaki7K'
    const relationships = ['Nirayuki', 'Rafaballerini', 'LawliL', 'Fukubi', 'diego3g', 'cassidoo']
    const community = ['ApertureLaboratory', 'Rocketseat', 'Github', 'Microsoft', 'Facebook', 'Netlify']

    return (
        <>
            <AperkutMenu />
            <MainGrid>
                <div className="profileArea" style={{ gridArea: "profileArea"}}>
                    <Box>
                        <img src={`https://github.com/${githubUser}.png`}/>
                        <hr />
                        
                        <p>
                            <a className="boxLink" href={`https://github.com/${githubUser}`}>@{githubUser}</a>
                        </p>
                        <hr />

                        <AperkutProfileSidebarMenuDefault />
                    </Box>
                </div>
                <div className="welcomeArea" style={{ gridArea: "welcomeArea"}}>
                    <Box>
                        <h1 className="title" style={{marginBottom: '-10px'}}>Bem vindo(a), {githubUser}</h1>
                        <AperkutNostalgicIconSet/>
                        <div style={{marginTop: '10px'}}>
                            <p><b>Visualizações de seu perfil:</b> Desde Sep. 2021: 1337, Ontem: 0</p>
                        </div>
                        <div style={{marginTop: '10px'}}>
                            <p><b>Seus visitantes recentes:</b> Nenhum</p>
                        </div>
                        <div style={{marginTop: '10px'}}>
                            <p><b>Sorte de hoje:</b> Você nunca economiza conselhos ou ajuda</p>
                        </div>
                    </Box>

                    <Box style={{marginTop: '10px'}}>
                        <h2 className="subTitle">O que você deseja fazer?</h2>

                        <form onSubmit={function handleCreateCommunity(e) {
                            e.preventDefault()
                            console.log(e)
                        }}>
                            <div>
                                <input placeholder="Qual vai ser o nome da sua comunidade?"
                                name="title" type="text"
                                aria-label="Qual vai ser o nome da sua comunidade?"/>
                            </div>

                            <div>
                                <input placeholder="Insira uma URL de capa"
                                name="title" type="text"
                                aria-label="Insira uma URL de capa"/>
                            </div>

                            <button>
                                Criar comunidade
                            </button>
                        </form>
                    </Box>
                </div>
                <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea"}}>
                    <ProfileRelationsBoxWrapper>
                        <h2 className="smallTitle">Meus amigos ({relationships.length})</h2>

                        <ul>
                            {relationships.map((itemAtual) => {
                                return (
                                    <li>
                                        <a href={`https://github.com/${itemAtual}`} target="_blank" key={itemAtual}>
                                            <img src={`https://github.com/${itemAtual}.png`} />
                                            <span>{itemAtual}</span>
                                        </a>
                                    </li>
                                )}
                            )}
                        </ul>
                    </ProfileRelationsBoxWrapper>   

                    <ProfileRelationsBoxWrapper style={{marginTop: '10px'}}>
                        <h2 className="smallTitle">Minhas comunidades ({community.length})</h2>

                        <ul>
                            {community.map((itemAtual) => {
                                return (
                                    <li>
                                        <a href={`https://github.com/${itemAtual}`} target="_blank" key={itemAtual}>
                                            <img src={`https://github.com/${itemAtual}.png`} />
                                            <span>{itemAtual}</span>
                                        </a>
                                    </li>
                                )}
                            )}
                        </ul>
                    </ProfileRelationsBoxWrapper>        
                </div>
            </MainGrid>
        </>
    )
}
