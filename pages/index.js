import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AperkutMenu, AperkutNostalgicIconSet } from '../src/lib/AperkutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

export default function Home() {
    const githubUser = 'Yagasaki7K'
    const relationships = ['Nirayuki', 'Rafaballerini', 'LawliL', 'Fukubi', 'ldantas-s']

    return (
        <>
            <AperkutMenu />
            <MainGrid>
                <div className="profileArea" style={{ gridArea: "profileArea"}}>
                    <Box><img src={`https://github.com/${githubUser}.png`}/></Box>
                </div>
                <div className="welcomeArea" style={{ gridArea: "welcomeArea"}}>
                    <Box>
                        <h1 className="title">Bem vindo</h1>
                        <AperkutNostalgicIconSet/>
                    </Box>
                </div>
                <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea"}}>
                    <ProfileRelationsBoxWrapper>
                        <h2 className="smallTitle">Minhas Relações ({relationships.length})</h2>

                        <ul>
                            {relationships.map((itemAtual) => {
                                return (
                                    <li>
                                        <a href={`/users/${itemAtual}`} key={itemAtual}>
                                            <img src={`https://github.com/${itemAtual}.png`} />
                                            <span>{itemAtual}</span>
                                        </a>
                                    </li>
                                )}
                            )}
                        </ul>
                    </ProfileRelationsBoxWrapper>        
                    <Box>
                        <h2 className="smallTitle">Comunidades</h2>
                    </Box>
                </div>
            </MainGrid>
        </>
    )
}
