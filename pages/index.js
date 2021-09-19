import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AperkutMenu } from '../src/lib/aperkutCommons'

export default function Home() {
    const githubUser = 'Yagasaki7K'

    return (
        <>
            <AperkutMenu />
            <MainGrid>
                <div className="profileArea" style={{ gridArea: "profileArea"}}>
                    <Box><img src={`https://github.com/${githubUser}.png`}/></Box>
                </div>
                <div className="welcomeArea" style={{ gridArea: "welcomeArea"}}>
                    <Box>Bem vindo</Box>
                </div>
                <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea"}}>
                    <Box>Minhas Relações</Box>        
                    <Box>Comunidades</Box>
                </div>
            </MainGrid>
        </>
    )
}
